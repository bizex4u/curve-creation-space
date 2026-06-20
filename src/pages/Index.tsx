import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import DotPatternBackground from "@/components/DotPatternBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import WhyUsSection from "@/components/WhyUsSection";
import IntegrationSection from "@/components/IntegrationSection";

import BlogSection from "@/components/BlogSection";

import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  const heroFeaturesRef = useRef<HTMLDivElement>(null);
  const [mobileBackgroundHeight, setMobileBackgroundHeight] = useState<number | null>(null);

  useEffect(() => {
    const calculateHeight = () => {
      if (heroFeaturesRef.current && window.innerWidth < 810) {
        const combinedHeight = heroFeaturesRef.current.offsetHeight;
        setMobileBackgroundHeight(combinedHeight * 0.5);
      } else {
        setMobileBackgroundHeight(null);
      }
    };

    calculateHeight();
    window.addEventListener('resize', calculateHeight);
    return () => window.removeEventListener('resize', calculateHeight);
  }, []);

  // Handle initial hash scroll on page load
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="relative min-h-screen">
      <Helmet>
        <title>Advertising & Barter Media Agency India | BIZEX4U</title>
        <meta name="description" content="Advertising & barter media agency in India offering OOH, airport, metro, DOOH and inventory-led campaigns. Plan your next campaign with BIZEX4U today." />
        <link rel="canonical" href="https://bizex4u.com/" />
        <meta property="og:title" content="Advertising & Barter Media Agency India | BIZEX4U" />
        <meta property="og:description" content="BIZEX4U is India's full-service advertising agency for cash and barter campaigns. Outdoor, transit, mall, cinema, radio, print and digital — across 12+ cities." />
        <meta property="og:url" content="https://bizex4u.com/" />
        {/* TODO: replace with actual OG image at https://bizex4u.com/og-image.jpg */}
        <meta property="og:image" content="https://bizex4u.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Advertising & Barter Media Agency India | BIZEX4U" />
        <meta name="twitter:description" content="BIZEX4U is India's full-service advertising agency for cash and barter campaigns. Outdoor, transit, mall, cinema, radio, print and digital — across 12+ cities." />
        <meta name="twitter:image" content="https://bizex4u.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["Organization", "LocalBusiness"],
              "@id": "https://bizex4u.com/#organization",
              name: "BIZEX4U",
              url: "https://bizex4u.com/",
              logo: "https://bizex4u.com/og-image.jpg",
              description: "India's barter and media buying agency — cash, barter and hybrid campaigns across OOH, metro, airport, DOOH, cinema, radio and print in 40+ cities.",
              areaServed: { "@type": "Country", name: "India" },
              address: { "@type": "PostalAddress", addressCountry: "IN" },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-80905-00009",
                contactType: "sales",
                email: "yash@bizex4u.com",
                availableLanguage: ["English", "Hindi"],
              },
              sameAs: [],
              knowsAbout: ["Outdoor Advertising", "Barter Advertising", "Media Buying", "OOH Advertising", "Airport Advertising", "Metro Branding", "DOOH Advertising", "ATL Advertising", "BTL Advertising"],
            },
          ],
        })}</script>
      </Helmet>
      {/* Background layer - dynamic on mobile, CSS-based on tablet/desktop */}
      <div 
        className="absolute inset-x-0 top-0 tablet:h-[80vh] tablet:min-h-[700px] desktop:h-screen desktop:min-h-[800px] max-h-[1024px] z-0"
        style={{ height: mobileBackgroundHeight ? `${mobileBackgroundHeight}px` : undefined }}
      >
        <DotPatternBackground variant="main" />
      </div>

      {/* Content layer - flows naturally */}
      <div className="relative z-10 flex flex-col">
        <Navbar />
        <div className="container">
          <div ref={heroFeaturesRef}>
            <HeroSection />
            <FeaturesSection />
          </div>
          <WhyUsSection />
        </div>
        <IntegrationSection />
        
        <BlogSection />
        <CTASection />
        <Footer showDivider={false} />
      </div>
    </div>
  );
};

export default Index;
