import { memo } from "react";
import type { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  highlights?: string[];
}

const BenefitCard = memo(({ id, title, description, icon: Icon, highlights = [] }: BenefitCardProps) => {
  return (
    <div id={id} className="mb-10 tablet:mb-16 last:mb-0">
      <div className="max-w-[550px]">
        <h4 className="text-h4 text-neutral-12">{title}</h4>
        <p className="text-body text-neutral-10 mt-2">{description}</p>
      </div>
      <div className="mt-6 rounded-[20px] overflow-hidden bg-gradient-to-br from-main-00 to-neutral-01 border border-main-01 p-8 tablet:p-10">
        <div className="flex flex-col items-start gap-6">
          <div className="w-14 h-14 rounded-[14px] bg-neutral-00 border border-main-01 flex items-center justify-center text-main-02 shadow-[0_8px_24px_rgba(109,63,217,0.10)]">
            <Icon size={28} strokeWidth={1.75} />
          </div>
          {highlights.length > 0 && (
            <ul className="grid grid-cols-1 tablet:grid-cols-2 gap-3 w-full">
              {highlights.map((h) => (
                <li
                  key={h}
                  className="text-body text-neutral-11 bg-neutral-00 border border-neutral-03 rounded-[12px] px-4 py-3"
                >
                  {h}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
});

BenefitCard.displayName = "BenefitCard";

export default BenefitCard;
