import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FilledButton from "@/components/FilledButton";
import OutlineButton from "@/components/OutlineButton";
import BrushHighlight from "@/components/BrushHighlight";
import WhatsAppCTA from "@/components/services/WhatsAppCTA";

export interface Breadcrumb {
  label: string;
  href?: string;
}

export interface ServiceHeroProps {
  title: string;
  highlightWord?: string;
  subtitle: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  breadcrumbs: Breadcrumb[];
}

const ServiceHero = ({
  title,
  highlightWord,
  subtitle,
  primaryCTA = { label: "Get Free Media Plan", href: "/contact" },
  secondaryCTA = { label: "Book Consultation", href: "/contact" },
  breadcrumbs,
}: ServiceHeroProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(t);
  }, []);

  const renderTitle = () => {
    if (!highlightWord) return title;
    const idx = title.toLowerCase().indexOf(highlightWord.toLowerCase());
    if (idx === -1) return title;
    return (
      <>
        {title.slice(0, idx)}
        <BrushHighlight delay={600} color="hsl(var(--theme-main-01))">
          {title.slice(idx, idx + highlightWord.length)}
        </BrushHighlight>
        {title.slice(idx + highlightWord.length)}
      </>
    );
  };

  return (
    <section
      className="flex flex-col gap-6 page-header-top pb-12 tablet:pb-16 desktop:pb-20"
      style={{
        opacity: isLoaded ? 1 : 0,
        transform: isLoaded ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease-in-out, transform 0.6s ease-in-out",
      }}
    >
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-1.5 text-label text-neutral-09" itemScope itemType="https://schema.org/BreadcrumbList">
          {breadcrumbs.map((crumb, i) => (
            <li
              key={i}
              className="flex items-center gap-1.5"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {i > 0 && <span className="text-neutral-06">/</span>}
              {crumb.href ? (
                <Link to={crumb.href} className="hover:text-neutral-11 transition-colors" itemProp="item">
                  <span itemProp="name">{crumb.label}</span>
                </Link>
              ) : (
                <span className="text-neutral-11" itemProp="name">{crumb.label}</span>
              )}
              <meta itemProp="position" content={String(i + 1)} />
            </li>
          ))}
        </ol>
      </nav>

      {/* Heading + subtitle */}
      <div className="max-w-[700px]">
        <h1 className="text-neutral-12 mb-5 tablet:mb-6">{renderTitle()}</h1>
        <p className="text-body-large text-neutral-10 max-w-[560px]">{subtitle}</p>
      </div>

      {/* CTAs */}
      <div className="flex flex-col items-start gap-3 tablet:flex-row tablet:flex-wrap tablet:items-center">
        <FilledButton href={primaryCTA.href}>{primaryCTA.label}</FilledButton>
        <OutlineButton href={secondaryCTA.href}>{secondaryCTA.label}</OutlineButton>
        <WhatsAppCTA />
      </div>
    </section>
  );
};

export default ServiceHero;
