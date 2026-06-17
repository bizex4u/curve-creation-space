import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import BrushHighlight from "@/components/BrushHighlight";
import FeaturesSection from "@/components/FeaturesSection";
import IntegrationSection from "@/components/IntegrationSection";
import CTASection from "@/components/CTASection";

const Channels = () => {
  return (
    <div className="min-h-screen bg-neutral-00">
      <Navbar />
      <PageHeader
        heading={
          <>
            Every <BrushHighlight delay={400}>channel</BrushHighlight> Indian brands actually buy
          </>
        }
      />
      <div className="container">
        <FeaturesSection />
      </div>
      <IntegrationSection />
      <CTASection />
      <Footer showDivider={false} />
    </div>
  );
};

export default Channels;
