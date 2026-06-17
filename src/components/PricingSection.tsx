import PricingCard from "./PricingCard";
import BrushHighlight from "./BrushHighlight";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const pricingPlans = [
  {
    planName: "Cash campaigns",
    description: "Classic media buying. We plan, negotiate and execute — you pay in cash, on agreed milestones.",
    price: "10%",
    showPerMonth: false,
    features: [
      "Single-city or pan-India plans",
      "All channels: OOH, transit, mall, cinema, print, radio, digital",
      "Direct negotiation with media owners",
      "Mounting and monitoring proofs",
      "Post-campaign reporting deck",
    ],
    variant: "general" as const,
    ctaHref: "/contact",
  },
  {
    planName: "Hybrid (cash + barter)",
    description: "Most brands land here. Cover part of the budget in cash, fund the rest with your surplus inventory.",
    price: "Custom",
    showPerMonth: false,
    features: [
      "Cash + barter mix tailored to your campaign",
      "Barter ratio negotiated per channel",
      "More reach from the same effective spend",
      "Dedicated strategist, end-to-end execution",
      "Transparent PO and contract on both sides",
    ],
    variant: "primary" as const,
    ctaHref: "/contact",
  },
  {
    planName: "Barter campaigns",
    description: "Convert idle inventory, unsold stock or unused service capacity directly into premium media reach.",
    price: "0 cash",
    showPerMonth: false,
    features: [
      "Inventory valued and exchanged at agreed ratio",
      "Access to print, OOH, transit, audio, OTT inventory",
      "Contract, PO and exchange schedule",
      "No upfront cash outlay on media",
      "Agency commission on campaign value",
    ],
    variant: "general" as const,
    ctaHref: "/contact",
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
        <div className="flex flex-col tablet:flex-row tablet:justify-between tablet:items-center gap-4 tablet:gap-8 mb-10 desktop:mb-16">
          <h2 className="max-w-[600px]">
            <BrushHighlight>Cash.</BrushHighlight> <BrushHighlight>Barter.</BrushHighlight> Or both.
          </h2>
          <p className="text-body-large text-neutral-10 tablet:w-[33%] max-w-[550px]">
            Pick how you want to fund the campaign. We handle the planning, buying and execution either way.
          </p>
        </div>

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
