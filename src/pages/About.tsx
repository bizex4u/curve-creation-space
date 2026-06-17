import { Helmet } from "react-helmet-async";
import { MapPin, Mail, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FounderSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="container section"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease-in-out, transform 0.6s ease-in-out",
      }}
    >
      <div className="flex flex-col desktop:flex-row gap-8 desktop:gap-16 items-start">
        {/* Photo */}
        <div className="w-full desktop:w-[40%] flex-shrink-0">
          <div className="aspect-[3/4] w-full max-w-[360px] mx-auto desktop:mx-0 bg-neutral-01 border border-neutral-03 rounded-[12px] flex items-center justify-center overflow-hidden">
            <span className="text-body-small text-neutral-08">founder-photo.jpg</span>
          </div>
        </div>

        {/* Text */}
        <div className="w-full desktop:w-[60%] flex flex-col justify-center">
          <p className="text-label text-neutral-09 mb-3">Founder, BIZEX4U</p>
          <h2 className="text-h2 text-neutral-12 mb-6">Yash Mehrotra</h2>
          <p className="text-body-large text-neutral-10">
            Yash Mehrotra founded BIZEX4U to give Indian brands — especially D2C and challenger brands — access to premium outdoor, transit, mall and cinema media without always needing full cash budgets. Based in Kanpur, BIZEX4U works with brands across India on cash campaigns, barter deals, and hybrid media plans.
          </p>
        </div>
      </div>
    </section>
  );
};

const MissionSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="container section"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease-in-out, transform 0.6s ease-in-out",
      }}
    >
      <div className="max-w-[900px] mx-auto text-center">
        <p className="text-body text-neutral-09 mb-4">Our approach</p>
        <h3 className="text-h3 text-neutral-12">
          Plan every rupee. Negotiate every rate. Prove every placement.
        </h3>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const stats = [
    {
      value: "20+",
      label: "Brands served",
      detail: "From challenger D2C to listed consumer names across India.",
    },
    {
      value: "12+",
      label: "Cities covered",
      detail: "Pan-India OOH, transit, mall, cinema and print buying.",
    },
    {
      value: "8 channels",
      label: "Media mix",
      detail: "OOH, transit, mall, cinema, radio, print, digital, OTT.",
    },
    {
      value: "100%",
      label: "Inventory utilised",
      detail: "For barter clients — surplus stock converted into reach.",
    },
  ];

  return (
    <section ref={ref} className="container section">
      <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-3 desktop:gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-neutral-01 p-6 rounded-[12px] border border-neutral-02"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.6s ease-in-out ${index * 0.1}s, transform 0.6s ease-in-out ${index * 0.1}s`,
            }}
          >
            <span className="font-geist text-[48px] font-semibold tracking-[-0.04em] text-neutral-11 leading-none block">
              {stat.value}
            </span>
            <h6 className="text-h6 text-neutral-10 mt-2">{stat.label}</h6>
            <p className="text-body text-neutral-10 mt-4">{stat.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const ContactInfoSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const items = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Address",
      value: "G4, Mon Enclave Apartments, Khalasi Line, Swaroop Nagar, Kanpur, Uttar Pradesh 208002, India",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "yash@bizex4u.com",
      href: "mailto:yash@bizex4u.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 80905 00009",
      href: "tel:+918090500009",
    },
  ];

  return (
    <section
      ref={ref}
      className="container section"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease-in-out, transform 0.6s ease-in-out",
      }}
    >
      <div className="max-w-[700px]">
        <h2 className="text-h2 text-neutral-12 mb-8">Where we work from</h2>
        <div className="flex flex-col gap-6">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-neutral-01 border border-neutral-02 flex items-center justify-center text-neutral-11">
                {item.icon}
              </div>
              <div>
                <p className="text-label text-neutral-09 mb-1">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-body text-neutral-11 hover:text-neutral-12 transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-body text-neutral-11">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <div className="min-h-screen bg-neutral-00">
      <Helmet>
        <title>About BIZEX4U — India's Barter &amp; Advertising Agency</title>
        <meta
          name="description"
          content="Meet BIZEX4U — India's full-service advertising and barter media agency planning cash and trade campaigns across the country."
        />
        <link rel="canonical" href="/about" />
        <meta
          property="og:title"
          content="About BIZEX4U — India's Barter &amp; Advertising Agency"
        />
        <meta property="og:url" content="/about" />
      </Helmet>

      <Navbar />

      {/* Hero */}
      <header className="page-header-top pb-10 desktop:pb-16">
        <div className="container">
          <div className="max-w-[720px]">
            <h1 className="text-h1 text-neutral-12 mb-6">
              Built by someone who ran campaigns the hard way
            </h1>
            <p className="text-body-large text-neutral-10 max-w-[600px]">
              BIZEX4U was founded by Yash Mehrotra to solve a problem most agencies ignore — brands sitting on surplus inventory that could be converted into premium media reach.
            </p>
          </div>
        </div>
      </header>

      {/* Founder */}
      <FounderSection />

      {/* Mission */}
      <MissionSection />

      {/* Stats */}
      <StatsSection />

      {/* Contact / Office */}
      <ContactInfoSection />

      <CTASection />
      <Footer showDivider={false} />
    </div>
  );
};

export default About;
