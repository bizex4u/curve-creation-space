import { memo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
      className="group flex flex-col gap-0 rounded-[20px] overflow-hidden border border-neutral-03 hover:border-neutral-05 transition-all duration-300 hover:shadow-[0_8px_32px_hsl(var(--neutral-12)/0.08)]"
    >
      <div className="overflow-hidden">
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full aspect-[16/9] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>
      <div className="bg-neutral-00 p-6 flex flex-col gap-3 flex-1">
        <h6 className="text-neutral-12 line-clamp-2 leading-snug">
          {title}
        </h6>
        <p className="text-body text-neutral-09 line-clamp-2">
          {briefIntro}
        </p>
        <div className="mt-auto pt-2 flex items-center gap-1 text-label font-medium text-neutral-11 group-hover:text-neutral-12 transition-colors">
          Read article <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
});

HomeBlogPostCard.displayName = "HomeBlogPostCard";

export default HomeBlogPostCard;
