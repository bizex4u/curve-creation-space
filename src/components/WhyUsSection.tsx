import { useState, useEffect, useRef } from "react";
import { Banknote, ArrowLeftRight, Layers } from "lucide-react";
import SectionHeader from "./SectionHeader";
import BenefitCard from "./BenefitCard";
import BrushHighlight from "./BrushHighlight";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefitData = [
  {
    id: "cash",
    icon: Banknote,
    title: "Cash campaigns, run sharper",
    description: "Same media owners, better negotiation. Your strategist plans the mix, books direct, and reports back — so cash budgets stretch further across OOH, transit, cinema, print, radio and digital.",
    highlights: ["Direct media-owner rates", "Pan-India planning", "Mounting & monitoring proofs", "Post-campaign reporting"],
  },
  {
    id: "barter",
    icon: ArrowLeftRight,
    title: "Barter — turn idle inventory into reach",
    description: "Sitting on surplus stock, unsold goods or unused service capacity? Convert that value into premium media placements at agreed barter ratios, with a clean PO and contract for every exchange.",
    highlights: ["Inventory valued fairly", "Premium media access", "Contract & PO on both sides", "Zero upfront media cash"],
  },
  {
    id: "hybrid",
    icon: Layers,
    title: "Hybrid — pay part cash, part trade",
    description: "Most brands land here. Cover the channels barter can't reach with a slice of cash, and fund the rest with inventory — so the same budget buys meaningfully more reach.",
    highlights: ["Cash + barter blended", "More reach per rupee", "Channel-by-channel mix", "Dedicated strategist"],
  },
];


const WhyUsSection = () => {
  const [activeId, setActiveId] = useState<string>(benefitData[0].id);
  const isProgrammaticScrollRef = useRef(false);
  const unlockTimeoutRef = useRef<number | null>(null);
  const { ref: scrollRef, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const scrollToCard = (id: string) => {
    // Prevent the scroll listener from instantly overriding the clicked state
    isProgrammaticScrollRef.current = true;
    setActiveId(id);

    if (unlockTimeoutRef.current) {
      window.clearTimeout(unlockTimeoutRef.current);
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 240;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    // Unlock after the smooth-scroll settles (covers short + long scroll distances)
    unlockTimeoutRef.current = window.setTimeout(() => {
      isProgrammaticScrollRef.current = false;
      unlockTimeoutRef.current = null;
    }, 1000);
  };

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (isProgrammaticScrollRef.current) return;
      
      if (!ticking) {
        requestAnimationFrame(() => {
          const offset = 240;

          for (const benefit of benefitData) {
            const element = document.getElementById(benefit.id);
            if (element) {
              const rect = element.getBoundingClientRect();
              if (rect.top <= offset && rect.bottom > offset) {
                setActiveId(benefit.id);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (unlockTimeoutRef.current) window.clearTimeout(unlockTimeoutRef.current);
      isProgrammaticScrollRef.current = false;
    };
  }, []);


  return (
    <section 
      ref={scrollRef}
      className="pt-0 pb-16 desktop:pb-20 flex flex-col gap-y-10 tablet:flex-row tablet:flex-wrap tablet:justify-start tablet:gap-x-8 desktop:justify-between desktop:gap-0"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out',
      }}
    >
      {/* Left Side - Header */}
      <div className="w-full max-w-[550px] tablet:w-[33%] tablet:min-w-[350px] desktop:min-w-0 desktop:sticky desktop:top-[160px] desktop:self-start">
        <SectionHeader
          title={<>Three ways to <BrushHighlight>fund</BrushHighlight> a <BrushHighlight>campaign</BrushHighlight></>}
          subtitle="Cash, barter, or a blend — built for cash-conscious brands and businesses sitting on idle inventory."
        />

        
        {/* Navigation Buttons - Desktop only */}
        <div className="hidden desktop:flex flex-col gap-2 mt-8">
          {benefitData.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <button
                key={benefit.id}
                onClick={() => scrollToCard(benefit.id)}
                className={`flex items-center gap-3 w-full text-left p-5 rounded-lg border text-neutral-12 text-body-large transition-colors ${
                  activeId === benefit.id
                    ? 'bg-main-00 border-main-01'
                    : 'bg-neutral-01 border-neutral-02 hover:bg-neutral-02'
                }`}
              >
                <Icon size={20} />
                <span>{benefit.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Side - Benefit Cards (58%) */}
      <div className="w-full px-5 py-6 tablet:flex-1 tablet:min-w-[550px] tablet:p-8 desktop:flex-none desktop:w-[58%] desktop:min-w-0 desktop:p-10 bg-neutral-01 rounded-[20px]">
        {benefitData.map((benefit) => (
          <BenefitCard
            key={benefit.id}
            id={benefit.id}
            title={benefit.title}
            description={benefit.description}
            icon={benefit.icon}
            highlights={benefit.highlights}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyUsSection;
