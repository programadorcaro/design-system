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
  },
};

export default meta;
type Story = StoryObj<HeadingProps>;

export const Default: Story = {};

export const CustomText: Story = {
  args: {
    children: "strong text",
    size: "lg",
  },
};
