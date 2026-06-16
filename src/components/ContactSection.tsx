import { Phone, Mail, Building2, Clock } from "lucide-react";
import SectionHeader from "./SectionHeader";
import ContactInfoCard from "./ContactInfoCard";
import BrushHighlight from "./BrushHighlight";
import LazyVideo from "./ui/LazyVideo";
import talkingOnPhoneVideo from "@/assets/Talking_on_the_phone.mp4";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
              title={<>Get in <BrushHighlight>touch</BrushHighlight></>}
              subtitle="Reach out to our team for support or questions and we'll get back to you within 2 business days."
              align="center"
              maxWidth="550px"
            />
          </div>

          {/* Illustration - 64px gap from header */}
          <div className="mt-16">
            <LazyVideo
              src={talkingOnPhoneVideo}
              className="h-[220px] w-[220px]"
            />
          </div>

          {/* Contact cards - 24px gap from illustration */}
          <div className="w-full grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-4 gap-3 mt-6">
          <ContactInfoCard icon={<Phone strokeWidth={1.5} />}>
            412-483-8261
          </ContactInfoCard>
          <ContactInfoCard icon={<Mail strokeWidth={1.5} />}>
            support@zovasaas.com
          </ContactInfoCard>
          <ContactInfoCard icon={<Building2 strokeWidth={1.5} />}>
            210 Market St. Suite 402
            <br />
            San Francisco, CA
          </ContactInfoCard>
          <ContactInfoCard icon={<Clock strokeWidth={1.5} />}>
            9am-5pm EST
            <br />
            Monday - Friday
          </ContactInfoCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
