import GeoLandingPage from "@/components/geo/GeoLandingPage";

const PAGE_URL = "https://bizex4u.com/advertising-for-d2c-brands";

const config = {
  pageUrl: PAGE_URL,
  metaTitle: "Advertising for D2C Brands India — OOH, Metro, Airport & Barter | BIZEX4U",
  metaDescription: "D2C advertising agency in India. OOH, metro, airport, DOOH and barter campaigns for D2C brands scaling offline. Cash or inventory-led campaigns across 40+ cities.",
  heroTitle: "Advertising for D2C Brands",
  heroHighlight: "D2C",
  heroSubtitle: "D2C brands graduating from digital-only to omnichannel need offline reach without blowing CAC. BIZEX4U builds D2C media plans across OOH, metro, airport, DOOH and transit — cash-efficient, data-informed and often barter-eligible for brands with product inventory.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Barter Advertising", href: "/barter-advertising" },
    { label: "D2C Brands" },
  ],
  metrics: [
    { value: "320+", label: "Brands Served" },
    { value: "40+", label: "Cities" },
    { value: "D2C Focus", label: "Offline Transition" },
    { value: "Hybrid", label: "Campaign Models" },
  ],
  benefitsTitle: "Why D2C brands trust BIZEX4U for offline scaling",
  benefitsSubtitle: "We understand D2C unit economics — we build offline campaigns that complement digital attribution and justify every rupee of offline spend.",
  benefits: [
    { icon: "📈", title: "Offline reach at D2C CAC targets", description: "We build OOH and transit plans that deliver brand reach at cost-per-impression targets comparable to performance marketing — without sacrificing offline brand stature." },
    { icon: "🔄", title: "Barter with product inventory", description: "D2C brands with physical products can exchange inventory for advertising — converting cost-of-goods into brand building reach with zero cash CAC impact." },
    { icon: "🎯", title: "Target your online audience offline", description: "We map your online customer cohort to offline geographies — running OOH and transit in the exact postcodes and corridors where your digital buyers live." },
    { icon: "📊", title: "Data-informed site selection", description: "We use customer zip code data, delivery address heatmaps and demographic overlays to choose OOH sites that maximise reach to your proven buyer profile." },
  ],
  inventoryTitle: "Offline channels for D2C brands",
  inventorySubtitle: "High-ROI offline channels that complement digital and drive brand discovery for D2C audiences.",
  inventory: [
    { title: "Metro Advertising", description: "Delhi Metro, Mumbai Metro and Bangalore Metro reach the urban 22–40 demographic that over-indexes for D2C purchasing — directly, at frequency, on the daily commute.", tags: ["Metro", "Urban", "D2C Audience"] },
    { title: "Outdoor — Urban Hoardings", description: "City-specific OOH campaigns in Mumbai, Bangalore, Delhi, Hyderabad and Pune — targeted by postcode clusters matching your online customer geography.", tags: ["OOH", "Geo-targeted"] },
    { title: "DOOH — Mall & Transit", description: "Mall DOOH screens place your brand at the point of retail discovery — when D2C consumers are in a purchase mindset. QR-code enabled for direct-response.", tags: ["DOOH", "Direct Response"] },
    { title: "Airport Advertising", description: "Premium airport formats for D2C brands in gifting, travel, accessories and lifestyle — reaching frequent flyers who over-index for online purchase.", tags: ["Airport", "Premium D2C"] },
    { title: "Transit — Bus Shelters", description: "Bus shelter advertising in Tier 1 and Tier 2 cities — broad reach for D2C brands expanding beyond metro markets.", tags: ["Transit", "Tier 2"] },
    { title: "Cinema Advertising", description: "Slide shows and in-film branding in multiplexes — reaching young urban consumers in a receptive, engaged entertainment context.", tags: ["Cinema", "Engagement"] },
  ],
  faqs: [
    { question: "What is the minimum budget for offline advertising for D2C brands?", answer: "BIZEX4U works with D2C brands from ₹5 lakh per campaign. City-specific OOH or metro campaigns start from this range. For barter-eligible D2C brands with product inventory, the effective cash outlay can be zero or partial." },
    { question: "How do I measure the impact of offline advertising on D2C sales?", answer: "We recommend a geo-test methodology — run campaigns in select cities and compare online sales lift vs control markets. We also track branded search volume, app installs and direct traffic during campaign periods as proxy metrics for offline impact." },
    { question: "Can D2C brands with physical products use barter for advertising?", answer: "Yes. D2C brands with consumer goods inventory — beauty, wellness, fashion accessories, food products, electronics accessories — are excellent barter candidates. We evaluate your inventory on a discovery call and propose a barter ratio." },
    { question: "Which offline channels work best for D2C brands?", answer: "Metro advertising consistently delivers the best ROI for D2C brands — it reaches the right demographic (22–40, urban, digitally active) at high frequency at a manageable cost. Airport advertising works for premium D2C brands in gifting and lifestyle categories." },
    { question: "How does BIZEX4U plan D2C offline campaigns?", answer: "We start with your online customer data — geography, age, purchase frequency. We then map this to offline media geographies and build a channel mix that maximises overlap with your proven buyer profile. Cash spend is concentrated on anchor reach; barter covers frequency layers." },
  ],
  ctaTitle: "Scale your D2C brand offline with BIZEX4U",
  ctaSubtitle: "Tell us your target cities, online audience profile and budget — we'll build the offline media plan.",
  ctaLabel: "Get D2C Media Plan",
  relatedServices: [
    { label: "Barter Advertising", href: "/barter-advertising" },
    { label: "Metro Branding", href: "/metro-branding" },
    { label: "DOOH Advertising", href: "/dooh-advertising" },
    { label: "Advertising for FMCG Brands", href: "/advertising-for-fmcg-brands" },
    { label: "How It Works", href: "/how-it-works" },
  ],
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bizex4u.com/" },
        { "@type": "ListItem", position: 2, name: "Barter Advertising", item: "https://bizex4u.com/barter-advertising" },
        { "@type": "ListItem", position: 3, name: "D2C Brands", item: PAGE_URL },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What is the minimum budget for offline advertising for D2C brands?", acceptedAnswer: { "@type": "Answer", text: "BIZEX4U works with D2C brands from ₹5 lakh per campaign. For barter-eligible brands with product inventory, effective cash outlay can be zero or partial." } },
        { "@type": "Question", name: "Can D2C brands with physical products use barter for advertising?", acceptedAnswer: { "@type": "Answer", text: "Yes. D2C brands with consumer goods inventory are excellent barter candidates. BIZEX4U evaluates your inventory and proposes a barter ratio on a discovery call." } },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "BIZEX4U",
      url: "https://bizex4u.com/advertising-for-d2c-brands",
      description: "D2C advertising and barter media agency in India. OOH, metro, airport, DOOH and inventory-led campaigns for D2C brands across 40+ cities.",
      areaServed: { "@type": "Country", name: "India" },
      address: { "@type": "PostalAddress", addressCountry: "IN" },
    },
  ],
} as const;

const AdvertisingForD2cBrands = () => <GeoLandingPage config={config as any} />;
export default AdvertisingForD2cBrands;
