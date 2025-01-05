import type { Meta, StoryObj } from "@storybook/react";
import { Heading, HeadingProps } from "@les-ui/react";

const meta: Meta<HeadingProps> = {
  title: "Typography/Heading",
  component: Heading,
  tags: ["autodocs"],
  args: {
    children: "Heading",
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"],
    },
    as: {
      control: "inline-radio",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
  },
};

export default meta;
type Story = StoryObj<HeadingProps>;

export const Default: Story = {};

export const CustomText: Story = {
  args: {
    children: "strong text",
    as: "strong",
    size: "lg",
  },
};
