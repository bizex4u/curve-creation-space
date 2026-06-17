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
import FloatingInstructionsButton from "@/components/FloatingInstructionsButton";
import FloatingLeadPopup from "@/components/FloatingLeadPopup";

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
        <meta name="description" content="BIZEX4U is India's full-service advertising agency for cash and barter campaigns. Outdoor, transit, mall, cinema, radio, print and digital — across 12+ cities." />
        <link rel="canonical" href="/" />
        <meta property="og:title" content="Advertising & Barter Media Agency India | BIZEX4U" />
        <meta property="og:url" content="/" />
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
        <FloatingInstructionsButton />
        <FloatingLeadPopup />
      </div>
    </div>
  );
};

export default Index;
