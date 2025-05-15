import React, { useState } from "react";
import { cn } from "../lib/utils";

export type Tab = {
  label: string;
  value: string;
};

export type TabsProps = {
  tabs: Tab[];
  defaultActive?: string;
  onChange?: (activeTab: Tab) => void;
  className?: string;
  label?: string;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
};

export function Tabs({
  tabs,
  defaultActive,
  onChange,
  className,
  label,
  labelProps,
}: TabsProps) {
  const [active, setActive] = useState(
    defaultActive || (tabs.length > 0 ? tabs[0].value : "")
  );

  const handleTabClick = (tab: Tab) => {
    setActive(tab.value);
    if (onChange) onChange(tab);
  };

  return (
    <div className={className}>
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
      <div
        className={cn(
          "flex bg-[#2c2c2e] rounded-md overflow-hidden border border-zinc-700",
          className
        )}
      >
        {tabs.map((tab) => (
          <button
            key={tab.value}
            type="button"
            className={cn(
              "flex-1 py-3 text-xs transition-colors border-x-[0.5px] border-zinc-700",
              active === tab.value
                ? "bg-neutral-700 text-white font-semibold"
                : "bg-transparent text-gray-300 hover:bg-zinc-700 hover:text-white",
              "focus:outline-none font-normal"
            )}
            onClick={() => handleTabClick(tab)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}

Tabs.displayName = "Tabs";
