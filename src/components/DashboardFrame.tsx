import { useEffect, useState, useRef } from "react";
import dashboardImage from "@/assets/Dashboard.png";
import { useIsMobile } from "@/hooks/use-mobile";

interface DashboardFrameProps {
  className?: string;
  sectionRef?: React.RefObject<HTMLElement>;
  animateOnLoad?: boolean;
}

const DashboardFrame = ({ className = "", sectionRef, animateOnLoad = false }: DashboardFrameProps) => {
  const [rotateX, setRotateX] = useState(15);
  const [delayDone, setDelayDone] = useState(!animateOnLoad);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [forceShow, setForceShow] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Compute if we should reveal the component
  const shouldReveal = delayDone && (imageLoaded || forceShow);

  useEffect(() => {
    if (animateOnLoad) {
      const timer = setTimeout(() => setDelayDone(true), 500);
      return () => clearTimeout(timer);
    }
  }, [animateOnLoad]);

  // Fallback timeout to force show after 2500ms
  useEffect(() => {
    const timer = setTimeout(() => setForceShow(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // On mobile, always keep rotateX at 0 (no 3D effect)
    if (isMobile) {
      setRotateX(0);
      return;
    }

    const handleScroll = () => {
      if (!sectionRef?.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate how much of the section has been scrolled through
      const scrolledIntoView = viewportHeight - rect.top;
      const scrollProgress = scrolledIntoView / (sectionHeight + viewportHeight);

      // At 70% progress, rotate to 0deg
      if (scrollProgress >= 0.7) {
        setRotateX(0);
      } else {
        // Interpolate from 15deg to 0deg as we approach 70%
        const progress = Math.min(scrollProgress / 0.7, 1);
        setRotateX(15 * (1 - progress));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRef, isMobile]);

  return (
    <div 
      className={`${className} aspect-[1440/900]`}
      style={{ 
        perspective: isMobile ? "none" : "1200px",
        opacity: shouldReveal ? 1 : 0,
        transform: shouldReveal ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out',
      }}
    >
      <div
        ref={frameRef}
        className="bg-neutral-04 rounded-[16px] p-2 tablet:rounded-[28px] tablet:p-4 desktop:rounded-[32px] desktop:p-[20px] shadow-lg border-neutral-00 border-2"
        style={{
          transform: `rotateX(${rotateX}deg)`,
          transformOrigin: "bottom center",
          transition: "transform 0.5s ease-out",
        }}
      >
        <img 
          src={dashboardImage} 
          alt="Dashboard UI" 
          className="w-full h-auto rounded-[8px] tablet:rounded-[16px] desktop:rounded-[20px]"
          loading="eager"
          fetchPriority="high"
          onLoad={() => setImageLoaded(true)}
          onError={() => setForceShow(true)}
        />
      </div>
    </div>
  );
};

export default DashboardFrame;
