import { useState, useEffect } from "react";

interface BrushHighlightProps {
  children: React.ReactNode;
  delay?: number;
  color?: string;
  duration?: number;
}

const BrushHighlight = ({
  children,
  delay = 600,
  color = "hsl(var(--theme-main-01))",
  duration = 800,
}: BrushHighlightProps) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShouldAnimate(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <svg
        className="absolute left-0 bottom-[0.1em] w-full h-[0.5em] -z-0"
        viewBox="45 45 310 70"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 50 70 C 150 50, 250 50, 350 60 L 355 100 C 250 90, 150 90, 45 110 Z"
          fill={color}
          style={{
            clipPath: shouldAnimate ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
            transition: `clip-path ${duration}ms ease-out`,
          }}
        />
      </svg>
    </span>
  );
};

export default BrushHighlight;
