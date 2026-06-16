import InstagramLogo from "@/assets/Instagram_Logo.png";
import LinkedinLogo from "@/assets/Linkedin_Logo.png";
import ThreadsLogo from "@/assets/Threads_Logo.png";
import SocialLink from "./footer/SocialLink";
import FooterNavList from "./footer/FooterNavList";
import logo from "@/assets/bizex4u-logo.png.asset.json";

const productLinks = [
  { label: "Home", href: "/" },
  { label: "Channels", href: "/#features-section" },
  { label: "How it works", href: "/#pricing-section" },
  { label: "FAQ", href: "/#faq-section" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact-section" },
  { label: "Blog", href: "/blog" },
];

const adminLinks = [
  { label: "Login", href: "/auth" },
];

interface FooterProps {
  showDivider?: boolean;
}

const Footer = ({ showDivider = true }: FooterProps) => {
  return (
    <footer className={`py-10 bg-neutral-00 desktop:h-[350px] ${showDivider ? 'border-t border-neutral-03' : ''}`}>
      <div className="container desktop:h-full">
        <div className="flex flex-col gap-16 tablet:gap-10 desktop:flex-row desktop:justify-between desktop:h-full">
          <div className="flex flex-col gap-8 tablet:flex-row tablet:justify-between tablet:items-end desktop:flex-col desktop:justify-between desktop:items-start desktop:h-full">
            <div className="flex flex-col">
              <img src={logo.url} alt="BIZEX4U" className="h-10 w-auto" />
              <p className="text-body text-neutral-10 mt-2 max-w-[280px]">
                Full-service ad agency for India. Cash. Barter. Or both.
              </p>
              <div className="flex flex-col gap-2 mt-6">
                <span className="text-body font-medium text-neutral-10">yash@bizex4u.com</span>
                <span className="text-body font-medium text-neutral-10">+91 80905 00009</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <SocialLink href="https://instagram.com" icon={<img src={InstagramLogo} alt="Instagram" className="w-5 h-5" />} />
              <SocialLink href="https://linkedin.com" icon={<img src={LinkedinLogo} alt="LinkedIn" className="w-5 h-5" />} />
              <SocialLink href="https://threads.com" icon={<img src={ThreadsLogo} alt="Threads" className="w-5 h-5" />} />
            </div>
          </div>

          <div className="flex flex-col gap-8 tablet:flex-row tablet:justify-between tablet:items-end desktop:flex-col desktop:justify-between desktop:items-end desktop:h-full">
            <div className="flex gap-10">
              <FooterNavList title="Agency" items={productLinks} />
              <FooterNavList title="Company" items={companyLinks} />
              <FooterNavList title="Admin" items={adminLinks} />
            </div>

            <p className="text-body text-neutral-10">
              © {new Date().getFullYear()} BIZEX4U. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
