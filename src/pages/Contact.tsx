import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import BrushHighlight from "@/components/BrushHighlight";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-neutral-00">
      <Helmet>
        <title>Contact BIZEX4U — Plan Your Campaign</title>
        <meta name="description" content="Contact BIZEX4U to plan your next cash or barter advertising campaign across India." />
        <link rel="canonical" href="/contact" />
        <meta property="og:title" content="Contact BIZEX4U — Plan Your Campaign" />
        <meta property="og:url" content="/contact" />
      </Helmet>
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
