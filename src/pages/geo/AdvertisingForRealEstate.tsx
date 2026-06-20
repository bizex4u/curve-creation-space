import GeoLandingPage from "@/components/geo/GeoLandingPage";

const PAGE_URL = "https://bizex4u.com/advertising-for-real-estate";

const config = {
  pageUrl: PAGE_URL,
  metaTitle: "Real Estate Advertising India — OOH, Airport & Media Buying | BIZEX4U",
  metaDescription: "Real estate advertising agency in India. OOH hoardings, airport ads, metro branding and DOOH campaigns for property developers across Delhi NCR, Mumbai, Bangalore.",
  heroTitle: "Advertising for Real Estate Brands",
  heroHighlight: "Real Estate",
  heroSubtitle: "Real estate buyers research for months before purchase — and they see OOH every day. BIZEX4U plans large-format hoarding campaigns, airport advertising and metro branding for property developers across India's top residential and commercial markets.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Outdoor Advertising", href: "/outdoor-advertising" },
    { label: "Real Estate Advertising" },
  ],
  metrics: [
    { value: "OOH", label: "Primary Channel" },
    { value: "NCR+MMR", label: "Key Markets" },
    { value: "6+ Months", label: "Typical Campaigns" },
    { value: "40+", label: "Cities Covered" },
  ],
  benefitsTitle: "Why OOH advertising works for real estate",
  benefitsSubtitle: "Real estate is a high-consideration, long-duration purchase — OOH's constant, repeated presence builds the brand trust that drives enquiries.",
  benefits: [
    { icon: "🏗️", title: "Long campaign lifespan", description: "Real estate campaigns run 6–18 months through a project launch cycle — OOH's per-month cost makes it far more efficient than digital at sustained campaign lengths." },
    { icon: "📍", title: "Site-proximity targeting", description: "Hoardings within 5 km of a project site reach the most relevant buyer pool — people who already live in or commute through the target neighbourhood." },
    { icon: "✈️", title: "Airport advertising for luxury projects", description: "Premium residential and commercial projects find their buyer in airports — business class travellers, NRI audiences and frequent international business travellers are core real estate buyers." },
    { icon: "🚇", title: "Metro for affordable housing", description: "Metro advertising reaches aspirational, first-time home buyers — the primary audience for affordable and mid-segment housing projects in NCR, MMR and Bangalore." },
  ],
  inventoryTitle: "Media channels for real estate campaigns",
  inventorySubtitle: "Every format from site hoardings to national airport campaigns — planned around project location and buyer profile.",
  inventory: [
    { title: "Site-Adjacent Hoardings", description: "Large-format hoardings within 2–5 km of the project site — reaching walk-in prospects and neighbourhood awareness buyers in the immediate catchment.", tags: ["Site Adjacent", "Local Awareness"] },
    { title: "Expressway Gantries", description: "NH48, Yamuna Expressway, ORR Bangalore and Western Expressway Mumbai — targeting commuters from feeder markets for the project.", tags: ["Expressway", "Commuter Reach"] },
    { title: "Airport Advertising", description: "Delhi, Mumbai and Bangalore airport campaigns for luxury and premium residential projects — NRI audiences, HNWIs and international business professionals.", tags: ["Airport", "Luxury Projects"] },
    { title: "Metro Branding", description: "Delhi Metro and Mumbai Metro for mid-segment and affordable housing — aspirational commuters who are actively saving for their first home.", tags: ["Metro", "Affordable Housing"] },
    { title: "DOOH — City Entry Points", description: "Digital OOH at city entry corridors, toll booths and expressway interchanges — targeting buyers coming from feeder cities to explore project sites.", tags: ["DOOH", "City Entry"] },
    { title: "Print & Newspaper", description: "Full-page newspaper ads in Times of India, HT and TOI real estate supplements — reaching active property seekers on Sunday property pages.", tags: ["Print", "Active Buyers"] },
  ],
  faqs: [
    { question: "What is the best advertising channel for real estate in India?", answer: "OOH hoardings are the backbone of real estate advertising in India — especially large-format gantries on expressways near project sites. Airport advertising works for luxury and NRI-targeting projects. Metro advertising is highly effective for affordable and mid-segment housing. Print (Sunday property supplements) still drives active buyer leads." },
    { question: "How much does real estate advertising cost in India?", answer: "Entry-level OOH hoarding campaigns in Tier 2 cities start from ₹3–8 lakh per month. Delhi NCR and Mumbai prime corridor hoardings range from ₹5–25 lakh per month. Airport campaigns for luxury projects range from ₹10–60 lakh per month depending on airports and formats." },
    { question: "Can real estate advertising use barter?", answer: "Real estate developers are excellent barter partners — developers can offer unsold inventory (flats, commercial units, car parks) in exchange for advertising. BIZEX4U structures real estate barter deals where media owners receive property or property-related services in exchange for advertising space." },
    { question: "How long should a real estate advertising campaign run?", answer: "Minimum campaign duration for real estate is 60–90 days for project launches. Sustained campaigns of 6–12 months are common for long-cycle residential projects with phased launch and possession timelines." },
    { question: "How do I target NRI buyers with real estate advertising?", answer: "Airport advertising at major international airports (Delhi T3, Mumbai T2, Bangalore T2) is the most direct way to reach NRI buyers. We also run campaigns during peak NRI visit seasons (December–January, April–May) at airports and premium transit locations." },
  ],
  ctaTitle: "Plan your real estate campaign",
  ctaSubtitle: "Tell us your project, target buyer profile and launch timeline — we'll build the media plan.",
  ctaLabel: "Get Real Estate Media Plan",
  relatedServices: [
    { label: "Outdoor Advertising", href: "/outdoor-advertising" },
    { label: "Airport Advertising", href: "/airport-advertising" },
    { label: "Metro Branding", href: "/metro-branding" },
    { label: "DOOH Advertising", href: "/dooh-advertising" },
    { label: "Barter Advertising", href: "/barter-advertising" },
  ],
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bizex4u.com/" },
        { "@type": "ListItem", position: 2, name: "Outdoor Advertising", item: "https://bizex4u.com/outdoor-advertising" },
        { "@type": "ListItem", position: 3, name: "Real Estate Advertising", item: PAGE_URL },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What is the best advertising channel for real estate in India?", acceptedAnswer: { "@type": "Answer", text: "OOH hoardings are the backbone of real estate advertising in India. Airport advertising works for luxury projects. Metro advertising is highly effective for affordable and mid-segment housing." } },
        { "@type": "Question", name: "Can real estate advertising use barter?", acceptedAnswer: { "@type": "Answer", text: "Yes. Developers can offer unsold inventory (flats, commercial units) in exchange for advertising. BIZEX4U structures real estate barter deals with media owners." } },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "BIZEX4U",
      url: "https://bizex4u.com/advertising-for-real-estate",
      description: "Real estate advertising agency in India. OOH hoardings, airport, metro and DOOH campaigns for property developers across Delhi NCR, Mumbai and Bangalore.",
      areaServed: [
        { "@type": "City", name: "Delhi" },
        { "@type": "City", name: "Mumbai" },
        { "@type": "City", name: "Bangalore" },
        { "@type": "City", name: "Gurgaon" },
        { "@type": "City", name: "Noida" },
      ],
      address: { "@type": "PostalAddress", addressCountry: "IN" },
    },
  ],
} as const;

const AdvertisingForRealEstate = () => <GeoLandingPage config={config as any} />;
export default AdvertisingForRealEstate;
