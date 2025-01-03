import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "@les-ui/react";

const meta: Meta<ButtonProps> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    children: "Button",
  },
};

export const Medium: Story = {
  args: {
    children: "Button",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    children: "Button",
    size: "lg",
  },
};

export const XLarge: Story = {
  args: {
    children: "Button",
    size: "xl",
  },
};
