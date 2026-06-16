import SectionHeader from "./SectionHeader";
import IntegrationLogosRow from "./IntegrationLogosRow";
import IntegrationLogosTicker from "./IntegrationLogosTicker";
import BrushHighlight from "./BrushHighlight";
import LazyVideo from "./ui/LazyVideo";
import joyfulGirlVideo from "@/assets/Joyful_Girl_with_Wand.mp4";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Import logo images
import logo1 from "@/assets/Fake_Logo_1.svg";
import logo2 from "@/assets/logoipsum-224.png";
import logo3 from "@/assets/logoipsum-331.png";
import logo4 from "@/assets/logoipsum-223.png";
import logo5 from "@/assets/logoipsum-394.png";
import logo6 from "@/assets/logoipsum-329.png";
import logo7 from "@/assets/logoipsum-245.png";
import logo8 from "@/assets/logoipsum-291.png";
import logo9 from "@/assets/Fake_Logo_7.svg";

const IntegrationSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const row1Logos = [
    { src: logo1, alt: "Integration 1", tooltip: "Connect Tool 1 to sync your financial data automatically." },
    { src: logo2, alt: "Integration 2", tooltip: "Connect Tool 2 to display live reports in real-time." },
    { src: logo3, alt: "Integration 3", tooltip: "Connect Tool 3 for seamless payment processing." },
    { src: logo4, alt: "Integration 4", tooltip: "Connect Tool 4 to automate your invoicing workflow." },
    { src: logo5, alt: "Integration 5", tooltip: "Connect Tool 5 to track expenses effortlessly." },
  ];

  const row2Logos = [
    { src: logo6, alt: "Integration 6", tooltip: "Connect Tool 6 to streamline your workflow." },
    { src: logo7, alt: "Integration 7", tooltip: "Connect Tool 7 for advanced analytics insights." },
    { src: logo8, alt: "Integration 8", tooltip: "Connect Tool 8 to manage team collaboration." },
    { src: logo9, alt: "Integration 9", tooltip: "Connect Tool 9 for secure data backup." },
  ];

  return (
    <section 
      ref={ref}
      className="section"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <SectionHeader
          title={<><BrushHighlight>Connect</BrushHighlight> your entire stack</>}
          subtitle="Sync data from your favorite tools and keep every workflow unified in one place."
          align="center"
          className="w-full tablet:w-[66%] desktop:w-[50%]"
          maxWidth="550px"
        />

        {/* Animated Illustration */}
        <div className="flex justify-center section-header">
          <LazyVideo
            src={joyfulGirlVideo}
            className="w-[210px] h-[210px]"
          />
        </div>

        {/* Integration Logos */}
        <div className="flex flex-col items-center gap-3 mt-0">
          {/* Mobile Ticker */}
          <div className="tablet:hidden w-full max-w-[450px] mx-auto flex flex-col gap-5">
            <IntegrationLogosTicker logos={row1Logos} direction="right" />
            <IntegrationLogosTicker logos={row2Logos} direction="left" />
          </div>
          
          {/* Tablet/Desktop Static Rows */}
          <div className="hidden tablet:flex tablet:flex-col tablet:items-center tablet:gap-3 tablet:w-full">
            <IntegrationLogosRow logos={row1Logos} tooltipPosition="above" />
            <IntegrationLogosRow logos={row2Logos} tooltipPosition="below" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
