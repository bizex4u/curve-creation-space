import GeoLandingPage from "@/components/geo/GeoLandingPage";

const PAGE_URL = "https://bizex4u.com/delhi-metro-advertising";

const config = {
  pageUrl: PAGE_URL,
  metaTitle: "Delhi Metro Advertising — DMRC Station & Train Branding | BIZEX4U",
  metaDescription: "Advertise on Delhi Metro with BIZEX4U. Platform panels, train wraps, station dominations and DOOH across DMRC's 390+ stations. Cash, barter or hybrid.",
  heroTitle: "Delhi Metro Advertising",
  heroHighlight: "Delhi Metro",
  heroSubtitle: "DMRC carries 60 lakh+ passengers daily across 390+ stations and 286 km of network. Reach urban Delhi's working population — 25–45, employed, aspirational — with formats that command attention through the daily commute.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Metro Branding", href: "/metro-branding" },
    { label: "Delhi Metro" },
  ],
  metrics: [
    { value: "60L+", label: "Daily Passengers" },
    { value: "390+", label: "Stations" },
    { value: "286 km", label: "Network" },
    { value: "12", label: "Metro Lines" },
  ],
  benefitsTitle: "Why Delhi Metro advertising works",
  benefitsSubtitle: "Delhi Metro is India's largest metro network — a captive, commuting audience with unmatched daily reach and frequency.",
  benefits: [
    { icon: "🚇", title: "India's largest metro network", description: "DMRC's 390+ stations across 12 lines cover Central Delhi, NCR and key suburban corridors — reaching every economic pocket of India's capital." },
    { icon: "🔄", title: "Daily frequency", description: "Commuters use the same route every weekday — giving your brand repeated, high-frequency exposure to the same individual over a campaign month." },
    { icon: "👥", title: "Urban aspirational audience", description: "Delhi Metro passengers are 25–45 urban working adults — employed, digitally active and in the sweet spot for FMCG, lifestyle, finance and D2C brands." },
    { icon: "💰", title: "Cost-efficient reach", description: "Delhi Metro advertising delivers among the lowest CPM of any high-income urban media format — especially when bought through barter inventory." },
  ],
  inventoryTitle: "Delhi Metro advertising formats",
  inventorySubtitle: "From full station takeovers to targeted platform panels — DMRC offers formats for every budget.",
  inventory: [
    { title: "Platform Panels & Backlits", description: "Static backlit panels on DMRC platforms — seen by every waiting and boarding passenger. Available on all 12 lines across 390+ stations.", tags: ["High Volume", "All Lines"] },
    { title: "Train Wraps", description: "Full exterior train branding — your creative covers the entire train body and is seen across every station the train stops at. Maximum network reach.", tags: ["High Impact", "Mobile"] },
    { title: "Station Domination", description: "Take over an entire station — concourse, fare gates, platforms and corridors branded under a single campaign theme. Best for launches.", tags: ["Exclusive", "Launch"] },
    { title: "Concourse Displays", description: "Large-format lightboxes and DOOH screens in station concourses — visible to all passengers entering and exiting the station.", tags: ["Concourse", "DOOH"] },
    { title: "Train Interior Panels", description: "Panels inside metro coaches — captive passengers with no phone signal on underground sections mean 8–25 minutes of direct brand exposure.", tags: ["Interior", "Captive"] },
    { title: "Fare Gate Branding", description: "Vinyl branding on fare gate barriers — seen at close range by 100% of entering and exiting passengers. Ideal for brand recall builds.", tags: ["Fare Gate", "100% Reach"] },
  ],
  faqs: [
    { question: "How much does Delhi Metro advertising cost?", answer: "Delhi Metro advertising costs vary by format. Platform panel campaigns for a single line start from ₹3–8 lakh per month. Station dominations at major interchange stations (Rajiv Chowk, Kashmere Gate, Hauz Khas) range from ₹15–40 lakh. Train wraps are priced on route and duration." },
    { question: "Which Delhi Metro line gets the most passengers?", answer: "The Yellow Line (Samaypur Badli–Huda City Centre) and Blue Line (Dwarka Sector 21–Vaishali/Noida) are the highest-volume corridors. Rajiv Chowk interchange is the single busiest station. We recommend these for maximum reach campaigns." },
    { question: "Can Delhi Metro advertising be purchased through barter?", answer: "Yes. DMRC is barter-eligible for select formats. BIZEX4U has run barter campaigns on Delhi Metro for FMCG, beverages, consumer goods and lifestyle brands. We handle all negotiations with DMRC's advertising concessionaires." },
    { question: "What is a station domination at Delhi Metro?", answer: "A station domination means you brand every ad format within a single station — platforms, concourse, fare gates and corridors — under a single campaign creative. Rajiv Chowk and Kashmere Gate dominations are especially impactful for launches and brand awareness." },
    { question: "How does Delhi Metro advertising compare to outdoor hoarding?", answer: "Metro advertising delivers higher frequency per individual (same commuters daily) at lower entry cost than prime Delhi OOH. It works better for frequency-dependent categories — FMCG, apps, finance — while outdoor works better for brand stature and awareness." },
    { question: "What is the minimum booking duration for Delhi Metro?", answer: "Minimum campaign duration at DMRC is typically 30 days. Month-long campaigns on high-volume lines build meaningful recall. We recommend 60–90 day flights for sustained awareness builds." },
  ],
  ctaTitle: "Plan your Delhi Metro campaign",
  ctaSubtitle: "Tell us your line preference, target audience and budget — we'll map the optimal DMRC inventory.",
  ctaLabel: "Get Delhi Metro Proposal",
  relatedServices: [
    { label: "All Metro Branding", href: "/metro-branding" },
    { label: "Mumbai Metro Advertising", href: "/mumbai-metro-advertising" },
    { label: "Delhi Billboard Advertising", href: "/delhi-billboard-advertising" },
    { label: "DOOH Advertising", href: "/dooh-advertising" },
    { label: "Barter Advertising", href: "/barter-advertising" },
  ],
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bizex4u.com/" },
        { "@type": "ListItem", position: 2, name: "Metro Branding", item: "https://bizex4u.com/metro-branding" },
        { "@type": "ListItem", position: 3, name: "Delhi Metro", item: PAGE_URL },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "BIZEX4U — Delhi Metro Advertising",
      description: "Delhi Metro advertising agency. DMRC platform panels, train wraps, station dominations — cash, barter or hybrid.",
      url: PAGE_URL,
      areaServed: [
        { "@type": "City", name: "Delhi" },
        { "@type": "City", name: "Gurgaon" },
        { "@type": "City", name: "Noida" },
      ],
      address: { "@type": "PostalAddress", addressLocality: "Delhi", addressCountry: "IN" },
      telephone: "+91-80905-00009",
      email: "yash@bizex4u.com",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "How much does Delhi Metro advertising cost?", acceptedAnswer: { "@type": "Answer", text: "Platform panel campaigns for a single line start from ₹3–8 lakh per month. Station dominations at major interchanges range from ₹15–40 lakh." } },
        { "@type": "Question", name: "Can Delhi Metro advertising be purchased through barter?", acceptedAnswer: { "@type": "Answer", text: "Yes. DMRC is barter-eligible for select formats. BIZEX4U has run barter campaigns for FMCG, beverages, consumer goods and lifestyle brands." } },
      ],
    },
  ],
} as const;

const DelhiMetroAdvertising = () => <GeoLandingPage config={config as any} />;
export default DelhiMetroAdvertising;
