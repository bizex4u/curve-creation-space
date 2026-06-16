import SectionHeader from "./SectionHeader";
import FilledButton from "./FilledButton";
import FAQItem from "./FAQItem";
import BrushHighlight from "./BrushHighlight";
import LazyVideo from "./ui/LazyVideo";
import thinkingVideo from "@/assets/Man_thinking.mp4";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqData = [
  {
    question: "How do I connect my financial data sources?",
    answer: "You can connect your financial data sources through our secure integration portal. We support major banks, accounting software, and payment processors. Simply navigate to the Integrations section in your dashboard and follow the step-by-step connection wizard."
  },
  {
    question: "Can I change or cancel my plan at any time?",
    answer: "Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the start of your next billing cycle. If you cancel, you'll retain access to your current plan features until the end of your billing period."
  },
  {
    question: "How secure is my data?",
    answer: "We take security seriously. All data is encrypted at rest and in transit using industry-standard AES-256 encryption. We're SOC 2 Type II certified and undergo regular third-party security audits. Your financial data is never shared with third parties."
  },
  {
    question: "Does the platform support multiple team members?",
    answer: "Absolutely! Our Team and Enterprise plans support unlimited team members with role-based access controls. You can assign different permission levels to team members, ensuring everyone has access to the features they need while maintaining data security."
  },
  {
    question: "What integrations are included?",
    answer: "We offer 50+ integrations including major banks, accounting software (QuickBooks, Xero), payment processors (Stripe, PayPal), and CRM systems. Premium integrations like ERP systems are available on our Enterprise plan."
  },
  {
    question: "Do you offer onboarding support?",
    answer: "Yes! All plans include access to our comprehensive knowledge base and email support. Pro plans include priority support with faster response times, and Enterprise plans include dedicated onboarding specialists and custom training sessions."
  }
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
                <FilledButton href="/#contact-section">Contact us</FilledButton>
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
