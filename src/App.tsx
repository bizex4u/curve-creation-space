import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import ProtectedRoute from "@/components/ProtectedRoute";
import ScrollToTop from "@/components/ScrollToTop";
import { Loader2 } from "lucide-react";

// Lazy load pages for code splitting
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Channels = lazy(() => import("./pages/Channels"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Blog = lazy(() => import("./pages/MdxBlogIndex"));
const BlogPost = lazy(() => import("./pages/MdxBlogPost"));
const BlogAdmin = lazy(() => import("./pages/admin/BlogAdmin"));
const BlogPostEditor = lazy(() => import("./pages/admin/BlogPostEditor"));
const AdminAccess = lazy(() => import("./pages/admin/AdminAccess"));
const TeamAdmin = lazy(() => import("./pages/admin/TeamAdmin"));
const TeamMemberEditor = lazy(() => import("./pages/admin/TeamMemberEditor"));
const Auth = lazy(() => import("./pages/Auth"));
const BarterAdvertising = lazy(() => import("./pages/services/BarterAdvertising"));
const OutdoorAdvertising = lazy(() => import("./pages/services/OutdoorAdvertising"));
const MetroBranding = lazy(() => import("./pages/services/MetroBranding"));
const AirportAdvertising = lazy(() => import("./pages/services/AirportAdvertising"));
const DoohAdvertising = lazy(() => import("./pages/services/DoohAdvertising"));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-neutral-00">
    <Loader2 className="w-8 h-8 animate-spin text-neutral-08" />
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000,   // 10 minutes
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/channels" element={<Channels />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route
                path="/admin/blog"
                element={
                  <ProtectedRoute requireEditor>
                    <BlogAdmin />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/blog/new"
                element={
                  <ProtectedRoute requireEditor>
                    <BlogPostEditor />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/blog/edit/:id"
                element={
                  <ProtectedRoute requireEditor>
                    <BlogPostEditor />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/team"
                element={
                  <ProtectedRoute requireEditor>
                    <TeamAdmin />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/team/new"
                element={
                  <ProtectedRoute requireEditor>
                    <TeamMemberEditor />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/team/edit/:id"
                element={
                  <ProtectedRoute requireEditor>
                    <TeamMemberEditor />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/access"
                element={
                  <ProtectedRoute requireAdmin>
                    <AdminAccess />
                  </ProtectedRoute>
                }
              />
              <Route path="/barter-advertising" element={<BarterAdvertising />} />
              <Route path="/outdoor-advertising" element={<OutdoorAdvertising />} />
              <Route path="/metro-branding" element={<MetroBranding />} />
              <Route path="/airport-advertising" element={<AirportAdvertising />} />
              <Route path="/dooh-advertising" element={<DoohAdvertising />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
