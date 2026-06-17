import { useRef } from "react";
import { Building2, TrainFront, ShoppingBag, Film, Radio, Newspaper, Globe, Plane, Megaphone, Users } from "lucide-react";
import FeatureCard from "./FeatureCard";
import DashboardFrame from "./DashboardFrame";

const features = [
  { icon: <Megaphone size={24} />, title: "ATL activities", description: "Mass-reach above-the-line: TV, print, radio, OOH and cinema — built for awareness and brand recall at national scale." },
  { icon: <Users size={24} />, title: "BTL activities", description: "Below-the-line activations: mall promos, road shows, society sampling, retail branding and experiential events." },
  { icon: <Building2 size={24} />, title: "Outdoor (OOH)", description: "Billboards, unipoles, highway media and city branding across every major Indian metro and tier-2 market." },
  { icon: <TrainFront size={24} />, title: "Transit media", description: "Metro stations and panels, bus wraps, cab branding, rail and airport — high-frequency commuter reach." },
  { icon: <ShoppingBag size={24} />, title: "Mall & retail", description: "Premium mall atriums, pillar wraps and in-store activations in high-footfall retail destinations." },
  { icon: <Film size={24} />, title: "Cinema", description: "On-screen and lobby placements across PVR INOX premium and standard screens, including IMAX." },
  { icon: <Radio size={24} />, title: "Radio & audio", description: "FM peak-hour spots, podcast mid-rolls, Spotify, Gaana and JioSaavn audio campaigns." },
  { icon: <Newspaper size={24} />, title: "Print", description: "Mainline dailies, HT City, Bombay Times and lifestyle titles like Femina, Vogue and Cosmopolitan." },
  { icon: <Globe size={24} />, title: "Digital & OTT", description: "Programmatic, social, Hotstar, Prime Video and Netflix companion — measured, optimised, reported." },
  { icon: <Plane size={24} />, title: "Airport & travel", description: "Airport baggage belts, gate lounges and inflight — premium audience, captive attention." },
];

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="features-section" ref={sectionRef} className="section flex flex-col items-center gap-10">
      <DashboardFrame
        className="w-full tablet:w-[83%] max-w-[1079px]"
        sectionRef={sectionRef}
        animateOnLoad
      />

      <div className="w-full grid grid-cols-1 gap-3 tablet:grid-cols-2 desktop:grid-cols-4 desktop:gap-[20px]">
        {features.map((f, i) => (
          <FeatureCard key={i} icon={f.icon} title={f.title} description={f.description} />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
