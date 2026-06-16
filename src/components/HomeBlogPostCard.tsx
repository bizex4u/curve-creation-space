import { memo } from "react";
import { Link } from "react-router-dom";

interface HomeBlogPostCardProps {
  slug: string;
  thumbnailUrl: string;
  title: string;
  briefIntro: string;
}

const HomeBlogPostCard = memo(({ slug, thumbnailUrl, title, briefIntro }: HomeBlogPostCardProps) => {
  return (
    <Link
      to={`/blog/${slug}`}
      className="group flex flex-col gap-3"
    >
      <div className="overflow-hidden rounded-[16px] border-2 border-neutral-00 transition-shadow duration-300 group-hover:shadow-[0_4px_20px_hsl(var(--neutral-12)/0.15)]">
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full aspect-[16/9] object-cover"
          loading="lazy"
        />
      </div>
      <div className="relative overflow-hidden bg-neutral-01 p-5 rounded-[16px] flex flex-col gap-4 transition-colors duration-300 group-hover:bg-neutral-02">
        {/* Dot pattern background - bottom area with fade */}
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: 'radial-gradient(circle, hsl(var(--neutral-05)) 1px, transparent 1px)',
            backgroundSize: '8px 8px',
            maskImage: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 15%, transparent 35%)',
            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 15%, transparent 35%)',
          }}
        />
        <h6 className="relative z-10 text-h6 text-neutral-12 line-clamp-2">
          {title}
        </h6>
        <p className="relative z-10 text-body text-neutral-10 line-clamp-2">
          {briefIntro}
        </p>
      </div>
    </Link>
  );
});

HomeBlogPostCard.displayName = "HomeBlogPostCard";

export default HomeBlogPostCard;
