import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import HashLink from "./HashLink";
import FilledButton from "./FilledButton";
import logo from "@/assets/bizex4u-logo.png.asset.json";

interface NavbarProps {
  logoHref?: string;
}

const serviceLinks = [
  { label: "Barter Advertising", href: "/barter-advertising" },
  { label: "Outdoor Advertising", href: "/outdoor-advertising" },
  { label: "Metro Branding", href: "/metro-branding" },
  { label: "Airport Advertising", href: "/airport-advertising" },
  { label: "DOOH Advertising", href: "/dooh-advertising" },
];

const Navbar = ({
  logoHref = "/",
}: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsServicesOpen(false);
    };
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Close mobile menu on route change
  const closeMobile = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-[16px] left-1/2 -translate-x-1/2 z-50 w-[calc(100%-32px)] tablet:w-fit tablet:min-w-[860px] h-[72px] rounded-[18px] pl-[14px] pr-[10px] items-center justify-between gap-6 border flex flex-row whitespace-nowrap transition-all duration-300 ${
          scrolled
            ? "bg-neutral-00/85 backdrop-blur-md border-neutral-03 shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
            : "bg-neutral-00 border-neutral-03 shadow-md"
        }`}
      >
        {/* Logo */}
        <Link to={logoHref} className="flex-shrink-0 flex items-center gap-2 pl-1">
          <img
            src={logo.url}
            alt="Bizex4U – India's Barter and Media Buying Agency"
            className="h-10 tablet:h-11 w-auto object-contain block"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden tablet:flex items-center gap-2">
          <HashLink
            to="/"
            className="relative text-nav text-neutral-11 hover:text-neutral-12 px-3 py-1.5 rounded-[10px] hover:bg-neutral-02 transition-colors whitespace-nowrap"
          >
            Home
          </HashLink>

          {/* Services dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setIsServicesOpen((v) => !v)}
              aria-haspopup="true"
              aria-expanded={isServicesOpen}
              className={`flex items-center gap-1 text-nav text-neutral-11 hover:text-neutral-12 px-3 py-1.5 rounded-[10px] hover:bg-neutral-02 transition-colors whitespace-nowrap ${isServicesOpen ? "bg-neutral-02 text-neutral-12" : ""}`}
            >
              Services
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${isServicesOpen ? "rotate-180" : "rotate-0"}`}
              />
            </button>

            {/* Dropdown panel */}
            <div
              className={`absolute top-[calc(100%+8px)] left-0 z-50 w-[220px] bg-neutral-00 border border-neutral-03 rounded-[14px] shadow-[0_8px_24px_rgba(0,0,0,0.10)] py-2 flex flex-col transition-all duration-200 ${
                isServicesOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              {serviceLinks.map((s) => (
                <Link
                  key={s.href}
                  to={s.href}
                  onClick={() => setIsServicesOpen(false)}
                  className="text-nav text-neutral-11 hover:text-neutral-12 hover:bg-neutral-01 px-4 py-2.5 transition-colors first:rounded-t-[12px] last:rounded-b-[12px]"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {["Channels", "How it works", "Blog", "About", "Contact"].map((label) => {
            const href = {
              Channels: "/channels",
              "How it works": "/how-it-works",
              Blog: "/blog",
              About: "/about",
              Contact: "/contact",
            }[label]!;
            return (
              <HashLink
                key={label}
                to={href}
                className="relative text-nav text-neutral-11 hover:text-neutral-12 px-3 py-1.5 rounded-[10px] hover:bg-neutral-02 transition-colors"
              >
                {label}
              </HashLink>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden tablet:block flex-shrink-0">
          <FilledButton href="/contact" showArrow={false}>Get Media Plan</FilledButton>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          className="tablet:hidden btn-filled flex items-center gap-2 text-neutral-00 py-[10px] px-[12px] rounded-[12px] text-nav"
        >
          <span>{isMobileMenuOpen ? "Close" : "Menu"}</span>
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 tablet:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-neutral-12/50"
          onClick={closeMobile}
        />

        <div
          id="mobile-menu"
          className={`absolute top-[96px] left-1/2 -translate-x-1/2 w-[calc(100%-48px)] bg-neutral-12 rounded-[12px] p-[20px] shadow-[0_2px_20px_rgba(0,0,0,0.15)] border border-neutral-10 transition-all duration-300 ease-out flex flex-col items-center gap-1 ${
            isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <HashLink to="/" onClick={closeMobile} className="w-full text-center text-nav text-neutral-00 hover:text-neutral-03 transition-colors py-2">
            Home
          </HashLink>

          {/* Mobile Services accordion */}
          <div className="w-full">
            <button
              onClick={() => setIsMobileServicesOpen((v) => !v)}
              aria-haspopup="true"
              aria-expanded={isMobileServicesOpen}
              aria-controls="mobile-services-menu"
              className="w-full flex items-center justify-center gap-1.5 text-nav text-neutral-00 hover:text-neutral-03 transition-colors py-2"
            >
              Services
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : "rotate-0"}`}
              />
            </button>
            <div
              id="mobile-services-menu"
              className={`overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                isMobileServicesOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex flex-col items-center gap-1 pb-2 border-b border-neutral-10 mb-1">
                {serviceLinks.map((s) => (
                  <Link
                    key={s.href}
                    to={s.href}
                    onClick={closeMobile}
                    className="text-nav text-neutral-04 hover:text-neutral-00 transition-colors py-2.5"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {["Channels", "How it works", "Blog", "About", "Contact"].map((label) => {
            const href = {
              Channels: "/channels",
              "How it works": "/how-it-works",
              Blog: "/blog",
              About: "/about",
              Contact: "/contact",
            }[label]!;
            return (
              <HashLink
                key={label}
                to={href}
                onClick={closeMobile}
                className="w-full text-center text-nav text-neutral-00 hover:text-neutral-03 transition-colors py-2"
              >
                {label}
              </HashLink>
            );
          })}

          <div className="mt-2 w-full">
            <FilledButton href="/contact" onClick={closeMobile} fullWidth showArrow={false}>
              Get Media Plan
            </FilledButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
