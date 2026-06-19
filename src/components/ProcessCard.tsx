import { memo } from "react";

interface ProcessCardProps {
  stepNumber: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const ProcessCard = memo(({ stepNumber, icon, title, description }: ProcessCardProps) => {
  return (
    <div className="flex flex-col flex-1">
      {/* Visual panel — gradient with icon + step number */}
      <div
        className="relative aspect-[4/3] rounded-[16px] overflow-hidden border border-main-01"
        style={{
          background: "linear-gradient(135deg, hsl(var(--theme-main-00)) 0%, hsl(var(--theme-main-01)) 100%)",
          boxShadow: "0 8px 24px hsl(var(--theme-main-02) / 0.12)",
        }}
      >
        {/* Decorative dot grid */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(var(--theme-main-02) / 0.25) 1px, transparent 1px)",
            backgroundSize: "12px 12px",
          }}
        />
        {/* Icon centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-neutral-00 flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.08)] text-main-02">
            {icon}
          </div>
        </div>
        {/* Step Number Badge */}
        <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-neutral-12 text-neutral-00 flex items-center justify-center text-body-small font-medium">
          {stepNumber}
        </div>
      </div>
      <div className="p-2 mt-3 tablet:mt-4">
        <h5 className="text-h5 text-neutral-12">{title}</h5>
        <p className="text-body text-neutral-10 mt-2">{description}</p>
      </div>
    </div>
  );
});

ProcessCard.displayName = "ProcessCard";

export default ProcessCard;
