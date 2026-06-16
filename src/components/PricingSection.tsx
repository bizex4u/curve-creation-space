import PricingCard from "./PricingCard";
import BrushHighlight from "./BrushHighlight";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const pricingPlans = [
  {
    planName: "Starter",
    description: "For individuals and early teams getting started with financial clarity.",
    price: "Free",
    showPerMonth: false,
    features: [
      "Connect up to three data sources",
      "Basic dashboard views",
      "Standard forecasting",
      "Automated weekly reports",
      "Email support",
    ],
    variant: "general" as const,
    ctaHref: "https://lemonsqueezy.com",
  },
  {
    planName: "Growth",
    description: "For growing teams that need deeper insights and more automation.",
    price: "$49",
    showPerMonth: true,
    features: [
      "Unlimited data sources",
      "Advanced dashboard customization",
      "Real time forecasting",
      "Automated daily reports",
      "Priority support",
    ],
    variant: "primary" as const,
    ctaHref: "https://lemonsqueezy.com",
  },
  {
    planName: "Pro",
    description: "For established teams looking for full visibility and powerful analysis.",
    price: "$99",
    showPerMonth: true,
    features: [
      "Full integrations with all tools",
      "Custom reporting and exports",
      "Team collaboration and permissions",
      "Anomaly detection alerts",
      "Dedicated account support",
    ],
    variant: "general" as const,
    ctaHref: "https://lemonsqueezy.com",
  },
];

const PricingSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section 
      id="pricing-section" 
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
        <div className="flex flex-col tablet:flex-row tablet:justify-between tablet:items-center gap-4 tablet:gap-8 mb-10 desktop:mb-16">
          <h2 className="max-w-[550px]"><BrushHighlight>Simple</BrushHighlight> <BrushHighlight>pricing</BrushHighlight> for every team</h2>
          <p className="text-body-large text-neutral-10 tablet:w-[33%] max-w-[550px]">
            Choose a plan that supports your workflow and scales as you grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col desktop:flex-row gap-3">
          {pricingPlans.map((plan) => (
            <div key={plan.planName} className="flex-1">
              <PricingCard {...plan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
