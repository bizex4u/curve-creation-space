import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DotPatternBackground from "@/components/DotPatternBackground";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceMetrics from "@/components/services/ServiceMetrics";
import BenefitsSection from "@/components/services/BenefitsSection";
import InventorySection from "@/components/services/InventorySection";
import FundingModels from "@/components/services/FundingModels";
import BrandsSection from "@/components/services/BrandsSection";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import FinalCTA from "@/components/services/FinalCTA";
import type { Breadcrumb } from "@/components/services/ServiceHero";
import type { Metric } from "@/components/services/ServiceMetrics";
import type { Benefit } from "@/components/services/BenefitsSection";
import type { InventoryItem } from "@/components/services/InventorySection";
import type { FAQEntry } from "@/components/services/ServiceFAQ";
import type { RelatedService } from "@/components/services/FinalCTA";

export interface GeoPageConfig {
  pageUrl: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroHighlight?: string;
  heroSubtitle: string;
  breadcrumbs: Breadcrumb[];
  metrics?: Metric[];
  benefitsTitle?: string;
  benefitsSubtitle?: string;
  benefits: Benefit[];
  inventoryTitle?: string;
  inventorySubtitle?: string;
  inventory: InventoryItem[];
  faqTitle?: string;
  faqs: FAQEntry[];
  ctaTitle?: string;
  ctaSubtitle?: string;
  ctaLabel?: string;
  relatedServices?: RelatedService[];
  jsonLd: object[];
  showFundingModels?: boolean;
}

const GeoLandingPage = ({ config }: { config: GeoPageConfig }) => (
  <div className="relative min-h-screen">
    <Helmet>
      <title>{config.metaTitle}</title>
      <meta name="description" content={config.metaDescription} />
      <link rel="canonical" href={config.pageUrl} />
      <meta property="og:title" content={config.metaTitle} />
      <meta property="og:description" content={config.metaDescription} />
      <meta property="og:url" content={config.pageUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://bizex4u.com/og-image.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={config.metaTitle} />
      <meta name="twitter:description" content={config.metaDescription} />
      <meta name="twitter:image" content="https://bizex4u.com/og-image.jpg" />
      {config.jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>
      ))}
    </Helmet>

    <div className="absolute inset-x-0 top-0 tablet:h-[60vh] tablet:min-h-[500px] max-h-[800px] z-0">
      <DotPatternBackground variant="main" />
    </div>

    <div className="relative z-10 flex flex-col">
      <Navbar />
      <div className="container">
        <ServiceHero
          title={config.heroTitle}
          highlightWord={config.heroHighlight}
          subtitle={config.heroSubtitle}
          breadcrumbs={config.breadcrumbs}
        />
      </div>

      <ServiceMetrics metrics={config.metrics} />
      <BenefitsSection
        title={config.benefitsTitle}
        subtitle={config.benefitsSubtitle}
        benefits={config.benefits}
      />
      <InventorySection
        title={config.inventoryTitle}
        subtitle={config.inventorySubtitle}
        items={config.inventory}
      />
      {config.showFundingModels !== false && <FundingModels />}
      <BrandsSection />
      <ServiceFAQ title={config.faqTitle} faqs={config.faqs} />
      <FinalCTA
        title={config.ctaTitle}
        subtitle={config.ctaSubtitle}
        primaryCTALabel={config.ctaLabel}
        relatedServices={config.relatedServices}
      />
      <Footer showDivider={false} />
    </div>
  </div>
);

export default GeoLandingPage;
