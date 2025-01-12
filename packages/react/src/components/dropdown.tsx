import { HTMLAttributes } from "react";
import { cn } from "../lib/utils";

export interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
  trigger: React.ReactNode;
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function Dropdown({
  className,
  trigger,
  children,
  open,
  onOpenChange,
  ...props
}: DropdownProps) {
  return (
    <div className={cn("relative inline-block", className)} {...props}>
      <div className="cursor-pointer" onClick={() => onOpenChange?.(!open)}>
        {trigger}
      </div>

      {open && (
        <div
          className={cn(
            "absolute left-0 mt-2 w-64",
            "rounded-lg bg-[#1C1C1C] shadow-lg",
            "border border-[#2C2C2C]",
            "py-2 z-50"
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}

// Additional helper components for structure
export function DropdownItem({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "px-4 py-2 text-sm text-gray-200",
        "hover:bg-[#2C2C2C] cursor-pointer",
        "flex items-center gap-3",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function DropdownSection({
  className,
  children,
  title,
  ...props
}: HTMLAttributes<HTMLDivElement> & { title?: string }) {
  return (
    <>
      {title && (
        <div className="px-4 py-2 text-sm text-gray-500 uppercase">{title}</div>
      )}
      <div className={cn("py-1", className)} {...props}>
        {children}
      </div>
      <div className="border-t border-[#2C2C2C] my-1" />
    </>
  );
}

Dropdown.displayName = "Dropdown";
DropdownItem.displayName = "DropdownItem";
DropdownSection.displayName = "DropdownSection";
