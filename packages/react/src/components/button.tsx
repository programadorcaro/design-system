import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 rounded-[6px]",
  {
    variants: {
      variant: {
        default: "bg-orange-400 text-white hover:bg-orange-500",
        destructive: "bg-red-500 text-white shadow-sm hover:bg-red-600",
        outline:
          "border border-input bg-transparent shadow-sm hover:bg-gray-100",
        secondary: "bg-gray-200 text-gray-900 shadow-sm hover:bg-gray-300",
        ghost: "hover:bg-gray-100",
        link: "text-orange-400 underline-offset-4 hover:underline",
      },
      size: {
        sm: "px-4 py-2 h-10 text-sm",
        md: "px-5 py-3 h-12 text-md",
        lg: "px-6 py-4 h-14 text-lg",
        xl: "px-8 py-5 h-16 text-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
      );
    }
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
