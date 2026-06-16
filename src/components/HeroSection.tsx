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
      {/* Left Part - 50% */}
      <div className="w-full tablet:w-[58%] desktop:w-1/2 flex flex-col">
        {/* Label with green dot */}
        <div className="flex items-center gap-2 w-fit px-[12px] py-[6px] border-neutral-03 border rounded-xl mb-[12px]">
          <span className="w-1.5 h-1.5 rounded-full" style={{
            backgroundColor: "#4096FF"
          }} />
          <span className="text-label text-neutral-10">Now available for early access</span>
        </div>

        {/* H1 Heading */}
        <h1 className="text-neutral-12 mb-[32px] tablet:mb-[40px]">
          Real-time insight for{" "}
          <BrushHighlight delay={600} color="hsl(var(--theme-main-01))">
            modern
          </BrushHighlight>{" "}
          <BrushHighlight delay={800} color="hsl(var(--theme-main-01))">
            finance
          </BrushHighlight>
        </h1>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-[32px] tablet:mb-[64px]">
          <FilledButton href="https://lunisdesign.com">Get free trial</FilledButton>
          <OutlineButton href="/#contact-section">Contact sales</OutlineButton>
        </div>

        {/* Logo Ticker */}
        <div>
          <LogoTicker />
        </div>
      </div>

      {/* Right Part - 32% */}
      <div className="w-full tablet:w-[32%] flex flex-col gap-4">
        {/* Video with reserved aspect ratio */}
        <div className="hidden tablet:block w-full aspect-[4/3] rounded-xl overflow-hidden">
          <LazyVideo
            src={heroVideo}
            className="w-full h-full"
          />
        </div>

        {/* Description & Rating */}
        <div className="max-w-[450px]">
          <p className="text-body text-neutral-10">
            A clean and powerful AI platform designed for all startups and enterprises
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-4">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-star text-star" />)}
            </div>
            <span className="text-label text-neutral-12">4.8 rated by 8K+ users</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
