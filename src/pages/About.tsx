import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import BrushHighlight from "@/components/BrushHighlight";
import PhotoTicker from "@/components/PhotoTicker";
import MetricsSection from "@/components/MetricsSection";
import TeamSection from "@/components/TeamSection";
import CTASection from "@/components/CTASection";
import circleVideo from "@/assets/Circle_of_Conversation.mp4";
import LazyVideo from "@/components/ui/LazyVideo";

const AboutVideo = () => (
  <LazyVideo src={circleVideo} className="w-full h-full" />
);

const About = () => {
  return (
    <div className="min-h-screen bg-neutral-00">
      <Helmet>
        <title>About BIZEX4U — India's Barter & Advertising Agency</title>
        <meta name="description" content="Meet BIZEX4U — India's full-service advertising and barter media agency planning cash and trade campaigns across the country." />
        <link rel="canonical" href="https://bizex4u.com/about" />
        <meta property="og:title" content="About BIZEX4U — India's Barter & Advertising Agency" />
        <meta property="og:description" content="Meet BIZEX4U — India's full-service advertising and barter media agency planning cash and trade campaigns across the country." />
        <meta property="og:url" content="https://bizex4u.com/about" />
        <meta property="og:image" content="https://bizex4u.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About BIZEX4U — India's Barter & Advertising Agency" />
        <meta name="twitter:description" content="Meet BIZEX4U — India's full-service advertising and barter media agency planning cash and trade campaigns across the country." />
        <meta name="twitter:image" content="https://bizex4u.com/og-image.jpg" />
      </Helmet>
      <Navbar />
      <PageHeader
        heading={
          <>
            BIZEX4U is the agency built for{" "}
            <BrushHighlight delay={400}>cash</BrushHighlight>{" "}
            <em>and</em>{" "}
            <BrushHighlight delay={600}>barter</BrushHighlight>{" "}
            campaigns
          </>
        }
        media={<AboutVideo />}
        aspectRatio="16:9"

      >
        {/* Photo Ticker - Full width, 40px below illustration on mobile/tablet, 64px on desktop */}
        <div className="mt-10 desktop:mt-16">
          <PhotoTicker />
        </div>
        
        {/* Metrics Section */}
        <div className="container mt-10 desktop:mt-16">
          <MetricsSection />
        </div>
      </PageHeader>
      
      {/* Team Section */}
      <div className="container section">
        <TeamSection />
      </div>
      
      <CTASection />
      <Footer showDivider={false} />
    </div>
  );
};

export default About;
