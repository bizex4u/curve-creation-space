import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import FilledButton from "./FilledButton";
import OutlineButton from "./OutlineButton";
import LogoTicker from "./LogoTicker";
import BrushHighlight from "./BrushHighlight";
import LazyVideo from "./ui/LazyVideo";
import heroVideo from "@/assets/Collaborative_Work_Scene.mp4";

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
          India's full-service ad agency for{" "}
          <BrushHighlight delay={600} color="hsl(var(--theme-main-01))">cash</BrushHighlight>{" "}
          and{" "}
          <BrushHighlight delay={800} color="hsl(var(--theme-main-01))">barter</BrushHighlight>{" "}
          campaigns
        </h1>

        <p className="text-body-large text-neutral-10 mb-[32px] tablet:mb-[40px] max-w-[520px]">
          BIZEX4U plans, negotiates and executes outdoor, transit, mall, cinema, radio,
          print and digital media across India — funded in cash, in trade, or a mix of both.
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-[32px] tablet:mb-[64px]">
          <FilledButton href="/#contact-section">Plan my campaign</FilledButton>
          <OutlineButton href="/#pricing-section">See cash &amp; barter plans</OutlineButton>
        </div>

        <div>
          <LogoTicker />
        </div>
      </div>

      {/* Right */}
      <div className="w-full tablet:w-[32%] flex flex-col gap-4">
        <div className="hidden tablet:block w-full aspect-[4/3] rounded-xl overflow-hidden">
          <LazyVideo src={heroVideo} className="w-full h-full" />
        </div>

        <div className="max-w-[450px]">
          <p className="text-body text-neutral-10">
            A dedicated strategist plans, negotiates and runs your campaign end-to-end —
            whether the budget is cash, trade credits, or a blend.
          </p>

          <div className="flex items-center gap-2 mt-4">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-star text-star" />)}
            </div>
            <span className="text-label text-neutral-12">Trusted by 40+ Indian brands</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
