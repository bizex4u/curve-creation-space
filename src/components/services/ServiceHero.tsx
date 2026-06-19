import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FilledButton from "@/components/FilledButton";
import OutlineButton from "@/components/OutlineButton";
import BrushHighlight from "@/components/BrushHighlight";

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
      <div className="flex flex-wrap items-center gap-3">
        <FilledButton href={primaryCTA.href}>{primaryCTA.label}</FilledButton>
        <OutlineButton href={secondaryCTA.href}>{secondaryCTA.label}</OutlineButton>
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-button text-neutral-12 py-[12px] px-[20px] rounded-[12px] border border-neutral-04 bg-neutral-00 transition-colors hover:bg-neutral-02 shadow-[0_4px_8px_hsl(var(--neutral-12)/0.15)] whitespace-nowrap"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#25D366]">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          WhatsApp
        </a>
      </div>
    </section>
  );
};

export default ServiceHero;
