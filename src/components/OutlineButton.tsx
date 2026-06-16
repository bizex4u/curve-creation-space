import { Link } from "react-router-dom";
import HashLink from "./HashLink";

interface OutlineButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  fullWidth?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  icon?: React.ReactNode;
  noShadow?: boolean;
  size?: "standard" | "small";
  className?: string;
}

const OutlineButton = ({ 
  children, 
  href, 
  onClick, 
  fullWidth = false,
  type = "button",
  disabled = false,
  icon,
  noShadow = false,
  size = "standard",
  className: customClassName = ""
}: OutlineButtonProps) => {
  const sizeClasses = size === "small" 
    ? "py-[8px] px-[16px] rounded-[8px]" 
    : "py-[12px] px-[20px] rounded-[12px]";
  
  const className = `inline-flex items-center justify-center gap-2 text-button text-neutral-12 ${sizeClasses} border border-neutral-04 bg-neutral-00 transition-colors hover:bg-neutral-02 ${noShadow ? '' : 'shadow-[0_4px_8px_hsl(var(--neutral-12)/0.15)]'} whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed ${fullWidth ? 'w-full' : ''} ${customClassName}`;

  const buttonContent = (
    <>
      {children}
      {icon && icon}
    </>
  );

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

export default OutlineButton;
