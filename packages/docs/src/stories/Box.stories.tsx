import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Box, BoxProps, Text } from "@les-ui/react";

const meta: Meta<BoxProps> = {
  title: "Components/Box",
  component: Box,
  tags: ["autodocs"],
  args: {
    children: <Text style={{ color: "white" }}>Box</Text>,
  },
};

export default meta;
type Story = StoryObj<BoxProps>;

export const Default: Story = {};
