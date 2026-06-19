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

const faqs = [
  {
    question: "What is barter advertising?",
    answer: "Barter advertising lets you exchange your surplus inventory, unsold stock or unused services for premium media placements — instead of paying cash. BIZEX4U values your inventory, agrees a barter ratio with media owners, and executes the campaign via a clean PO and contract.",
  },
  {
    question: "What types of inventory can be used for barter?",
    answer: "FMCG, consumer goods, electronics, accessories, eyewear, jewellery, beverages, and services with measurable retail value. We evaluate your inventory on a call and propose a barter ratio per channel.",
  },
  {
    question: "Can I mix cash and barter in a single campaign?",
    answer: "Yes. Most clients use a hybrid model — covering OOH, transit, radio and print largely through barter and topping up digital and OTT in cash.",
  },
  {
    question: "How long does it take to activate a barter campaign?",
    answer: "Typically 7–14 days after inventory valuation is agreed. Faster activations are possible for select media formats.",
  },
  {
    question: "Is there a minimum campaign value for barter?",
    answer: "We work with barter campaigns starting from ₹5 lakh in media value. Contact us to discuss your inventory and budget.",
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
    description: "Billboards, unipoles, highway hoardings and city branding across 40+ cities.",
    tags: ["Barter accepted", "Cash accepted"],
  },
  {
    title: "Metro Advertising",
    description: "Platform panels, train wraps and station domination in Delhi, Mumbai, Bangalore, Hyderabad.",
    tags: ["Barter accepted"],
  },
  {
    title: "Airport Advertising",
    description: "Premium screens and static at T1/T2/T3 gates and arrivals across major airports.",
    tags: ["Barter accepted", "Cash accepted"],
  },
  {
    title: "Cinema",
    description: "PVR INOX on-screen and foyer branding in premium multiplexes.",
    tags: ["Barter accepted"],
  },
  {
    title: "Radio",
    description: "30-second spots on leading FM stations — city-specific or national.",
    tags: ["Barter accepted", "Cash accepted"],
  },
  {
    title: "Print",
    description: "Mainline newspapers and lifestyle magazine insertions with guaranteed positions.",
    tags: ["Barter accepted"],
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

      <ServiceMetrics />
      <BenefitsSection benefits={benefits} />
      <InventorySection
        title="Channels that accept barter"
        subtitle="Run barter campaigns across every major offline channel in India."
        items={inventory}
      />
      <FundingModels />
      <BrandsSection />
      <ServiceFAQ faqs={faqs} pageUrl={PAGE_URL} />
      <FinalCTA
        title="Start your barter campaign"
        subtitle="Tell us what inventory you have — we'll value it and build a media plan."
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
