import type { Meta, StoryObj } from "@storybook/react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@les-ui/react";
import React from "react";

const meta: Meta<typeof Select> = {
  title: "Form/Select",
  component: Select,
  tags: ["autodocs"],
  args: {
    selectSize: "md",
    variant: "default",
  },
  argTypes: {
    selectSize: {
      description: "Size of the select",
      control: "inline-radio",
      options: ["sm", "md", "lg"],
      table: {
        defaultValue: { summary: "md" },
      },
    },
    variant: {
      description: "Visual variant of the select",
      control: "inline-radio",
      options: ["default", "filled"],
      table: {
        defaultValue: { summary: "default" },
      },
    },
    disabled: {
      description: "Disabled state of the select",
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

// Base story with default size (md)
export const Default: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger>
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

// Size variants
export const Small: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger selectSize="sm">
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const Medium: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger selectSize="md">
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const Large: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger selectSize="lg">
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <Select {...args} disabled>
      <SelectTrigger>
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const Filled: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger variant="filled">
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3">Option 3</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const WithGroups: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Vegetables</SelectLabel>
          <SelectItem value="carrot">Carrot</SelectItem>
          <SelectItem value="potato">Potato</SelectItem>
          <SelectItem value="tomato">Tomato</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};
