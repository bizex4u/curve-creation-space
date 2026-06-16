import { Box } from "lucide-react";

interface IntegrationLogoProps {
  logoSrc?: string;
  alt?: string;
  tooltip?: string;
  tooltipPosition?: "above" | "below";
}

const IntegrationLogo = ({ 
  logoSrc, 
  alt = "Integration logo",
  tooltip,
  tooltipPosition = "above"
}: IntegrationLogoProps) => {
  return (
    <div className="relative group">
      {/* Logo frame */}
      <div className="w-16 h-16 tablet:w-20 tablet:h-20 bg-neutral-02 border-2 border-neutral-03 rounded-xl flex items-center justify-center shrink-0 cursor-pointer transition-all hover:border-neutral-05">
        {logoSrc ? (
          <img 
            src={logoSrc} 
            alt={alt} 
            loading="lazy"
            decoding="async"
            className="h-6 tablet:h-7 w-auto object-contain"
          />
        ) : (
          <Box className="h-6 w-6 tablet:h-7 tablet:w-7 text-neutral-07" />
        )}
      </div>
      
      {/* Tooltip bubble */}
      {tooltip && (
        <div className={`
          absolute left-1/2 -translate-x-1/2 
          ${tooltipPosition === "above" ? "bottom-full mb-3" : "top-full mt-3"}
          opacity-0 group-hover:opacity-100 transition-opacity duration-200
          pointer-events-none z-20
        `}>
          {/* Tooltip content */}
          <div className="bg-neutral-12/60 backdrop-blur-md text-neutral-00 text-sm p-2 rounded-lg w-[160px] text-left whitespace-normal">
            {tooltip}
          </div>
          
          {/* Arrow pointer */}
          <div className={`
            absolute left-1/2 -translate-x-1/2 
            w-0 h-0 border-l-8 border-r-8 border-transparent
            ${tooltipPosition === "above" 
              ? "top-full border-t-8 border-t-neutral-12/60" 
              : "bottom-full border-b-8 border-b-neutral-12/60"
            }
          `} />
        </div>
      )}
    </div>
  );
};

export default IntegrationLogo;
