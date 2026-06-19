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

const PAGE_URL = "https://bizex4u.com/dooh-advertising";

const faqs = [
  {
    question: "What is DOOH advertising?",
    answer: "DOOH (Digital Out-of-Home) advertising is outdoor advertising delivered on digital screens — LED billboards, mall atrium screens, metro digital panels, airport DOOH and roadside digital hoardings. Unlike static OOH, DOOH allows dynamic creative, dayparting, and real-time content updates.",
  },
  {
    question: "How does programmatic DOOH work?",
    answer: "Programmatic DOOH lets you buy screen impressions via a DSP (demand-side platform), targeting by location, time of day, weather or audience segment. BIZEX4U can run both direct-buy and programmatic DOOH campaigns.",
  },
  {
    question: "Can DOOH advertising be bought through barter?",
    answer: "Yes for direct-buy DOOH. Programmatic DOOH typically requires cash. We'll advise the best route based on your inventory and campaign objectives.",
  },
  {
    question: "What creative specifications does DOOH require?",
    answer: "Specifications vary by screen network. Most require MP4 video (10–15 seconds, H.264) or static JPEG/PNG at the screen's native resolution. We assist with creative specs and adaptation.",
  },
  {
    question: "How quickly can a DOOH campaign go live?",
    answer: "Direct-buy DOOH campaigns can go live within 3–5 business days once creative is approved. Programmatic campaigns can launch same-day on connected networks.",
  },
];

const benefits = [
  {
    icon: "🖥️",
    title: "Dynamic creative, live updates",
    description: "Change your creative in real time — run day-part messaging, update offers, react to events. No reprinting, no lead time.",
  },
  {
    icon: "📍",
    title: "Precise location targeting",
    description: "Select screens by pin code, landmark proximity or venue type. Run a campaign only near your retail stores, or only at specific malls and metro stations.",
  },
  {
    icon: "⏰",
    title: "Time-of-day scheduling",
    description: "Show breakfast ads in the morning commute and happy-hour ads in the evening. Maximize relevance with daypart scheduling across all connected screens.",
  },
  {
    icon: "📈",
    title: "Real-time impression data",
    description: "Unlike static OOH, DOOH screens report actual play counts and estimated impressions — giving you verifiable campaign delivery data.",
  },
];

const inventory = [
  {
    title: "LED Roadside Hoardings",
    description: "Large-format LED screens on high-traffic arterial roads — 10–30 second creative slots in rotation with other advertisers.",
    tags: ["Cash", "Hybrid"],
  },
  {
    title: "Mall Atrium Screens",
    description: "High-resolution LED walls and hanging screens in mall atriums — maximum visibility to shoppers across all floors.",
    tags: ["Barter", "Cash"],
  },
  {
    title: "Metro Digital Panels",
    description: "Digital screens on metro platforms and concourses — rotational creative in high-dwell commuter environments.",
    tags: ["Cash", "Hybrid"],
  },
  {
    title: "Airport DOOH",
    description: "HD and 4K screens at check-in, security, gates and baggage claim across 25+ airports.",
    tags: ["Cash", "Hybrid"],
  },
  {
    title: "Petrol Station Screens",
    description: "DOOH screens at high-footfall fuel station forecourts — reaching drivers during a 3–5 minute dwell window.",
    tags: ["Cash"],
  },
  {
    title: "Gym & Café Networks",
    description: "Indoor DOOH screens in premium gyms, co-working spaces and cafés — reaching urban professionals in relaxed, receptive moments.",
    tags: ["Cash", "Hybrid"],
  },
];

const DoohAdvertising = () => (
  <div className="relative min-h-screen">
    <Helmet>
      <title>DOOH Advertising India — Digital Out-of-Home Campaigns | BIZEX4U</title>
      <meta
        name="description"
        content="Run programmatic and direct-buy DOOH campaigns across malls, metros, airports and roadside LED screens in India. Dynamic creative, dayparting, real-time impressions."
      />
      <link rel="canonical" href={PAGE_URL} />
      <meta property="og:title" content="DOOH Advertising India | BIZEX4U" />
      <meta property="og:description" content="Digital Out-of-Home advertising across malls, metros, airports and roadside LED screens. Dynamic creative, dayparting, programmatic and direct-buy." />
      <meta property="og:url" content={PAGE_URL} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="DOOH Advertising India | BIZEX4U" />
      <meta name="twitter:description" content="Digital OOH campaigns across malls, metros, airports and LED hoardings. Dynamic creative, dayparting, real-time data." />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bizex4u.com/" },
          { "@type": "ListItem", "position": 2, "name": "DOOH Advertising", "item": PAGE_URL },
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
          title="DOOH Advertising India"
          highlightWord="DOOH"
          subtitle="Run dynamic digital out-of-home campaigns across malls, metro stations, airports and roadside LED screens. Real-time creative updates, dayparting, and verifiable impression data."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "DOOH Advertising" },
          ]}
        />
      </div>

      <ServiceMetrics />
      <BenefitsSection
        title="Why DOOH outperforms static OOH"
        subtitle="Dynamic creative, precise targeting, real-time data — DOOH brings digital-era flexibility to out-of-home advertising."
        benefits={benefits}
      />
      <InventorySection
        title="DOOH inventory across India"
        subtitle="Direct-buy and programmatic DOOH across every major screen network."
        items={inventory}
      />
      <FundingModels />
      <BrandsSection />
      <ServiceFAQ faqs={faqs} pageUrl={PAGE_URL} />
      <FinalCTA
        title="Launch your DOOH campaign"
        subtitle="Share your target locations and audience — we'll map the best digital screens for your brand."
        relatedServices={[
          { label: "Outdoor Advertising", href: "/outdoor-advertising" },
          { label: "Metro Branding", href: "/metro-branding" },
          { label: "Airport Advertising", href: "/airport-advertising" },
          { label: "Barter Advertising", href: "/barter-advertising" },
        ]}
      />
      <Footer showDivider={false} />
    </div>
  </div>
);

export default DoohAdvertising;
