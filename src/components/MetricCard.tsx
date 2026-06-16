import { useCounterAnimation } from "@/hooks/useCounterAnimation";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  endValue: number;
  suffix: string;
  details1: string;
  details2: string;
  decimals?: number;
  variant?: "default" | "card";
}

const MetricCard = ({ endValue, suffix, details1, details2, decimals = 0, variant = "default" }: MetricCardProps) => {
  const { formattedValue, ref } = useCounterAnimation({
    endValue,
    duration: 1500,
    decimals,
  });

  return (
    <div 
      ref={ref} 
      className={cn(
        "flex flex-col",
        variant === "card" && "bg-neutral-01 p-4 rounded-[12px]"
      )}
    >
      {/* Metric Number */}
      <span 
        className="font-geist text-[48px] font-semibold tracking-[-0.04em] text-neutral-11 mb-[4px] leading-none"
      >
        {formattedValue}{suffix}
      </span>
      
      {/* Details 1 - H6 */}
      <h6 className="text-h6 text-neutral-10">
        {details1}
      </h6>
      
      {/* Details 2 - Body text, 40px gap from details1 */}
      <p className="text-body text-neutral-10 mt-10">
        {details2}
      </p>
    </div>
  );
};

export default MetricCard;
