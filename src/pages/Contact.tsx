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
        <meta name="description" content="Connect with BIZEX4U to plan barter, cash or hybrid advertising campaigns across India. Request a customised media plan from our strategists today." />
        <link rel="canonical" href="https://bizex4u.com/contact" />
        <meta property="og:title" content="Contact BIZEX4U — Plan Your Campaign" />
        <meta property="og:description" content="Contact BIZEX4U to plan your next cash or barter advertising campaign across India." />
        <meta property="og:url" content="https://bizex4u.com/contact" />
        <meta property="og:image" content="https://bizex4u.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact BIZEX4U — Plan Your Campaign" />
        <meta name="twitter:description" content="Contact BIZEX4U to plan your next cash or barter advertising campaign across India." />
        <meta name="twitter:image" content="https://bizex4u.com/og-image.jpg" />
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
