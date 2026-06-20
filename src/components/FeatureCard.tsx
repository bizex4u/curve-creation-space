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
      <div className="w-10 h-10 flex items-center justify-center rounded-[10px] bg-neutral-03 text-neutral-11">
        {icon}
      </div>
      <div className="max-w-[550px]">
        <h6 className="text-neutral-12 mt-5">{title}</h6>
        <p className="text-body text-neutral-10 mt-2 leading-relaxed">{description}</p>
      </div>
      {href && (
        <div className="mt-auto pt-5 flex items-center gap-1 text-label font-medium text-main-02">
          Explore <ArrowRight size={12} />
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        to={href}
        className="bg-neutral-01 rounded-[20px] p-6 flex flex-col border border-transparent hover:border-main-01 hover:bg-main-00 transition-all duration-200"
      >
        {inner}
      </Link>
    );
  }

  return (
    <div className="bg-neutral-01 rounded-[20px] p-6 flex flex-col border border-transparent hover:border-neutral-03 hover:bg-neutral-02 transition-all duration-200">
      {inner}
    </div>
  );
});

FeatureCard.displayName = "FeatureCard";

export default FeatureCard;
