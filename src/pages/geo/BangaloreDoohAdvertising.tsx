import GeoLandingPage from "@/components/geo/GeoLandingPage";

const PAGE_URL = "https://bizex4u.com/bangalore-dooh-advertising";

const config = {
  pageUrl: PAGE_URL,
  metaTitle: "Bangalore DOOH Advertising — Digital OOH Screens | BIZEX4U",
  metaDescription: "Run DOOH campaigns across Bangalore. Forum Mall, Orion Mall, Indiranagar, ORR, Electronic City screens — tech-affluent audience. Cash or barter with BIZEX4U.",
  heroTitle: "Bangalore DOOH Advertising",
  heroHighlight: "Bangalore",
  heroSubtitle: "Bangalore's DOOH network spans India's Silicon Valley — premium mall screens in Indiranagar and Koramangala, Outer Ring Road LED hoardings passing tech campuses, and Electronic City digital panels. Dynamic targeting for a tech-affluent, digitally active audience.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "DOOH Advertising", href: "/dooh-advertising" },
    { label: "Bangalore DOOH" },
  ],
  metrics: [
    { value: "400+", label: "DOOH Screens" },
    { value: "Tech Hub", label: "Audience" },
    { value: "ORR + MG Rd", label: "Key Corridors" },
    { value: "Dynamic", label: "Creative Control" },
  ],
  benefitsTitle: "Why Bangalore DOOH delivers for tech and D2C brands",
  benefitsSubtitle: "Bangalore's digitally native audience responds to dynamic, contextually relevant DOOH creative better than any other Indian city.",
  benefits: [
    { icon: "📱", title: "Digitally native audience", description: "Bangalore's tech professionals are hyper-aware of digital advertising — DOOH's high-resolution, dynamic creative commands attention in their environment." },
    { icon: "🏙️", title: "Premium urban corridors", description: "Outer Ring Road, MG Road, Indiranagar and Koramangala carry Bangalore's highest-income daily traffic — aspirational consumers for every category." },
    { icon: "🎨", title: "Creative impact at scale", description: "DOOH's dynamic capability allows contextual messaging — target Swiggy users near restaurant zones, startup employees near tech parks, or gym-goers near fitness clusters." },
    { icon: "🔄", title: "Real-time campaign updates", description: "Update Bangalore DOOH creative instantly — respond to local events (IPL matches, tech conferences, monsoon), competitor activity or brand moments." },
  ],
  inventoryTitle: "Bangalore DOOH screen locations",
  inventorySubtitle: "Digital screens across Bangalore's premium malls, tech corridors and high-traffic road networks.",
  inventory: [
    { title: "Forum & Orion Mall Screens", description: "Premium in-mall digital screens at Bangalore's flagship malls — Forum Koramangala, Orion Rajajinagar, Phoenix Marketcity. High-dwell retail audiences.", tags: ["Mall", "Premium", "Retail"] },
    { title: "Outer Ring Road LED Hoardings", description: "Large LED hoardings along ORR — passing Marathahalli, Whitefield, Electronic City and connecting Bangalore's major tech campuses.", tags: ["ORR", "Tech Audience"] },
    { title: "Indiranagar & Koramangala Screens", description: "DOOH panels in Bangalore's trendiest neighbourhoods — cafes, coworking spaces, retail strips. Ideal for D2C, fintech, lifestyle and F&B brands.", tags: ["Indiranagar", "D2C Friendly"] },
    { title: "Electronic City & Whitefield Digital", description: "Panels at the heart of Bangalore's two largest IT clusters — reaching engineers, product managers and corporate employees on their campus commute.", tags: ["IT Cluster", "Corporate"] },
    { title: "Namma Metro Station Screens", description: "DOOH screens at Bangalore Metro stations — Green and Purple line coverage reaching daily commuters across the city.", tags: ["Metro", "Transit"] },
    { title: "Airport Road & Bellary Road", description: "High-traffic arterials connecting Bangalore to the airport — reaching business travellers and north Bangalore's premium residential zones.", tags: ["Airport Road", "Premium"] },
  ],
  faqs: [
    { question: "How much does DOOH advertising cost in Bangalore?", answer: "Bangalore DOOH starts from ₹60,000 per month for secondary mall or transit screens. ORR LED hoardings and Forum/Orion mall packages range from ₹2–8 lakh per month. Premium Indiranagar and Koramangala screens are ₹1–4 lakh per month." },
    { question: "Which Bangalore DOOH locations are best for D2C brands?", answer: "Indiranagar, Koramangala and HSR Layout screens perform best for D2C brands — these areas have the highest concentration of brand-aware, digitally active 22–35 consumers in Bangalore." },
    { question: "Is Bangalore DOOH available through barter?", answer: "Yes. Select Bangalore DOOH networks accept barter for consumer goods, D2C, tech accessories, FMCG and lifestyle brands. BIZEX4U structures barter agreements with screen operators across the city." },
    { question: "Can I target Bangalore's tech professionals with DOOH?", answer: "Yes. ORR LED hoardings, Electronic City and Whitefield digital panels directly reach Bangalore's tech professional audience on their daily campus commute." },
    { question: "How does Bangalore DOOH compare to Bangalore OOH hoardings?", answer: "DOOH offers dynamic creative, dayparting and real-time control — better for time-sensitive or contextual campaigns. Static hoardings offer 24/7 fixed presence at lower cost. Most effective campaigns combine both." },
  ],
  ctaTitle: "Plan your Bangalore DOOH campaign",
  ctaSubtitle: "Tell us your target zones and creative approach — we'll map the optimal Bangalore digital screens.",
  ctaLabel: "Get Bangalore DOOH Rates",
  relatedServices: [
    { label: "All DOOH Advertising", href: "/dooh-advertising" },
    { label: "Gurgaon DOOH", href: "/gurgaon-dooh-advertising" },
    { label: "Bangalore Airport", href: "/airport-advertising-bangalore" },
    { label: "Outdoor Advertising", href: "/outdoor-advertising" },
    { label: "Metro Branding", href: "/metro-branding" },
  ],
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bizex4u.com/" },
        { "@type": "ListItem", position: 2, name: "DOOH Advertising", item: "https://bizex4u.com/dooh-advertising" },
        { "@type": "ListItem", position: 3, name: "Bangalore DOOH", item: PAGE_URL },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "BIZEX4U — Bangalore DOOH Advertising",
      description: "Bangalore digital OOH advertising agency. Mall screens, ORR LED, Indiranagar, Koramangala, Electronic City panels.",
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
        { "@type": "Question", name: "How much does DOOH advertising cost in Bangalore?", acceptedAnswer: { "@type": "Answer", text: "Entry-level screens start from ₹60,000 per month. ORR LED hoardings and mall packages range from ₹2–8 lakh per month." } },
        { "@type": "Question", name: "Is Bangalore DOOH available through barter?", acceptedAnswer: { "@type": "Answer", text: "Yes. Select Bangalore DOOH networks accept barter for consumer goods, D2C, tech accessories, FMCG and lifestyle brands." } },
      ],
    },
  ],
} as const;

const BangaloreDoohAdvertising = () => <GeoLandingPage config={config as any} />;
export default BangaloreDoohAdvertising;
