import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import BrushHighlight from "@/components/BrushHighlight";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";


const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-neutral-00">
      <Helmet>
        <title>How Cash & Barter Advertising Works | BIZEX4U</title>
        <meta name="description" content="See how BIZEX4U plans, negotiates and executes cash and barter advertising campaigns across India — step by step." />
        <link rel="canonical" href="/how-it-works" />
        <meta property="og:title" content="How Cash & Barter Advertising Works | BIZEX4U" />
        <meta property="og:url" content="/how-it-works" />
      </Helmet>
      <Navbar />
      <PageHeader
        heading={
          <>
            How a BIZEX4U <BrushHighlight delay={400}>campaign</BrushHighlight> runs
          </>
        }
      />
      <ProcessSection />
      
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer showDivider={false} />
    </div>
  );
};

export default HowItWorks;
