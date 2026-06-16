import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface OutlineButtonBackProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const OutlineButtonBack = ({ 
  children, 
  href, 
  onClick,
  className: customClassName = ""
}: OutlineButtonBackProps) => {
  const className = `inline-flex items-center justify-center gap-2 text-button text-neutral-12 py-2 pl-2 pr-3 rounded-[12px] border border-neutral-04 bg-neutral-00 transition-colors hover:bg-neutral-02 whitespace-nowrap ${customClassName}`;

  if (href) {
    return (
      <Link to={href} className={className} onClick={onClick}>
        <ArrowLeft className="w-5 h-5" />
        {children}
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick} type="button">
      <ArrowLeft className="w-5 h-5" />
      {children}
    </button>
  );
};

export default OutlineButtonBack;
