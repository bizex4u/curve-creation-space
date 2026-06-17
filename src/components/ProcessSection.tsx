import { ClipboardList, Handshake, BarChart3 } from "lucide-react";
import DotPatternBackground from "./DotPatternBackground";
import SectionHeader from "./SectionHeader";
import ProcessCard from "./ProcessCard";
import BrushHighlight from "./BrushHighlight";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const processData = [
  {
    stepNumber: "01",
    icon: <ClipboardList size={36} strokeWidth={1.75} />,
    title: "Plan & price",
    description: "Your strategist scopes channels, markets and dates, then quotes the campaign in cash, barter, or a blend across ATL and BTL.",
  },
  {
    stepNumber: "02",
    icon: <Handshake size={36} strokeWidth={1.75} />,
    title: "Negotiate & buy",
    description: "We negotiate direct with media owners — OOH, transit, mall, cinema, print, radio, digital — and lock placements at agency rates.",
  },
  {
    stepNumber: "03",
    icon: <BarChart3 size={36} strokeWidth={1.75} />,
    title: "Execute & report",
    description: "Creative goes live, we share mounting and monitoring proofs, and a clean post-campaign report you can show your board.",
  },
];

const ProcessSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="relative section"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out',
      }}
    >
      <DotPatternBackground variant="neutral" hideOnMobile />
      <div className="relative z-10 container flex flex-col items-center">
        <SectionHeader
          title={<>How a BIZEX4U <BrushHighlight>campaign</BrushHighlight> <BrushHighlight>runs</BrushHighlight></>}
          subtitle="One agency. One strategist. End-to-end planning, buying and execution across ATL (mass-reach media) and BTL (on-ground activations, retail, experiential)."
          align="center"
          className="w-full tablet:w-[66%] desktop:w-[50%]"
          maxWidth="600px"
        />

        <div className="flex flex-col tablet:flex-row gap-10 tablet:gap-6 section-header w-full desktop:w-[90%]">
          {processData.map((p) => (
            <ProcessCard
              key={p.stepNumber}
              stepNumber={p.stepNumber}
              icon={p.icon}
              title={p.title}
              description={p.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
