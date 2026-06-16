import React, { useState, useEffect } from "react";

interface PageHeaderProps {
  heading: React.ReactNode;
  media?: React.ReactNode;
  aspectRatio?: "1:1" | "4:3" | "16:9";
  children?: React.ReactNode;
}

const PageHeader = ({ heading, media, aspectRatio = "1:1", children }: PageHeaderProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations on mount
    setIsVisible(true);
  }, []);

  return (
    <header className="page-header pb-10">
      <div className="container flex flex-col items-center text-center">
        {/* Heading - animates first */}
        <h1 
          className="text-h1 text-neutral-12 w-full tablet:w-[74%] desktop:w-[66%] max-w-[550px] tablet:max-w-[700px]"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out',
          }}
        >
          {heading}
        </h1>
        
        {/* Media - animates second with 0.2s delay */}
        {media && (
          <div 
            className={`mt-6 desktop:mt-8 overflow-hidden rounded-xl bg-transparent ${
              aspectRatio === "16:9" ? "w-full max-w-[250px] aspect-[16/9] tablet:w-auto tablet:max-w-none tablet:h-[250px]" : aspectRatio === "4:3" ? "h-[250px] aspect-[4/3]" : "w-[200px] h-[200px] tablet:w-[250px] tablet:h-[250px]"
            }`}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease-in-out 0.2s, transform 0.6s ease-in-out 0.2s',
            }}
          >
            {media}
          </div>
        )}
      </div>
      
      {/* Children - rendered outside container for flexibility */}
      {children}
    </header>
  );
};

export default PageHeader;
