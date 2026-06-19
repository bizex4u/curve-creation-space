import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionHeader from "@/components/SectionHeader";

const defaultBrands = [
  "Zebronics", "Portronics", "Mars", "Bikano", "Sharp",
  "Safilo", "Third Wave Coffee", "Raw Pressery", "Noise", "boAt",
  "Wow Skin Science", "Mamaearth", "Lenskart", "Manyavar", "Bata",
  "Haldirams", "Parle Agro", "Amul", "Dabur", "ITC",
];

interface BrandsSectionProps {
  title?: string;
  subtitle?: string;
  brands?: string[];
}

const BrandsSection = ({
  title = "Trusted by 320+ brands",
  subtitle = "From emerging D2C brands to established enterprises — they run campaigns through BIZEX4U.",
  brands = defaultBrands,
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
        <div className="mt-8 tablet:mt-10 flex flex-wrap justify-center gap-2 tablet:gap-3">
          {brands.map((name) => (
            <span
              key={name}
              className="text-body text-neutral-11 bg-neutral-01 border border-neutral-03 px-4 py-2 rounded-xl hover:border-neutral-05 hover:bg-neutral-02 transition-colors"
            >
              {name}
            </span>
          ))}
          <span className="text-body text-neutral-09 bg-neutral-01 border border-neutral-03 border-dashed px-4 py-2 rounded-xl">
            +300 more
          </span>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
