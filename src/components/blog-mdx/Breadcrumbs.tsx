import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

const Breadcrumbs = ({ items }: { items: Crumb[] }) => {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1 text-caption text-neutral-09">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} className="flex items-center gap-1">
            {item.href && !isLast ? (
              <Link to={item.href} className="hover:text-neutral-12 transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? "text-neutral-12" : ""}>{item.label}</span>
            )}
            {!isLast && <ChevronRight className="w-3 h-3" />}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
