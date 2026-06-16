import { useRef } from "react";
import SectionHeader from "./SectionHeader";
import FilledButton from "./FilledButton";
import OutlineButton from "./OutlineButton";
import DashboardFrame from "./DashboardFrame";
import DotPatternBackground from "./DotPatternBackground";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import BrushHighlight from "./BrushHighlight";

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section 
      ref={(el) => {
        ref(el);
        (sectionRef as React.MutableRefObject<HTMLElement | null>).current = el;
      }}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out',
      }}
    >
      {/* Inner container with rounded corners and background - 650px height */}
      <div 
        className="relative overflow-hidden pt-16 desktop:pt-20 h-[450px] tablet:h-[550px] desktop:h-[650px]"
      >
        {/* Dot pattern background with custom padding - no bottom padding */}
        <DotPatternBackground 
          variant="main" 
          fadePoint={55}
          padding={{
            top: "pt-2 tablet:pt-4 desktop:pt-5",
            right: "pr-2 tablet:pr-4 desktop:pr-5",
            bottom: "",
            left: "pl-2 tablet:pl-4 desktop:pl-5"
          }}
        />
          
        {/* Content layer */}
        <div className="container">
          <div className="relative z-10 flex flex-col items-center">
            {/* Section Header - 50% width, max 550px, center aligned */}
            <div className="w-full tablet:w-[50%] max-w-[550px] px-4 tablet:px-0">
              <SectionHeader
                title={
                  <>
                    Bring{" "}
                    <BrushHighlight delay={400}>financial</BrushHighlight>{" "}
                    <BrushHighlight delay={600}>clarity</BrushHighlight>{" "}
                    to your numbers today
                  </>
                }
                subtitle="Start your free trial and bring clarity to your financial workflow in minutes."
                align="center"
              />
            </div>
            
            {/* Buttons - gap 12px, margin-top 24px */}
            <div className="flex items-center gap-3 mt-6">
              <FilledButton href="https://lunisdesign.com">Get free trial</FilledButton>
              <OutlineButton href="/#pricing-section">See our plans</OutlineButton>
            </div>
            
            {/* Dashboard Frame - 83% width, max 1079px, margin-top 80px */}
            <DashboardFrame 
              className="w-full tablet:w-[83%] max-w-[1079px] mt-10 desktop:mt-20" 
              sectionRef={sectionRef}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
