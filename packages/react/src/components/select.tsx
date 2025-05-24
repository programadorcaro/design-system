import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const selectVariants = cva(
  "flex items-center border rounded-md text-sm transition-colors focus-within:ring-1 focus-within:ring-pink w-full",
  {
    variants: {
      variant: {
        default: "bg-[#2c2c2e] border-zinc-700 text-white",
        filled: "bg-gray-50 border border-gray-300 text-gray-900",
      },
      selectSize: {
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
      selectSize: "md",
    },
  }
);

export type SelectProps = {
  value?: string;
  onChange?: (value: string) => void;
  children?: React.ReactNode;
  className?: string;
  label?: string;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
  disabled?: boolean;
  inputClassName?: string;
} & VariantProps<typeof selectVariants>;

export type SelectOptionProps = {
  value: string;
  label: string;
  disabled?: boolean;
  onClick?: () => void;
};

const SelectContext = React.createContext<{
  value?: string;
  onChange?: (value: string) => void;
}>({});

export function Select({
  value,
  onChange,
  children,
  className,
  label,
  labelProps,
  disabled,
  variant = "default",
  selectSize = "md",
  inputClassName = "",
}: SelectProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const selectRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = React.Children.toArray(children).find(
    (child) =>
      React.isValidElement(child) &&
      (child as React.ReactElement<SelectOptionProps>).props.value === value
  );

  const selectedLabel = React.isValidElement(selectedOption)
    ? (selectedOption as React.ReactElement<SelectOptionProps>).props.label
    : "";

  const ChevronDownIcon = ChevronDown as React.ElementType;

  return (
    <SelectContext.Provider value={{ value, onChange }}>
      <div className={cn("w-full", className)}>
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
        <div className="relative" ref={selectRef}>
          <button
            type="button"
            className={cn(
              selectVariants({ variant, selectSize, disabled }),
              "justify-between",
              inputClassName
            )}
            onClick={() => !disabled && setIsOpen(!isOpen)}
            disabled={disabled}
          >
            <span className="text-white">
              {selectedLabel || "Select an option"}
            </span>
            <ChevronDownIcon
              aria-hidden="true"
              className={cn(
                "w-5 h-5 transition-transform absolute right-4 top-1/2 -translate-y-1/2",
                {
                  "rotate-180": isOpen,
                }
              )}
            />
          </button>
          {isOpen && (
            <div className="absolute z-10 w-full mt-1 bg-neutral-700 rounded-md shadow-lg">
              <div className="py-1">
                {React.Children.map(children, (child) => {
                  if (!React.isValidElement(child)) return null;
                  const optionChild =
                    child as React.ReactElement<SelectOptionProps>;
                  return React.cloneElement(optionChild, {
                    onClick: () => {
                      onChange?.(optionChild.props.value);
                      setIsOpen(false);
                    },
                  });
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </SelectContext.Provider>
  );
}

export function SelectOption({
  value,
  label,
  disabled,
  onClick,
}: SelectOptionProps) {
  const { value: selectedValue } = React.useContext(SelectContext);

  return (
    <button
      type="button"
      className={cn(
        "w-full px-4 py-2 text-sm text-left text-white hover:bg-white/10 focus:outline-none",
        selectedValue === value && "bg-zinc-700",
        disabled && "opacity-50 cursor-not-allowed"
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
