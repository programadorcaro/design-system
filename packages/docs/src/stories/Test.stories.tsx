import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Form, FormProps } from "@les-ui/react";

const meta: Meta<FormProps> = {
  title: "Components/Form",
  component: Form,
  tags: ["autodocs"],
  args: {
    children: <div>Form Content</div>,
    onSubmit: (e) => {
      e.preventDefault();
      console.log('Form submitted');
    },
  },
};

export default meta;
type Story = StoryObj<FormProps>;

export const Default: Story = {};