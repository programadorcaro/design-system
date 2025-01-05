import type { Meta, StoryObj } from "@storybook/react";
import { TextInput, TextInputProps } from "@les-ui/react";

const meta: Meta<TextInputProps> = {
  title: "Form/TextInput",
  component: TextInput,
  tags: ["autodocs"],
  args: {
    placeholder: "Type your text",
  },
  argTypes: {
    size: {
      description: "Size of the input",
      control: "inline-radio",
      options: ["sm", "md", "lg"],
      table: {
        defaultValue: { summary: "md" },
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
export const Default: Story = {};

// Size variants
export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
