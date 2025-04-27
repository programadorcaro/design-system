import type { Meta, StoryObj } from "@storybook/react";
import { TextInput, TextInputProps } from "@les-ui/react";
import React, { useState } from "react";

const meta: Meta<TextInputProps> = {
  title: "Form/TextInput",
  component: TextInput,
  tags: ["autodocs"],
  args: {
    placeholder: "Type your text",
    inputSize: "md",
    variant: "default",
  },
  argTypes: {
    inputSize: {
      description: "Size of the input",
      control: "inline-radio",
      options: ["sm", "md", "lg"],
      table: {
        defaultValue: { summary: "md" },
      },
    },
    variant: {
      description: "Visual variant of the input",
      control: "inline-radio",
      options: ["default", "filled", "withClear"],
      table: {
        defaultValue: { summary: "default" },
      },
    },
    disabled: {
      description: "Disabled state of the input",
      control: "boolean",
    },
    placeholder: {
      description: "Placeholder text",
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<TextInputProps>;

// Base story with default size (md)
export const Default: Story = {
  args: {
    variant: "default",
  },
};

// Size variants
export const Small: Story = {
  args: {
    inputSize: "sm",
  },
};

export const Medium: Story = {
  args: {
    inputSize: "md",
  },
};

export const Large: Story = {
  args: {
    inputSize: "lg",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
  },
};

export const WithClear: Story = {
  render: (args) => {
    const [value, setValue] = useState("Input Field");
    return (
      <TextInput
        {...args}
        variant="withClear"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onClear={() => setValue("")}
        placeholder="Input Field"
      />
    );
  },
};

export const WithLabel: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
  },
};

export const WithCustomLabel: Story = {
  args: {
    label: "Username",
    labelProps: { className: "text-red-500 text-lg" },
    placeholder: "Enter your username",
  },
};
