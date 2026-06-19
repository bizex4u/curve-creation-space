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

const faqs = [
  {
    question: "What is outdoor advertising?",
    answer: "Outdoor advertising (OOH — out-of-home) covers any ad format placed in public spaces: billboards, hoardings, unipoles, bus shelters, gantries and highway panels. It reaches audiences when they are commuting, shopping or travelling.",
  },
  {
    question: "How much does outdoor advertising cost in India?",
    answer: "Costs vary by city, site size and duration. A prime Delhi or Mumbai hoarding ranges from ₹1–10 lakh per month. We negotiate bulk rates and pass savings to you — and barter campaigns can reduce cash outlay to near zero.",
  },
  {
    question: "Can outdoor advertising be bought through barter?",
    answer: "Yes. OOH is one of the most barter-friendly channels. We accept a wide range of consumer goods, FMCG and services as barter consideration against media owners across 40+ cities.",
  },
  {
    question: "How long does an outdoor campaign take to go live?",
    answer: "Typically 7–10 business days after brief confirmation. Creative artwork and mounting slots are booked in parallel to minimize lead time.",
  },
  {
    question: "Do you provide proof of display?",
    answer: "Yes. We provide geo-tagged photo proof for every site on the campaign plan, along with a post-campaign report covering impressions and reach estimates.",
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
    description: "BIZEX4U uses traffic count data and DEC (Daily Effective Circulation) figures to estimate reach — giving you defensible numbers for your media plan.",
  },
];

const inventory = [
  {
    title: "Billboards & Hoardings",
    description: "Large-format roadside hoardings on high-traffic arterial roads and flyovers.",
    tags: ["Barter", "Cash", "Hybrid"],
  },
  {
    title: "Unipoles",
    description: "Single-pole structures at highway junctions and city entry/exit points for maximum visibility.",
    tags: ["Barter", "Cash"],
  },
  {
    title: "Bus Shelters",
    description: "Backlit panels at bus stops in residential, commercial and IT corridors.",
    tags: ["Cash", "Hybrid"],
  },
  {
    title: "Gantries & Sky Signs",
    description: "Overhead gantry banners spanning entire roads — highest dwell time of any OOH format.",
    tags: ["Cash", "Hybrid"],
  },
  {
    title: "Highway Panels",
    description: "State highway and national highway boards reaching intercity travellers.",
    tags: ["Barter", "Cash"],
  },
  {
    title: "Kiosks & Pillars",
    description: "Street furniture and pillar wraps in high-footfall commercial and retail zones.",
    tags: ["Cash", "Hybrid"],
  },
];

const OutdoorAdvertising = () => (
  <div className="relative min-h-screen">
    <Helmet>
      <title>Outdoor Advertising Agency India — OOH Hoardings & Billboards | BIZEX4U</title>
      <meta
        name="description"
        content="Book billboards, hoardings, unipoles and gantries across 40+ Indian cities. Cash, barter or hybrid outdoor advertising campaigns with guaranteed proof of display."
      />
      <link rel="canonical" href={PAGE_URL} />
      <meta property="og:title" content="Outdoor Advertising Agency India | BIZEX4U" />
      <meta property="og:description" content="Book OOH hoardings, billboards and unipoles across 40+ Indian cities. Cash, barter or hybrid campaigns with geo-tagged proof of display." />
      <meta property="og:url" content={PAGE_URL} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Outdoor Advertising Agency India | BIZEX4U" />
      <meta name="twitter:description" content="Book OOH hoardings, billboards, gantries and unipoles across 40+ cities. Cash, barter or hybrid." />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bizex4u.com/" },
          { "@type": "ListItem", "position": 2, "name": "Outdoor Advertising", "item": PAGE_URL },
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
          title="Outdoor Advertising India"
          highlightWord="Outdoor"
          subtitle="Book billboards, hoardings, unipoles and gantries across 40+ Indian cities. Cash, barter or hybrid — with geo-tagged proof of display and DEC-backed reach estimates."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Outdoor Advertising" },
          ]}
        />
      </div>

      <ServiceMetrics />
      <BenefitsSection benefits={benefits} />
      <InventorySection
        title="OOH inventory across India"
        subtitle="From arterial road hoardings to highway panels — access the full OOH stack."
        items={inventory}
      />
      <FundingModels />
      <BrandsSection />
      <ServiceFAQ faqs={faqs} pageUrl={PAGE_URL} />
      <FinalCTA
        title="Plan your outdoor campaign"
        subtitle="Share your target cities and budget — we'll map the best OOH sites for your brand."
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
