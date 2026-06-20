import { Helmet } from "react-helmet-async";
import { ClipboardList, Map, Scale, Rocket, FileBarChart, Clock, MapPin, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrushHighlight from "@/components/BrushHighlight";
import FilledButton from "@/components/FilledButton";
import SectionHeader from "@/components/SectionHeader";
import ProcessCard from "@/components/ProcessCard";
import FAQItem from "@/components/FAQItem";
import DotPatternBackground from "@/components/DotPatternBackground";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    stepNumber: "01",
    icon: <ClipboardList size={36} strokeWidth={1.75} />,
    title: "Brief",
    description: (
      <>
        Share your target cities, audience, and rough budget — cash, inventory, or a mix. A dedicated strategist picks it up within 24 hours.
      </>
    ),
  },
  {
    stepNumber: "02",
    icon: <Map size={36} strokeWidth={1.75} />,
    title: "Plan",
    description: (
      <>
        Your strategist maps the right channels —{" "}
        <Link to="/outdoor-advertising" className="text-main-02 hover:underline">outdoor</Link>,{" "}
        <Link to="/metro-branding" className="text-main-02 hover:underline">metro</Link>,{" "}
        <Link to="/airport-advertising" className="text-main-02 hover:underline">airport</Link>,{" "}
        <Link to="/dooh-advertising" className="text-main-02 hover:underline">DOOH</Link>, cinema, radio or print — and negotiates directly with media owners.
      </>
    ),
  },
  {
    stepNumber: "03",
    icon: <Scale size={36} strokeWidth={1.75} />,
    title: "Barter valuation",
    description: (
      <>
        If you're using{" "}
        <Link to="/barter-advertising" className="text-main-02 hover:underline">barter</Link>,
        we value your inventory, agree a fair worth, and match it to media of equivalent value. Contracts raised on both sides.
      </>
    ),
  },
  {
    stepNumber: "04",
    icon: <Rocket size={36} strokeWidth={1.75} />,
    title: "Execute",
    description: (
      <>
        Campaign goes live. We send geo-tagged mounting proofs and conduct regular monitoring visits. You get updates without chasing.
      </>
    ),
  },
  {
    stepNumber: "05",
    icon: <FileBarChart size={36} strokeWidth={1.75} />,
    title: "Report",
    description: (
      <>
        Full report at the end of every campaign: placements, impressions, photos, and what we'd recommend for next time.
      </>
    ),
  },
];

const stats = [
  { icon: <Clock size={18} strokeWidth={2} />, label: "7–14 days brief to live" },
  { icon: <MapPin size={18} strokeWidth={2} />, label: "12+ Indian cities" },
  { icon: <Award size={18} strokeWidth={2} />, label: "40+ Indian brands trust us" },
];

const faqs = [
  {
    question: "What is the minimum campaign size?",
    answer:
      "We work with budgets from ₹5 lakh upward for cash campaigns. For barter, minimum inventory value is typically ₹3–5 lakh.",
  },
  {
    question: "What can I barter with?",
    answer:
      "FMCG products, consumer electronics, fashion & apparel, food & beverages, personal care, home goods — any physical inventory with resale value.",
  },
  {
    question: "How long does campaign setup take?",
    answer:
      "Typically 7–14 days from brief to live, depending on channels and cities.",
  },
  {
    question: "Do you work outside Delhi and Mumbai?",
    answer:
      "Yes — we plan and buy in 12+ cities including Bangalore, Hyderabad, Chennai, Kolkata, Pune, Ahmedabad, Kanpur and more.",
  },
];

