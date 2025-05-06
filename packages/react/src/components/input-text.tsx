import { useRef } from "react";
import { cn } from "../lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Button } from "./button";
import { X } from "lucide-react";

const inputVariants = cva(
  "flex items-center border rounded-sm text-sm transition-colors focus-within:ring-1 focus-within:ring-pink w-full placeholder:text-gray-400 placeholder:text-sm",
  {
    variants: {
      variant: {
        default: "bg-white border-[#E2E2E2]",
        filled: "bg-gray-50 border border-gray-300 text-gray-900",
        withClear: "bg-gray-100 border border-gray-300 text-gray-900",
      },
      inputSize: {
        sm: "px-2 py-2 gap-2",
        md: "px-4 py-3 gap-3",
        lg: "px-4 py-4 gap-4",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "md",
    },
  }
);

export type TextInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "disabled"
> &
  VariantProps<typeof inputVariants> & {
    variant?: "default" | "filled" | "withClear";
    label?: string;
    labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  };

export function TextInput({
  inputSize = "md",
  variant = "default",
  disabled,
  className,
  onChange,
  value,
  label,
  labelProps,
  ...props
}: TextInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    if (onChange) {
      // Controlled input: fire onChange with empty value
      const event = {
        ...((window?.Event
          ? new Event("input", { bubbles: true })
          : {}) as any),
        target: { value: "" },
      };
      onChange(event as React.ChangeEvent<HTMLInputElement>);
    } else if (inputRef.current) {
      // Uncontrolled input: clear value directly
      inputRef.current.value = "";
    }
    // Refocus input
    inputRef.current?.focus();
  };

  const XIcon = X as React.ElementType;

  return (
    <>
      {label && (
        <label
          {...labelProps}
          className={cn(
            "block mb-2 text-sm font-medium text-gray-900",
            labelProps?.className
          )}
        >
          {label}
        </label>
      )}
      <div className="flex items-center relative w-full">
        <input
          ref={inputRef}
          className={cn(
            inputVariants({
              inputSize,
              variant,
              disabled: !!disabled,
              className,
            }),
            "focus:outline-none"
          )}
          disabled={!!disabled}
          value={value}
          onChange={onChange}
          {...props}
        />
        {variant === "withClear" &&
        !disabled &&
        (value || inputRef.current?.value) ? (
          <Button
            variant="ghost"
            size="sm"
            type="button"
            className="absolute right-2"
            tabIndex={-1}
            onClick={handleClear}
          >
            <XIcon className="w-4 h-4" aria-hidden="true" />
          </Button>
        ) : null}
      </div>
    </>
  );
}

TextInput.displayName = "TextInput";
