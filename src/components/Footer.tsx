import InstagramLogo from "@/assets/Instagram_Logo.png";
import LinkedinLogo from "@/assets/Linkedin_Logo.png";
import ThreadsLogo from "@/assets/Threads_Logo.png";
import SocialLink from "./footer/SocialLink";
import FooterNavList from "./footer/FooterNavList";
import logo from "@/assets/bizex4u-logo.png.asset.json";

const agencyLinks = [
  { label: "Home", href: "/" },
  { label: "Channels", href: "/channels" },
  { label: "How it works", href: "/how-it-works" },
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
    <footer className={`pt-16 pb-10 bg-neutral-12 text-neutral-00 ${showDivider ? "" : ""}`}>
      <div className="container">
        {/* Masthead row */}
        <div className="flex items-center justify-between pb-6 border-b border-neutral-00/15 mb-12 text-[11px] font-bold uppercase tracking-[0.22em] text-neutral-00/60">
          <span>BIZEX4U — Volume 01</span>
          <span className="hidden tablet:inline">Cash · Barter · Or both</span>
          <span>India</span>
        </div>

        <div className="flex flex-col gap-12 desktop:flex-row desktop:justify-between desktop:items-start">
          {/* Brand */}
          <div className="flex flex-col gap-6 max-w-[360px]">
            <div className="bg-neutral-00 inline-flex w-fit px-4 py-2 rounded-xl">
              <img src={logo.url} alt="BIZEX4U" className="h-9 w-auto object-contain" />
            </div>
            <p className="font-syne text-[22px] tablet:text-[26px] leading-tight font-semibold text-neutral-00">
              India's full-service ad agency for{" "}
              <span className="text-coral">cash &amp; barter</span> campaigns.
            </p>
            <div className="flex flex-col gap-1 text-sm">
              <a href="mailto:yash@bizex4u.com" className="text-neutral-00 hover:text-coral transition-colors">
                yash@bizex4u.com
              </a>
              <a href="tel:+918090500009" className="text-neutral-00 hover:text-coral transition-colors">
                +91 80905 00009
              </a>
            </div>
            <div className="flex items-center gap-2">
              <SocialLink href="https://instagram.com" icon={<img src={InstagramLogo} alt="Instagram" className="w-5 h-5" />} />
              <SocialLink href="https://linkedin.com" icon={<img src={LinkedinLogo} alt="LinkedIn" className="w-5 h-5" />} />
              <SocialLink href="https://threads.com" icon={<img src={ThreadsLogo} alt="Threads" className="w-5 h-5" />} />
            </div>
          </div>

          {/* Nav columns */}
          <div className="flex flex-col gap-10 desktop:items-end">
            <div className="flex gap-12">
              <FooterNavList title="Agency" items={agencyLinks} />
              <FooterNavList title="Company" items={companyLinks} />
            </div>
          </div>
        </div>

        {/* Colophon */}
        <div className="mt-16 pt-6 border-t border-neutral-00/15 flex flex-col tablet:flex-row tablet:items-center tablet:justify-between gap-4 text-[11px] font-bold uppercase tracking-[0.22em] text-neutral-00/50">
          <span>© {new Date().getFullYear()} BIZEX4U. All rights reserved.</span>
          <span>Planned, negotiated &amp; executed across India.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
