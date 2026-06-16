import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import FilledButton from "./FilledButton";
import HashLink from "./HashLink";


interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  logoHref?: string;
  logoSrc?: string;
  navItems?: NavItem[];
  ctaText?: string;
  ctaHref?: string;
}

const defaultNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Channels", href: "/#features-section" },
  { label: "How it works", href: "/#pricing-section" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact-section" },
];

const Navbar = ({
  logoHref = "/",
  logoSrc,
  navItems = defaultNavItems,
  ctaText = "Plan my campaign",
  ctaHref = "/#contact-section",
}: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-[20px] left-1/2 -translate-x-1/2 z-50 w-[calc(100%-48px)] tablet:w-fit tablet:min-w-[616px] bg-neutral-00 rounded-[16px] py-[10px] px-[16px] items-center justify-between gap-8 border shadow-md border-neutral-03 flex flex-row">
        {/* Logo */}
        <Link to={logoHref} className="flex-shrink-0">
          <span className="text-[18px] font-semibold tracking-tight text-neutral-12" style={{ fontFamily: "'Manrope', sans-serif" }}>
            BIZEX<span style={{ color: "hsl(var(--theme-main-02))" }}>4</span>U
          </span>
        </Link>


        {/* Navigation Links - hidden on mobile */}
        <div className="hidden tablet:flex items-center gap-[16px]">
        {navItems.map((item) => (
            <HashLink
              key={item.label}
              to={item.href}
              className="text-nav text-neutral-11 hover:text-neutral-12 transition-colors"
            >
              {item.label}
            </HashLink>
          ))}
        </div>

        {/* CTA Button - hidden on mobile */}
        <div className="hidden tablet:block">
          <FilledButton href={ctaHref}>{ctaText}</FilledButton>
        </div>

        {/* Mobile Menu Button - visible only on mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="tablet:hidden btn-filled flex items-center gap-2 text-neutral-00 py-[10px] px-[12px] rounded-[12px] text-nav"
        >
          <span>{isMobileMenuOpen ? "Close" : "Menu"}</span>
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 tablet:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-neutral-12/50"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={`absolute top-[96px] left-1/2 -translate-x-1/2 w-[calc(100%-48px)] bg-neutral-12 rounded-[12px] p-[20px] shadow-[0_2px_20px_rgba(0,0,0,0.15)] border border-neutral-10 transition-all duration-300 ease-out flex flex-col items-center gap-3 ${
            isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
        {navItems.map((item) => (
            <HashLink
              key={item.label}
              to={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-nav text-neutral-00 hover:text-neutral-03 transition-colors"
            >
              {item.label}
            </HashLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
