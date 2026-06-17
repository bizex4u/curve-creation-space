import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import HashLink from "./HashLink";
import logo from "@/assets/bizex4u-logo.png.asset.json";


interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  logoHref?: string;
  logoSrc?: string;
  navItems?: NavItem[];
}

const defaultNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Channels", href: "/channels" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = ({
  logoHref = "/",
  logoSrc,
  navItems = defaultNavItems,
}: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-[16px] left-1/2 -translate-x-1/2 z-50 w-[calc(100%-32px)] tablet:w-fit tablet:min-w-[680px] rounded-[18px] py-[10px] pl-[14px] pr-[10px] items-center justify-between gap-6 border flex flex-row transition-all duration-300 ${
          scrolled
            ? "bg-neutral-00/85 backdrop-blur-md border-neutral-03 shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
            : "bg-neutral-00 border-neutral-03 shadow-md"
        }`}
      >
        {/* Logo */}
        <Link to={logoHref} className="flex-shrink-0 flex items-center gap-2">
          <img src={logo.url} alt="BIZEX4U" className="h-8 w-auto" />
        </Link>



        {/* Navigation Links - hidden on mobile */}
        <div className="hidden tablet:flex items-center gap-[4px]">
        {navItems.map((item) => (
            <HashLink
              key={item.label}
              to={item.href}
              className="relative text-nav text-neutral-11 hover:text-neutral-12 px-3 py-1.5 rounded-[10px] hover:bg-neutral-02 transition-colors"
            >
              {item.label}
            </HashLink>
          ))}
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
