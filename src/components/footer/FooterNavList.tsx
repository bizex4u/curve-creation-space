import HashLink from "@/components/HashLink";

interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterNavListProps {
  title: string;
  items: NavItem[];
}

const FooterNavList = ({ title, items }: FooterNavListProps) => {
  return (
    <div className="flex flex-col gap-4">
      <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-neutral-00/60">{title}</span>
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          item.external ? (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-syne text-[18px] font-semibold text-neutral-00 hover:text-coral transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <HashLink
              key={item.label}
              to={item.href}
              className="font-syne text-[18px] font-semibold text-neutral-00 hover:text-coral transition-colors"
            >
              {item.label}
            </HashLink>
          )
        ))}
      </div>
    </div>
  );
};

export default FooterNavList;
