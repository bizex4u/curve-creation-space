import SectionHeader from "./SectionHeader";
import FilledButton from "./FilledButton";
import OutlineButton from "./OutlineButton";
import DotPatternBackground from "./DotPatternBackground";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import BrushHighlight from "./BrushHighlight";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section 
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out',
      }}
    >
      <div className="relative overflow-hidden py-16 tablet:py-20 desktop:py-24">
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
          
        <div className="container">
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-full tablet:w-[50%] max-w-[550px] px-4 tablet:px-0">
              <SectionHeader
                title={
                  <>
                    Get your brand{" "}
                    <BrushHighlight delay={400}>seen</BrushHighlight>{" "}
                    <BrushHighlight delay={600}>everywhere</BrushHighlight>{" "}
                    that matters
                  </>
                }
                subtitle="Tell us the market and the budget — cash, barter or both. We'll build the plan."
                align="center"
              />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              <FilledButton href="/contact">Plan my campaign</FilledButton>
              <OutlineButton href="/how-it-works">See cash &amp; barter plans</OutlineButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
