import GeoLandingPage from "@/components/geo/GeoLandingPage";

const PAGE_URL = "https://bizex4u.com/airport-advertising-delhi";

const config = {
  pageUrl: PAGE_URL,
  metaTitle: "Airport Advertising Delhi — IGI T1 T2 T3 Campaigns | BIZEX4U",
  metaDescription: "Book airport advertising at Delhi IGI T1, T2 and T3 terminals. Large-format, DOOH, aerobridges, baggage claim — cash, barter or hybrid campaigns.",
  heroTitle: "Airport Advertising at Delhi IGI",
  heroHighlight: "Delhi IGI",
  heroSubtitle: "India's busiest airport sees 70M+ passengers a year. T3 alone reaches premium domestic and international travellers with dwell times exceeding 90 minutes — no other OOH format comes close.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Airport Advertising", href: "/airport-advertising" },
    { label: "Delhi IGI" },
  ],
  metrics: [
    { value: "70M+", label: "Annual Passengers" },
    { value: "3", label: "Terminals" },
    { value: "90 min", label: "Avg Dwell Time" },
    { value: "500+", label: "Ad Formats" },
  ],
  benefitsTitle: "Why Delhi airport advertising works",
  benefitsSubtitle: "Indira Gandhi International Airport is India's largest and busiest — reaching the highest-income traveller segment at scale.",
  benefits: [
    { icon: "✈️", title: "Premium audience", description: "Delhi IGI passengers skew 25–55 SEC-A and SEC-B — frequent flyers, senior executives and international travellers with high disposable income." },
    { icon: "⏱️", title: "Extended dwell time", description: "Passengers spend 90–120 minutes in terminal. That's sustained brand exposure impossible to replicate in transit or OOH formats." },
    { icon: "🌐", title: "International brand halo", description: "Airport context positions your brand alongside global advertisers — enhancing perceived brand stature for premium product categories." },
    { icon: "📍", title: "Journey-stage targeting", description: "Target by gate cluster, terminal, journey stage or floor — domestic departure, international check-in, security hold or arrivals." },
  ],
  inventoryTitle: "Delhi IGI advertising formats",
  inventorySubtitle: "From large-format static at T3 departures to DOOH screens at baggage claim — we cover every touchpoint.",
  inventory: [
    { title: "T3 International Departures", description: "Premium large-format static and DOOH screens at the most-trafficked international terminal. Ideal for luxury, tech, finance and travel brands.", tags: ["Premium", "International"] },
    { title: "T3 Domestic Departures", description: "High-footfall domestic departure area with multiple static panel clusters, digital pillars and gate lounge DOOH screens.", tags: ["High Volume", "Domestic"] },
    { title: "Aerobridges", description: "Vinyl wraps on aerobridges at T2 and T3 — the last brand touchpoint before passengers board. Unmissable, captive format.", tags: ["Exclusive", "High Impact"] },
    { title: "Baggage Claim Banners", description: "Passengers wait 15–25 minutes at baggage claim — overhead banners and lightboxes here have exceptional dwell-weighted impressions.", tags: ["Arrivals", "Captive"] },
    { title: "Security Hold Area", description: "DOOH screens and static panels in security hold — where passengers are stationary and undistracted for 20–40 minutes.", tags: ["DOOH", "Captive"] },
    { title: "Check-in Counters", description: "Lightboxes and static formats above check-in zones — high repeat visibility for the full duration of the check-in queue.", tags: ["T1", "T2", "T3"] },
  ],
  faqs: [
    { question: "How much does Delhi airport advertising cost?", answer: "Entry-level digital screen slots at Delhi T1/T2 start from ₹2–5 lakh per month. Premium T3 large-format static and aerobridge campaigns range from ₹10–50 lakh per month depending on format, location and duration. Contact us for a custom rate card." },
    { question: "Which terminal is best for airport advertising in Delhi?", answer: "T3 is the premium choice — it handles both domestic and international traffic and has the highest-income passenger mix. T2 is being modernised and offers strong domestic reach at lower rates. T1 works for Tier 2 domestic route targeting." },
    { question: "Can Delhi airport advertising be done through barter?", answer: "Yes. Select formats at IGI are barter-eligible. We evaluate your inventory and negotiate with the airport media concessionaire on your behalf. FMCG, hospitality, electronics and consumer goods are commonly accepted." },
    { question: "What is the minimum campaign duration at Delhi IGI?", answer: "Minimum campaigns are typically 30 days. BIZEX4U recommends 60–90 day runs at Delhi IGI for brand awareness — shorter burst campaigns are available for product launches and seasonal activations." },
    { question: "How do I measure reach at Delhi airport?", answer: "We use AAI-published passenger data combined with panel-specific footfall scores and dwell time research. You receive reach, frequency and DEC estimates in your proposal, plus a post-campaign report." },
    { question: "Can I target only international or only domestic passengers at Delhi IGI?", answer: "Yes. Terminal-level targeting allows you to select T3 International exclusively, T3 Domestic, or T1/T2 domestic terminals — aligning format placement with your target traveller profile." },
  ],
  ctaTitle: "Plan your Delhi airport campaign",
  ctaSubtitle: "Tell us your target terminals, budget and campaign objective — we'll build the plan in 24 hours.",
  ctaLabel: "Get Delhi Airport Proposal",
  relatedServices: [
    { label: "All Airport Advertising", href: "/airport-advertising" },
    { label: "Mumbai Airport", href: "/airport-advertising-mumbai" },
    { label: "Bangalore Airport", href: "/airport-advertising-bangalore" },
    { label: "Delhi Metro Advertising", href: "/delhi-metro-advertising" },
    { label: "DOOH Advertising", href: "/dooh-advertising" },
  ],
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bizex4u.com/" },
        { "@type": "ListItem", position: 2, name: "Airport Advertising", item: "https://bizex4u.com/airport-advertising" },
        { "@type": "ListItem", position: 3, name: "Delhi IGI", item: PAGE_URL },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "BIZEX4U — Delhi Airport Advertising",
      description: "Airport advertising agency for Delhi IGI T1, T2 and T3 terminals. Cash, barter and hybrid campaigns.",
      url: PAGE_URL,
      areaServed: { "@type": "City", name: "Delhi" },
      address: { "@type": "PostalAddress", addressLocality: "Delhi", addressCountry: "IN" },
      telephone: "+91-80905-00009",
      email: "yash@bizex4u.com",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "How much does Delhi airport advertising cost?", acceptedAnswer: { "@type": "Answer", text: "Entry-level digital screen slots at Delhi T1/T2 start from ₹2–5 lakh per month. Premium T3 large-format static and aerobridge campaigns range from ₹10–50 lakh per month." } },
        { "@type": "Question", name: "Which terminal is best for airport advertising in Delhi?", acceptedAnswer: { "@type": "Answer", text: "T3 is the premium choice handling both domestic and international traffic. T2 offers strong domestic reach at lower rates. T1 works for Tier 2 domestic route targeting." } },
        { "@type": "Question", name: "Can Delhi airport advertising be done through barter?", acceptedAnswer: { "@type": "Answer", text: "Yes. Select formats at IGI are barter-eligible. BIZEX4U evaluates your inventory and negotiates with the airport media concessionaire." } },
      ],
    },
  ],
} as const;

const AirportAdvertisingDelhi = () => <GeoLandingPage config={config as any} />;
export default AirportAdvertisingDelhi;
