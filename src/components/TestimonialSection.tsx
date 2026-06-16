import companyLogo from "@/assets/Fakebrand_4.png";
import quoteIcon from "@/assets/Quotes_On_Light.svg";
import testimonialPhoto from "@/assets/Urban_Portrait_Outdoors.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TestimonialSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section 
      ref={ref}
      className="section"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out',
      }}
    >
      <div className="container">
        {/* 83% width container, centered */}
        <div className="w-full desktop:w-[83%] mx-auto flex flex-col tablet:flex-row gap-8 desktop:gap-10 items-center">
          {/* Left: Photo */}
          <div className="flex-shrink-0">
            <img
              src={testimonialPhoto}
              alt="Testimonial"
              className="max-w-[350px] tablet:max-w-none max-h-[400px] aspect-[3/4] object-cover rounded-[16px] border-2 border-neutral-02 shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
              loading="lazy"
            />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col gap-8 tablet:gap-16 flex-1">
            {/* Upper: Quote */}
            <div>
              <img src={quoteIcon} alt="Quote" className="h-6 mb-4" />
              <h3 className="max-w-[600px]">
                This platform gives us instant clarity. Our forecasts are more
                accurate and our team makes decisions faster than ever.
              </h3>
            </div>

            {/* Lower: Details */}
            <div className="flex flex-col tablet:flex-row tablet:justify-between gap-5 tablet:gap-0 tablet:items-center">
              <div>
                <p className="text-body-large text-neutral-10">Operations Lead</p>
                <p className="text-body-large">Nova Metrics</p>
              </div>
              <img src={companyLogo} alt="Company logo" className="w-auto h-8 self-start tablet:self-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
