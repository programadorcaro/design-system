import { HTMLAttributes } from "react";

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {}

export function Box({ className = "", ...props }: BoxProps) {
  return (
    <div
      className={`p-4 rounded-md bg-black font-default ${className}`}
      {...props}
    />
  );
}

Box.displayName = "Box";
