import { ButtonHTMLAttributes } from "react";
import { cn } from "../lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  sm: "px-4 py-2 h-10 text-sm",
  md: "px-5 py-3 h-12 text-md",
  lg: "px-6 py-4 h-14 text-lg",
  xl: "px-8 py-5 h-16 text-xl",
};

export function Button({ size = "sm", className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "font-default font-medium text-center box-border rounded-sm",
        "flex items-center justify-center gap-2 cursor-pointer",
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
}

Button.displayName = "Button";
