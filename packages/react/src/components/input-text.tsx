import { InputHTMLAttributes } from "react";
import { cn } from "../lib/utils";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "px-3 py-2 text-sm",
  md: "px-4 py-3 text-md",
  lg: "px-5 py-4 text-lg",
};

export function TextInput({
  inputSize = "md",
  className,
  ...props
}: TextInputProps) {
  return (
    <input
      className={cn(
        "font-default box-border w-full rounded-sm",
        "bg-gray-900 text-white",
        "placeholder:text-gray-400",
        "focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        sizeClasses[inputSize],
        className
      )}
      {...props}
    />
  );
}

TextInput.displayName = "TextInput";
