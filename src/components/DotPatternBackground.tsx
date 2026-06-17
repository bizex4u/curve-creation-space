/**
 * DotPatternBackground - Reusable dot pattern with gradient background
 * 
 * Variants:
 * - main: Light blue background (main-00) with neutral-05 dots
 * - neutral: Light gray background (neutral-04) with neutral-05 dots
 * 
 * Fixed styling: outer padding, border-radius, dot size (1px), dot spacing (7px), opacity (40%)
 */
import { cn } from "@/lib/utils";

interface DotPatternBackgroundProps {
  variant: 'main' | 'neutral';
  className?: string;
  fadePoint?: number;
  hideOnMobile?: boolean;
  padding?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
}

const DotPatternBackground = ({
  variant,
  className,
  fadePoint,
  hideOnMobile,
  padding,
}: DotPatternBackgroundProps) => {
  const defaultPadding = "p-2 tablet:p-4 desktop:p-5";
  const customPadding = padding 
    ? `${padding.top ?? ''} ${padding.right ?? ''} ${padding.bottom ?? ''} ${padding.left ?? ''}`.trim()
    : defaultPadding;
  const colors = {
    main: {
      background: 'rgba(217, 199, 255, 0.85)',  // main-01 light purple at 85%
      dot: '#C9B8F0',
      defaultFade: 55,
    },
    neutral: {
      background: '#F4F4F4',  // neutral-02 from tailwind.config.ts
      dot: '#DADADA',         // neutral-05 from tailwind.config.ts
      defaultFade: 60,
    },
  };

  const config = colors[variant];
  const fade = fadePoint ?? config.defaultFade;

  return (
    <div className={cn("absolute inset-0", customPadding, hideOnMobile && "hidden tablet:block", className)}>
      <div className="relative w-full h-full rounded-[16px] tablet:rounded-[32px] desktop:rounded-[40px] overflow-hidden">
        {/* Gradient layer - transparent to background color */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(to bottom, transparent 0%, transparent ${fade}%, ${config.background} 100%)`,
          }}
        />
        {/* Dot pattern layer - masked to fade in */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, ${config.dot} 1px, transparent 1px)`,
            backgroundSize: '7px 7px',
            maskImage: `linear-gradient(to bottom, transparent 0%, transparent ${fade}%, rgba(0,0,0,0.4) 100%)`,
            WebkitMaskImage: `linear-gradient(to bottom, transparent 0%, transparent ${fade}%, rgba(0,0,0,0.4) 100%)`,
          }}
        />
      </div>
    </div>
  );
};

export default DotPatternBackground;
