import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import FilledButton from "./FilledButton";
import OutlineButton from "./OutlineButton";
import LogoTicker from "./LogoTicker";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="page-header-top"
      style={{
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
      }}
    >
      {/* Magazine masthead */}
      <div className="masthead-rule py-3 mb-12 tablet:mb-16 flex items-center justify-between text-[11px] tablet:text-xs font-bold uppercase tracking-[0.22em] text-neutral-12">
        <span>
          Volume 01 <span className="mx-2 text-main-02">//</span> The cash &amp; barter issue
        </span>
        <span className="hidden tablet:inline text-neutral-10">
          Est. India · Full-service ad agency
        </span>
      </div>

      {/* Hero grid */}
      <div className="grid grid-cols-1 desktop:grid-cols-12 gap-10 desktop:gap-14 items-start">
        {/* Headline column */}
        <div className="desktop:col-span-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-main-01 text-main-02 text-[11px] font-bold uppercase tracking-[0.18em] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-coral" />
            Cash. Barter. Or both.
          </div>

          <h1 className="text-neutral-12 mb-8 tablet:mb-10">
            India's <span className="text-main-02">full-service</span> ad agency.
          </h1>

          <p className="text-body-large text-neutral-10 max-w-[640px] mb-10 tablet:mb-12">
            BIZEX4U plans, negotiates and executes high-impact campaigns across outdoor,
            transit, mall, cinema, radio, print and digital — funded in cash, in trade, or
            a bespoke blend of both.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <FilledButton href="/contact">Plan my campaign</FilledButton>
            <OutlineButton href="/how-it-works">See cash &amp; barter plans</OutlineButton>
          </div>
        </div>

        {/* Editorial pull-quote card */}
        <div className="desktop:col-span-4 desktop:pt-16">
          <div className="relative bg-main-01/60 border border-main-01 rounded-3xl p-7 overflow-hidden">
            <div className="absolute -top-6 -right-2 editorial-numeral text-[120px] leading-none opacity-50 select-none">
              “
            </div>
            <div className="relative">
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-coral text-coral" />
                ))}
              </div>
              <p className="font-syne text-[18px] tablet:text-[20px] leading-snug font-semibold text-neutral-12 mb-6">
                A dedicated strategist plans, negotiates and runs your campaign
                end-to-end — whether the budget is cash, trade credits, or a blend.
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-main-02/15">
                <div className="w-10 h-10 rounded-full bg-main-02 text-neutral-00 flex items-center justify-center font-syne font-bold text-sm">
                  40+
                </div>
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-10">
                  Trusted Indian brands
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Client typographic reel */}
      <div className="mt-16 tablet:mt-24 pt-8 border-t border-neutral-03">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-neutral-09 mb-6">
          Featured campaigns
        </p>
        <LogoTicker />
      </div>
    </section>
  );
};

export default HeroSection;
