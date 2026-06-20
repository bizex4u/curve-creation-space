import GeoLandingPage from "@/components/geo/GeoLandingPage";

const PAGE_URL = "https://bizex4u.com/mumbai-metro-advertising";

const config = {
  pageUrl: PAGE_URL,
  metaTitle: "Mumbai Metro Advertising — Line 1 2A 7 Campaigns | BIZEX4U",
  metaDescription: "Advertise on Mumbai Metro across Line 1, 2A and 7. Station panels, train branding and DOOH — reaching Mumbai's urban professionals. Cash, barter or hybrid.",
  heroTitle: "Mumbai Metro Advertising",
  heroHighlight: "Mumbai Metro",
  heroSubtitle: "Mumbai Metro is expanding rapidly — covering the city's densest commercial and residential corridors across Line 1 (Versova–Ghatkopar), Line 2A (Dahisar–D.N. Nagar) and Line 7 (Andheri–Dahisar). A fast-growing captive audience for urban brands.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Metro Branding", href: "/metro-branding" },
    { label: "Mumbai Metro" },
  ],
  metrics: [
    { value: "5L+", label: "Daily Passengers" },
    { value: "3", label: "Operational Lines" },
    { value: "60+", label: "Stations" },
    { value: "Growing", label: "Network Fast" },
  ],
  benefitsTitle: "Why Mumbai Metro advertising works",
  benefitsSubtitle: "Mumbai Metro covers the city's highest-density commercial corridors — reaching working professionals on their daily commute.",
  benefits: [
    { icon: "🏙️", title: "High-density urban corridors", description: "Line 1 covers Versova–Ghatkopar — one of Mumbai's most commercially active east–west routes, connecting film industry, tech and finance clusters." },
    { icon: "📱", title: "Digitally active audience", description: "Mumbai Metro passengers are predominantly 22–45 urban professionals — the core audience for D2C, fintech, OTT, fashion and lifestyle brands." },
    { icon: "🚀", title: "Rapidly growing network", description: "Mumbai Metro's network is expanding with multiple new lines under construction — early advertisers build brand familiarity as the network grows." },
    { icon: "🎯", title: "Corridor-specific targeting", description: "Each metro line covers distinct catchment areas — target Andheri-Borivali professionals on Line 2A/7 or the eastern corridor on Line 1." },
  ],
  inventoryTitle: "Mumbai Metro advertising formats",
  inventorySubtitle: "Static and digital formats across all three operational metro lines.",
  inventory: [
    { title: "Line 1 Platform Panels", description: "Versova–Ghatkopar backlit panels — covering Mumbai's busiest east–west metro corridor with strong retail, entertainment and residential catchment.", tags: ["Line 1", "High Volume"] },
    { title: "Line 2A Panels (Dahisar–DN Nagar)", description: "Western suburban corridor connecting high-density residential areas to the western expressway and commercial hubs.", tags: ["Line 2A", "Western Suburbs"] },
    { title: "Line 7 Panels (Andheri–Dahisar)", description: "North Mumbai corridor — Andheri, Jogeshwari, Goregaon, Malad, Kandivali, Borivali and Dahisar. High-income western suburb residents.", tags: ["Line 7", "North Mumbai"] },
    { title: "Train Exterior Branding", description: "Full train wraps on Mumbai Metro rolling stock — your brand visible across every station on the route. Maximum network reach.", tags: ["Train Wrap", "Network Wide"] },
    { title: "Station Concourse Displays", description: "Lightboxes and digital screens at Mumbai Metro station concourses — seen by all entering and exiting passengers.", tags: ["Concourse", "All Stations"] },
    { title: "Train Interior Panels", description: "Interior coach panels — captive audience for the full journey duration. Ideal for app downloads, QR-code campaigns and direct-response.", tags: ["Interior", "Direct Response"] },
  ],
  faqs: [
    { question: "How much does Mumbai Metro advertising cost?", answer: "Mumbai Metro advertising starts from ₹2–5 lakh per month for single-line platform panel campaigns. Station dominations at key interchanges like Andheri range from ₹8–25 lakh per month. Train wraps are quoted per route and duration." },
    { question: "Which Mumbai Metro line has the most passengers?", answer: "Line 1 (Versova–Ghatkopar) is currently the highest-volume line. Lines 2A and 7 are growing rapidly as they serve the expanding western suburban residential and commercial catchment." },
    { question: "Can Mumbai Metro advertising be done through barter?", answer: "Yes. Mumbai Metro advertising is barter-eligible for select formats. We have run barter campaigns for FMCG, D2C, lifestyle and consumer electronics brands on Mumbai Metro lines." },
    { question: "Is Mumbai Metro a good medium for D2C brands?", answer: "Excellent. Mumbai Metro passengers are digitally active 22–40 urban professionals — core D2C buyers. Train interior panels with QR codes are particularly effective for driving app installs and direct conversions." },
    { question: "How does Mumbai Metro compare to Mumbai outdoor hoardings?", answer: "Metro delivers higher frequency per individual at lower entry cost than Mumbai OOH. Outdoor hoardings offer broader geographic reach and higher stature. A combined metro + OOH strategy typically outperforms either alone." },
  ],
  ctaTitle: "Plan your Mumbai Metro campaign",
  ctaSubtitle: "Tell us your target corridors and audience — we'll build the optimal Mumbai Metro media plan.",
  ctaLabel: "Get Mumbai Metro Proposal",
  relatedServices: [
    { label: "All Metro Branding", href: "/metro-branding" },
    { label: "Delhi Metro Advertising", href: "/delhi-metro-advertising" },
    { label: "Mumbai Airport", href: "/airport-advertising-mumbai" },
    { label: "DOOH Advertising", href: "/dooh-advertising" },
    { label: "Outdoor Advertising", href: "/outdoor-advertising" },
  ],
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bizex4u.com/" },
        { "@type": "ListItem", position: 2, name: "Metro Branding", item: "https://bizex4u.com/metro-branding" },
        { "@type": "ListItem", position: 3, name: "Mumbai Metro", item: PAGE_URL },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "BIZEX4U — Mumbai Metro Advertising",
      description: "Mumbai Metro advertising agency. Station panels, train branding and DOOH across Line 1, 2A and 7 — cash, barter or hybrid.",
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
        { "@type": "Question", name: "How much does Mumbai Metro advertising cost?", acceptedAnswer: { "@type": "Answer", text: "Single-line platform panel campaigns start from ₹2–5 lakh per month. Station dominations at key interchanges range from ₹8–25 lakh per month." } },
        { "@type": "Question", name: "Can Mumbai Metro advertising be done through barter?", acceptedAnswer: { "@type": "Answer", text: "Yes. Mumbai Metro is barter-eligible for select formats. BIZEX4U has run barter campaigns for FMCG, D2C, lifestyle and consumer electronics brands." } },
      ],
    },
  ],
} as const;

const MumbaiMetroAdvertising = () => <GeoLandingPage config={config as any} />;
export default MumbaiMetroAdvertising;
