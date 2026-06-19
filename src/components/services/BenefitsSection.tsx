import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionHeader from "@/components/SectionHeader";
import BrushHighlight from "@/components/BrushHighlight";

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  title?: string;
  subtitle?: string;
  benefits: Benefit[];
}

const BenefitsSection = ({
  title = "Why advertisers choose this medium",
  subtitle = "Key advantages that make this channel a high-ROI addition to your media mix.",
  benefits,
}: BenefitsSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="section"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease-in-out, transform 0.6s ease-in-out",
      }}
    >
      <div className="container">
        <SectionHeader
          title={<BrushHighlight>{title}</BrushHighlight>}
          subtitle={subtitle}
        />
        <div className="mt-8 tablet:mt-10 grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-2 gap-4 tablet:gap-5">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-neutral-01 border border-neutral-03 rounded-2xl p-6 tablet:p-8 flex flex-col gap-4 hover:border-main-01 hover:shadow-[0_4px_20px_hsl(var(--theme-main-02)/0.08)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-[12px] bg-neutral-00 border border-main-01 flex items-center justify-center text-2xl shadow-[0_4px_12px_hsl(var(--theme-main-02)/0.10)]">
                {b.icon}
              </div>
              <div>
                <h3 className="text-h4 text-neutral-12 mb-2">{b.title}</h3>
                <p className="text-body text-neutral-10">{b.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
