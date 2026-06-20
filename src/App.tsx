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
const Trust = lazy(() => import("./pages/Trust"));
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
// Geo / industry landing pages
const AirportAdvertisingDelhi = lazy(() => import("./pages/geo/AirportAdvertisingDelhi"));
const AirportAdvertisingMumbai = lazy(() => import("./pages/geo/AirportAdvertisingMumbai"));
const AirportAdvertisingBangalore = lazy(() => import("./pages/geo/AirportAdvertisingBangalore"));
const DelhiMetroAdvertising = lazy(() => import("./pages/geo/DelhiMetroAdvertising"));
const MumbaiMetroAdvertising = lazy(() => import("./pages/geo/MumbaiMetroAdvertising"));
const GurgaonHoardings = lazy(() => import("./pages/geo/GurgaonHoardings"));
const NoidaHoardings = lazy(() => import("./pages/geo/NoidaHoardings"));
const DelhiBillboardAdvertising = lazy(() => import("./pages/geo/DelhiBillboardAdvertising"));
const GurgaonDoohAdvertising = lazy(() => import("./pages/geo/GurgaonDoohAdvertising"));
const BangaloreDoohAdvertising = lazy(() => import("./pages/geo/BangaloreDoohAdvertising"));
const AdvertisingForFmcgBrands = lazy(() => import("./pages/geo/AdvertisingForFmcgBrands"));
const AdvertisingForD2cBrands = lazy(() => import("./pages/geo/AdvertisingForD2cBrands"));
const AdvertisingForRealEstate = lazy(() => import("./pages/geo/AdvertisingForRealEstate"));
// Lead magnet resource pages
const AirportMediaKit = lazy(() => import("./pages/resources/AirportMediaKit"));
const MetroMediaKit = lazy(() => import("./pages/resources/MetroMediaKit"));
const BarterPlaybook = lazy(() => import("./pages/resources/BarterPlaybook"));
const DoohMediaKit = lazy(() => import("./pages/resources/DoohMediaKit"));

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
              <Route path="/trust" element={<Trust />} />
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
              {/* Geo / industry landing pages */}
              <Route path="/airport-advertising-delhi" element={<AirportAdvertisingDelhi />} />
              <Route path="/airport-advertising-mumbai" element={<AirportAdvertisingMumbai />} />
              <Route path="/airport-advertising-bangalore" element={<AirportAdvertisingBangalore />} />
              <Route path="/delhi-metro-advertising" element={<DelhiMetroAdvertising />} />
              <Route path="/mumbai-metro-advertising" element={<MumbaiMetroAdvertising />} />
              <Route path="/gurgaon-hoardings" element={<GurgaonHoardings />} />
              <Route path="/noida-hoardings" element={<NoidaHoardings />} />
              <Route path="/delhi-billboard-advertising" element={<DelhiBillboardAdvertising />} />
              <Route path="/gurgaon-dooh-advertising" element={<GurgaonDoohAdvertising />} />
              <Route path="/bangalore-dooh-advertising" element={<BangaloreDoohAdvertising />} />
              <Route path="/advertising-for-fmcg-brands" element={<AdvertisingForFmcgBrands />} />
              <Route path="/advertising-for-d2c-brands" element={<AdvertisingForD2cBrands />} />
              <Route path="/advertising-for-real-estate" element={<AdvertisingForRealEstate />} />
              {/* Lead magnet resource pages */}
              <Route path="/resources/airport-advertising-media-kit" element={<AirportMediaKit />} />
              <Route path="/resources/metro-branding-media-kit" element={<MetroMediaKit />} />
              <Route path="/resources/barter-advertising-playbook" element={<BarterPlaybook />} />
              <Route path="/resources/dooh-advertising-media-kit" element={<DoohMediaKit />} />
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
