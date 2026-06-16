import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface AdminLabelProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  className?: string;
}

const AdminLabel = ({ children, icon: Icon, className }: AdminLabelProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2 py-1 rounded-full text-sm bg-neutral-02 text-neutral-10",
        className
      )}
    >
      {Icon && <Icon className="w-3 h-3" />}
      {children}
    </span>
  );
};

export default AdminLabel;
