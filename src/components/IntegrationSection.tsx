import SectionHeader from "./SectionHeader";
import BrushHighlight from "./BrushHighlight";
import LazyVideo from "./ui/LazyVideo";
import joyfulGirlVideo from "@/assets/Joyful_Girl_with_Wand.mp4";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const mediaPartners = [
  "PVR INOX", "Times Group", "HT Media", "Hindustan Times", "Bombay Times",
  "Femina", "Vogue India", "Cosmopolitan", "Delhi Metro", "BMRCL",
  "Mumbai Metro", "Indian Railways", "GMR Airports", "Adani Airports",
  "DLF Malls", "Phoenix Mills", "Inorbit", "Select CITYWALK",
];

const Row = ({ items, reverse = false }: { items: string[]; reverse?: boolean }) => (
  <div
    className="relative overflow-hidden w-full"
    style={{
      maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
      WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
    }}
  >
    <div className={`flex w-max ${reverse ? 'animate-ticker-reverse' : 'animate-ticker'} [animation-duration:60s]`}>
      {[1, 2, 3].map((s) => (
        <div key={s} className="flex shrink-0 gap-3 pr-3">
          {items.map((name, i) => (
            <span
              key={i}
              className="shrink-0 px-5 py-3 rounded-[12px] bg-neutral-01 border border-neutral-03 text-body text-neutral-11 whitespace-nowrap"
            >
              {name}
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const IntegrationSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const half = Math.ceil(mediaPartners.length / 2);
  const row1 = mediaPartners.slice(0, half);
  const row2 = mediaPartners.slice(half);

  return (
    <section
      ref={ref}
      className="section"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out',
      }}
    >
      <div className="container">
        <SectionHeader
          title={<>Media partners we <BrushHighlight>buy across</BrushHighlight></>}
          subtitle="Direct relationships with the media owners that matter — so your campaign gets prime placements at negotiated rates."
          align="center"
          className="w-full tablet:w-[66%] desktop:w-[50%]"
          maxWidth="600px"
        />

        <div className="flex justify-center section-header">
          <LazyVideo src={joyfulGirlVideo} className="w-[210px] h-[210px]" />
        </div>

        <div className="flex flex-col gap-4 mt-0">
          <Row items={row1} />
          <Row items={row2} reverse />
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
