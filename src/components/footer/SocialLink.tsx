import { ReactNode } from "react";

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
}

const SocialLink = ({ href, icon }: SocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-9 h-9 p-2 bg-neutral-00 rounded-full border border-neutral-03 hover:bg-neutral-02 transition-colors"
    >
      <div className="w-5 h-5 flex items-center justify-center text-neutral-12">
        {icon}
      </div>
    </a>
  );
};

export default SocialLink;
