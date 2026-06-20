import LinkedinLogo from "@/assets/Linkedin_Logo.png";
import SocialLink from "./footer/SocialLink";
import FooterNavList from "./footer/FooterNavList";
import logo from "@/assets/bizex4u-logo.png.asset.json";
import { trackEmail, trackPhone } from "@/lib/analytics";

const agencyLinks = [
  { label: "Home", href: "/" },
  { label: "Channels", href: "/channels" },
  { label: "How it works", href: "/how-it-works" },
];

const serviceLinks = [
  { label: "Barter Advertising", href: "/barter-advertising" },
  { label: "Outdoor Advertising", href: "/outdoor-advertising" },
  { label: "Metro Branding", href: "/metro-branding" },
  { label: "Airport Advertising", href: "/airport-advertising" },
  { label: "DOOH Advertising", href: "/dooh-advertising" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

interface FooterProps {
  showDivider?: boolean;
}

const Footer = ({ showDivider = true }: FooterProps) => {
  return (
    <footer className={`pt-16 pb-10 desktop:pt-20 desktop:pb-12 bg-neutral-00 border-t-2 border-neutral-12`}>
      <div className="container">
        <div className="flex flex-col gap-12 desktop:flex-row desktop:justify-between desktop:items-start">
          <div className="flex flex-col gap-6 max-w-[340px]">
            <div className="flex items-center">
              <img src={logo.url} alt="Bizex4U – India's Barter and Media Buying Agency" className="h-12 w-auto object-contain" />
            </div>
            <p className="text-body-large font-medium text-neutral-11 leading-snug">
              Full-service advertising agency for India.<br />Cash. Barter. Or both.
            </p>
            <div className="flex flex-col gap-2">
              <a href="mailto:yash@bizex4u.com" onClick={() => trackEmail("footer")} className="text-body-large font-medium text-neutral-11 hover:text-neutral-12 transition-colors">yash@bizex4u.com</a>
              <a href="tel:+918090500009" onClick={() => trackPhone("footer")} className="text-body-large font-medium text-neutral-11 hover:text-neutral-12 transition-colors">+91 80905 00009</a>
            </div>
            <div className="flex items-center gap-2">
              <SocialLink href="https://in.linkedin.com/company/bizex4u" icon={<img src={LinkedinLogo} alt="LinkedIn" className="w-5 h-5" />} />
            </div>
          </div>

          <div className="flex flex-col gap-10 desktop:items-end">
            <div className="flex flex-wrap gap-12 desktop:gap-16">
              <FooterNavList title="Agency" items={agencyLinks} />
              <FooterNavList title="Services" items={serviceLinks} />
              <FooterNavList title="Company" items={companyLinks} />
            </div>
            <p className="text-body text-neutral-08 tracking-wide">
              © {new Date().getFullYear()} BIZEX4U. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
