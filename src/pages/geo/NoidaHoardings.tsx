import GeoLandingPage from "@/components/geo/GeoLandingPage";

const PAGE_URL = "https://bizex4u.com/noida-hoardings";

const config = {
  pageUrl: PAGE_URL,
  metaTitle: "Noida Hoardings & Outdoor Advertising | BIZEX4U",
  metaDescription: "Book hoardings and billboards in Noida. Expressway, Sector 18, Sectors 62/63, Greater Noida — cash, barter or hybrid. Get outdoor advertising rates from BIZEX4U.",
  heroTitle: "Noida Hoardings & Outdoor Advertising",
  heroHighlight: "Noida",
  heroSubtitle: "Noida is NCR's fastest-growing commercial zone — IT parks in Sectors 62 and 63, premium retail in Sector 18, and massive residential expansion in Greater Noida. Hoarding campaigns reach a young, digitally active and increasingly affluent population.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Outdoor Advertising", href: "/outdoor-advertising" },
    { label: "Noida Hoardings" },
  ],
  metrics: [
    { value: "8L+", label: "Daily Commuters" },
    { value: "300+", label: "OOH Sites" },
    { value: "Sectors 18–137", label: "Full Coverage" },
    { value: "D2C+Tech", label: "Key Audience" },
  ],
  benefitsTitle: "Why Noida OOH delivers for D2C and tech brands",
  benefitsSubtitle: "Noida's population is young, tech-employed and urban — ideal for brands targeting the 22–40 aspirational buyer.",
  benefits: [
    { icon: "💻", title: "IT cluster concentration", description: "Sectors 62 and 63 house some of India's largest IT campuses — NIIT, HCL, Wipro, Adobe and dozens of mid-size tech firms. Daily commuters are 25–40 tech professionals." },
    { icon: "🛍️", title: "Sector 18 retail hub", description: "Noida's Sector 18 is one of NCR's busiest commercial and retail zones — attracting weekend shoppers and families from across Noida and Greater Noida." },
    { icon: "🏗️", title: "Greater Noida growth corridor", description: "Greater Noida and Noida Extension are among India's fastest-growing residential markets — large format hoardings reach new-home buyers at scale." },
    { icon: "🔢", title: "Expressway scale impact", description: "The Noida–Greater Noida Expressway and Yamuna Expressway carry massive daily traffic — gantries here deliver among NCR's highest per-impression counts." },
  ],
  inventoryTitle: "Noida hoarding locations",
  inventorySubtitle: "Prime OOH sites across Noida's highest-traffic corridors and commercial zones.",
  inventory: [
    { title: "Noida Expressway Gantries", description: "Large-format gantries on the Noida–Greater Noida Expressway — NCR's highest-traffic route connecting Noida to Greater Noida, Agra and Yamuna Expressway.", tags: ["Expressway", "High Traffic"] },
    { title: "Sector 18 & Atta Market", description: "Noida's premier retail and commercial cluster. Hoardings here reach weekend shoppers, families and the Sector 18 working population.", tags: ["Commercial", "Retail"] },
    { title: "Sectors 62–63 IT Corridor", description: "Billboards and unipoles along the IT park corridor — reaching tech employees at their workplace and during their commute.", tags: ["IT Corridor", "Tech Audience"] },
    { title: "Film City Road & Sector 16A", description: "Commercial and entertainment zone — F&B, hospitality, entertainment and lifestyle brands perform strongly here.", tags: ["Entertainment", "F&B"] },
    { title: "Greater Noida Expressway", description: "Gantries and large hoardings on the expressway connecting Greater Noida to Delhi — ideal for real estate, automobiles and lifestyle brands.", tags: ["Greater Noida", "Growth Corridor"] },
    { title: "Lotus Pond & Botanical Garden Area", description: "Mid-Noida residential and leisure zone — community-facing formats reaching high-income residential populations in Sectors 50–80.", tags: ["Residential", "Mid-City"] },
  ],
  faqs: [
    { question: "How much do hoardings cost in Noida?", answer: "Noida hoarding rates vary by location. Secondary road billboards start from ₹30,000 per month. Noida Expressway gantries and Sector 18 prime hoardings range from ₹1.5–8 lakh per month. LED/DOOH sites are priced higher. Contact us for a rate card." },
    { question: "Which Noida hoarding locations get the most traffic?", answer: "The Noida Expressway, Sector 18 commercial zone and the IT corridor of Sectors 62/63 are the highest-traffic locations. For residential reach, hoardings in Sectors 50–80 and Greater Noida Extension perform well." },
    { question: "Can Noida hoardings be bought through barter?", answer: "Yes. Noida OOH site owners regularly accept barter for FMCG, consumer electronics, D2C, food & beverage and lifestyle brands. BIZEX4U structures all barter agreements with formal contracts." },
    { question: "What permits are needed for Noida hoardings?", answer: "All outdoor advertising in Noida requires Noida Authority permits. BIZEX4U handles all permit applications, approvals and compliance paperwork as part of the campaign." },
    { question: "Is Noida good for D2C advertising?", answer: "Yes. Noida's 25–40 tech-employed demographic is a core D2C buyer — digitally active, aspirational and spending on beauty, fashion, fitness and lifestyle. Metro-area hoardings combined with Noida Metro advertising deliver strong reach." },
  ],
  ctaTitle: "Book your Noida hoarding campaign",
  ctaSubtitle: "Tell us your target zones and we'll map the best Noida OOH inventory for your brand.",
  ctaLabel: "Get Noida Hoarding Rates",
  relatedServices: [
    { label: "All Outdoor Advertising", href: "/outdoor-advertising" },
    { label: "Gurgaon Hoardings", href: "/gurgaon-hoardings" },
    { label: "Delhi Billboard Advertising", href: "/delhi-billboard-advertising" },
    { label: "Delhi Metro Advertising", href: "/delhi-metro-advertising" },
    { label: "DOOH Advertising", href: "/dooh-advertising" },
  ],
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bizex4u.com/" },
        { "@type": "ListItem", position: 2, name: "Outdoor Advertising", item: "https://bizex4u.com/outdoor-advertising" },
        { "@type": "ListItem", position: 3, name: "Noida Hoardings", item: PAGE_URL },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "BIZEX4U — Noida Outdoor Advertising",
      description: "Noida hoarding and billboard advertising agency. Expressway, Sector 18, IT corridors — cash, barter or hybrid campaigns.",
      url: PAGE_URL,
      areaServed: { "@type": "City", name: "Noida" },
      address: { "@type": "PostalAddress", addressLocality: "Noida", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
      telephone: "+91-80905-00009",
      email: "yash@bizex4u.com",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "How much do hoardings cost in Noida?", acceptedAnswer: { "@type": "Answer", text: "Secondary road billboards start from ₹30,000 per month. Noida Expressway gantries and Sector 18 prime hoardings range from ₹1.5–8 lakh per month." } },
        { "@type": "Question", name: "Can Noida hoardings be bought through barter?", acceptedAnswer: { "@type": "Answer", text: "Yes. Noida OOH site owners accept barter for FMCG, consumer electronics, D2C, food & beverage and lifestyle brands with formal contracts." } },
      ],
    },
  ],
} as const;

const NoidaHoardings = () => <GeoLandingPage config={config as any} />;
export default NoidaHoardings;
