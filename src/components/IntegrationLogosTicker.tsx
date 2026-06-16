import IntegrationLogo from "./IntegrationLogo";

interface LogoItem {
  src?: string;
  alt?: string;
  tooltip?: string;
}

interface IntegrationLogosTickerProps {
  logos: LogoItem[];
  direction?: "left" | "right";
}

const IntegrationLogosTicker = ({ logos, direction = "left" }: IntegrationLogosTickerProps) => {
  return (
    <div 
      className="relative overflow-hidden w-full"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
      }}
    >
      <div className={`flex w-max ${direction === "left" ? "animate-ticker" : "animate-ticker-reverse"}`}>
        {/* Render 3 identical sets - each includes trailing spacing for seamless loop */}
        {[1, 2, 3].map((setIndex) => (
          <div key={setIndex} className="flex shrink-0 gap-2 pr-2">
            {logos.map((logo, index) => (
              <IntegrationLogo 
                key={index}
                logoSrc={logo.src} 
                alt={logo.alt}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntegrationLogosTicker;
