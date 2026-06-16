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
      <span className="text-body font-medium text-neutral-12">{title}</span>
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          item.external ? (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-body text-neutral-10 hover:text-neutral-12 transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <HashLink
              key={item.label}
              to={item.href}
              className="text-body text-neutral-10 hover:text-neutral-12 transition-colors"
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
