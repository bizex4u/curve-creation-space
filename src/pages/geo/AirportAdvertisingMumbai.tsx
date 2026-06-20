import GeoLandingPage from "@/components/geo/GeoLandingPage";

const PAGE_URL = "https://bizex4u.com/airport-advertising-mumbai";

const config = {
  pageUrl: PAGE_URL,
  metaTitle: "Airport Advertising Mumbai — CSIA T2 Campaigns | BIZEX4U",
  metaDescription: "Book airport advertising at Mumbai CSIA T2. Premium static, DOOH, aerobridges and baggage claim — cash, barter or hybrid. India's most premium airport audience.",
  heroTitle: "Airport Advertising at Mumbai CSIA",
  heroHighlight: "Mumbai CSIA",
  heroSubtitle: "Chhatrapati Shivaji Maharaj International Airport T2 is India's most architecturally striking terminal and carries 50M+ passengers a year — including the highest concentration of SEC-A business travellers in any Indian airport.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Airport Advertising", href: "/airport-advertising" },
    { label: "Mumbai CSIA" },
  ],
  metrics: [
    { value: "50M+", label: "Annual Passengers" },
    { value: "T2", label: "Iconic Terminal" },
    { value: "SEC-A", label: "Dominant Audience" },
    { value: "24/7", label: "Operations" },
  ],
  benefitsTitle: "Why Mumbai airport advertising delivers",
  benefitsSubtitle: "CSIA T2 is India's gateway to global business — your brand shares space with the highest-spending traveller cohort in the country.",
  benefits: [
    { icon: "💼", title: "Business traveller density", description: "Mumbai's financial hub status means CSIA carries more senior corporate and HNWI passengers per day than any other Indian airport." },
    { icon: "🎨", title: "Premium brand environment", description: "CSIA T2's award-winning architecture creates a premium brand context — advertising here is associated with quality and global stature." },
    { icon: "🌍", title: "International gateway", description: "T2 handles all international and premium domestic traffic — ideal for brands targeting frequent international travellers." },
    { icon: "⏱️", title: "Long dwell time", description: "T2's layout encourages 90+ minute terminal stays. DOOH screens and static panels see repeated exposures during a single passenger journey." },
  ],
  inventoryTitle: "Mumbai CSIA advertising formats",
  inventorySubtitle: "Digital and static formats across T2 — from check-in to gate lounge to baggage claim.",
  inventory: [
    { title: "T2 Departures — Landside", description: "Large-format static and DOOH at the T2 landside check-in and ticketing zones — the first impression for every departing passenger.", tags: ["Premium", "High Volume"] },
    { title: "T2 Departures — Airside", description: "Gate lounge DOOH screens, backlit lightboxes and digital pillars in the T2 airside departure hold.", tags: ["Captive", "Premium"] },
    { title: "International Arrivals", description: "Static and DOOH formats in the T2 international arrivals hall — ideal for automotive, luxury goods, finance and hospitality brands.", tags: ["International", "Arrivals"] },
    { title: "Aerobridges", description: "Aerobridge vinyl wraps at T2 — exclusive, high-impact format seen by every boarding passenger on key routes.", tags: ["Exclusive", "Unmissable"] },
    { title: "Baggage Claim", description: "Overhead banners and lightboxes at CSIA T2 baggage belts — passengers average 20 minutes of captive wait time here.", tags: ["Captive", "High Dwell"] },
    { title: "VIP Lounge Advertising", description: "Digital and print formats inside premium lounges — targeting HNWI and frequent flyer programme members.", tags: ["VIP", "HNWI"] },
  ],
  faqs: [
    { question: "How much does Mumbai airport advertising cost?", answer: "Mumbai CSIA T2 is India's most premium airport advertising environment. Entry-level digital screen packages start from ₹4–8 lakh per month. Large-format static and aerobridge campaigns at T2 range from ₹15–60 lakh per month depending on format and location." },
    { question: "What makes CSIA T2 different from other Indian airports?", answer: "CSIA T2 was designed as a museum with art installations and a world-class architectural interior. This premium context elevates every brand advertising within it — making it the highest brand-equity airport environment in India." },
    { question: "Can Mumbai airport advertising use barter?", answer: "Yes, select formats at CSIA are barter-eligible. We have established relationships with Mumbai airport media concessionaires and can structure barter proposals for FMCG, hospitality, retail and consumer brand inventory." },
    { question: "Which formats get the most impressions at Mumbai T2?", answer: "T2 airside DOOH screens and baggage claim formats consistently deliver the highest dwell-weighted impressions due to mandatory wait times. Landside check-in panels deliver the broadest unique reach." },
    { question: "How long does campaign setup take at Mumbai airport?", answer: "Standard static campaigns require 2–3 weeks lead time for creative approval and installation. DOOH campaigns can activate in 1 week once creative is approved by the airport operator." },
  ],
  ctaTitle: "Plan your Mumbai airport campaign",
  ctaSubtitle: "Tell us your objectives and we'll map the highest-impact T2 formats for your brand.",
  ctaLabel: "Get Mumbai Airport Proposal",
  relatedServices: [
    { label: "All Airport Advertising", href: "/airport-advertising" },
    { label: "Delhi Airport", href: "/airport-advertising-delhi" },
    { label: "Bangalore Airport", href: "/airport-advertising-bangalore" },
    { label: "Mumbai Metro Advertising", href: "/mumbai-metro-advertising" },
    { label: "DOOH Advertising", href: "/dooh-advertising" },
  ],
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bizex4u.com/" },
        { "@type": "ListItem", position: 2, name: "Airport Advertising", item: "https://bizex4u.com/airport-advertising" },
        { "@type": "ListItem", position: 3, name: "Mumbai CSIA", item: PAGE_URL },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "BIZEX4U — Mumbai Airport Advertising",
      description: "Airport advertising agency for Mumbai CSIA T2. Cash, barter and hybrid campaigns.",
      url: PAGE_URL,
      areaServed: { "@type": "City", name: "Mumbai" },
      address: { "@type": "PostalAddress", addressLocality: "Mumbai", addressCountry: "IN" },
      telephone: "+91-80905-00009",
      email: "yash@bizex4u.com",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "How much does Mumbai airport advertising cost?", acceptedAnswer: { "@type": "Answer", text: "Entry-level digital screen packages start from ₹4–8 lakh per month. Large-format static and aerobridge campaigns range from ₹15–60 lakh per month." } },
        { "@type": "Question", name: "Can Mumbai airport advertising use barter?", acceptedAnswer: { "@type": "Answer", text: "Yes, select formats at CSIA are barter-eligible. BIZEX4U structures barter proposals for FMCG, hospitality, retail and consumer brands." } },
      ],
    },
  ],
} as const;

const AirportAdvertisingMumbai = () => <GeoLandingPage config={config as any} />;
export default AirportAdvertisingMumbai;
