import MetricCard from "./MetricCard";
import { useIsDesktop } from "@/hooks/use-desktop";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Easily updatable metrics data
const metrics = [
  { 
    endValue: 300, 
    suffix: "M+", 
    details1: "Tracked Annually", 
    details2: "Supporting annual financial activity with accuracy.",
    decimals: 0,
  },
  { 
    endValue: 98, 
    suffix: "%", 
    details1: "Less Manual Work", 
    details2: "Automating repetitive tasks for faster workflows.",
    decimals: 0,
  },
  { 
    endValue: 5, 
    suffix: "K+", 
    details1: "Monthly Audits", 
    details2: "Ensuring accurate books at scale for every team.",
    decimals: 0,
  },
  { 
    endValue: 99.9, 
    suffix: "%", 
    details1: "Uptime", 
    details2: "Reliable performance for uninterrupted operations.",
    decimals: 1,
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
