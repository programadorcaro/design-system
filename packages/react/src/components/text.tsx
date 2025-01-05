import { HTMLAttributes } from "react";

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  size?:
    | "xxs"
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl"
    | "8xl"
    | "9xl";
}

const sizeClasses = {
  xxs: "text-xxs",
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
  "7xl": "text-7xl",
  "8xl": "text-8xl",
  "9xl": "text-9xl",
};

export function Text({ size = "md", className = "", ...props }: TextProps) {
  return (
    <p
      className={`
        font-default leading-base m-0 text-gray-300
        ${sizeClasses[size]}
        ${className}
      `}
      {...props}
    />
  );
}

Text.displayName = "Text";
