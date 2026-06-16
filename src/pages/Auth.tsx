import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useAuth } from "@/hooks/useAuth";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FilledButton from "@/components/FilledButton";
import OutlineButton from "@/components/OutlineButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Mail, CheckCircle } from "lucide-react";

const emailSchema = z.object({
  email: z.string().trim().email({ message: "Please enter a valid email address" }),
});

const MAGIC_LINK_COOLDOWN = 60; // seconds

const Auth = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [errors, setErrors] = useState<{ email?: string }>({});
  const [isProcessingCallback, setIsProcessingCallback] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(MAGIC_LINK_COOLDOWN);
  const [canResend, setCanResend] = useState(false);

  const { signInWithMagicLink, signOut, user, loading, isAdmin, isEditor, rolesLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Check if this is a magic link callback
  useEffect(() => {
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    const queryParams = new URLSearchParams(window.location.search);
    
    if (hashParams.get('access_token') || queryParams.get('token_hash') || queryParams.get('code')) {
      setIsProcessingCallback(true);
    }
  }, []);

  // Redirect if already logged in with valid roles, or sign out stale sessions
  useEffect(() => {
    if (loading || rolesLoading) return;
    
    if (user) {
      // Clear callback processing state since we have a user
      setIsProcessingCallback(false);
      // Clear URL hash before redirecting
      window.history.replaceState(null, '', window.location.pathname);
      
      if (isAdmin || isEditor) {
        navigate("/admin/blog");
      } else {
        // User exists but has no roles - stale session from deleted/re-added user
        console.log("Stale session detected - signing out");
        signOut();
      }
    } else if (isProcessingCallback) {
      // User is null but we were processing a callback - the callback failed
      setIsProcessingCallback(false);
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, [user, loading, rolesLoading, isAdmin, isEditor, navigate, signOut, isProcessingCallback]);

  // Timeout for callback processing - prevents getting stuck indefinitely
  useEffect(() => {
    if (!isProcessingCallback) return;
    
    const timeout = setTimeout(() => {
      // If still processing after 10 seconds, something went wrong
      setIsProcessingCallback(false);
      toast({
        title: "Login Failed",
        description: "Unable to complete sign in. Please try again.",
        variant: "destructive",
      });
      // Clear the URL hash to prevent re-detection
      window.history.replaceState(null, '', window.location.pathname);
    }, 10000);
    
    return () => clearTimeout(timeout);
  }, [isProcessingCallback, toast]);

  // Countdown timer for resend button
  useEffect(() => {
    if (!emailSent) return;
    
    setResendCountdown(MAGIC_LINK_COOLDOWN);
    setCanResend(false);
    
    const timer = setInterval(() => {
      setResendCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [emailSent]);

  const validateForm = () => {
    const result = emailSchema.safeParse({ email });
    if (!result.success) {
      const fieldErrors: { email?: string } = {};
      result.error.errors.forEach((err) => {
        if (err.path[0] === "email") fieldErrors.email = err.message;
      });
      setErrors(fieldErrors);
      return false;
    }
    setErrors({});
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Check rate limiting via localStorage
      const lastSentKey = `magic_link_sent_${email}`;
      const lastSent = localStorage.getItem(lastSentKey);

      if (lastSent) {
        const timeSinceLastSent = Date.now() - parseInt(lastSent, 10);
        if (timeSinceLastSent < MAGIC_LINK_COOLDOWN * 1000) {
          toast({
            title: "Login Failed",
            description: "Unable to send login link. Please try again later.",
            variant: "destructive",
          });
          setIsSubmitting(false);
          return;
        }
      }

      // First, verify if email is registered
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/verify-login-email`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.registered) {
        toast({
          title: "Access Denied",
          description: "Unregistered email. Access is restricted to registered members.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      // Email is registered, proceed with magic link
      const { error } = await signInWithMagicLink(email);
      if (error) {
        toast({
          title: "Login Failed",
          description: "Unable to send login link. Please try again.",
          variant: "destructive",
        });
      } else {
        localStorage.setItem(lastSentKey, Date.now().toString());
        setEmailSent(true);
        toast({ title: "Login link sent!" });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResend = async () => {
    setIsResending(true);
    try {
      // Verify if email is still registered before resending
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/verify-login-email`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.registered) {
        toast({
          title: "Access Denied",
          description: "Unregistered email. Access is restricted to registered members.",
          variant: "destructive",
        });
        setIsResending(false);
        return;
      }

      const { error } = await signInWithMagicLink(email);
      if (error) {
        toast({
          title: "Login Failed",
          description: "Unable to send login link. Please try again.",
          variant: "destructive",
        });
      } else {
        // Reset countdown and update localStorage timestamp
        localStorage.setItem(`magic_link_sent_${email}`, Date.now().toString());
        setResendCountdown(MAGIC_LINK_COOLDOWN);
        setCanResend(false);
        toast({ title: "Login link sent!" });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsResending(false);
    }
  };

  if (loading || rolesLoading || isProcessingCallback) {
    return (
      <div className="min-h-screen bg-neutral-01 flex items-center justify-center flex-col gap-4">
        <Loader2 className="w-8 h-8 animate-spin text-neutral-08" />
        {isProcessingCallback && (
          <p className="text-neutral-10">Signing you in...</p>
        )}
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-neutral-01">
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1 flex items-center justify-center px-4 tablet:px-0 py-[160px]">
          <div className="bg-neutral-00 rounded-[16px] tablet:rounded-[20px] border border-neutral-02 py-6 px-5 w-full tablet:py-10 tablet:px-8 tablet:w-[500px]">
            {emailSent ? (
              <>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-neutral-02 rounded-[100px] flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-neutral-10" />
                  </div>
                  <h4 className="text-h4 text-neutral-12">Check your email</h4>
                </div>
                <p className="text-body text-neutral-10 mb-[80px]">
                  We sent a magic link to <strong>{email}</strong>. Click the link to sign in. The link will expire in 1 hour.
                </p>
                <div className="flex flex-col items-start gap-4">
                  <OutlineButton onClick={handleResend} disabled={isResending || !canResend}>
                    {isResending ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : !canResend ? (
                      `Resend link (${resendCountdown}s)`
                    ) : (
                      "Resend link"
                    )}
                  </OutlineButton>
                  <button
                    onClick={() => setEmailSent(false)}
                    className="text-body text-neutral-10"
                  >
                    Use a different email
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-neutral-02 rounded-[100px] flex items-center justify-center">
                    <Mail className="w-4 h-4 text-neutral-10" />
                  </div>
                  <h4 className="text-h4 text-neutral-12">Admin Login</h4>
                </div>
                  <p className="text-body text-neutral-10 mb-[80px]">
                    Enter your email to receive a secure magic link. Access is restricted to registered members.
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col items-start gap-6">
                    <div className="flex flex-col gap-2 w-full">
                      <Label htmlFor="email" className="text-neutral-12">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@email.com"
                        className={errors.email ? "border-red-500" : ""}
                        disabled={isSubmitting}
                      />
                      {errors.email && (
                        <span className="text-sm text-red-500">{errors.email}</span>
                      )}
                    </div>

                  <FilledButton type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      "Send login link"
                    )}
                  </FilledButton>
                </form>
              </>
            )}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Auth;
