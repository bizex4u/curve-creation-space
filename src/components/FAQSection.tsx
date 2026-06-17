import SectionHeader from "./SectionHeader";
import FilledButton from "./FilledButton";
import FAQItem from "./FAQItem";
import BrushHighlight from "./BrushHighlight";
import LazyVideo from "./ui/LazyVideo";
import thinkingVideo from "@/assets/Man_thinking.mp4";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqData = [
  {
    question: "What exactly is barter advertising?",
    answer: "You pay for your media campaign using surplus inventory, unsold stock or unused service capacity instead of (or alongside) cash. BIZEX4U values the inventory, agrees a barter ratio with you and the media owner, and exchanges it for premium ad placements via a clean PO and contract.",
  },
  {
    question: "Can I mix cash and barter in one campaign?",
    answer: "Yes — this is what most BIZEX4U clients do. A typical hybrid campaign funds OOH, print and radio largely through barter, and tops up channels barter can't reach (like some digital and OTT inventory) in cash.",
  },
  {
    question: "Which media channels do you buy across?",
    answer: "Outdoor (billboards, unipoles, highway, city branding), transit (metro, bus, cab, rail, airport), mall and retail, cinema (PVR INOX premium and standard), radio, print (mainline + lifestyle titles), digital and OTT (Hotstar, Prime, Netflix DSP, Spotify, Gaana, JioSaavn).",
  },
  {
    question: "What kind of inventory can be used for barter?",
    answer: "FMCG and consumer goods, electronics, accessories, eyewear, jewellery, beverages, services with measurable retail value — anything we and the media owner can value cleanly. We'll evaluate your inventory on a call and propose a barter ratio per channel.",
  },
  {
    question: "Can you run a single-city campaign, or only national?",
    answer: "Both. We routinely run single-city pushes (e.g. a Delhi-NCR OOH burst or Bangalore mall + cinema activation) as well as full national multi-channel launches.",
  },
  {
    question: "How is the agency commission charged?",
    answer: "10% of the campaign budget — whether the budget is funded in cash, barter or a blend. That covers strategy, channel planning, negotiation, execution oversight, monitoring proofs and post-campaign reporting.",
  },
];


const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section 
      id="faq-section" 
      ref={ref}
      className="section"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out',
      }}
    >
      <div className="container">
        <div className="flex flex-col tablet:flex-row tablet:justify-between gap-10 tablet:gap-0">
          {/* Header Area - 33% width on desktop, sticky */}
          <div className="w-full tablet:w-[33%] tablet:sticky tablet:top-[160px] tablet:self-start">
            <SectionHeader
              title={<>Frequently asked <BrushHighlight>questions</BrushHighlight></>}
              subtitle="Quick answers to the most common questions about our platform."
            />
            
            {/* Video */}
            <div className="mt-5">
              <LazyVideo
                src={thinkingVideo}
                className="w-[200px] h-[200px] rounded-2xl overflow-hidden"
              />
            </div>
            
            {/* Text + Button */}
            <div className="mt-6 tablet:mt-16">
              <p className="text-body-large text-neutral-10">
                Still got questions?
              </p>
              <div className="mt-3">
                <FilledButton href="/contact">Contact us</FilledButton>
              </div>
            </div>
          </div>
          
          {/* FAQ List - 58% width on desktop */}
          <div className="w-full tablet:w-[58%]">
            <div className="bg-neutral-01 px-4 py-5 tablet:px-5 tablet:py-6 desktop:px-8 desktop:py-10 rounded-2xl desktop:rounded-3xl flex flex-col gap-4 tablet:gap-5">
              {faqData.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
