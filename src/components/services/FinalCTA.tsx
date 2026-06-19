import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import DotPatternBackground from "@/components/DotPatternBackground";
import SectionHeader from "@/components/SectionHeader";
import FilledButton from "@/components/FilledButton";
import OutlineButton from "@/components/OutlineButton";
import BrushHighlight from "@/components/BrushHighlight";
import WhatsAppCTA from "@/components/services/WhatsAppCTA";

export interface RelatedService {
  label: string;
  href: string;
}

interface FinalCTAProps {
  title?: string;
  subtitle?: string;
  primaryCTALabel?: string;
  relatedServices?: RelatedService[];
}

const FinalCTA = ({
  title = "Get your free media plan",
  subtitle = "Tell us your market, budget and timeline. We'll build the plan — cash, barter or both.",
  primaryCTALabel = "Get Free Media Plan",
  relatedServices = [],
}: FinalCTAProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease-in-out, transform 0.6s ease-in-out",
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
            left: "pl-2 tablet:pl-4 desktop:pl-5",
          }}
        />
        <div className="container">
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-full tablet:w-[50%] max-w-[550px] px-4 tablet:px-0">
              <SectionHeader
                title={
                  <>
                    <BrushHighlight delay={400}>{title}</BrushHighlight>
                  </>
                }
                subtitle={subtitle}
                align="center"
              />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              <FilledButton href="/contact">{primaryCTALabel}</FilledButton>
              <OutlineButton href="/contact">Book Consultation</OutlineButton>
              <WhatsAppCTA />
            </div>

            {relatedServices.length > 0 && (
              <div className="mt-10 tablet:mt-12 flex flex-col items-center gap-3">
                <p className="text-label text-neutral-09">Related services</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {relatedServices.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      className="text-label text-neutral-11 bg-neutral-00 border border-neutral-03 px-3 py-1.5 rounded-lg hover:border-neutral-05 transition-colors"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
