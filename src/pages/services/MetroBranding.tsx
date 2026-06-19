import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DotPatternBackground from "@/components/DotPatternBackground";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceMetrics from "@/components/services/ServiceMetrics";
import BenefitsSection from "@/components/services/BenefitsSection";
import InventorySection from "@/components/services/InventorySection";
import FundingModels from "@/components/services/FundingModels";
import BrandsSection from "@/components/services/BrandsSection";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import FinalCTA from "@/components/services/FinalCTA";

const PAGE_URL = "https://bizex4u.com/metro-branding";

const faqs = [
  {
    question: "What is metro branding?",
    answer: "Metro branding covers all advertising formats inside and around metro rail networks — platform panels, train wraps, station pillars, concourse banners, digital screens and station naming rights. It targets captive daily commuters at high-dwell touchpoints.",
  },
  {
    question: "How much does Delhi Metro advertising cost?",
    answer: "Costs depend on format, station and duration. Platform panels start from ₹80,000 per month per station. Train wraps and full-station dominations vary — contact us for a custom quote.",
  },
  {
    question: "Can metro branding be purchased through barter?",
    answer: "Yes. Metro branding is barter-eligible for select formats and networks. We assess your inventory and match it against available metro inventory across DMRC, MMRC and other networks.",
  },
  {
    question: "Which metro networks do you cover?",
    answer: "Delhi (DMRC), Mumbai (MMRC), Bangalore (BMRCL), Hyderabad (HMRL), Chennai (CMRL), Kolkata (KMRC) and Pune (PMRDA). Coverage varies by network and format.",
  },
  {
    question: "How long are metro advertising campaigns?",
    answer: "Minimum booking is typically 30 days. Most brand campaigns run 30–90 days. Train wraps and station dominations are often booked for 60–180 days for maximum brand recall.",
  },
];

const benefits = [
  {
    icon: "🚇",
    title: "Captive premium audience",
    description: "Metro commuters are a captive, high-dwell audience — largely urban professionals with above-average income. No banner blindness, no scroll-past.",
  },
  {
    icon: "🔁",
    title: "Daily repetition effect",
    description: "Regular commuters see your brand 10–20 times per week. Frequency drives recall faster than almost any other channel at comparable cost.",
  },
  {
    icon: "🏙️",
    title: "Multi-city scale",
    description: "Run coordinated metro campaigns across Delhi, Mumbai, Bangalore and Hyderabad simultaneously — or dominate a single city for concentrated impact.",
  },
  {
    icon: "🎯",
    title: "Corridor targeting",
    description: "Select specific metro lines or station clusters to reach the right neighbourhoods — IT corridors, commercial hubs, residential zones.",
  },
];

const inventory = [
  {
    title: "Platform Panels",
    description: "Backlit and non-backlit panels on metro station platforms — maximum dwell time during wait periods.",
    tags: ["Barter", "Cash"],
  },
  {
    title: "Train Wraps",
    description: "Full-exterior or partial vinyl wraps on metro train coaches. Moving billboards on every route the train runs.",
    tags: ["Cash", "Hybrid"],
  },
  {
    title: "Concourse Banners",
    description: "Large hanging banners and horizontal formats in the main concourse areas — seen by everyone entering or exiting.",
    tags: ["Barter", "Cash"],
  },
  {
    title: "Digital Screens",
    description: "DOOH screens inside stations and on platforms running 10–30 second creatives in rotation.",
    tags: ["Cash", "Hybrid"],
  },
  {
    title: "Pillar Branding",
    description: "Pillar wraps at high-footfall interchange stations — a consistent brand presence across multiple sight lines.",
    tags: ["Barter", "Cash"],
  },
  {
    title: "Station Domination",
    description: "Own an entire metro station — every panel, screen and surface — for maximum brand impact over 30–90 days.",
    tags: ["Cash", "Hybrid"],
  },
];

const MetroBranding = () => (
  <div className="relative min-h-screen">
    <Helmet>
      <title>Metro Branding & Metro Advertising India — Delhi, Mumbai, Bangalore | BIZEX4U</title>
      <meta
        name="description"
        content="Advertise on Delhi Metro, Mumbai Metro, Bangalore Metro and more. Platform panels, train wraps, station domination — cash, barter or hybrid campaigns."
      />
      <link rel="canonical" href={PAGE_URL} />
      <meta property="og:title" content="Metro Branding & Advertising India | BIZEX4U" />
      <meta property="og:description" content="Platform panels, train wraps and station dominations across DMRC, MMRC, BMRCL and more. Cash, barter or hybrid metro advertising campaigns." />
      <meta property="og:url" content={PAGE_URL} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Metro Branding India | BIZEX4U" />
      <meta name="twitter:description" content="Delhi Metro, Mumbai Metro, Bangalore Metro advertising — platform panels, train wraps, station domination. Cash and barter." />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bizex4u.com/" },
          { "@type": "ListItem", "position": 2, "name": "Metro Branding", "item": PAGE_URL },
        ],
      })}</script>
    </Helmet>

    <div className="absolute inset-x-0 top-0 tablet:h-[60vh] tablet:min-h-[500px] max-h-[800px] z-0">
      <DotPatternBackground variant="main" />
    </div>

    <div className="relative z-10 flex flex-col">
      <Navbar />
      <div className="container">
        <ServiceHero
          title="Metro Branding India"
          highlightWord="Metro"
          subtitle="Reach captive urban professionals on Delhi, Mumbai, Bangalore and Hyderabad metro networks. Platform panels, train wraps, concourse banners and station dominations — cash, barter or hybrid."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Metro Branding" },
          ]}
        />
      </div>

      <ServiceMetrics />
      <BenefitsSection
        title="Why metro advertising works"
        subtitle="Captive commuters, daily frequency, premium demographics — metro is one of the highest-recall formats in urban India."
        benefits={benefits}
      />
      <InventorySection
        title="Metro advertising formats"
        subtitle="Every format available across India's major metro networks."
        items={inventory}
      />
      <FundingModels />
      <BrandsSection />
      <ServiceFAQ faqs={faqs} pageUrl={PAGE_URL} />
      <FinalCTA
        title="Plan your metro campaign"
        subtitle="Tell us which cities and corridors matter — we'll map the best metro inventory for your brand."
        relatedServices={[
          { label: "Outdoor Advertising", href: "/outdoor-advertising" },
          { label: "Airport Advertising", href: "/airport-advertising" },
          { label: "DOOH Advertising", href: "/dooh-advertising" },
          { label: "Barter Advertising", href: "/barter-advertising" },
        ]}
      />
      <Footer showDivider={false} />
    </div>
  </div>
);

export default MetroBranding;
