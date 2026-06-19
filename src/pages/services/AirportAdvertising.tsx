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

const PAGE_URL = "https://bizex4u.com/airport-advertising";

const faqs = [
  {
    question: "What is airport advertising?",
    answer: "Airport advertising covers all paid media formats inside and outside airports — large-format static displays, digital screens, baggage claim wraps, aerobridges, check-in counters and lounge branding. It reaches a captive, high-net-worth audience with extended dwell times.",
  },
  {
    question: "How much does airport advertising cost in India?",
    answer: "Costs depend on the terminal, format and airport. Entry-level digital screen slots at Tier 2 airports start from ₹2 lakh per month. Premium T3 Delhi or T2 Mumbai formats can range from ₹5–50 lakh. Contact us for a custom plan.",
  },
  {
    question: "Can airport advertising be purchased through barter?",
    answer: "Yes — airport advertising is barter-eligible for select formats at many Indian airports. We evaluate your inventory and negotiate directly with airport media concessionaires.",
  },
  {
    question: "Which airports do you cover?",
    answer: "Delhi (T1, T2, T3), Mumbai (T1, T2), Bangalore, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad, Kochi, Goa and 20+ additional airports across India.",
  },
  {
    question: "What kind of brands typically advertise at airports?",
    answer: "Luxury and premium consumer brands, financial services, travel and hospitality, automotive, real estate, and D2C brands targeting HNI and frequent-flyer demographics.",
  },
];

const benefits = [
  {
    icon: "✈️",
    title: "Premium, high-NW audience",
    description: "Airport passengers are among India's highest-income demographics — frequent flyers, senior executives and international travellers. Unmatched audience quality.",
  },
  {
    icon: "⏱️",
    title: "Long dwell times",
    description: "Travellers spend 60–120 minutes in airports. Your ad is seen repeatedly during security queues, lounge waits and boarding holds — far beyond typical OOH formats.",
  },
  {
    icon: "🌐",
    title: "International brand halo",
    description: "Airport presence signals premium positioning. Association with international travel corridors elevates brand perception in ways mass media cannot replicate.",
  },
  {
    icon: "📺",
    title: "Digital + static flexibility",
    description: "Choose between high-impact static large-format boards or targeted digital screens that can be day-parted and rotated for different audience windows.",
  },
];

const inventory = [
  {
    title: "Large Format Static",
    description: "Backlit and non-backlit hoardings at gates, arrivals, departures and curbside — maximum size, maximum impact.",
    tags: ["Barter", "Cash"],
  },
  {
    title: "Digital Screens (DOOH)",
    description: "HD and 4K screens across terminal interiors — rotational 10–30 second creative slots.",
    tags: ["Cash", "Hybrid"],
  },
  {
    title: "Aerobridge Branding",
    description: "Full aerobridge wraps seen by every passenger boarding and deplaning — highest dwell time at the gate.",
    tags: ["Cash", "Hybrid"],
  },
  {
    title: "Baggage Claim Wraps",
    description: "Carousel and baggage belt branding — 10–20 minutes of captive eyetime as passengers wait for luggage.",
    tags: ["Barter", "Cash"],
  },
  {
    title: "Check-in Counter Fascia",
    description: "Branding across the check-in counter front panels — seen during the peak queue wait period.",
    tags: ["Cash"],
  },
  {
    title: "Lounge & F&B Zones",
    description: "Digital screens and static panels inside airport lounges and food courts — premium audience, relaxed mindset.",
    tags: ["Cash", "Hybrid"],
  },
];

const AirportAdvertising = () => (
  <div className="relative min-h-screen">
    <Helmet>
      <title>Airport Advertising India — Delhi, Mumbai, Bangalore Airport Ads | BIZEX4U</title>
      <meta
        name="description"
        content="Book airport advertising at Delhi T3, Mumbai T2, Bangalore, Hyderabad and 25+ Indian airports. Large format, DOOH, aerobridge — cash, barter or hybrid campaigns."
      />
      <link rel="canonical" href={PAGE_URL} />
      <meta property="og:title" content="Airport Advertising India | BIZEX4U" />
      <meta property="og:description" content="Premium airport ads at Delhi, Mumbai, Bangalore and 25+ airports. Large format static, DOOH, aerobridges, baggage claim — cash, barter or hybrid." />
      <meta property="og:url" content={PAGE_URL} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Airport Advertising India | BIZEX4U" />
      <meta name="twitter:description" content="Reach India's highest-income audience at airports. Large format, DOOH, aerobridges — cash, barter or hybrid campaigns." />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bizex4u.com/" },
          { "@type": "ListItem", "position": 2, "name": "Airport Advertising", "item": PAGE_URL },
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
          title="Airport Advertising India"
          highlightWord="Airport"
          subtitle="Reach India's highest-income audience at 25+ airports. Large-format static, DOOH screens, aerobridges and baggage claim — with extended dwell times that no other OOH format can match."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Airport Advertising" },
          ]}
        />
      </div>

      <ServiceMetrics />
      <BenefitsSection
        title="Why airport advertising delivers"
        subtitle="Premium audience quality, long dwell times and an international brand halo — airport is India's highest-CPM-justified OOH channel."
        benefits={benefits}
      />
      <InventorySection
        title="Airport advertising formats"
        subtitle="Every major format across India's busiest airports — domestic and international terminals."
        items={inventory}
      />
      <FundingModels />
      <BrandsSection />
      <ServiceFAQ faqs={faqs} pageUrl={PAGE_URL} />
      <FinalCTA
        title="Plan your airport campaign"
        subtitle="Tell us your target airports and audience — we'll map the highest-impact inventory for your brand."
        relatedServices={[
          { label: "Outdoor Advertising", href: "/outdoor-advertising" },
          { label: "Metro Branding", href: "/metro-branding" },
          { label: "DOOH Advertising", href: "/dooh-advertising" },
          { label: "Barter Advertising", href: "/barter-advertising" },
        ]}
      />
      <Footer showDivider={false} />
    </div>
  </div>
);

export default AirportAdvertising;
