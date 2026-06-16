import { memo, ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = memo(({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-neutral-01 rounded-[12px] p-4 flex flex-col">
      <div className="text-neutral-12">{icon}</div>
      <div className="max-w-[550px]">
        <h6 className="text-neutral-12 mt-6">{title}</h6>
        <p className="text-body text-neutral-10 mt-2">{description}</p>
      </div>
    </div>
  );
});

FeatureCard.displayName = "FeatureCard";

export default FeatureCard;
