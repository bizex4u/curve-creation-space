import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionHeader from "@/components/SectionHeader";
import FAQItem from "@/components/FAQItem";
import FilledButton from "@/components/FilledButton";

export interface FAQEntry {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  title?: string;
  subtitle?: string;
  faqs: FAQEntry[];
}

const ServiceFAQ = ({
  title = "Frequently asked questions",
  subtitle = "Quick answers about this advertising channel.",
  faqs,
}: ServiceFAQProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="section"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease-in-out, transform 0.6s ease-in-out",
      }}
    >
      <div className="container">
        <div className="flex flex-col tablet:flex-row tablet:justify-between gap-10">
          <div className="w-full tablet:w-[33%] tablet:sticky tablet:top-[160px] tablet:self-start">
            <SectionHeader title={title} subtitle={subtitle} />
            <div className="mt-8">
              <FilledButton href="/contact">Ask us anything</FilledButton>
            </div>
          </div>
          <div className="w-full tablet:w-[58%]">
            <div className="bg-neutral-01 px-4 py-5 tablet:px-5 tablet:py-6 desktop:px-8 desktop:py-10 rounded-2xl desktop:rounded-3xl flex flex-col gap-4 tablet:gap-5">
              {faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;
