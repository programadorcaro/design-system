import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 rounded-[6px]",
  {
    variants: {
      variant: {
        default: "bg-orange-500 text-white hover:bg-orange-400",
        destructive: "bg-red-500 text-white shadow-sm hover:bg-red-400",
        outline:
          "border border-input bg-transparent shadow-sm hover:bg-gray-100",
        secondary: "bg-gray-300 text-gray-900 shadow-sm hover:bg-gray-200",
        ghost: "hover:opacity-80",
        link: "text-orange-400 underline-offset-4 hover:underline",
      },
      size: {
        xs: "px-3 py-2 h-6 text-xs",
        sm: "px-4 py-2 h-8 text-xs",
        md: "px-5 py-3 h-9 text-sm",
        lg: "px-6 py-4 h-10 text-base",
        xl: "px-8 py-5 h-12 text-lg",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  disabled?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, disabled, ...props }, ref) => {
    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className, disabled }))}
          ref={ref}
          {...props}
        />
      );
    }
    return (
      <button
        className={cn(buttonVariants({ variant, size, className, disabled }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
