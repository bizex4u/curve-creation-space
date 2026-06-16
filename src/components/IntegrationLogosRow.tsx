import IntegrationLogo from "./IntegrationLogo";

interface LogoItem {
  src?: string;
  alt?: string;
  tooltip?: string;
}

interface IntegrationLogosRowProps {
  logos: LogoItem[];
  tooltipPosition?: "above" | "below";
}

const IntegrationLogosRow = ({ logos, tooltipPosition = "above" }: IntegrationLogosRowProps) => {
  return (
    <div className="relative w-full desktop:w-[83%] flex items-center justify-center">
      {/* Connecting string line */}
      <div 
        className="absolute top-1/2 left-0 right-0 h-0.5 bg-neutral-03 -translate-y-1/2 z-0"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      />
      
      {/* Logo items - centered within the string */}
      <div className="relative z-10 flex items-center gap-2 tablet:gap-3">
        {logos.map((logo, index) => (
          <IntegrationLogo 
            key={index}
            logoSrc={logo.src} 
            alt={logo.alt}
            tooltip={logo.tooltip}
            tooltipPosition={tooltipPosition}
          />
        ))}
      </div>
    </div>
  );
};

export default IntegrationLogosRow;
