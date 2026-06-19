import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionHeader from "@/components/SectionHeader";

export interface InventoryItem {
  title: string;
  description: string;
  tags?: string[];
}

interface InventorySectionProps {
  title?: string;
  subtitle?: string;
  items: InventoryItem[];
}

const InventorySection = ({
  title = "Available inventory",
  subtitle = "Premium ad formats and locations available for your campaign.",
  items,
}: InventorySectionProps) => {
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
        <SectionHeader title={title} subtitle={subtitle} />
        <div className="mt-8 tablet:mt-10 grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-neutral-00 border border-neutral-03 rounded-2xl p-5 tablet:p-6 flex flex-col gap-3 hover:border-neutral-05 hover:shadow-[0_4px_16px_hsl(var(--neutral-12)/0.06)] transition-all duration-300"
            >
              <h3 className="text-body-large font-semibold text-neutral-12 font-manrope">{item.title}</h3>
              <p className="text-body text-neutral-10">{item.description}</p>
              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-1">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-label text-main-02 bg-main-00 border border-main-01 px-2.5 py-1 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InventorySection;
