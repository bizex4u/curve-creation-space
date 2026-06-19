import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  current: number;
  total: number;
}

const Pagination = ({ current, total }: Props) => {
  if (total <= 1) return null;
  const pageHref = (n: number) => (n === 1 ? "/blog" : `/blog/page/${n}`);
  const pages = Array.from({ length: total }, (_, i) => i + 1);
  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-2 mt-12">
      {current > 1 && (
        <Link
          to={pageHref(current - 1)}
          className="inline-flex items-center gap-1 px-3 py-2 text-button text-neutral-12 hover:bg-neutral-02 rounded-[8px] transition-colors"
        >
          <ChevronLeft className="w-4 h-4" /> Prev
        </Link>
      )}
      {pages.map((n) => (
        <Link
          key={n}
          to={pageHref(n)}
          aria-current={n === current ? "page" : undefined}
          className={`min-w-[36px] h-9 inline-flex items-center justify-center text-button rounded-[8px] transition-colors ${
            n === current
              ? "bg-neutral-12 text-neutral-00"
              : "text-neutral-12 hover:bg-neutral-02"
          }`}
        >
          {n}
        </Link>
      ))}
      {current < total && (
        <Link
          to={pageHref(current + 1)}
          className="inline-flex items-center gap-1 px-3 py-2 text-button text-neutral-12 hover:bg-neutral-02 rounded-[8px] transition-colors"
        >
          Next <ChevronRight className="w-4 h-4" />
        </Link>
      )}
    </nav>
  );
};

export default Pagination;
