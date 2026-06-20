import GeoLandingPage from "@/components/geo/GeoLandingPage";

const PAGE_URL = "https://bizex4u.com/advertising-for-fmcg-brands";

const config = {
  pageUrl: PAGE_URL,
  metaTitle: "Advertising for FMCG Brands India — OOH, Barter & Media Buying | BIZEX4U",
  metaDescription: "FMCG advertising agency in India. OOH, transit, cinema, radio and barter campaigns across 40+ cities. Convert surplus FMCG stock into nationwide media reach.",
  heroTitle: "Advertising for FMCG Brands",
  heroHighlight: "FMCG",
  heroSubtitle: "FMCG brands sit on surplus inventory every season — slow-moving SKUs, near-expiry stock, overproduced variants. BIZEX4U turns that inventory into national advertising across OOH, metro, airport, cinema and radio — converting cost-of-carry into brand-building reach.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Barter Advertising", href: "/barter-advertising" },
    { label: "FMCG Brands" },
  ],
  metrics: [
    { value: "₹150Cr+", label: "FMCG Barter Value" },
    { value: "40+", label: "Cities" },
    { value: "6+", label: "Media Channels" },
    { value: "Zero", label: "Cash Outlay Possible" },
  ],
  benefitsTitle: "Why FMCG brands choose BIZEX4U",
  benefitsSubtitle: "FMCG brands have inventory — we turn inventory into media. Cash, barter or a hybrid split that maximises every rupee of marketing ROI.",
  benefits: [
    { icon: "📦", title: "Surplus inventory → media", description: "Convert slow-moving SKUs, near-expiry products and overstock into OOH, metro, airport, cinema and radio advertising without cash outlay." },
    { icon: "🌏", title: "National reach in 40+ cities", description: "BIZEX4U executes FMCG campaigns across 40+ Indian cities simultaneously — coordinated media buying across OOH, transit, mall and cinema." },
    { icon: "📊", title: "ROI-driven planning", description: "We build FMCG media plans around sell-out data, distribution geography and retail seasonality — not generic rate cards." },
    { icon: "⚡", title: "Fast campaign activation", description: "FMCG campaigns are time-sensitive. BIZEX4U activates within 2 weeks of brief — faster than any traditional agency for barter-led campaigns." },
  ],
  inventoryTitle: "Media channels for FMCG brands",
  inventorySubtitle: "Every channel available cash, barter or hybrid — built around FMCG distribution and consumer touchpoints.",
  inventory: [
    { title: "Outdoor Hoardings & Unipoles", description: "National OOH campaigns across 40+ cities — timed to product launches, seasonal pushes and distribution expansion in new geographies.", tags: ["OOH", "National", "Barter"] },
    { title: "Transit — Metro & Bus", description: "Delhi Metro, Mumbai Metro, BMRCL and bus shelter advertising — mass urban reach aligned with FMCG retail distribution footprint.", tags: ["Metro", "Transit", "Urban"] },
    { title: "Cinema Advertising", description: "In-film advertising, pre-show spots and foyer branding in single screens and multiplex chains — national or regional targeting by chain.", tags: ["Cinema", "Barter-eligible"] },
    { title: "Radio — AM & FM", description: "Radio advertising across 50+ Indian cities on FM stations — high-frequency brand recall builds aligned with retail availability.", tags: ["Radio", "Reach"] },
    { title: "Airport Advertising", description: "Premium airport advertising for FMCG SKUs targeting frequent flyers and gifting occasions — travel retail adjacent reach.", tags: ["Airport", "Premium"] },
    { title: "DOOH — Malls & Transit Hubs", description: "Mall screen DOOH reaching FMCG retail purchase moments — shoppers, in-store proximity and retail discovery campaigns.", tags: ["DOOH", "Mall", "Retail"] },
  ],
  faqs: [
    { question: "How does barter advertising work for FMCG brands?", answer: "FMCG brands provide their surplus stock or slow-moving inventory to BIZEX4U. We value it at an agreed rate (MRP or market price) and exchange it with media owners for advertising space. The FMCG brand gets advertising, and the media owner gets products they can use or sell. A formal PO and contract are issued for all barter campaigns." },
    { question: "What types of FMCG inventory are accepted for barter?", answer: "Consumer goods, packaged foods, beverages, personal care, household cleaning, snacks, dairy products and similar FMCG categories are widely accepted. The product must have a measurable retail value and be in date. We evaluate each inventory type on a discovery call." },
    { question: "Can barter campaigns cover OOH across multiple cities?", answer: "Yes. BIZEX4U runs multi-city barter campaigns across 40+ Indian cities — coordinating inventory exchange with multiple OOH operators, transit bodies and media owners simultaneously. Single-contract, single-PO execution." },
    { question: "What barter ratio can FMCG brands expect?", answer: "FMCG barter ratios typically range from 1:1 to 1:1.5 — meaning ₹1 of FMCG inventory exchanges for ₹1–1.5 of media value. Ratio depends on product category, inventory condition and media channel. We disclose all ratios upfront." },
    { question: "Is barter advertising compliant with Indian accounting standards?", answer: "Yes. BIZEX4U issues formal purchase orders and tax invoices for all barter transactions. Barter advertising is a standard commercial practice fully compliant with Indian GAAP and GST regulations when properly documented." },
    { question: "How does BIZEX4U plan FMCG campaigns?", answer: "We start with your distribution map, target consumer profile and seasonal calendar. We then build a media plan that concentrates spend in markets where you have distribution — or where you want to build it. Cash, barter and hybrid options are modelled against your P&L impact targets." },
  ],
  ctaTitle: "Convert your FMCG inventory into advertising",
  ctaSubtitle: "Tell us your inventory type, target markets and campaign objective — we'll build the plan in 48 hours.",
  ctaLabel: "Get FMCG Media Plan",
  relatedServices: [
    { label: "Barter Advertising", href: "/barter-advertising" },
    { label: "Outdoor Advertising", href: "/outdoor-advertising" },
    { label: "Advertising for D2C Brands", href: "/advertising-for-d2c-brands" },
    { label: "Metro Branding", href: "/metro-branding" },
    { label: "How It Works", href: "/how-it-works" },
  ],
  jsonLd: [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://bizex4u.com/" },
        { "@type": "ListItem", position: 2, name: "Barter Advertising", item: "https://bizex4u.com/barter-advertising" },
        { "@type": "ListItem", position: 3, name: "FMCG Brands", item: PAGE_URL },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "How does barter advertising work for FMCG brands?", acceptedAnswer: { "@type": "Answer", text: "FMCG brands provide surplus stock to BIZEX4U. We value it and exchange it with media owners for advertising space. Formal PO and contract issued for all barter campaigns." } },
        { "@type": "Question", name: "What barter ratio can FMCG brands expect?", acceptedAnswer: { "@type": "Answer", text: "FMCG barter ratios typically range from 1:1 to 1:1.5 — ₹1 of inventory exchanges for ₹1–1.5 of media value. Ratio depends on product category and media channel." } },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "BIZEX4U",
      url: "https://bizex4u.com/advertising-for-fmcg-brands",
      description: "FMCG advertising and barter media agency in India. OOH, transit, cinema, radio and barter campaigns across 40+ cities.",
      areaServed: { "@type": "Country", name: "India" },
      address: { "@type": "PostalAddress", addressCountry: "IN" },
    },
  ],
} as const;

const AdvertisingForFmcgBrands = () => <GeoLandingPage config={config as any} />;
export default AdvertisingForFmcgBrands;
