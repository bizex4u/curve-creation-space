import BrushHighlight from "./BrushHighlight";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import carrera1 from "@/assets/campaign-carrera-billboard.jpg.asset.json";
import carrera2 from "@/assets/campaign-carrera-hoarding.jpg.asset.json";
import nisara1 from "@/assets/campaign-nisara-led.jpg.asset.json";
import nisara2 from "@/assets/campaign-nisara-display.jpg.asset.json";
import portronics1 from "@/assets/campaign-portronics-station.jpg.asset.json";
import portronics2 from "@/assets/campaign-portronics-street.jpg.asset.json";

const campaigns = [
  {
    brand: "Carrera Eyewear",
    city: "Hyderabad · Outdoor",
    note: "Premium hoardings at Habsiguda & Kompally driving footfall to Lawrence & Mayo stores.",
    image: carrera1.url,
    span: "tablet:col-span-2 tablet:row-span-2",
  },
  {
    brand: "Nisara Beauty",
    city: "Delhi NCR · LED Display",
    note: "Large-format LED at premium Gurgaon corporate park.",
    image: nisara1.url,
    span: "",
  },
  {
    brand: "Portronics",
    city: "New Delhi · Station Media",
    note: "High-dwell branding outside New Delhi Railway Station.",
    image: portronics1.url,
    span: "",
  },
  {
    brand: "Portronics",
    city: "Central Delhi · Median Branding",
    note: "Continuous median panels on a high-traffic Delhi corridor.",
    image: portronics2.url,
    span: "tablet:col-span-2",
  },
  {
    brand: "Carrera Eyewear",
    city: "Hyderabad · Highway Media",
    note: "Highway-facing unipole capturing commuter eyeballs.",
    image: carrera2.url,
    span: "",
  },
  {
    brand: "Nisara Beauty",
    city: "Gurgaon · Mall Facade",
    note: "Festive launch campaign with mall-facade visibility.",
    image: nisara2.url,
    span: "",
  },
];

const CampaignShowcase = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      id="campaigns"
      ref={ref}
      className="section"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease-in-out, transform 0.6s ease-in-out",
      }}
    >
      <div className="container">
        <div className="flex flex-col tablet:flex-row tablet:justify-between tablet:items-start mb-10 desktop:mb-16">
          <h2 className="text-h2 text-neutral-12">
            Campaigns we've <BrushHighlight>run</BrushHighlight>
          </h2>
          <p className="text-body-large text-neutral-10 mt-4 tablet:mt-0 tablet:w-[36%] tablet:text-right">
            Real billboards, real cities, real brands. A snapshot of outdoor
            and display work executed across Delhi NCR and South India.
          </p>
        </div>

        <div className="grid grid-cols-1 tablet:grid-cols-3 auto-rows-[220px] tablet:auto-rows-[240px] gap-3">
          {campaigns.map((c, i) => (
            <article
              key={i}
              className={`relative overflow-hidden rounded-[16px] border border-neutral-03 group ${c.span}`}
            >
              <img
                src={c.image}
                alt={`${c.brand} ${c.city} campaign by BIZEX4U`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-12/85 via-neutral-12/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 tablet:p-5">
                <div className="text-caption text-neutral-03 mb-1">{c.city}</div>
                <div className="text-h6 text-neutral-00 mb-1">{c.brand}</div>
                <p className="text-body-small text-neutral-02 line-clamp-2">
                  {c.note}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampaignShowcase;
