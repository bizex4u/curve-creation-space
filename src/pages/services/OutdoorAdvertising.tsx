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

const PAGE_URL = "https://bizex4u.com/outdoor-advertising";

const metrics = [
  { value: "10,000+", label: "OOH Sites" },
  { value: "40+", label: "Cities" },
  { value: "320+", label: "Brands Served" },
  { value: "95%", label: "Cost Efficiency" },
];

const faqs = [
  {
    question: "What is outdoor advertising?",
    answer: "Outdoor advertising (OOH — out-of-home) covers any ad format placed in public spaces: billboards, hoardings, unipoles, bus shelters, gantries and highway panels. It reaches audiences when they are commuting, shopping or travelling.",
  },
  {
    question: "How much does outdoor advertising cost in India?",
    answer: "Costs vary by city, site size and duration. A prime Delhi or Mumbai arterial road hoarding ranges from ₹1–10 lakh per month. We negotiate bulk rates and pass savings to you — and barter campaigns can reduce cash outlay to near zero.",
  },
  {
    question: "Can outdoor advertising be bought through barter?",
    answer: "Yes. OOH is one of the most barter-friendly channels. We accept a wide range of consumer goods, FMCG products and services as barter consideration against media owners across 40+ cities.",
  },
  {
    question: "What campaign duration is recommended for outdoor advertising?",
    answer: "Minimum campaigns are typically 30 days. For brand recall, 60–90 day campaigns build meaningful frequency among regular commuters. Highway and transit corridor campaigns often run 90–180 days for sustained brand presence.",
  },
  {
    question: "How are OOH impressions measured?",
    answer: "We use DEC (Daily Effective Circulation) data and traffic count figures to estimate reach per site. Post-campaign reports include geo-tagged photo proof for every panel, along with impression and reach estimates based on published traffic data.",
  },
  {
    question: "Can outdoor campaigns be geo-targeted to specific areas?",
    answer: "Yes. You can select sites by city, zone, corridor or pin code. We can map OOH inventory near your retail stores, in competitor-heavy areas, or along commuter routes used by your target audience.",
  },
  {
    question: "Do you provide creative support for OOH campaigns?",
    answer: "Yes. We adapt your master creative to all OOH format specifications — billboard bleed sizes, unipole templates, bus shelter specs. We also assist with artwork that performs well at outdoor scale and typical viewing distances.",
  },
  {
    question: "How quickly can an outdoor campaign go live?",
    answer: "Typically 7–10 business days after brief confirmation and creative sign-off. Production and mounting slots are booked in parallel to minimize lead time. Urgent campaigns can sometimes be activated in 5 business days for available inventory.",
  },
];

const benefits = [
  {
    icon: "👁️",
    title: "Unavoidable reach",
    description: "Billboard and hoarding inventory is impossible to skip — your brand reaches commuters, shoppers and travellers at the exact moment they are active and aware.",
  },
  {
    icon: "🏙️",
    title: "City-level domination",
    description: "Own key arterial roads, flyovers and commercial corridors. Build instant brand presence in a market without relying on digital algorithms.",
  },
  {
    icon: "💸",
    title: "Barter-friendly",
    description: "OOH is the most barter-receptive offline channel. Trade surplus inventory for prime hoarding slots across Delhi, Mumbai, Bangalore and 37 more cities.",
  },
  {
    icon: "📊",
    title: "Measurable impressions",
    description: "BIZEX4U uses DEC (Daily Effective Circulation) figures to estimate reach — giving you defensible numbers for your media plan and post-campaign report.",
  },
];

const inventory = [
  {
    title: "Billboards & Hoardings",
    description: "Large-format roadside hoardings on high-traffic arterial roads, flyovers and commercial corridors across 40+ cities.",
    tags: ["Barter", "Cash", "Hybrid"],
  },
  {
    title: "Unipoles",
    description: "Single-pole structures at highway junctions and city entry/exit points — maximum height, maximum visibility.",
    tags: ["Barter", "Cash"],
  },
  {
    title: "Bus Shelters",
    description: "Backlit panels at bus stops in residential, commercial and IT corridors — high dwell time during wait periods.",
    tags: ["Cash", "Hybrid"],
  },
  {
    title: "Gantries & Sky Signs",
    description: "Overhead gantry banners spanning entire roads — the highest dwell time of any OOH format, seen by every vehicle passing below.",
    tags: ["Cash", "Hybrid"],
  },
  {
    title: "Highway Panels",
    description: "State highway and national highway boards reaching intercity travellers and logistics corridor traffic.",
    tags: ["Barter", "Cash"],
  },
  {
    title: "Kiosks & Pillars",
    description: "Street furniture and pillar wraps in high-footfall commercial, retail and transit zones.",
    tags: ["Cash", "Hybrid"],
  },
];

const OutdoorAdvertising = () => (
  <div className="relative min-h-screen">
    <Helmet>
      <title>Outdoor Advertising Agency India — OOH Hoardings & Billboards | BIZEX4U</title>
      <meta
        name="description"
        content="India's outdoor advertising agency for billboards, hoardings and large-format OOH campaigns nationwide. Cash, barter and hybrid options across 40+ cities."
      />
      <link rel="canonical" href={PAGE_URL} />
      <meta property="og:title" content="Outdoor Advertising Agency India | BIZEX4U" />
      <meta property="og:description" content="Book OOH hoardings, billboards and unipoles across 40+ Indian cities. Cash, barter or hybrid campaigns with geo-tagged proof of display." />
      <meta property="og:url" content={PAGE_URL} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://bizex4u.com/og-image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Outdoor Advertising Agency India | BIZEX4U" />
      <meta name="twitter:description" content="Book OOH hoardings, billboards, gantries and unipoles across 40+ cities. Cash, barter or hybrid." />
      <meta name="twitter:image" content="https://bizex4u.com/og-image.jpg" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bizex4u.com/" },
          { "@type": "ListItem", "position": 2, "name": "Outdoor Advertising", "item": PAGE_URL },
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
          title="Outdoor Advertising India"
          highlightWord="Outdoor"
          subtitle="Book billboards, hoardings, unipoles and gantries across 40+ Indian cities. Cash, barter or hybrid — with geo-tagged proof of display and DEC-backed reach estimates."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Outdoor Advertising" },
          ]}
        />
      </div>

      <ServiceMetrics metrics={metrics} />
      <BenefitsSection benefits={benefits} />
      <InventorySection
        title="OOH inventory across India"
        subtitle="From arterial road hoardings to highway panels — access the full OOH stack across 40+ cities."
        items={inventory}
      />
      <FundingModels />
      <BrandsSection />
      <ServiceFAQ faqs={faqs} />
      <FinalCTA
        title="Plan your outdoor campaign"
        subtitle="Share your target cities and budget — we'll map the best OOH sites for your brand."
        primaryCTALabel="Get Free Media Plan"
        relatedServices={[
          { label: "Barter Advertising", href: "/barter-advertising" },
          { label: "Metro Branding", href: "/metro-branding" },
          { label: "Airport Advertising", href: "/airport-advertising" },
          { label: "DOOH Advertising", href: "/dooh-advertising" },
        ]}
      />
      <Footer showDivider={false} />
    </div>
  </div>
);

export default OutdoorAdvertising;
