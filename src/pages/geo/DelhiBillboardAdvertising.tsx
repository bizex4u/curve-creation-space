import GeoLandingPage from "@/components/geo/GeoLandingPage";

const PAGE_URL = "https://bizex4u.com/delhi-billboard-advertising";

const config = {
  pageUrl: PAGE_URL,
  metaTitle: "Delhi Billboard Advertising — Outdoor Hoardings & OOH | BIZEX4U",
  metaDescription: "Book billboards and hoardings across Delhi. Ring Road, ITO, Connaught Place, South Delhi corridors — cash, barter or hybrid campaigns with BIZEX4U.",
  heroTitle: "Delhi Billboard Advertising",
  heroHighlight: "Delhi",
  heroSubtitle: "Delhi's outdoor advertising market is one of India's largest — Ring Road, ITO flyover, Connaught Place and South Delhi corridors deliver massive daily reach across the capital's diverse population. From mass-market FMCG to premium brand launches, Delhi OOH works at scale.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Outdoor Advertising", href: "/outdoor-advertising" },
    { label: "Delhi Billboard Advertising" },
  ],
  metrics: [
    { value: "200L+", label: "Daily Commuters" },
    { value: "1000+", label: "OOH Sites" },
    { value: "32", label: "Districts" },
    { value: "₹1L+", label: "Starting Monthly" },
  ],
  benefitsTitle: "Why Delhi billboard advertising works",
  benefitsSubtitle: "India's capital is the largest single-city OOH market — diverse audience, massive scale, high-impact corridors.",
  benefits: [
    { icon: "🏛️", title: "Capital city brand authority", description: "Delhi-based campaigns carry national brand credibility. Being visible in India's capital signals national scale and brand authority." },
    { icon: "🚗", title: "Massive commuter volumes", description: "Delhi's road network carries 200+ lakh daily vehicle movements — Ring Road, NH corridors and arterial roads deliver consistent, high-frequency impressions." },
    { icon: "🎯", title: "Audience segmentation by zone", description: "Central Delhi (CP, ITO) reaches government and corporate audiences. South Delhi (Hauz Khas, Vasant Kunj) reaches premium residential. West Delhi delivers mass-market reach." },
    { icon: "💸", title: "Large barter-eligible inventory", description: "Delhi's diverse OOH operator base makes it one of India's most barter-friendly outdoor markets — ideal for brands looking to convert inventory to media." },
  ],
  inventoryTitle: "Delhi billboard locations",
  inventorySubtitle: "High-impact OOH sites across Delhi's major corridors, commercial zones and residential areas.",
  inventory: [
    { title: "Ring Road Gantries & Hoardings", description: "Delhi's inner and outer ring roads carry among India's highest daily traffic volumes. Gantries and large-format hoardings deliver unmissable brand presence.", tags: ["Ring Road", "Mass Reach"] },
    { title: "Connaught Place & Central Delhi", description: "Premium commercial hoardings in CP, Barakhamba Road and Rajpath corridors — ideal for premium brands targeting central Delhi's professional and tourist audience.", tags: ["Central Delhi", "Premium"] },
    { title: "ITO & Ashram Flyover", description: "ITO is one of Delhi's most strategic OOH locations — connecting East, Central and South Delhi with extreme daily vehicle movement.", tags: ["ITO", "High Traffic"] },
    { title: "South Delhi — Hauz Khas, Vasant Kunj", description: "Premium residential and upmarket shopping corridors in South Delhi — SEC-A audience at Hauz Khas Village, DLF Promenade, Vasant Kunj malls.", tags: ["South Delhi", "Premium"] },
    { title: "West Delhi — Rohini, Peeragarhi", description: "Mass-market outdoor in West Delhi's high-density residential corridors — ideal for FMCG, education, financial services and consumer brands.", tags: ["West Delhi", "Mass Market"] },
    { title: "North Delhi — Azadpur, Mukherjee Nagar", description: "North Delhi's high-density commuter zones — educational hubs, wholesale markets and industrial corridors with strong daily footfall.", tags: ["North Delhi", "Volume"] },
  ],
  faqs: [
    { question: "How much does Delhi billboard advertising cost?", answer: "Delhi billboard costs range widely. Entry-level static billboards in West or North Delhi start from ₹80,000–2 lakh per month. Premium Ring Road gantries and Connaught Place hoardings range from ₹5–20 lakh per month. ITO and South Delhi prime sites are ₹3–12 lakh per month." },
    { question: "What are the best billboard locations in Delhi for brand launches?", answer: "ITO flyover, Ring Road gantries near Dhaula Kuan and Ashram Chowk, and CP central hoardings are the most impactful launch locations. They deliver the broadest daily reach in Delhi." },
    { question: "Can Delhi billboards be purchased through barter?", answer: "Yes. Delhi has India's largest barter-eligible OOH inventory — multiple site owners accept FMCG, consumer goods, food & beverage, hospitality and electronics in exchange for media placements. BIZEX4U has established relationships across all major Delhi OOH operators." },
    { question: "What licences are needed for Delhi billboard advertising?", answer: "All Delhi outdoor advertising requires NDMC, MCD or Delhi government permits depending on the site location. BIZEX4U handles all licensing, permit applications and compliance as part of the campaign." },
    { question: "Is Delhi outdoor advertising good for FMCG brands?", answer: "Delhi OOH is excellent for FMCG. The city's diverse, high-density population across all income segments makes it the single most impactful city for mass FMCG reach in India. Barter makes it especially cost-efficient for FMCG brands with product inventory." },
  ],
  ctaTitle: "Book your Delhi billboard campaign",
  ctaSubtitle: "Tell us your target corridors and audience — we'll build the optimal Delhi OOH plan.",
  ctaLabel: "Get Delhi Billboard Rates",
  relatedServices: [
    { label: "All Outdoor Advertising", href: "/outdoor-advertising" },
    { label: "Gurgaon Hoardings", href: "/gurgaon-hoardings" },
    { label: "Noida Hoardings", href: "/noida-hoardings" },
    { label: "Delhi Metro Advertising", href: "/delhi-metro-advertising" },
    { label: "Barter Advertising", href: "/barter-advertising" },
  ],
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bizex4u.com/" },
        { "@type": "ListItem", position: 2, name: "Outdoor Advertising", item: "https://bizex4u.com/outdoor-advertising" },
        { "@type": "ListItem", position: 3, name: "Delhi Billboard Advertising", item: PAGE_URL },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "BIZEX4U — Delhi Billboard Advertising",
      description: "Delhi outdoor advertising and billboard agency. Ring Road, ITO, Connaught Place, South Delhi — cash, barter or hybrid campaigns.",
      url: PAGE_URL,
      areaServed: { "@type": "City", name: "Delhi" },
      address: { "@type": "PostalAddress", addressLocality: "New Delhi", addressCountry: "IN" },
      telephone: "+91-80905-00009",
      email: "yash@bizex4u.com",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "How much does Delhi billboard advertising cost?", acceptedAnswer: { "@type": "Answer", text: "Entry-level static billboards start from ₹80,000–2 lakh per month. Premium Ring Road gantries and CP hoardings range from ₹5–20 lakh per month." } },
        { "@type": "Question", name: "Can Delhi billboards be purchased through barter?", acceptedAnswer: { "@type": "Answer", text: "Yes. Delhi has India's largest barter-eligible OOH inventory. BIZEX4U has relationships across all major Delhi OOH operators." } },
      ],
    },
  ],
} as const;

const DelhiBillboardAdvertising = () => <GeoLandingPage config={config as any} />;
export default DelhiBillboardAdvertising;
