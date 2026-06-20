import { Phone, Mail, Building2, Clock } from "lucide-react";
import SectionHeader from "./SectionHeader";
import ContactInfoCard from "./ContactInfoCard";
import BrushHighlight from "./BrushHighlight";
import LeadForm from "./LeadForm";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { trackPhone, trackEmail } from "@/lib/analytics";

const LeadFormMount = () => <LeadForm source="contact_section" />;

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section 
      id="contact-section" 
      ref={ref}
      className="section"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out',
      }}
    >
      <div className="container">
        <div className="flex flex-col items-center">
          {/* Header - center aligned, 50% width, max-width 550px */}
          <div className="w-full tablet:w-2/3 desktop:w-1/2">
            <SectionHeader
              title={<>Plan your <BrushHighlight>campaign</BrushHighlight></>}
              subtitle="Tell us your market, channels and what you'd like to fund in cash versus barter. We'll come back with a plan within 2 business days."
              align="center"
              maxWidth="600px"
            />
          </div>


          <div className="w-full max-w-[720px] mt-10 bg-neutral-00 border border-neutral-03 rounded-[20px] p-6 tablet:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
            <LeadFormMount />
          </div>

          <div className="w-full grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-3 mt-10">
            <ContactInfoCard icon={<Phone strokeWidth={1.5} />}>
              <a href="tel:+918090500009" onClick={() => trackPhone("contact_section")} className="hover:text-main-01 transition-colors">+91 80905 00009</a>
            </ContactInfoCard>
            <ContactInfoCard icon={<Mail strokeWidth={1.5} />}>
              <a href="mailto:yash@bizex4u.com" onClick={() => trackEmail("contact_section")} className="hover:text-main-01 transition-colors">yash@bizex4u.com</a>
            </ContactInfoCard>
            <ContactInfoCard icon={<Building2 strokeWidth={1.5} />}>
              Pan-India campaigns
              <br />
              HQ: Delhi NCR
            </ContactInfoCard>
            <ContactInfoCard icon={<Clock strokeWidth={1.5} />}>
              10am – 7pm IST
              <br />
              Monday – Saturday
            </ContactInfoCard>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
