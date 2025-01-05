import type { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "@les-ui/react";

const meta: Meta<TextProps> = {
  title: "Typography/Text",
  component: Text,
  tags: ["autodocs"],
  args: {
    children: "Text",
  },
  argTypes: {
    size: {
      description: "Size of the text",
      control: "inline-radio",
      options: [
        "xxs",
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "2xl",
        "4xl",
        "5xl",
        "6xl",
        "7xl",
      ],
      table: {
        defaultValue: { summary: "sm" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<TextProps>;

export const Default: Story = {};

export const CustomText: Story = {
  args: {
    children: "strong text",
    as: "strong",
    size: "lg",
  },
};
