import Photo1 from "@/assets/Professional_Interaction_in_Modern_Office_1.png";
import Photo2 from "@/assets/Elegant_Modern_Office_Interior.png";
import Photo3 from "@/assets/Modern_Office_Space.png";
import Photo4 from "@/assets/Joyful_Asian_Businesswoman_in_a_Creative_Workspace.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const photos = [
  { src: Photo1, alt: "Professional team interaction" },
  { src: Photo2, alt: "Modern office interior" },
  { src: Photo3, alt: "Office space" },
  { src: Photo4, alt: "Team member at work" },
];

const PhotoTicker = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div 
      ref={ref}
      className="relative overflow-hidden w-full"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out',
        maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
      }}
    >
      <div className="flex w-max animate-ticker [animation-duration:28s]">
        {/* 3 sets for seamless looping */}
        {[1, 2, 3].map((setIndex) => (
          <div key={setIndex} className="flex shrink-0 gap-3 pr-3">
            {photos.map((photo, index) => (
              <div 
                key={index} 
                className="shrink-0 w-[200px] h-[200px] tablet:w-[250px] tablet:h-[250px] desktop:w-[400px] desktop:h-[400px] rounded-xl overflow-hidden"
              >
                <img 
                  src={photo.src} 
                  alt={photo.alt} 
                  width={400}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
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

export default PhotoTicker;
