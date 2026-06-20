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

const metrics = [
  { value: "5000+", label: "DOOH Screens" },
  { value: "40+", label: "Cities" },
  { value: "320+", label: "Brands Served" },
  { value: "Real-time", label: "Creative Updates" },
];

const faqs = [
  {
    question: "What is DOOH advertising?",
    answer: "DOOH (Digital Out-of-Home) advertising is outdoor advertising delivered on digital screens — LED billboards, mall atrium screens, metro digital panels, airport DOOH and roadside digital hoardings. Unlike static OOH, DOOH allows dynamic creative, dayparting and real-time content updates.",
  },
  {
    question: "How does programmatic DOOH work?",
    answer: "Programmatic DOOH lets you buy screen impressions via a DSP (demand-side platform), targeting by location, time of day, weather or audience segment. BIZEX4U manages both direct-buy and programmatic DOOH campaigns, selecting the most efficient route for your objectives.",
  },
  {
    question: "Can DOOH advertising be bought through barter?",
    answer: "Yes for direct-buy DOOH at select networks — malls, corporate parks and residential societies. Programmatic DOOH typically requires cash. We'll advise the optimal route based on your inventory type and campaign goals.",
  },
  {
    question: "What campaign duration is recommended for DOOH?",
    answer: "Minimum campaigns are typically 15–30 days. For brand awareness, 30–60 days builds meaningful frequency. DOOH's flexibility means you can also run short burst campaigns — 7–14 days — for product launches or time-sensitive promotions.",
  },
  {
    question: "How are DOOH impressions measured?",
    answer: "Direct-buy DOOH networks report actual play counts per creative slot. Programmatic DOOH platforms provide verified impression data with location, time and device breakdowns. We consolidate reporting across all networks into a single post-campaign dashboard.",
  },
  {
    question: "Can DOOH campaigns be geo-targeted to specific locations?",
    answer: "Yes — DOOH is the most geo-targetable OOH format. You can select screens within a radius of your stores, target specific malls, corporate parks or residential clusters, or run city-block-level campaigns on connected networks.",
  },
  {
    question: "Do you provide creative support for DOOH campaigns?",
    answer: "Yes. We handle creative adaptation for all DOOH specs — aspect ratios, resolution requirements, motion guidelines and file format mandates per network. Animation and motion graphics are recommended to maximize engagement on digital screens.",
  },
  {
    question: "How quickly can a DOOH campaign launch?",
    answer: "Direct-buy DOOH campaigns go live within 3–7 business days once creative is approved. Programmatic campaigns can launch same-day on connected networks once creative assets and targeting parameters are confirmed.",
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
    title: "Corporate Parks",
    description: "Digital screens in Cyber City Gurugram, Bandra Kurla Complex, Whitefield Bangalore and other major business districts — reaching senior professionals during commute and lunch hours.",
    tags: ["Barter", "Cash", "Hybrid"],
  },
  {
    title: "Residential Societies",
    description: "Lobby screens and gate displays in premium high-rises across Delhi NCR, Mumbai and Bangalore — targeting HNI residential audiences in a relaxed, receptive context.",
    tags: ["Barter", "Cash"],
  },
  {
    title: "Malls & Retail Atria",
    description: "LED walls and hanging screens in mall atriums and food courts — maximum visibility to shoppers across all floors in top-tier malls.",
    tags: ["Barter", "Cash", "Hybrid"],
  },
  {
    title: "Roadside LED Hoardings",
    description: "Large-format LED screens on high-traffic arterial roads — 10–30 second creative slots in rotation, with measurable play counts.",
    tags: ["Cash", "Hybrid"],
  },
  {
    title: "Metro & Transit DOOH",
    description: "Digital panels on metro platforms, bus rapid transit corridors and railway station concourses across major cities.",
    tags: ["Cash", "Hybrid"],
  },
  {
    title: "Petrol Stations & Gyms",
    description: "Forecourt screens at high-volume fuel stations and indoor screens in premium gyms and co-working spaces — captive, high-dwell micro-moments.",
    tags: ["Cash"],
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
      <meta property="og:image" content="https://bizex4u.com/og-image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="DOOH Advertising India | BIZEX4U" />
      <meta name="twitter:description" content="Digital OOH campaigns across malls, metros, airports and LED hoardings. Dynamic creative, dayparting, real-time data." />
      <meta name="twitter:image" content="https://bizex4u.com/og-image.jpg" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bizex4u.com/" },
          { "@type": "ListItem", "position": 2, "name": "DOOH Advertising", "item": PAGE_URL },
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
          title="DOOH Advertising India"
          highlightWord="DOOH"
          subtitle="Run dynamic digital out-of-home campaigns across corporate parks, malls, residential societies, metro stations and roadside LED screens. Real-time creative, dayparting, verifiable impressions."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "DOOH Advertising" },
          ]}
        />
      </div>

      <ServiceMetrics metrics={metrics} />
      <BenefitsSection
        title="Why DOOH outperforms static OOH"
        subtitle="Dynamic creative, precise targeting, real-time data — DOOH brings digital-era flexibility to out-of-home advertising."
        benefits={benefits}
      />
      <InventorySection
        title="DOOH inventory across India"
        subtitle="Direct-buy and programmatic DOOH across every major screen network — corporate, residential, retail and transit."
        items={inventory}
      />
      <FundingModels />
      <BrandsSection />
      <ServiceFAQ faqs={faqs} />
      <FinalCTA
        title="Launch your DOOH campaign"
        subtitle="Share your target locations and audience — we'll map the best digital screens for your brand."
        primaryCTALabel="Book DOOH Consultation"
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
