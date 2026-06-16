import { memo } from "react";

interface BenefitCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
}

const BenefitCard = memo(({ id, title, description, image }: BenefitCardProps) => {
  return (
    <div id={id} className="mb-10 tablet:mb-16 last:mb-0">
      <div className="max-w-[550px]">
        <h4 className="text-h4 text-neutral-12">{title}</h4>
        <p className="text-body text-neutral-10 mt-2">{description}</p>
      </div>
      <div className="mt-6 rounded-[20px] overflow-hidden bg-neutral-02">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-auto"
          loading="lazy"
        />
      </div>
    </div>
  );
});

BenefitCard.displayName = "BenefitCard";

export default BenefitCard;
