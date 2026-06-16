import Logo from "@/assets/Logo_64.png";
import InstagramLogo from "@/assets/Instagram_Logo.png";
import LinkedinLogo from "@/assets/Linkedin_Logo.png";
import ThreadsLogo from "@/assets/Threads_Logo.png";
import SocialLink from "./footer/SocialLink";
import FooterNavList from "./footer/FooterNavList";

const productLinks = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/#pricing-section" },
  { label: "Features", href: "/#features-section" },
  { label: "FAQ", href: "/#faq-section" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact-section" },
  { label: "Blog", href: "/blog" },
];

const adminLinks = [
  { label: "Login", href: "/auth" },
  { label: "Instructions", href: "https://lunisdesign.com/lovable-template-guides/managing-cms-access", external: true },
];

interface FooterProps {
  showDivider?: boolean;
}

const Footer = ({ showDivider = true }: FooterProps) => {
  return (
    <footer className={`py-10 bg-neutral-00 desktop:h-[350px] ${showDivider ? 'border-t border-neutral-03' : ''}`}>
      <div className="container desktop:h-full">
        <div className="flex flex-col gap-16 tablet:gap-10 desktop:flex-row desktop:justify-between desktop:h-full">
          {/* Upper Row: Brand + Social Links */}
          <div className="flex flex-col gap-8 tablet:flex-row tablet:justify-between tablet:items-end desktop:flex-col desktop:justify-between desktop:items-start desktop:h-full">
            {/* Left: Logo + Contact Info */}
            <div className="flex flex-col">
              <img src={Logo} alt="Logo" className="h-10 w-auto object-contain object-left" />
              <div className="flex flex-col gap-2 mt-8">
                <span className="text-body font-medium text-neutral-10">
                  support@zovasaas.com
                </span>
                <span className="text-body font-medium text-neutral-10">
                  412-483-8261
                </span>
              </div>
            </div>
            
            {/* Right: Social Links */}
            <div className="flex items-center gap-2">
              <SocialLink href="https://instagram.com" icon={<img src={InstagramLogo} alt="Instagram" className="w-5 h-5" />} />
              <SocialLink href="https://linkedin.com" icon={<img src={LinkedinLogo} alt="LinkedIn" className="w-5 h-5" />} />
              <SocialLink href="https://threads.com" icon={<img src={ThreadsLogo} alt="Threads" className="w-5 h-5" />} />
            </div>
          </div>
          
          {/* Lower Row: Nav Lists + Copyright */}
          <div className="flex flex-col gap-8 tablet:flex-row tablet:justify-between tablet:items-end desktop:flex-col desktop:justify-between desktop:items-end desktop:h-full">
            {/* Left: Nav Lists */}
            <div className="flex gap-10">
              <FooterNavList title="Product" items={productLinks} />
              <FooterNavList title="Company" items={companyLinks} />
              <FooterNavList title="Admin" items={adminLinks} />
            </div>
            
            {/* Right: Copyright */}
            <p className="text-body text-neutral-10">
              Designed by <a href="https://lunisdesign.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-neutral-12 transition-colors">Lunis</a>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
