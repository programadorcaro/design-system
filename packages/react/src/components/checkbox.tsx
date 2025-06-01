import * as React from "react";
import { cn } from "../lib/utils";
import { Check } from "lucide-react";

type CheckboxProps = React.HTMLAttributes<HTMLDivElement> & {
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
};

const CheckIcon = Check as React.ElementType;

const Checkbox = ({
  checked,
  onChange,
  className,
  ...props
}: CheckboxProps) => {
  return (
    <div
      {...props}
      className={cn(
        checked ? "bg-pink" : "border-2 border-pink",
        "w-5 h-5 rounded-sm relative hover:bg-pink/90 hover:cursor-pointer focus:outline-none focus:ring-1 focus:ring-white",
        className
      )}
      onClick={() => onChange(!checked)}
      role="checkbox"
      aria-checked={checked}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onChange(!checked);
        }
      }}
    >
      {checked && (
        <CheckIcon className="w-4 h-4 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      )}
    </div>
  );
};

Checkbox.displayName = "Checkbox";

export { Checkbox };
