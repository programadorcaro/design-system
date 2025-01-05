import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "@les-ui/react";

const meta: Meta<ButtonProps> = {
  title: "Form/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    // Default args for all stories
    children: "Button",
    size: "sm",
  },
  argTypes: {
    size: {
      description: "Size of the button",
      control: "inline-radio",
      options: ["sm", "md", "lg", "xl"],
    },
    children: {
      description: "Button content",
      control: "text",
    },
    disabled: {
      description: "Disabled state of the button",
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

// Base story with default size (sm)
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

export const XLarge: Story = {
  args: {
    size: "xl",
  },
};
