import { useState, useEffect } from "react";
import FilledButton from "./FilledButton";
import OutlineButton from "./OutlineButton";
import LogoTicker from "./LogoTicker";
import BrushHighlight from "./BrushHighlight";
import LazyVideo from "./ui/LazyVideo";
import heroVideo from "@/assets/Collaborative_Work_Scene.mp4";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { track } from "@/lib/analytics";

const metrics = [
  { value: "320+", label: "Brands served" },
  { value: "₹150Cr+", label: "Media transacted" },
  { value: "95%", label: "Marketing cost efficiency" },
  { value: "40+", label: "Cities covered" },
];

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [leadEmail, setLeadEmail] = useState("");
  const [leadCompany, setLeadCompany] = useState("");
  const [leadSubmitting, setLeadSubmitting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleInlineLead = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = leadEmail.trim();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast({ title: "Enter a valid email" });
      return;
    }
    setLeadSubmitting(true);
    track("lead_submit", { source: "hero_inline" });
    const { error } = await supabase.from("leads").insert({
      name: leadCompany.trim() || "Hero inline lead",
      email,
      company: leadCompany.trim() || null,
      source: "hero_inline",
      funding_model: "Not sure yet",
      landing_page: typeof window !== "undefined" ? window.location.pathname : null,
    });
    setLeadSubmitting(false);
    if (error) {
      toast({ title: "Something went wrong. Please try again." });
      return;
    }
    track("lead_success", { source: "hero_inline" });
    toast({ title: "Thanks! We'll reply within 2 hours." });
    setLeadEmail("");
    setLeadCompany("");
  };

  return (
    <section
      className="flex flex-col gap-8 tablet:gap-10 page-header-top pb-0"
      style={{
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out',
      }}
    >
      {/* Top row: Text left, Video + Logo right */}
      <div className="flex flex-col tablet:flex-row tablet:items-start tablet:justify-between gap-10 tablet:gap-0">
        {/* Left: Headline + subheadline */}
        <div className="w-full tablet:w-[55%] desktop:w-1/2 flex flex-col">
          <div className="flex items-center gap-2 w-fit px-3 py-1.5 border-neutral-03 border rounded-xl mb-3">
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "hsl(var(--theme-main-02))" }} />
            <span className="text-label text-neutral-10">Cash. Barter. Or both.</span>
          </div>

          <h1 className="text-neutral-12 mb-6 tablet:mb-8">
            Convert inventory into{" "}
            <BrushHighlight delay={600} color="hsl(var(--theme-main-01))">impact</BrushHighlight>.
            India's advertising partner for cash, barter or both
          </h1>

          <p className="text-body-large text-neutral-10 max-w-[520px]">
            Access outdoor, metro, airport, cinema, radio and digital media while optimizing
            marketing spend through cash, barter or hybrid campaigns.
          </p>

          {/* Inline lead capture card */}
          <form
            onSubmit={handleInlineLead}
            className="mt-6 tablet:mt-8 w-full max-w-[520px] bg-neutral-00 border border-neutral-03 rounded-2xl p-4 tablet:p-5 shadow-[0_4px_16px_rgba(0,0,0,0.04)] flex flex-col gap-3"
          >
            <div className="flex flex-col tablet:flex-row gap-3">
              <input
                type="email"
                required
                value={leadEmail}
                onChange={(e) => setLeadEmail(e.target.value)}
                placeholder="Email"
                className="flex-1 bg-neutral-00 border border-neutral-04 rounded-[10px] px-4 py-3 text-body text-neutral-12 placeholder:text-neutral-09 focus:outline-none focus:border-[hsl(var(--theme-main-02))] transition-colors"
              />
              <input
                type="text"
                value={leadCompany}
                onChange={(e) => setLeadCompany(e.target.value)}
                placeholder="Company"
                className="flex-1 bg-neutral-00 border border-neutral-04 rounded-[10px] px-4 py-3 text-body text-neutral-12 placeholder:text-neutral-09 focus:outline-none focus:border-[hsl(var(--theme-main-02))] transition-colors"
              />
            </div>
            <FilledButton type="submit" disabled={leadSubmitting} fullWidth showArrow={false}>
              {leadSubmitting ? "Sending…" : "Get Media Plan"}
            </FilledButton>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-label text-neutral-10">
              <span>✓ 320+ Brands</span>
              <span>✓ ₹150Cr+ Media</span>
              <span>✓ Reply within 2 hours</span>
            </div>
          </form>
        </div>

        {/* Right: Video + Logo Ticker */}
        <div className="w-full tablet:w-[40%] desktop:w-5/12 flex flex-col gap-5 tablet:gap-6">
          <div
            className="hidden tablet:block w-full aspect-[4/3] rounded-xl overflow-hidden"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.7s ease-out 0.2s, transform 0.7s ease-out 0.2s',
            }}
          >
            <LazyVideo src={heroVideo} className="w-full h-full" />
          </div>

          <div
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.7s ease-out 0.5s',
            }}
          >
            <p className="text-body-small font-medium text-neutral-09 uppercase tracking-widest mb-3">Trusted by leading brands</p>
            <LogoTicker />
          </div>
        </div>
      </div>

      {/* Bottom row: Metrics + CTAs parallel */}
      <div className="flex flex-col tablet:flex-row tablet:items-end tablet:justify-between gap-6 tablet:gap-8">
        <div className="grid grid-cols-2 gap-x-10 gap-y-7 tablet:gap-x-16 tablet:gap-y-9">
          {metrics.map((metric, i) => (
            <div
              key={metric.label}
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(12px)',
                transition: `opacity 0.5s ease-out ${0.3 + i * 0.1}s, transform 0.5s ease-out ${0.3 + i * 0.1}s`,
              }}
            >
              <div
                className="text-neutral-12 leading-none tracking-tighter"
                style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: 'clamp(40px, 5vw, 64px)' }}
              >
                {metric.value}
              </div>
              <div className="text-body text-neutral-09 mt-2">{metric.label}</div>
            </div>
          ))}
        </div>

        <div
          className="flex flex-wrap items-center gap-3 tablet:gap-4"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.5s ease-out 0.7s, transform 0.5s ease-out 0.7s',
          }}
        >
          <FilledButton href="/contact">Plan my campaign</FilledButton>
          <OutlineButton href="/how-it-works">See cash &amp; barter plans</OutlineButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
