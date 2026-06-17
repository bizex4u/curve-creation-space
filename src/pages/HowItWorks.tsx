import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrushHighlight from "@/components/BrushHighlight";
import FilledButton from "@/components/FilledButton";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    number: "01",
    label: "Brief",
    heading: "You tell us the market and the goal",
    body: "Share your target cities, audience, and rough budget — cash, inventory, or a mix. A dedicated strategist picks it up within 24 hours.",
  },
  {
    number: "02",
    label: "Plan",
    heading: "We build the media plan",
    body: "Your strategist maps the right channels — outdoor, transit, mall, cinema, radio, print or digital — and negotiates directly with media owners for the best rates.",
  },
  {
    number: "03",
    label: "Barter valuation (if applicable)",
    heading: "If you're using barter, we value your inventory",
    body: "We assess your surplus stock or unused service capacity, agree a fair value, and match it to media inventory of equivalent worth. Contracts and POs are raised on both sides.",
  },
  {
    number: "04",
    label: "Execute",
    heading: "We book, mount and monitor",
    body: "Campaign goes live. We send geo-tagged mounting proofs and conduct regular monitoring visits. You get updates without chasing.",
  },
  {
    number: "05",
    label: "Report",
    heading: "Post-campaign reporting",
    body: "Full report at the end of every campaign: placements, impressions, photos, and what we'd recommend for next time.",
  },
];

const faqs = [
  {
    question: "What is the minimum campaign size?",
    answer: "We work with budgets from ₹5 lakh upward for cash campaigns. For barter, minimum inventory value is typically ₹3–5 lakh.",
  },
  {
    question: "What can I barter with?",
    answer: "FMCG products, consumer electronics, fashion & apparel, food & beverages, personal care, home goods — any physical inventory with resale value.",
  },
  {
    question: "How long does campaign setup take?",
    answer: "Typically 7–14 days from brief to live, depending on channels and cities.",
  },
  {
    question: "Do you work outside Delhi and Mumbai?",
    answer: "Yes — we plan and buy in 12+ cities including Bangalore, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad, Kanpur and more.",
  },
];

function StepCard({
  step,
  isLast,
}: {
  step: (typeof steps)[0];
  isLast: boolean;
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className="relative flex gap-5 tablet:gap-8"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease-in-out, transform 0.6s ease-in-out",
      }}
    >
      {/* Timeline column */}
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 tablet:w-12 tablet:h-12 rounded-full bg-neutral-12 flex items-center justify-center shrink-0">
          <span className="text-label text-neutral-00 font-medium">
            {step.number}
          </span>
        </div>
        {!isLast && (
          <div className="w-px flex-1 bg-neutral-03 mt-3" />
        )}
      </div>

      {/* Content */}
      <div className="pb-10 tablet:pb-14">
        <span className="text-label uppercase tracking-wider text-neutral-09 font-medium">
          {step.label}
        </span>
        <h3 className="mt-2">{step.heading}</h3>
        <p className="text-body-large text-neutral-10 mt-3 max-w-[640px]">
          {step.body}
        </p>
      </div>
    </div>
  );
}

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className="border-b border-neutral-03 pb-6 mb-6 last:border-b-0 last:pb-0 last:mb-0"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease-in-out, transform 0.6s ease-in-out",
      }}
    >
      <h4 className="text-h4 text-neutral-12">{question}</h4>
      <p className="text-body-large text-neutral-10 mt-3">{answer}</p>
    </div>
  );
}

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-neutral-00">
      <Helmet>
        <title>How Cash & Barter Advertising Works | BIZEX4U</title>
        <meta
          name="description"
          content="See how BIZEX4U plans, negotiates and executes cash and barter advertising campaigns across India — step by step."
        />
        <link rel="canonical" href="/how-it-works" />
        <meta
          property="og:title"
          content="How Cash & Barter Advertising Works | BIZEX4U"
        />
        <meta property="og:url" content="/how-it-works" />
      </Helmet>

      <Navbar />

      {/* Page header */}
      <header className="page-header">
        <div className="container flex flex-col items-center text-center">
          <h1 className="text-h1 text-neutral-12 w-full tablet:w-[74%] desktop:w-[66%] max-w-[700px]">
            How a BIZEX4U{" "}
            <BrushHighlight delay={400}>campaign</BrushHighlight>{" "}
            <BrushHighlight delay={600}>works</BrushHighlight>
          </h1>
          <p className="text-body-large text-neutral-10 mt-5 max-w-[640px]">
            From first brief to final proof — here is what working with us looks
            like, whether your budget is cash, barter, or both.
          </p>
        </div>
      </header>

      {/* 5-step process */}
      <section className="section">
        <div className="container">
          <div className="max-w-[720px] mx-auto">
            {steps.map((step, index) => (
              <StepCard
                key={step.number}
                step={step}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-neutral-01">
        <div className="container">
          <div className="max-w-[720px] mx-auto">
            <h2 className="mb-10">
              Common <BrushHighlight>questions</BrushHighlight>
            </h2>
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container flex flex-col items-center text-center">
          <h2 className="max-w-[550px]">
            Ready to <BrushHighlight>start?</BrushHighlight>
          </h2>
          <div className="mt-6">
            <FilledButton href="/contact">Plan my campaign</FilledButton>
          </div>
        </div>
      </section>

      <Footer showDivider={false} />
    </div>
  );
};

export default HowItWorks;
