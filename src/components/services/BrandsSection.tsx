import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionHeader from "@/components/SectionHeader";
import logo1 from "@/assets/logoipsum-223.png";
import logo2 from "@/assets/logoipsum-224.png";
import logo3 from "@/assets/logoipsum-245.png";
import logo4 from "@/assets/logoipsum-291.png";
import logo5 from "@/assets/logoipsum-329.png";
import logo6 from "@/assets/logoipsum-331.png";
import logo7 from "@/assets/logoipsum-394.png";

const defaultLogos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

interface BrandsSectionProps {
  title?: string;
  subtitle?: string;
  logos?: string[];
}

const BrandsSection = ({
  title = "Trusted by 320+ brands",
  subtitle = "From emerging D2C brands to established enterprises — they all run campaigns through BIZEX4U.",
  logos = defaultLogos,
}: BrandsSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={ref}
      className="section"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease-in-out, transform 0.6s ease-in-out",
      }}
    >
      <div className="container">
        <SectionHeader title={title} subtitle={subtitle} align="center" maxWidth="600px" />
        <div className="mt-8 tablet:mt-10 grid grid-cols-3 tablet:grid-cols-4 desktop:grid-cols-7 gap-4 tablet:gap-5 items-center">
          {logos.map((src, i) => (
            <div
              key={i}
              className="bg-neutral-01 border border-neutral-03 rounded-xl p-4 flex items-center justify-center aspect-[3/2] hover:border-neutral-05 transition-colors"
            >
              <img
                src={src}
                alt={`Brand ${i + 1}`}
                className="max-h-8 w-auto object-contain opacity-60 hover:opacity-90 transition-opacity"
                loading="lazy"
                width={80}
                height={32}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
