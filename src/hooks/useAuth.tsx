import { createContext, useContext, useEffect, useState, useRef, type ReactNode } from "react";
import type { User, Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  rolesLoading: boolean;
  signInWithMagicLink: (email: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
  isAdmin: boolean;
  isEditor: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [rolesLoading, setRolesLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isEditor, setIsEditor] = useState(false);

  // Track if bootstrap has been attempted this session (prevents duplicate calls)
  const hasBootstrapped = useRef(false);
  // Track if initial session check is complete (coordinates onAuthStateChange and getSession)
  const initialSessionChecked = useRef(false);
  // Track if roles have been fetched for current user (prevents re-fetch on tab switch)
  const rolesFetched = useRef(false);

  const checkUserRoles = async (userId: string) => {
    try {
      // Only attempt bootstrap once per session
      if (!hasBootstrapped.current) {
        hasBootstrapped.current = true;

        const { data: bootstrapResult } = await supabase.rpc(
          "bootstrap_first_admin",
          { _user_id: userId }
        );

        if (bootstrapResult === "bootstrapped_as_admin") {
          console.log("User bootstrapped as first admin");
          // Brief delay for DB propagation
          await new Promise((resolve) => setTimeout(resolve, 500));
        }
      }

      // Fetch roles (no retry loop - single attempt)
      const { data, error } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", userId);

      if (error) {
        console.error("Error fetching user roles:", error);
        return;
      }

      const roles = data?.map((r) => r.role) || [];
      setIsAdmin(roles.includes("admin"));
      setIsEditor(roles.includes("editor"));
    } finally {
      // ALWAYS set rolesLoading to false - prevents infinite loading
      setRolesLoading(false);
    }
  };

  useEffect(() => {
    let mounted = true;

    // Set up auth state listener FIRST
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (!mounted) return;

      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);

      if (session?.user) {
        // Only fetch roles if initial check is done AND roles haven't been fetched yet
        if (initialSessionChecked.current && !rolesFetched.current) {
          setRolesLoading(true);
          await checkUserRoles(session.user.id);
          rolesFetched.current = true;
        }
        // If roles already fetched, do nothing (prevents infinite loading on tab switch)
      } else {
        setIsAdmin(false);
        setIsEditor(false);
        setRolesLoading(false);
        hasBootstrapped.current = false;
        rolesFetched.current = false; // Reset so roles are fetched on next login
      }
    });

    // THEN check for existing session
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (!mounted) return;

      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
      initialSessionChecked.current = true;

      if (session?.user) {
        if (!rolesFetched.current) {
          setRolesLoading(true);
          await checkUserRoles(session.user.id);
          rolesFetched.current = true;
        }
      } else {
        setRolesLoading(false);
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const signInWithMagicLink = async (email: string) => {
    const redirectUrl = `${window.location.origin}/auth`;

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: redirectUrl,
        shouldCreateUser: false, // Prevent automatic user creation - admin only login
      },
    });

    return { error: error as Error | null };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setIsAdmin(false);
    setIsEditor(false);
    hasBootstrapped.current = false;
    rolesFetched.current = false; // Reset on logout
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        loading,
        rolesLoading,
        signInWithMagicLink,
        signOut,
        isAdmin,
        isEditor,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
