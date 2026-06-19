import { useState, useEffect } from "react";
import FilledButton from "./FilledButton";
import OutlineButton from "./OutlineButton";
import LogoTicker from "./LogoTicker";
import BrushHighlight from "./BrushHighlight";
import LazyVideo from "./ui/LazyVideo";
import heroVideo from "@/assets/Collaborative_Work_Scene.mp4";

const metrics = [
  { value: "320+", label: "Brands served" },
  { value: "₹150Cr+", label: "Media transacted" },
  { value: "95%", label: "Marketing cost efficiency" },
  { value: "40+", label: "Cities covered" },
];

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="flex flex-col tablet:flex-row tablet:items-center tablet:justify-between gap-16 tablet:gap-0 page-header-top"
      style={{
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out',
      }}
    >
      {/* Left */}
      <div className="w-full tablet:w-[58%] desktop:w-1/2 flex flex-col">
        <div className="flex items-center gap-2 w-fit px-[12px] py-[6px] border-neutral-03 border rounded-xl mb-[12px]">
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "hsl(var(--theme-main-02))" }} />
          <span className="text-label text-neutral-10">Cash. Barter. Or both.</span>
        </div>

        <h1 className="text-neutral-12 mb-[32px] tablet:mb-[40px]">
          Convert inventory into{" "}
          <BrushHighlight delay={600} color="hsl(var(--theme-main-01))">impact</BrushHighlight>.
          India's advertising partner for cash, barter or both
        </h1>

        <p className="text-body-large text-neutral-10 mb-[32px] tablet:mb-[40px] max-w-[520px]">
          Access outdoor, metro, airport, cinema, radio and digital media while optimizing
          marketing spend through cash, barter or hybrid campaigns.
        </p>

        <div className="grid grid-cols-2 gap-6 tablet:gap-8 mb-[32px] tablet:mb-[40px] max-w-[520px]">
          {metrics.map((metric, i) => (
            <div
              key={metric.label}
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(12px)',
                transition: `opacity 0.5s ease-out ${0.3 + i * 0.1}s, transform 0.5s ease-out ${0.3 + i * 0.1}s`,
              }}
            >
              <div className="text-neutral-12 font-semibold" style={{ fontSize: '28px', lineHeight: 1.2, letterSpacing: '-0.05em' }}>
                {metric.value}
              </div>
              <div className="text-label text-neutral-10 mt-1">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 mb-[32px] tablet:mb-[64px]">
          <FilledButton href="/contact">Plan my campaign</FilledButton>
          <OutlineButton href="/how-it-works">See cash &amp; barter plans</OutlineButton>
        </div>

        <div>
          <LogoTicker />
        </div>
      </div>

      {/* Right */}
      <div className="w-full tablet:w-[32%] flex flex-col items-center">
        <div
          className="hidden tablet:block w-full rounded-xl overflow-hidden"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease-out 0.2s, transform 0.7s ease-out 0.2s',
          }}
        >
          <img
            src={heroVisual}
            alt="Premium advertising media visualization"
            width={1024}
            height={1024}
            className="w-full h-auto"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
