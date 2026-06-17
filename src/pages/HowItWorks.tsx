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
