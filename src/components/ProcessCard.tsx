import { memo } from "react";

interface ProcessCardProps {
  stepNumber: string;
  imageSrc: string;
  title: string;
  description: string;
}

const ProcessCard = memo(({ stepNumber, imageSrc, title, description }: ProcessCardProps) => {
  return (
    <div className="flex flex-col flex-1">
      {/* Image Frame with Step Badge */}
      <div className="relative border-2 border-neutral-02 rounded-[12px] overflow-hidden" style={{ boxShadow: '0 8px 10px rgba(0, 0, 0, 0.1)' }}>
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-auto bg-neutral-02"
          loading="lazy"
        />
        {/* Step Number Badge - bottom-right */}
        <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-neutral-12 text-neutral-00 flex items-center justify-center text-body-small font-medium">
          {stepNumber}
        </div>
      </div>
      {/* Text Content with 8px padding */}
      <div className="p-2 mt-3 tablet:mt-4">
        <h5 className="text-h5 text-neutral-12">{title}</h5>
        <p className="text-body text-neutral-10 mt-2">{description}</p>
      </div>
    </div>
  );
});

ProcessCard.displayName = "ProcessCard";

export default ProcessCard;
