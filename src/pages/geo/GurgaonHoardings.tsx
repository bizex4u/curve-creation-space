import GeoLandingPage from "@/components/geo/GeoLandingPage";

const PAGE_URL = "https://bizex4u.com/gurgaon-hoardings";

const config = {
  pageUrl: PAGE_URL,
  metaTitle: "Gurgaon Hoardings & Billboard Advertising | BIZEX4U",
  metaDescription: "Book hoardings, billboards and large-format OOH in Gurgaon. MG Road, NH48, Golf Course Road, Cyber City — cash, barter or hybrid. Get rates from BIZEX4U.",
  heroTitle: "Gurgaon Hoardings & Billboard Advertising",
  heroHighlight: "Gurgaon",
  heroSubtitle: "Gurgaon is India's corporate capital — home to the Millennium City's Fortune 500 offices, luxury malls and high-income residential zones. Hoarding campaigns on MG Road, NH48 and Golf Course Road reach decision-makers, HNWIs and senior executives at scale.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Outdoor Advertising", href: "/outdoor-advertising" },
    { label: "Gurgaon Hoardings" },
  ],
  metrics: [
    { value: "10L+", label: "Daily Vehicle Movements" },
    { value: "500+", label: "OOH Formats" },
    { value: "SEC-A", label: "Dominant Audience" },
    { value: "₹5L+", label: "Starting Monthly" },
  ],
  benefitsTitle: "Why Gurgaon OOH delivers for premium brands",
  benefitsSubtitle: "India's corporate hub has the highest concentration of high-income professionals — and they commute daily past major OOH corridors.",
  benefits: [
    { icon: "🏢", title: "Corporate decision-maker audience", description: "Gurgaon's resident and commuting base includes senior executives, CXOs, startup founders and professionals from India's largest corporate campuses." },
    { icon: "🛣️", title: "High-traffic arterial corridors", description: "NH48 (Delhi–Gurgaon Expressway), Golf Course Road, Sohna Road and MG Road carry hundreds of thousands of daily vehicle movements — consistent, high-frequency impressions." },
    { icon: "🏘️", title: "Premium residential catchment", description: "DLF Phases 1–5, Sohna Road and South of Gurugram carry high-income residential populations — ideal for luxury automotive, real estate, lifestyle and finance brands." },
    { icon: "💰", title: "Barter-eligible inventory", description: "Gurgaon OOH is available via barter for FMCG, consumer electronics, hospitality and lifestyle brands — maximising campaign reach without cash outlay." },
  ],
  inventoryTitle: "Gurgaon hoarding locations",
  inventorySubtitle: "Prime hoarding sites across Gurgaon's most trafficked corridors and commercial zones.",
  inventory: [
    { title: "NH48 — Delhi-Gurgaon Expressway", description: "India's most premium OOH corridor. Massive gantries and unipoles along NH48 reach the entire Delhi-NCR corporate commuter base.", tags: ["Premium", "High Traffic"] },
    { title: "MG Road & Golf Course Road", description: "Gurgaon's prime retail and commercial corridor. Static and LED billboards reaching mall visitors, office commuters and residents.", tags: ["Commercial", "Retail"] },
    { title: "Cyber City & Udyog Vihar", description: "India's largest corporate IT campus cluster. Hoardings here reach tech professionals and corporate decision-makers at their workplace.", tags: ["Corporate", "IT Cluster"] },
    { title: "Sohna Road & Southern Periphery", description: "Fast-developing south Gurgaon corridor with new residential zones and high vehicle movement — lower cost, growing reach.", tags: ["South Gurgaon", "Growth Corridor"] },
    { title: "Sector 29 & Leisure Valley", description: "Entertainment and dining district — ideal for restaurants, retail, lifestyle and F&B brands reaching high-spending weekend audiences.", tags: ["Lifestyle", "F&B"] },
    { title: "DLF Phases & Residential Zones", description: "Entry-gate hoardings and community-facing formats in DLF and other premium residential zones — reaching HNWIs at home.", tags: ["Residential", "Premium"] },
  ],
  faqs: [
    { question: "How much do hoardings cost in Gurgaon?", answer: "Gurgaon hoarding rates depend on location and format. Entry-level static billboards on secondary roads start from ₹50,000 per month. Prime NH48 gantries and large-format hoardings range from ₹3–15 lakh per month. LED/DOOH hoardings are priced higher. Contact us for a site-specific rate card." },
    { question: "Which are the best hoarding locations in Gurgaon?", answer: "NH48 (Delhi-Gurgaon Expressway) gantries are the most impactful for reach. Golf Course Road and MG Road deliver the highest SEC-A audience concentration. Cyber City formats are best for B2B and corporate brands." },
    { question: "Can Gurgaon hoardings be booked through barter?", answer: "Yes. Many Gurgaon OOH site owners accept barter for FMCG, consumer goods, electronics, hospitality and lifestyle brands. BIZEX4U negotiates barter directly with site owners and provides a formal contract." },
    { question: "What is the minimum duration for Gurgaon hoarding campaigns?", answer: "Most Gurgaon OOH sites require a minimum 30-day booking. BIZEX4U recommends 60–90 day campaigns for brand recall builds. Shorter burst campaigns are possible for product launches and event activations." },
    { question: "Do I need a NOIDA or MCG licence for hoardings in Gurgaon?", answer: "Yes, all outdoor advertising in Gurgaon (MCG area) requires Municipal Corporation of Gurugram permits. BIZEX4U handles all licensing and approval paperwork as part of the campaign execution." },
  ],
  ctaTitle: "Book your Gurgaon hoarding campaign",
  ctaSubtitle: "Share your target corridors and we'll map the highest-impact Gurgaon OOH inventory for your brand.",
  ctaLabel: "Get Gurgaon Hoarding Rates",
  relatedServices: [
    { label: "All Outdoor Advertising", href: "/outdoor-advertising" },
    { label: "Delhi Billboard Advertising", href: "/delhi-billboard-advertising" },
    { label: "Noida Hoardings", href: "/noida-hoardings" },
    { label: "Gurgaon DOOH", href: "/gurgaon-dooh-advertising" },
    { label: "Delhi Metro Advertising", href: "/delhi-metro-advertising" },
  ],
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bizex4u.com/" },
        { "@type": "ListItem", position: 2, name: "Outdoor Advertising", item: "https://bizex4u.com/outdoor-advertising" },
        { "@type": "ListItem", position: 3, name: "Gurgaon Hoardings", item: PAGE_URL },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "BIZEX4U — Gurgaon Outdoor Advertising",
      description: "Gurgaon hoarding and billboard advertising agency. NH48, MG Road, Golf Course Road, Cyber City — cash, barter or hybrid campaigns.",
      url: PAGE_URL,
      areaServed: { "@type": "City", name: "Gurgaon" },
      address: { "@type": "PostalAddress", addressLocality: "Gurugram", addressRegion: "Haryana", addressCountry: "IN" },
      telephone: "+91-80905-00009",
      email: "yash@bizex4u.com",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "How much do hoardings cost in Gurgaon?", acceptedAnswer: { "@type": "Answer", text: "Entry-level static billboards start from ₹50,000 per month. Prime NH48 gantries and large-format hoardings range from ₹3–15 lakh per month." } },
        { "@type": "Question", name: "Can Gurgaon hoardings be booked through barter?", acceptedAnswer: { "@type": "Answer", text: "Yes. Many Gurgaon OOH site owners accept barter. BIZEX4U negotiates directly with site owners and provides a formal contract." } },
      ],
    },
  ],
} as const;

const GurgaonHoardings = () => <GeoLandingPage config={config as any} />;
export default GurgaonHoardings;
