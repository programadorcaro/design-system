import { HTMLAttributes } from "react";
import { cn } from "../lib/utils";

export interface BoxProps extends HTMLAttributes<HTMLDivElement> {}

export function Box({ className, ...props }: BoxProps) {
  return (
    <div
      className={cn(
        "p-4 rounded-md bg-black font-default",
        className
      )}
      {...props}
    />
  );
}

Box.displayName = "Box";
