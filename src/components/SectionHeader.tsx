interface SectionHeaderProps {
  title: React.ReactNode;
  subtitle: string;
  align?: "left" | "center";
  className?: string;
  maxWidth?: string;
}

const SectionHeader = ({ 
  title, 
  subtitle, 
  align = "left",
  className = "",
  maxWidth = "550px"
}: SectionHeaderProps) => {
  return (
    <div 
      className={`${align === "center" ? "text-center mx-auto" : ""} ${className}`}
      style={{ maxWidth }}
    >
      <h2 className="text-h2 text-neutral-12">{title}</h2>
      <p className="text-body-large text-neutral-10 mt-4">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
