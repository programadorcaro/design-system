import type { Meta, StoryObj } from "@storybook/react";
import { Select, SelectProps, SelectOption } from "@les-ui/react";
import React from "react";

const meta: Meta<SelectProps> = {
  title: "Form/Select",
  component: Select,
  tags: ["autodocs"],
  args: {
    selectSize: "md",
    variant: "default",
  },
  argTypes: {
    selectSize: {
      description: "Size of the select",
      control: "inline-radio",
      options: ["sm", "md", "lg"],
      table: {
        defaultValue: { summary: "md" },
      },
    },
    variant: {
      description: "Visual variant of the select",
      control: "inline-radio",
      options: ["default", "filled"],
      table: {
        defaultValue: { summary: "default" },
      },
    },
    disabled: {
      description: "Disabled state of the select",
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<SelectProps>;

const options = [
  { value: "Option1", label: "Option 1" },
  { value: "Option2", label: "Option 2" },
  { value: "Option3", label: "Option 3" },
  { value: "Option4", label: "Option 4" },
  { value: "Option5", label: "Option 5" },
];

export const Default: Story = {
  args: {
    label: "Select an option",
  },
  render: (args) => (
    <Select {...args}>
      {options.map((option) => (
        <SelectOption
          key={option.value}
          value={option.value}
          label={option.label}
        />
      ))}
    </Select>
  ),
};

export const WithCustomStyle: Story = {
  args: {
    label: "Select an option",
  },
  render: (args) => (
    <Select {...args} inputClassName="bg-red-500 h-10">
      {options.map((option) => (
        <SelectOption
          key={option.value}
          value={option.value}
          label={option.label}
        />
      ))}
    </Select>
  ),
};

export const WithValue: Story = {
  args: {
    label: "Select an option",
    value: "Option2",
  },
  render: (args) => (
    <Select {...args}>
      {options.map((option) => (
        <SelectOption
          key={option.value}
          value={option.value}
          label={option.label}
        />
      ))}
    </Select>
  ),
};

export const Disabled: Story = {
  args: {
    label: "Select an option",
    disabled: true,
  },
  render: (args) => (
    <Select {...args}>
      {options.map((option) => (
        <SelectOption
          key={option.value}
          value={option.value}
          label={option.label}
        />
      ))}
    </Select>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState("");

    return (
      <div className="space-y-4">
        <Select
          label="Controlled Select"
          value={value}
          onChange={(newValue) => setValue(newValue)}
        >
          {options.map((option) => (
            <SelectOption
              key={option.value}
              value={option.value}
              label={option.label}
            />
          ))}
        </Select>
        <div className="text-sm text-gray-600">
          Selected value: {value || "None"}
        </div>
      </div>
    );
  },
};
