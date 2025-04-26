import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "@les-ui/react";
import { ComponentType } from "react";

const meta: Meta<ButtonProps> = {
  title: "Form/Button",
  component: Button as ComponentType<ButtonProps>,
  tags: ["autodocs"],
  args: {
    children: "Button",
    size: "md",
  },
  argTypes: {
    size: {
      description: "Size of the button",
      control: "inline-radio",
      options: ["xs", "sm", "md", "lg", "xl"],
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
export const ExtraSmall: Story = {
  args: {
    size: "xs",
  },
};

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

export const Disabled: Story = {
  args: {
    size: "md",
    disabled: true,
  },
};

export const Ghost: Story = {
  args: {
    size: "md",
    variant: "ghost",
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

// Custom gradient stories
export const GradientOrangePink: Story = {
  args: {
    className:
      "bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 text-white border-none",
    children: "Gradient Orange-Pink",
  },
};

export const Purple: Story = {
  args: {
    className: "bg-purple-500 text-white border-none",
    children: "Gradient Blue-Purple",
  },
};

// Custom animation on hover
export const AnimatedGradient: Story = {
  args: {
    className:
      "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:bg-[size:400%] hover:animate-gradient-xy text-white border-none",
    children: "Animated Gradient",
  },
};
