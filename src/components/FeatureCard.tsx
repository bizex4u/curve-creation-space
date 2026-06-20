import { memo, ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
}

const FeatureCard = memo(({ icon, title, description, href }: FeatureCardProps) => {
  const inner = (
    <>
      <div className="text-neutral-12">{icon}</div>
      <div className="max-w-[550px]">
        <h6 className="text-neutral-12 mt-6">{title}</h6>
        <p className="text-body text-neutral-10 mt-2">{description}</p>
      </div>
      {href && (
        <div className="mt-4 flex items-center gap-1 text-label text-main-02">
          Explore {title} <ArrowRight size={12} />
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        to={href}
        className="bg-neutral-01 rounded-[12px] p-4 flex flex-col hover:bg-main-00 hover:border-main-01 border border-transparent transition-colors duration-200"
      >
        {inner}
      </Link>
    );
  }

  return (
    <div className="bg-neutral-01 rounded-[12px] p-4 flex flex-col">
      {inner}
    </div>
  );
});

FeatureCard.displayName = "FeatureCard";

export default FeatureCard;
