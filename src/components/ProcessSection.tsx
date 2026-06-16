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
    title: "Connect your data",
    description: "Import financial sources with quick and secure integrations."
  },
  {
    stepNumber: "02",
    imageSrc: Process2,
    title: "Let AI analyze",
    description: "Your data is processed instantly to reveal trends and patterns."
  },
  {
    stepNumber: "03",
    imageSrc: Process3,
    title: "View clear insights",
    description: "See forecasts, reports, and metrics in one intuitive workspace."
  }
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
          title={<>Get started in <BrushHighlight>3</BrushHighlight> <BrushHighlight>steps</BrushHighlight></>}
          subtitle="A simple flow that brings clarity to your financial data in minutes."
          align="center"
          className="w-full tablet:w-[66%] desktop:w-[50%]"
          maxWidth="550px"
        />
        
        {/* Process Cards */}
        <div className="flex flex-col tablet:flex-row gap-10 tablet:gap-3 section-header w-full desktop:w-[83%]">
          {processData.map((process) => (
            <ProcessCard
              key={process.stepNumber}
              stepNumber={process.stepNumber}
              imageSrc={process.imageSrc}
              title={process.title}
              description={process.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
