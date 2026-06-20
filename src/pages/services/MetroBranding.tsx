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

const metrics = [
  { value: "15M+", label: "Monthly Commuters" },
  { value: "40+", label: "Cities" },
  { value: "320+", label: "Brands Served" },
  { value: "95%", label: "Cost Efficiency" },
];

const faqs = [
  {
    question: "What is metro branding?",
    answer: "Metro branding covers all advertising formats inside and around metro rail networks — platform panels, train wraps, station pillars, concourse banners, digital screens and station naming rights. It targets captive daily commuters at high-dwell touchpoints.",
  },
  {
    question: "How much does Delhi Metro advertising cost?",
    answer: "Costs depend on format, station and duration. Platform panels start from ₹80,000 per month per station. Train wraps and full-station dominations vary widely — contact us for a custom quote based on your target lines and campaign duration.",
  },
  {
    question: "Can metro advertising be purchased through barter?",
    answer: "Yes. Metro branding is barter-eligible for select formats and networks. We assess your inventory and match it against available metro inventory across DMRC, MMRC and other networks.",
  },
  {
    question: "What campaign duration is recommended for metro advertising?",
    answer: "Minimum booking is typically 30 days. Most brand campaigns run 60–90 days for meaningful recall. Train wraps and station dominations are often booked for 90–180 days to build sustained brand association with commuters.",
  },
  {
    question: "How are impressions measured in metro advertising?",
    answer: "Impressions are estimated using DMRC and network-published daily ridership figures per station/line, combined with panel visibility scores and dwell time data. We provide reach estimates in your media plan and a post-campaign summary report.",
  },
  {
    question: "Can metro campaigns be geo-targeted to specific corridors?",
    answer: "Yes. You can select specific metro lines, interchange stations or station clusters to target relevant neighbourhoods — IT corridors in Bangalore, commercial hubs in Delhi, residential zones in Mumbai.",
  },
  {
    question: "Do you provide creative support for metro campaigns?",
    answer: "Yes. Our in-house team handles artwork adaptation for all metro-specific formats — platform panel sizes, train wrap templates, digital screen specs. We ensure every asset meets network approval requirements.",
  },
  {
    question: "How quickly can a metro campaign launch?",
    answer: "Typically 10–15 business days after brief confirmation and creative approval. Station dominations and train wraps may require 15–21 days due to production lead time for vinyl printing and network approval.",
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
    title: "Delhi Metro (DMRC)",
    description: "Platform panels, concourse banners, train wraps and digital screens across all DMRC lines. India's most-ridden metro network.",
    tags: ["Barter", "Cash", "Hybrid"],
  },
  {
    title: "Noida Metro (NMRC)",
    description: "Station branding and platform panels on the Aqua Line — premium IT and residential corridor targeting.",
    tags: ["Cash", "Hybrid"],
  },
  {
    title: "Mumbai Metro (MMRC)",
    description: "Line 1 (Versova–Ghatkopar) and upcoming Line 2/7 — high-footfall stations across western and central corridors.",
    tags: ["Barter", "Cash"],
  },
  {
    title: "Bangalore Metro (BMRCL)",
    description: "Purple and Green Line station panels and digital screens — reaching IT professionals on Whitefield and Electronic City corridors.",
    tags: ["Cash", "Hybrid"],
  },
  {
    title: "Hyderabad Metro (HMRL)",
    description: "Elevated station branding with premium visibility across HiTech City, Ameerpet and MGBS corridors.",
    tags: ["Cash", "Hybrid"],
  },
  {
    title: "Station Domination",
    description: "Own an entire metro station — every panel, screen and surface — for maximum brand saturation over 30–90 days.",
    tags: ["Cash", "Hybrid"],
  },
];

const MetroBranding = () => (
  <div className="relative min-h-screen">
    <Helmet>
      <title>Metro Branding & Metro Advertising India — Delhi, Mumbai, Bangalore | BIZEX4U</title>
      <meta
        name="description"
        content="Launch metro branding campaigns on Delhi Metro, Mumbai Metro and other transit networks in India. Platform panels, train wraps and station dominations."
      />
      <link rel="canonical" href={PAGE_URL} />
      <meta property="og:title" content="Metro Branding & Advertising India | BIZEX4U" />
      <meta property="og:description" content="Platform panels, train wraps and station dominations across DMRC, MMRC, BMRCL and more. Cash, barter or hybrid metro advertising campaigns." />
      <meta property="og:url" content={PAGE_URL} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://bizex4u.com/og-image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Metro Branding India | BIZEX4U" />
      <meta name="twitter:description" content="Delhi Metro, Mumbai Metro, Bangalore Metro advertising — platform panels, train wraps, station domination. Cash and barter." />
      <meta name="twitter:image" content="https://bizex4u.com/og-image.jpg" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bizex4u.com/" },
          { "@type": "ListItem", "position": 2, "name": "Metro Branding", "item": PAGE_URL },
        ],
      })}</script>
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((f) => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": { "@type": "Answer", "text": f.answer },
        })),
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

      <ServiceMetrics metrics={metrics} />
      <BenefitsSection
        title="Why metro advertising works"
        subtitle="Captive commuters, daily frequency, premium demographics — metro is one of the highest-recall formats in urban India."
        benefits={benefits}
      />
      <InventorySection
        title="Metro networks we cover"
        subtitle="Platform panels, train wraps and station dominations across India's major metro networks."
        items={inventory}
      />
      <FundingModels />
      <BrandsSection />
      <ServiceFAQ faqs={faqs} />
      <FinalCTA
        title="Plan your metro campaign"
        subtitle="Tell us which cities and corridors matter — we'll map the best metro inventory for your brand."
        primaryCTALabel="Get Metro Media Plan"
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
