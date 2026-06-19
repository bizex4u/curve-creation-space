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

const PAGE_URL = "https://bizex4u.com/barter-advertising";

const metrics = [
  { value: "₹150Cr+", label: "Barter Value Transacted" },
  { value: "40+", label: "Cities" },
  { value: "320+", label: "Brands Served" },
  { value: "Zero", label: "Cash Outlay Possible" },
];

const faqs = [
  {
    question: "What is barter advertising?",
    answer: "Barter advertising lets you exchange your surplus inventory, unsold stock or unused services for premium media placements — instead of paying cash. BIZEX4U values your inventory, agrees a barter ratio with media owners, and executes the campaign via a clean PO and contract.",
  },
  {
    question: "What types of inventory can be used for barter?",
    answer: "FMCG, consumer goods, electronics, accessories, eyewear, jewellery, beverages, and services with measurable retail value. We evaluate your inventory on a discovery call and propose a barter ratio per channel.",
  },
  {
    question: "Can I mix cash and barter in a single campaign?",
    answer: "Yes. Most clients use a hybrid model — covering OOH, transit, radio and print largely through barter and topping up digital and OTT in cash. The split ratio is fully flexible based on your inventory and objectives.",
  },
  {
    question: "What campaign duration is recommended for barter campaigns?",
    answer: "Barter campaigns run on the same timelines as cash campaigns — minimum 30 days for most formats. Longer campaigns (60–90 days) allow more time to use inventory value and achieve meaningful brand recall across channels.",
  },
  {
    question: "How is my inventory valued for barter?",
    answer: "We value inventory at MRP or an agreed market rate, then apply a barter ratio negotiated with the media owner. The ratio varies by channel and media owner — typically 1:1 to 1:1.5 (₹1 of inventory for ₹1–₹1.5 of media value).",
  },
  {
    question: "Can barter campaigns be geo-targeted to specific markets?",
    answer: "Yes. We run single-city barter campaigns as well as national multi-channel barters. Geo-targeting is determined by the media formats chosen — OOH and metro are naturally city-specific, while radio and print can be geographically segmented.",
  },
  {
    question: "Do you provide creative support for barter campaigns?",
    answer: "Yes. BIZEX4U provides artwork adaptation and creative specs for all barter media placements. We ensure every asset meets the respective media owner's format and quality requirements.",
  },
  {
    question: "How long does it take to activate a barter campaign?",
    answer: "Typically 7–14 days after inventory valuation is agreed and creative is approved. The barter agreement (PO + contract) is issued before any media booking is confirmed.",
  },
];

const benefits = [
  {
    icon: "💰",
    title: "Preserve cash flow",
    description: "Convert idle inventory into high-reach media campaigns without spending a rupee. Ideal for brands with surplus stock or seasonal overproduction.",
  },
  {
    icon: "📡",
    title: "Massive cross-channel reach",
    description: "Barter campaigns run across OOH, metro, airport, cinema, radio and print — the same premium inventory available for cash campaigns.",
  },
  {
    icon: "📋",
    title: "Clean PO & contract",
    description: "Every barter deal is backed by a formal purchase order and signed agreement. Full audit trail for your finance team.",
  },
  {
    icon: "🔄",
    title: "Hybrid flexibility",
    description: "Start with barter for high-value offline channels and add cash for digital — fully flexible split ratio based on your objectives.",
  },
];

const inventory = [
  {
    title: "OOH & Outdoor",
    description: "Billboards, unipoles, highway hoardings and city branding across 40+ cities — one of the most barter-receptive formats in India.",
    tags: ["Barter", "Cash", "Hybrid"],
  },
  {
    title: "Metro Advertising",
    description: "Platform panels, concourse banners and train wraps on DMRC, MMRC, BMRCL and other metro networks.",
    tags: ["Barter", "Cash"],
  },
  {
    title: "Airport Advertising",
    description: "Static large-format and select digital formats at major Indian airports — barter-eligible at key locations.",
    tags: ["Barter", "Cash"],
  },
  {
    title: "Cinema (PVR INOX)",
    description: "On-screen ads and foyer branding at premium multiplexes across India's top cities.",
    tags: ["Barter", "Cash"],
  },
  {
    title: "Radio",
    description: "30-second spots on leading FM stations — city-specific or national. High barter acceptance across major networks.",
    tags: ["Barter", "Cash"],
  },
  {
    title: "Print",
    description: "Mainline newspaper and lifestyle magazine insertions with guaranteed positions. Wide barter acceptance.",
    tags: ["Barter", "Cash"],
  },
];

const BarterAdvertising = () => (
  <div className="relative min-h-screen">
    <Helmet>
      <title>Barter Advertising Agency India — Exchange Inventory for Media | BIZEX4U</title>
      <meta
        name="description"
        content="Run premium OOH, metro, airport, cinema and radio campaigns using your surplus inventory — no cash outlay. India's leading barter advertising agency."
      />
      <link rel="canonical" href={PAGE_URL} />
      <meta property="og:title" content="Barter Advertising Agency India | BIZEX4U" />
      <meta property="og:description" content="Exchange surplus inventory for premium ad placements across OOH, metro, cinema, radio and more. Clean PO, formal contract, 40+ cities." />
      <meta property="og:url" content={PAGE_URL} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Barter Advertising Agency India | BIZEX4U" />
      <meta name="twitter:description" content="Exchange inventory for premium media placements across India. OOH, metro, cinema, radio — cash, barter or hybrid." />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bizex4u.com/" },
          { "@type": "ListItem", "position": 2, "name": "Barter Advertising", "item": PAGE_URL },
        ],
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
          title="Barter Advertising Agency India"
          highlightWord="Barter"
          subtitle="Convert your surplus inventory into premium media campaigns — OOH, metro, airport, cinema and radio — with zero cash outlay. India's trusted barter-first advertising partner."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Barter Advertising" },
          ]}
        />
      </div>

      <ServiceMetrics metrics={metrics} />
      <BenefitsSection benefits={benefits} />
      <InventorySection
        title="Channels that accept barter"
        subtitle="Run barter campaigns across every major offline channel in India."
        items={inventory}
      />
      <FundingModels />
      <BrandsSection />
      <ServiceFAQ faqs={faqs} />
      <FinalCTA
        title="Start your barter campaign"
        subtitle="Tell us what inventory you have — we'll value it and build a media plan."
        primaryCTALabel="Check Inventory Eligibility"
        relatedServices={[
          { label: "Outdoor Advertising", href: "/outdoor-advertising" },
          { label: "Metro Branding", href: "/metro-branding" },
          { label: "Airport Advertising", href: "/airport-advertising" },
          { label: "DOOH Advertising", href: "/dooh-advertising" },
        ]}
      />
      <Footer showDivider={false} />
    </div>
  </div>
);

export default BarterAdvertising;
