import GeoLandingPage from "@/components/geo/GeoLandingPage";

const PAGE_URL = "https://bizex4u.com/gurgaon-dooh-advertising";

const config = {
  pageUrl: PAGE_URL,
  metaTitle: "Gurgaon DOOH Advertising — Digital OOH Screens | BIZEX4U",
  metaDescription: "Run DOOH campaigns on digital screens across Gurgaon. Mall screens, LED hoardings, Cyber City digital panels — dynamic creative, dayparting. Cash or barter.",
  heroTitle: "Gurgaon DOOH Advertising",
  heroHighlight: "Gurgaon",
  heroSubtitle: "Gurgaon has India's densest concentration of premium DOOH screens outside airports — mall screens, Cyber City digital panels, NH48 LED hoardings and luxury retail digital formats. Dynamic creative, dayparting and real-time campaign control for India's most affluent corporate city.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "DOOH Advertising", href: "/dooh-advertising" },
    { label: "Gurgaon DOOH" },
  ],
  metrics: [
    { value: "500+", label: "DOOH Screens" },
    { value: "Dayparting", label: "Available" },
    { value: "SEC-A", label: "Dominant Audience" },
    { value: "Real-time", label: "Campaign Control" },
  ],
  benefitsTitle: "Why Gurgaon DOOH works for premium brands",
  benefitsSubtitle: "Gurgaon's corporate audience demands precision — DOOH's dynamic targeting and dayparting capabilities align perfectly.",
  benefits: [
    { icon: "🎯", title: "Dayparting precision", description: "Target morning commuters on NH48, lunch-hour shoppers at DLF Malls and evening drive-time traffic with daypart-specific creative rotations." },
    { icon: "📺", title: "Dynamic creative capability", description: "Update creative in real time — localise messaging, respond to weather, events or trending moments. No print production costs." },
    { icon: "🏢", title: "Cyber City corporate cluster", description: "Digital panels inside and outside Gurgaon's Cyber City complex reach India's highest concentration of senior corporate decision-makers." },
    { icon: "🛍️", title: "Mall screen dominance", description: "DLF Mall of India, Ambience Mall and MGF Metropolitan offer high-dwell DOOH screens reaching Gurgaon's premium retail audience." },
  ],
  inventoryTitle: "Gurgaon DOOH screen locations",
  inventorySubtitle: "Premium digital screens across Gurgaon's malls, corporate zones and key road corridors.",
  inventory: [
    { title: "DLF & Ambience Mall Screens", description: "In-mall DOOH screens at DLF Mega Mall, DLF Courtyard and Ambience Mall — reaching high-spending retail audiences.", tags: ["Mall", "Retail", "Premium"] },
    { title: "Cyber City Digital Panels", description: "Large LED and DOOH panels inside Gurgaon's Cyber City complex — directly in front of major corporate campuses.", tags: ["Corporate", "B2B"] },
    { title: "NH48 LED Hoardings", description: "Digital LED hoardings along the Delhi–Gurgaon Expressway — daypart targeting for morning and evening commuters.", tags: ["NH48", "Daypart"] },
    { title: "Golf Course Road Digital", description: "DOOH screens along Golf Course Road — one of Gurgaon's most affluent commercial corridors.", tags: ["Premium", "Commercial"] },
    { title: "Multiplex & Entertainment Screens", description: "Digital screens in PVR, INOX and CGR multiplexes across Gurgaon — pre-show and lobby advertising for entertainment-going audiences.", tags: ["Multiplex", "Entertainment"] },
    { title: "Metro Feeder & Transit Points", description: "DOOH screens at rapid metro stations, auto stands and bus stops — targeting commuters in the last-mile transit zone.", tags: ["Transit", "Commuters"] },
  ],
  faqs: [
    { question: "How much does DOOH advertising cost in Gurgaon?", answer: "Gurgaon DOOH starts from ₹75,000 per month for secondary screen slots. Mall screen packages at DLF or Ambience range from ₹2–8 lakh per month. Cyber City and NH48 LED hoardings range from ₹3–12 lakh per month. Contact us for a rate card." },
    { question: "Can I use dayparting on Gurgaon DOOH screens?", answer: "Yes. Most Gurgaon DOOH networks support dayparting — you can target morning commuters, lunch-hour mall visitors, office-hours corporate audience and evening drive-time traffic with different creative executions." },
    { question: "Is Gurgaon DOOH available through barter?", answer: "Yes, select Gurgaon DOOH networks accept barter for premium consumer goods, FMCG, electronics and lifestyle brands. BIZEX4U structures barter agreements with screen network operators." },
    { question: "What creative formats are needed for Gurgaon DOOH?", answer: "Most Gurgaon DOOH screens require 16:9 or 9:16 ratio video or static content at 1920x1080 or higher resolution. Roadside hoardings may have custom dimensions. We provide format specs for every screen network in the plan." },
    { question: "How does Gurgaon DOOH compare to Gurgaon static hoardings?", answer: "DOOH allows dynamic creative, dayparting and real-time updates — higher creative impact but typically higher CPM. Static hoardings offer 24/7 fixed presence at lower cost. Combined campaigns typically outperform either alone." },
  ],
  ctaTitle: "Plan your Gurgaon DOOH campaign",
  ctaSubtitle: "Tell us your target audience and creative approach — we'll map the best Gurgaon digital screens.",
  ctaLabel: "Get Gurgaon DOOH Rates",
  relatedServices: [
    { label: "All DOOH Advertising", href: "/dooh-advertising" },
    { label: "Bangalore DOOH", href: "/bangalore-dooh-advertising" },
    { label: "Gurgaon Hoardings", href: "/gurgaon-hoardings" },
    { label: "Delhi Metro Advertising", href: "/delhi-metro-advertising" },
    { label: "Airport Advertising Delhi", href: "/airport-advertising-delhi" },
  ],
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bizex4u.com/" },
        { "@type": "ListItem", position: 2, name: "DOOH Advertising", item: "https://bizex4u.com/dooh-advertising" },
        { "@type": "ListItem", position: 3, name: "Gurgaon DOOH", item: PAGE_URL },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "BIZEX4U — Gurgaon DOOH Advertising",
      description: "Gurgaon digital OOH advertising agency. Mall screens, Cyber City panels, NH48 LED — dynamic creative and dayparting.",
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
        { "@type": "Question", name: "How much does DOOH advertising cost in Gurgaon?", acceptedAnswer: { "@type": "Answer", text: "Entry-level DOOH starts from ₹75,000 per month. Mall screens range from ₹2–8 lakh per month. Cyber City and NH48 LED hoardings range from ₹3–12 lakh." } },
        { "@type": "Question", name: "Can I use dayparting on Gurgaon DOOH screens?", acceptedAnswer: { "@type": "Answer", text: "Yes. Most Gurgaon DOOH networks support dayparting for morning commuters, lunch-hour, corporate hours and evening drive-time targeting." } },
      ],
    },
  ],
} as const;

const GurgaonDoohAdvertising = () => <GeoLandingPage config={config as any} />;
export default GurgaonDoohAdvertising;
