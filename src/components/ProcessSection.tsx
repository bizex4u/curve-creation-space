import DotPatternBackground from "./DotPatternBackground";
import SectionHeader from "./SectionHeader";
import ProcessCard from "./ProcessCard";
import BrushHighlight from "./BrushHighlight";
import Process1 from "@/assets/Process_1.png";
import Process2 from "@/assets/Process_2.png";
import Process3 from "@/assets/Process_3.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const processData = [
  {
    stepNumber: "01",
    imageSrc: Process1,
    title: "Plan & price",
    description: "Your strategist scopes channels, markets and dates, then quotes you the campaign in cash, barter, or a blend.",
  },
  {
    stepNumber: "02",
    imageSrc: Process2,
    title: "Negotiate & buy",
    description: "We negotiate direct with media owners — OOH, transit, mall, cinema, print, radio, digital — and lock placements.",
  },
  {
    stepNumber: "03",
    imageSrc: Process3,
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
          subtitle="One agency. One strategist. End-to-end planning, buying and execution across every channel that matters."
          align="center"
          className="w-full tablet:w-[66%] desktop:w-[50%]"
          maxWidth="550px"
        />

        <div className="flex flex-col tablet:flex-row gap-10 tablet:gap-3 section-header w-full desktop:w-[83%]">
          {processData.map((p) => (
            <ProcessCard
              key={p.stepNumber}
              stepNumber={p.stepNumber}
              imageSrc={p.imageSrc}
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
