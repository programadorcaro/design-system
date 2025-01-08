import { HTMLAttributes } from "react";
import { cn } from "../lib/utils";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
}

const sizeClasses = {
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-4xl",
  xl: "text-5xl",
  "2xl": "text-6xl",
  "3xl": "text-7xl",
  "4xl": "text-8xl",
  "5xl": "text-9xl",
};

export function Heading({ size = "md", className, ...props }: HeadingProps) {
  return (
    <h2
      className={cn(
        "font-default leading-tight m-0 text-gray-300",
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
}

Heading.displayName = "Heading";
