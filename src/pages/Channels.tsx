import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>Advertising Channels India — OOH, Transit, Mall, Cinema | BIZEX4U</title>
        <meta name="description" content="Explore airport, metro, mall, cinema, DOOH, radio and outdoor advertising channels available through BIZEX4U across India. Book any channel, cash or barter." />
        <link rel="canonical" href="https://bizex4u.com/channels" />
        <meta property="og:title" content="Advertising Channels India — OOH, Transit, Mall, Cinema | BIZEX4U" />
        <meta property="og:description" content="Explore advertising channels BIZEX4U buys across India — OOH, transit, mall, cinema, radio, print and digital." />
        <meta property="og:url" content="https://bizex4u.com/channels" />
        <meta property="og:image" content="https://bizex4u.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Advertising Channels India — OOH, Transit, Mall, Cinema | BIZEX4U" />
        <meta name="twitter:description" content="Explore advertising channels BIZEX4U buys across India — OOH, transit, mall, cinema, radio, print and digital." />
        <meta name="twitter:image" content="https://bizex4u.com/og-image.jpg" />
      </Helmet>
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
