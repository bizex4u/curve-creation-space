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

const metrics = [
  { value: "50M+", label: "Passengers Reached" },
  { value: "Top 12", label: "Airports" },
  { value: "320+", label: "Brands Served" },
  { value: "Premium", label: "Audience" },
];

const faqs = [
  {
    question: "What is airport advertising?",
    answer: "Airport advertising covers all paid media formats inside and outside airports — large-format static displays, digital screens, baggage claim wraps, aerobridges, check-in counters and lounge branding. It reaches a captive, high-net-worth audience with extended dwell times.",
  },
  {
    question: "How much does airport advertising cost in India?",
    answer: "Costs depend on the terminal, format and airport. Entry-level digital screen slots at Tier 2 airports start from ₹2 lakh per month. Premium T3 Delhi or T2 Mumbai formats can range from ₹5–50 lakh per month. Contact us for a custom plan.",
  },
  {
    question: "Can airport advertising be purchased through barter?",
    answer: "Yes — airport advertising is barter-eligible for select formats at many Indian airports. We evaluate your inventory and negotiate directly with airport media concessionaires on your behalf.",
  },
  {
    question: "What campaign duration is recommended for airport advertising?",
    answer: "Minimum campaigns are typically 30 days. Premium brands often run 60–90 day campaigns at key airports to build sustained recall among frequent flyers. Shorter burst campaigns are possible for product launches.",
  },
  {
    question: "How are impressions measured at airports?",
    answer: "Impressions are estimated using published passenger footfall data from AAI and private airport operators, combined with panel location scores and dwell time research. We provide DEC-backed reach estimates in every plan.",
  },
  {
    question: "Can airport campaigns be targeted to specific terminals or gates?",
    answer: "Yes. We can target by terminal (domestic vs international), by gate cluster, by floor level, or by specific journey stage — departure, security hold, baggage claim. This allows precise audience targeting by route and travel type.",
  },
  {
    question: "Do you provide creative support for airport advertising?",
    answer: "Yes. We adapt your master creative to all airport-specific format specs — large-format static, DOOH screen ratios, aerobridge vinyl templates. We also assist with AAI and private operator creative approval submissions.",
  },
  {
    question: "How quickly can an airport campaign go live?",
    answer: "Typically 10–21 days after brief and creative sign-off. Static large-format sites require print production time. Digital screen campaigns can go live in 5–7 days once creative is approved by the airport operator.",
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
    description: "Choose high-impact static large-format boards or targeted DOOH screens that can be day-parted and rotated for different audience windows.",
  },
];

const inventory = [
  {
    title: "Delhi Airport (T1, T2, T3)",
    description: "India's busiest airport — static hoardings, DOOH screens, aerobridges, baggage claim and lounge branding across all terminals.",
    tags: ["Barter", "Cash", "Hybrid"],
  },
  {
    title: "Mumbai Airport (T1, T2)",
    description: "Premium domestic and international terminals at CSIA — high-footfall concourse, gate and check-in formats.",
    tags: ["Barter", "Cash"],
  },
  {
    title: "Bangalore Airport (KIA)",
    description: "Kempegowda International — tech-sector travellers, domestic and international gates, terminal 1 and 2.",
    tags: ["Cash", "Hybrid"],
  },
  {
    title: "Hyderabad Airport (RGIA)",
    description: "Rajiv Gandhi International — pharma, IT and manufacturing sector audience. Premium concourse and gate inventory.",
    tags: ["Cash", "Hybrid"],
  },
  {
    title: "Chennai, Kolkata & Pune",
    description: "Regional hub airports with targeted domestic audience — ideal for regional brand pushes or complementary national campaigns.",
    tags: ["Barter", "Cash"],
  },
  {
    title: "Tier 2 & Leisure Airports",
    description: "Goa, Kochi, Ahmedabad, Jaipur, Lucknow and more — tourism, lifestyle and regional brand opportunities at lower entry costs.",
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

      <ServiceMetrics metrics={metrics} />
      <BenefitsSection
        title="Why airport advertising delivers"
        subtitle="Premium audience quality, long dwell times and an international brand halo — airport is India's highest-CPM-justified OOH channel."
        benefits={benefits}
      />
      <InventorySection
        title="Airports we cover"
        subtitle="Direct access to every major Indian airport — domestic, international and Tier 2 leisure hubs."
        items={inventory}
      />
      <FundingModels />
      <BrandsSection />
      <ServiceFAQ faqs={faqs} pageUrl={PAGE_URL} />
      <FinalCTA
        title="Plan your airport campaign"
        subtitle="Tell us your target airports and audience — we'll map the highest-impact inventory for your brand."
        primaryCTALabel="Get Airport Proposal"
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
