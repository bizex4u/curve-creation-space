import { Building2, TrainFront, ShoppingBag, Film, Radio, Newspaper, Globe, Plane, Megaphone, Users } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  { icon: <Megaphone size={24} />, title: "ATL activities", description: "Mass-reach above-the-line: TV, print, radio, OOH and cinema — built for awareness and brand recall at national scale.", href: undefined },
  { icon: <Users size={24} />, title: "BTL activities", description: "Below-the-line activations: mall promos, road shows, society sampling, retail branding and experiential events.", href: undefined },
  { icon: <Building2 size={24} />, title: "Outdoor (OOH)", description: "Billboards, unipoles, highway media and city branding across every major Indian metro and tier-2 market.", href: "/outdoor-advertising" },
  { icon: <TrainFront size={24} />, title: "Transit media", description: "Metro stations and panels, bus wraps, cab branding, rail and airport — high-frequency commuter reach.", href: "/metro-branding" },
  { icon: <ShoppingBag size={24} />, title: "Mall & retail", description: "Premium mall atriums, pillar wraps and in-store activations in high-footfall retail destinations.", href: undefined },
  { icon: <Film size={24} />, title: "Cinema", description: "On-screen and lobby placements across PVR INOX premium and standard screens, including IMAX.", href: undefined },
  { icon: <Radio size={24} />, title: "Radio & audio", description: "FM peak-hour spots, podcast mid-rolls, Spotify, Gaana and JioSaavn audio campaigns.", href: undefined },
  { icon: <Newspaper size={24} />, title: "Print", description: "Mainline dailies, HT City, Bombay Times and lifestyle titles like Femina, Vogue and Cosmopolitan.", href: undefined },
  { icon: <Globe size={24} />, title: "Digital & OTT", description: "Programmatic, social, Hotstar, Prime Video and Netflix companion — measured, optimised, reported.", href: "/dooh-advertising" },
  { icon: <Plane size={24} />, title: "Airport & travel", description: "Airport baggage belts, gate lounges and inflight — premium audience, captive attention.", href: "/airport-advertising" },
];

const FeaturesSection = () => {
  return (
    <section id="features-section" className="flex flex-col items-center gap-10 pt-20 pb-20">
      <div className="w-full grid grid-cols-1 gap-3 tablet:grid-cols-2 desktop:grid-cols-4 desktop:gap-[20px]">
        {features.map((f, i) => (
          <FeatureCard key={i} icon={f.icon} title={f.title} description={f.description} href={f.href} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
