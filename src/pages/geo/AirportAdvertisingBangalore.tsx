import GeoLandingPage from "@/components/geo/GeoLandingPage";

const PAGE_URL = "https://bizex4u.com/airport-advertising-bangalore";

const config = {
  pageUrl: PAGE_URL,
  metaTitle: "Airport Advertising Bangalore — Kempegowda Airport Campaigns | BIZEX4U",
  metaDescription: "Book airport advertising at Bangalore Kempegowda International Airport. Static, DOOH and aerobridge formats — cash, barter or hybrid. Tech-affluent audience.",
  heroTitle: "Airport Advertising at Bangalore Kempegowda",
  heroHighlight: "Bangalore",
  heroSubtitle: "Kempegowda International Airport serves 35M+ passengers per year — dominated by tech professionals, startup founders and international business travellers. India's fastest-growing airport catchment and a premium audience for tech, finance, lifestyle and D2C brands.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Airport Advertising", href: "/airport-advertising" },
    { label: "Bangalore Kempegowda" },
  ],
  metrics: [
    { value: "35M+", label: "Annual Passengers" },
    { value: "T1 + T2", label: "Terminals" },
    { value: "Tech Hub", label: "Audience Profile" },
    { value: "40+", label: "Ad Formats" },
  ],
  benefitsTitle: "Why Bangalore airport is a high-ROI media buy",
  benefitsSubtitle: "BLR airport serves India's Silicon Valley — a uniquely tech-affluent, high-income and globally mobile audience.",
  benefits: [
    { icon: "💻", title: "Tech-affluent audience", description: "BLR's catchment includes Whitefield, Koramangala and Electronic City — India's densest concentration of tech professionals, startup founders and VC-backed executives." },
    { icon: "📈", title: "Fastest-growing route network", description: "Bangalore is now India's third-busiest airport and growing rapidly — expanding passenger base with new T2 adding significant premium inventory." },
    { icon: "🌏", title: "International exposure", description: "BLR handles a disproportionate share of international tech and business travel — reaching global decision-makers on both inbound and outbound journeys." },
    { icon: "🏢", title: "Enterprise buyer proximity", description: "Enterprise software, SaaS, fintech and professional services brands reach genuine decision-makers in a receptive, uncluttered media environment." },
  ],
  inventoryTitle: "Bangalore airport advertising formats",
  inventorySubtitle: "Static and digital formats across T1 and T2 — from check-in to aerobridges.",
  inventory: [
    { title: "T2 Departures (New Terminal)", description: "Bangalore's new T2 terminal opened in 2024 — premium DOOH and static formats with modern infrastructure and high passenger growth.", tags: ["New", "Premium", "T2"] },
    { title: "T1 Domestic Departures", description: "Established domestic terminal with high-volume formats — gate areas, central concourse DOOH and security hold panels.", tags: ["High Volume", "T1"] },
    { title: "International Departures", description: "Premium formats targeting Bangalore's substantial international business traveller segment — tech leaders, consultants and global executives.", tags: ["International", "Premium"] },
    { title: "Aerobridges", description: "Aerobridge vinyl wraps — exclusive format on key routes connecting Bangalore to Delhi, Mumbai, Hyderabad and international destinations.", tags: ["Exclusive", "High Impact"] },
    { title: "Arrivals — Baggage Claim", description: "Large-format overhead and eye-level formats at BLR baggage belts — strong first-impression opportunity for arrivals targeting.", tags: ["Arrivals", "Captive"] },
    { title: "Express Way & Approach Road", description: "Billboards and gantries on the Bangalore Airport approach road — ideal for large-format outdoor brand building targeting all airport users.", tags: ["OOH", "Approach"] },
  ],
  faqs: [
    { question: "How much does Bangalore airport advertising cost?", answer: "Bangalore airport advertising ranges from ₹2–6 lakh per month for entry-level digital screen packages to ₹10–40 lakh per month for premium large-format and aerobridge formats at the new T2 terminal. Contact us for a custom rate card." },
    { question: "What audience does Bangalore airport reach?", answer: "BLR's passenger mix is dominated by tech professionals, startup employees, consultants and senior corporate executives — India's highest-income working-age segment. International routes bring in global tech and finance professionals." },
    { question: "Is the new T2 terminal at Bangalore airport worth advertising in?", answer: "Yes. T2 opened in 2024 with modern digital infrastructure and will handle a growing share of BLR's traffic. Early movers get strong share of voice in a premium, less cluttered media environment." },
    { question: "Can I run barter campaigns at Bangalore airport?", answer: "Yes. Select formats at BLR are barter-eligible. Consumer goods, hospitality, electronics and D2C brands have successfully run barter campaigns through BIZEX4U at Bangalore airport." },
    { question: "How does Bangalore airport advertising compare to Delhi and Mumbai?", answer: "BLR offers a more tech-skewed, younger affluent audience at generally lower cost-per-impression than Delhi T3 or Mumbai T2. Ideal for tech, D2C, SaaS, fintech and startup-adjacent brands." },
  ],
  ctaTitle: "Plan your Bangalore airport campaign",
  ctaSubtitle: "Tell us your objective — we'll map the right BLR formats for your brand and budget.",
  ctaLabel: "Get Bangalore Airport Proposal",
  relatedServices: [
    { label: "All Airport Advertising", href: "/airport-advertising" },
    { label: "Delhi Airport", href: "/airport-advertising-delhi" },
    { label: "Mumbai Airport", href: "/airport-advertising-mumbai" },
    { label: "Bangalore DOOH", href: "/bangalore-dooh-advertising" },
    { label: "Barter Advertising", href: "/barter-advertising" },
  ],
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bizex4u.com/" },
        { "@type": "ListItem", position: 2, name: "Airport Advertising", item: "https://bizex4u.com/airport-advertising" },
        { "@type": "ListItem", position: 3, name: "Bangalore Kempegowda", item: PAGE_URL },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "BIZEX4U — Bangalore Airport Advertising",
      description: "Airport advertising agency for Bangalore Kempegowda International Airport. Cash, barter and hybrid campaigns.",
      url: PAGE_URL,
      areaServed: { "@type": "City", name: "Bangalore" },
      address: { "@type": "PostalAddress", addressLocality: "Bangalore", addressCountry: "IN" },
      telephone: "+91-80905-00009",
      email: "yash@bizex4u.com",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "How much does Bangalore airport advertising cost?", acceptedAnswer: { "@type": "Answer", text: "Entry-level packages start from ₹2–6 lakh per month. Premium large-format and aerobridge formats at T2 range from ₹10–40 lakh per month." } },
        { "@type": "Question", name: "Can I run barter campaigns at Bangalore airport?", acceptedAnswer: { "@type": "Answer", text: "Yes. Select formats at BLR are barter-eligible. Consumer goods, hospitality, electronics and D2C brands have run barter campaigns through BIZEX4U." } },
      ],
    },
  ],
} as const;

const AirportAdvertisingBangalore = () => <GeoLandingPage config={config as any} />;
export default AirportAdvertisingBangalore;
