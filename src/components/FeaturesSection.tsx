import {
  Megaphone,
  Users,
  ArrowUpRight,
  Building2,
  TrainFront,
  Film,
  Radio,
  Newspaper,
} from "lucide-react";

const channels = [
  { icon: <Building2 className="w-4 h-4" />, label: "Billboards & OOH" },
  { icon: <TrainFront className="w-4 h-4" />, label: "Metro & airport" },
  { icon: <Film className="w-4 h-4" />, label: "Cinema & malls" },
  { icon: <Radio className="w-4 h-4" />, label: "Radio & audio" },
  { icon: <Newspaper className="w-4 h-4" />, label: "Print & dailies" },
];

const btl = [
  "Mall activations",
  "Society sampling",
  "Road shows",
  "Retail branding",
  "Influencer barter campaigns",
];

const FeaturesSection = () => {
  return (
    <section id="features-section" className="section">
      {/* Section masthead */}
      <div className="flex items-end justify-between mb-10 desktop:mb-14 pb-4 border-b border-neutral-03">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-neutral-09 mb-3">
            Chapter 01 — Capabilities
          </p>
          <h2 className="text-neutral-12 max-w-[640px]">
            ATL reach, BTL <span className="text-main-02 italic">activation</span>.
          </h2>
        </div>
        <span className="hidden tablet:block text-[11px] font-bold uppercase tracking-[0.22em] text-neutral-09">
          Featured in this issue
        </span>
      </div>

      {/* Three-up editorial grid */}
      <div className="grid grid-cols-1 desktop:grid-cols-3 gap-px bg-neutral-03 border border-neutral-03 rounded-[24px] overflow-hidden">
        {/* ATL */}
        <article className="bg-neutral-00 p-8 tablet:p-10 group flex flex-col">
          <div className="editorial-numeral text-[64px] leading-none mb-6">01</div>
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-main-02 mb-3">
            <Megaphone className="w-4 h-4" /> ATL activities
          </div>
          <h3 className="text-neutral-12 mb-4">
            Mass-reach above-the-line.
          </h3>
          <p className="text-body text-neutral-10 mb-8">
            TV, print, radio, OOH and cinema — built for awareness and brand recall at
            national scale across India's metros and tier-2 markets.
          </p>
          <ul className="space-y-2 mt-auto pt-6 border-t border-neutral-03">
            {channels.map((c) => (
              <li
                key={c.label}
                className="flex items-center gap-3 text-sm font-medium text-neutral-11"
              >
                <span className="text-main-02">{c.icon}</span>
                {c.label}
              </li>
            ))}
          </ul>
        </article>

        {/* BTL — dark aubergine plate */}
        <article className="bg-main-02 text-neutral-00 p-8 tablet:p-10 group flex flex-col relative">
          <div className="editorial-numeral text-[64px] leading-none mb-6 text-coral/70">02</div>
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-coral mb-3">
            <Users className="w-4 h-4" /> BTL activities
          </div>
          <h3 className="text-neutral-00 mb-4">
            On-ground activation that converts.
          </h3>
          <p className="text-body text-main-01 mb-8">
            Mall promos, road shows, society sampling, retail branding and experiential
            events — the work that turns awareness into action.
          </p>
          <ul className="space-y-2 mt-auto pt-6 border-t border-neutral-00/15">
            {btl.map((b) => (
              <li
                key={b}
                className="flex items-center gap-3 text-sm font-medium text-neutral-00"
              >
                <span className="text-coral">→</span>
                {b}
              </li>
            ))}
          </ul>
        </article>

        {/* Barter desk */}
        <article className="bg-neutral-00 p-8 tablet:p-10 group flex flex-col">
          <div className="editorial-numeral text-[64px] leading-none mb-6">03</div>
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] text-main-02 mb-3">
            <ArrowUpRight className="w-4 h-4" /> Barter desk
          </div>
          <h3 className="text-neutral-12 mb-4">
            Trade your inventory for media.
          </h3>
          <p className="text-body text-neutral-10 mb-8">
            Our proprietary engine for high-value media exchange. Fund part — or all — of
            your campaign with product, services or excess inventory.
          </p>
          <div className="mt-auto pt-6 border-t border-neutral-03">
            <a
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-coral font-bold text-xs uppercase tracking-[0.22em] hover:gap-3 transition-all"
            >
              Explore barter
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default FeaturesSection;
