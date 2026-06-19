import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionHeader from "@/components/SectionHeader";
import FilledButton from "@/components/FilledButton";

interface FundingModel {
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  cta?: string;
}

const models: FundingModel[] = [
  {
    name: "Cash",
    tagline: "Full cash campaign",
    description: "Pay for your campaign entirely in cash. We negotiate the best rates with media owners and pass the savings to you.",
    highlights: ["Fastest activation", "Full inventory access", "Standard agency commission", "Detailed post-campaign report"],
  },
  {
    name: "Barter",
    tagline: "Inventory-for-media exchange",
    description: "Trade your surplus inventory or services for premium media placements. Zero cash outlay — we value your inventory and match it to media.",
    highlights: ["No cash outlay", "Clear PO & contract", "Accepted across OOH, transit, radio, print", "Inventory valued at MRP or agreed rate"],
  },
  {
    name: "Hybrid",
    tagline: "Cash + barter blend",
    description: "Maximize reach by covering most of your campaign through barter and topping up cash-only channels like digital and OTT.",
    highlights: ["Best cost efficiency", "Widest channel access", "Flexible split ratio", "Most popular for national launches"],
    cta: "Most popular",
  },
];

interface FundingModelsSectionProps {
  title?: string;
  subtitle?: string;
}

const FundingModels = ({
  title = "Flexible funding models",
  subtitle = "Run campaigns the way that works for your business — cash, barter or a blend of both.",
}: FundingModelsSectionProps) => {
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
        <SectionHeader title={title} subtitle={subtitle} />
        <div className="mt-8 tablet:mt-10 grid grid-cols-1 tablet:grid-cols-3 gap-4 tablet:gap-5">
          {models.map((model, i) => {
            const isHighlighted = !!model.cta;
            return (
              <div
                key={i}
                className={`relative rounded-2xl desktop:rounded-3xl p-6 tablet:p-8 flex flex-col gap-5 border ${
                  isHighlighted
                    ? "bg-gradient-to-br from-main-00 to-neutral-01 border-main-01 shadow-[0_8px_32px_hsl(var(--theme-main-02)/0.12)]"
                    : "bg-neutral-01 border-neutral-03"
                }`}
              >
                {model.cta && (
                  <span className="absolute top-4 right-4 text-label text-main-02 bg-main-00 border border-main-01 px-2.5 py-1 rounded-lg">
                    {model.cta}
                  </span>
                )}
                <div>
                  <p className="text-label text-neutral-09 mb-1">{model.tagline}</p>
                  <h3 className="text-h3 text-neutral-12">{model.name}</h3>
                </div>
                <p className="text-body text-neutral-10">{model.description}</p>
                <ul className="flex flex-col gap-2">
                  {model.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-body text-neutral-11">
                      <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-main-01 flex items-center justify-center">
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                          <path d="M1 3l2 2 4-4" stroke="hsl(var(--theme-main-02))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="mt-6 flex justify-center">
          <FilledButton href="/contact">Discuss your funding model</FilledButton>
        </div>
      </div>
    </section>
  );
};

export default FundingModels;
