import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Loader2 } from "lucide-react";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
  requireEditor?: boolean;
}

const ProtectedRoute = ({
  children,
  requireAdmin = false,
  requireEditor = false,
}: ProtectedRouteProps) => {
  const { user, loading, isAdmin, isEditor, rolesLoading } = useAuth();
  const location = useLocation();

  if (loading || rolesLoading) {
    return (
      <div className="min-h-screen bg-neutral-01 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-neutral-08" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  // Check role requirements
  if (requireAdmin && !isAdmin) {
    return (
      <div className="min-h-screen bg-neutral-01 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-h4 text-neutral-12 mb-2">Access Denied</h2>
          <p className="text-body text-neutral-10">
            You need admin privileges to access this page.
          </p>
        </div>
      </div>
    );
  }

  if (requireEditor && !isEditor && !isAdmin) {
    return (
      <div className="min-h-screen bg-neutral-01 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-h4 text-neutral-12 mb-2">Access Denied</h2>
          <p className="text-body text-neutral-10">
            You need editor privileges to access this page.
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
