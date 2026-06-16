import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import HashLink from "./HashLink";

interface FilledButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  showArrow?: boolean;
  fullWidth?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

const FilledButton = ({ 
  children, 
  href, 
  onClick, 
  showArrow = true, 
  fullWidth = false,
  type = "button",
  disabled = false,
  icon,
  className: additionalClassName
}: FilledButtonProps) => {
  const buttonContent = (
    <>
      <span>{children}</span>
      {icon && icon}
      {showArrow && <ArrowRight className="w-4 h-4" />}
    </>
  );

  const className = `btn-filled inline-flex items-center justify-center gap-2 text-button text-neutral-00 py-[12px] ${showArrow ? 'pr-[16px] pl-[20px]' : 'px-[20px]'} rounded-[12px] transition-opacity hover:opacity-90 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed ${fullWidth ? 'w-full' : ''} ${additionalClassName || ''}`;

  if (href && !disabled) {
    const isExternal = href.startsWith('http://') || href.startsWith('https://');
    const isHashLink = href.includes('#');
    
    if (isExternal) {
      return (
        <a href={href} className={className} onClick={onClick} target="_blank" rel="noopener noreferrer">
          {buttonContent}
        </a>
      );
    }
    
    if (isHashLink) {
      return (
        <HashLink to={href} className={className} onClick={onClick}>
          {buttonContent}
        </HashLink>
      );
    }
    
    return (
      <Link to={href} className={className} onClick={onClick}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick} type={type} disabled={disabled}>
      {buttonContent}
    </button>
  );
};

export default FilledButton;
