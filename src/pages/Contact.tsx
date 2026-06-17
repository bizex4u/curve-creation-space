import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import BrushHighlight from "@/components/BrushHighlight";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-neutral-00">
      <Navbar />
      <PageHeader
        heading={
          <>
            Let's <BrushHighlight delay={400}>plan</BrushHighlight> your next campaign
          </>
        }
      />
      <ContactSection />
      <Footer showDivider={false} />
    </div>
  );
};

export default Contact;
