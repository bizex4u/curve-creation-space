import { memo } from "react";
import { Check } from "lucide-react";
import FilledButton from "./FilledButton";
import OutlineButton from "./OutlineButton";

interface PricingCardProps {
  planName: string;
  description: string;
  price: string;
  showPerMonth: boolean;
  features: string[];
  variant: "general" | "primary";
  ctaHref?: string;
}

const PricingCard = memo(({
  planName,
  description,
  price,
  showPerMonth,
  features,
  variant,
  ctaHref = "#",
}: PricingCardProps) => {
  const isGeneral = variant === "general";

  return (
    <div
      className={`relative rounded-[16px] p-3 tablet:p-4 flex-col tablet:flex-row tablet:gap-8 desktop:flex-col desktop:gap-0 flex overflow-hidden ${
        isGeneral
          ? "bg-gradient-to-b from-neutral-01 to-neutral-02"
          : "bg-main-00 border-2 border-main-01 shadow-[0_4px_20px_hsl(var(--neutral-12)/0.15)]"
      }`}
    >
      {/* Dot pattern background layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #d4d4d4 1px, transparent 1px)`,
          backgroundSize: "7px 7px",
          maskImage: "linear-gradient(to bottom, transparent 0%, transparent 75%, rgba(0,0,0,0.25) 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, transparent 75%, rgba(0,0,0,0.25) 100%)",
        }}
      />

      {/* Part 1: Overview Box */}
      <div className="relative z-10 flex flex-col bg-neutral-00 p-4 rounded-[12px] tablet:max-w-[450px] tablet:flex-1 desktop:max-w-none desktop:flex-none">
        <h5>{planName}</h5>
        <p className="text-body text-neutral-10 mt-4 max-w-[550px]">{description}</p>
        <div className="mt-3 flex items-baseline gap-1">
          <span className="text-[36px] font-semibold leading-tight tracking-[-0.05em]">
            {price}
          </span>
          {showPerMonth && (
            <span className="text-body-small text-neutral-10">/mo</span>
          )}
        </div>
      </div>

      {/* Mobile/Desktop CTA Button */}
      <div className="relative z-10 mt-6 tablet:hidden desktop:block">
        {isGeneral ? (
          <OutlineButton href={ctaHref} fullWidth>
            Get started
          </OutlineButton>
        ) : (
          <FilledButton href={ctaHref} showArrow={false} fullWidth>
            Get started
          </FilledButton>
        )}
      </div>

      {/* Mobile/Desktop Features */}
      <div className="relative z-10 mt-5 flex flex-col gap-2 p-2 tablet:hidden desktop:flex">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-neutral-08 flex-shrink-0 mt-0.5" />
            <span className="text-body text-neutral-10">{feature}</span>
          </div>
        ))}
      </div>

      {/* Part 2: Tablet - Features + CTA */}
      <div className="relative z-10 hidden tablet:flex tablet:flex-1 tablet:flex-col tablet:justify-between desktop:hidden">
        {/* Features */}
        <div className="flex flex-col gap-2 p-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-neutral-08 flex-shrink-0 mt-0.5" />
              <span className="text-body text-neutral-10">{feature}</span>
            </div>
          ))}
        </div>

        {/* Tablet CTA Button */}
        <div className="mt-5">
          {isGeneral ? (
            <OutlineButton href={ctaHref} fullWidth>
              Get started
            </OutlineButton>
          ) : (
            <FilledButton href={ctaHref} showArrow={false} fullWidth>
              Get started
            </FilledButton>
          )}
        </div>
      </div>
    </div>
  );
});

PricingCard.displayName = "PricingCard";

export default PricingCard;