const StepsGrid = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-8 tablet:gap-6 w-full"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease-in-out, transform 0.6s ease-in-out",
      }}
    >
      {steps.map((s) => (
        <ProcessCard
          key={s.stepNumber}
          stepNumber={s.stepNumber}
          icon={s.icon}
          title={s.title}
          description={s.description}
        />
      ))}
    </div>
  );
};

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-neutral-00">
      <Helmet>
        <title>How Cash & Barter Advertising Works | BIZEX4U</title>
        <meta
          name="description"
          content="See how BIZEX4U plans, negotiates and executes cash and barter advertising campaigns across India — step by step."
        />
        <link rel="canonical" href="https://bizex4u.com/how-it-works" />
        <meta property="og:title" content="How Cash & Barter Advertising Works | BIZEX4U" />
        <meta property="og:description" content="See how BIZEX4U plans, negotiates and executes cash and barter advertising campaigns across India — step by step." />
        <meta property="og:url" content="https://bizex4u.com/how-it-works" />
        <meta property="og:image" content="https://bizex4u.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How Cash & Barter Advertising Works | BIZEX4U" />
        <meta name="twitter:description" content="See how BIZEX4U plans, negotiates and executes cash and barter advertising campaigns across India — step by step." />
        <meta name="twitter:image" content="https://bizex4u.com/og-image.jpg" />
      </Helmet>

      <Navbar />

      {/* Page header */}
      <header className="page-header">
        <div className="container flex flex-col items-center text-center">
          <h1 className="text-h1 text-neutral-12 w-full tablet:w-[80%] desktop:w-[70%] max-w-[760px]">
            How a BIZEX4U{" "}
            <BrushHighlight delay={400}>campaign</BrushHighlight>{" "}
            <BrushHighlight delay={600}>works</BrushHighlight>
          </h1>
          <p className="text-body-large text-neutral-10 mt-5 max-w-[640px]">
            From first brief to final proof — here is what working with us looks
            like, whether your budget is cash, barter, or both.
          </p>

          {/* Stat pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-01 border border-neutral-02 text-label text-neutral-12"
              >
                <span className="text-main-02">{s.icon}</span>
                <span className="whitespace-nowrap">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* 5-step process */}
      <section className="relative section">
        <DotPatternBackground variant="neutral" hideOnMobile />
        <div className="relative z-10 container flex flex-col items-center">
          <SectionHeader
            title={
              <>
                Five steps from brief to{" "}
                <BrushHighlight>proof</BrushHighlight>
              </>
            }
            subtitle="One strategist, one workflow — whether the campaign is cash, barter, or a blend."
            align="center"
            maxWidth="600px"
          />
          <StepsGrid />
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-neutral-01">
        <div className="container flex flex-col items-center">
          <SectionHeader
            title={
              <>
                Common <BrushHighlight>questions</BrushHighlight>
              </>
            }
            subtitle="The things brands usually ask us before kicking off."
            align="center"
            maxWidth="550px"
          />
          <div className="w-full max-w-[760px] flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA card */}
      <section className="section">
        <div className="container">
          <div
            className="relative overflow-hidden rounded-[20px] px-6 py-12 tablet:px-12 tablet:py-16 flex flex-col items-center text-center border border-main-01"
            style={{
              background:
                "linear-gradient(135deg, hsl(var(--theme-main-00)) 0%, hsl(var(--theme-main-01)) 100%)",
              boxShadow: "0 12px 32px hsl(var(--theme-main-02) / 0.14)",
            }}
          >
            <div
              className="absolute inset-0 opacity-40 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle, hsl(var(--theme-main-02) / 0.22) 1px, transparent 1px)",
                backgroundSize: "14px 14px",
              }}
            />
            <div className="relative z-10 flex flex-col items-center">
              <h2 className="max-w-[620px] text-neutral-12">
                Ready to <BrushHighlight>start?</BrushHighlight>
              </h2>
              <p className="text-body-large text-neutral-10 mt-4 max-w-[520px]">
                Tell us your market and goal. A strategist will reply within 24 hours with a plan and a price.
              </p>
              <div className="mt-7">
                <FilledButton href="/contact">Plan my campaign</FilledButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer showDivider={false} />
    </div>
  );
};

export default HowItWorks;
