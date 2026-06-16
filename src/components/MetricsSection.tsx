import MetricCard from "./MetricCard";
import { useIsDesktop } from "@/hooks/use-desktop";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Easily updatable metrics data
const metrics = [
  {
    endValue: 40,
    suffix: "+",
    details1: "Brands served",
    details2: "From challenger D2C to listed consumer names across India.",
    decimals: 0,
  },
  {
    endValue: 25,
    suffix: "+",
    details1: "Cities covered",
    details2: "Pan-India OOH, transit, mall, cinema and print buying.",
    decimals: 0,
  },
  {
    endValue: 8,
    suffix: " channels",
    details1: "Media mix",
    details2: "OOH, transit, mall, cinema, radio, print, digital, OTT.",
    decimals: 0,
  },
  {
    endValue: 100,
    suffix: "%",
    details1: "Inventory utilised",
    details2: "For barter clients — surplus stock converted into reach.",
    decimals: 0,
  },
];


const MetricsSection = () => {
  const isDesktop = useIsDesktop();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div 
      ref={ref}
      className="w-full p-0 tablet:p-6"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out',
      }}
    >
      <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-3 desktop:gap-6">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            endValue={metric.endValue}
            suffix={metric.suffix}
            details1={metric.details1}
            details2={metric.details2}
            decimals={metric.decimals}
            variant={isDesktop ? "default" : "card"}
          />
        ))}
      </div>
    </div>
  );
};

export default MetricsSection;
