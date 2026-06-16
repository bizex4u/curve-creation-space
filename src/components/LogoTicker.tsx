import Fakebrand1 from "@/assets/Fakebrand_1.png";
import Fakebrand2 from "@/assets/Fakebrand_2.png";
import Fakebrand3 from "@/assets/Fakebrand_3.png";
import Fakebrand4 from "@/assets/Fakebrand_4.png";

const logos = [
  { src: Fakebrand1, name: "Brand 1" },
  { src: Fakebrand2, name: "Brand 2" },
  { src: Fakebrand3, name: "Brand 3" },
  { src: Fakebrand4, name: "Brand 4" },
];

const LogoTicker = () => {
  return (
    <div 
      className="relative overflow-hidden w-[90%]"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
      }}
    >
      <div className="flex w-max animate-ticker [animation-duration:28s]">
        {/* Render 3 identical sets - each includes trailing spacing for seamless loop */}
        {[1, 2, 3].map((setIndex) => (
          <div key={setIndex} className="flex shrink-0 gap-6 pr-6">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center shrink-0">
                <img 
                  src={logo.src} 
                  alt={logo.name} 
                  className="h-6 w-auto" 
                  loading="lazy"
                  decoding="async"
                  draggable={false} 
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoTicker;
