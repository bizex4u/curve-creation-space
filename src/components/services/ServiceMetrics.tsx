import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export interface Metric {
  value: string;
  label: string;
}

interface ServiceMetricsProps {
  metrics?: Metric[];
}

const defaultMetrics: Metric[] = [
  { value: "320+", label: "Brands Served" },
  { value: "₹150Cr+", label: "Media Value" },
  { value: "40+", label: "Cities" },
  { value: "95%", label: "Cost Efficiency" },
];

const ServiceMetrics = ({ metrics = defaultMetrics }: ServiceMetricsProps) => {
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
        <div className="grid grid-cols-2 tablet:grid-cols-4 gap-6 tablet:gap-8 bg-neutral-01 border border-neutral-03 rounded-2xl desktop:rounded-3xl px-6 py-8 tablet:px-10 tablet:py-10">
          {metrics.map((m, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="text-neutral-12 font-semibold text-[28px] tablet:text-[36px] leading-tight tracking-tight font-manrope">
                {m.value}
              </span>
              <span className="text-label text-neutral-10">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceMetrics;
