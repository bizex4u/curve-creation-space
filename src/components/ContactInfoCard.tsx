import { ReactNode } from "react";

interface ContactInfoCardProps {
  icon: ReactNode;
  children: ReactNode;
}

const ContactInfoCard = ({ icon, children }: ContactInfoCardProps) => {
  return (
    <div className="relative h-auto py-5 tablet:h-[150px] tablet:py-0 bg-neutral-01 border border-neutral-02 rounded-lg flex flex-col items-center justify-center gap-5 overflow-hidden">
      {/* Dot pattern background - upper 30% */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #cbd5e1 1px, transparent 1px)`,
          backgroundSize: "7px 7px",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 25%, transparent 50%)",
          WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 25%, transparent 50%)",
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 rounded-full bg-neutral-02 p-3 border border-neutral-00">
        <div className="text-neutral-12 [&>svg]:w-5 [&>svg]:h-5">
          {icon}
        </div>
      </div>
      <p className="relative z-10 text-body text-neutral-10 text-center">
        {children}
      </p>
    </div>
  );
};

export default ContactInfoCard;
