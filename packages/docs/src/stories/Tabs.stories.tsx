import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, Tab } from "@les-ui/react";
import React, { useState } from "react";

const tabOptions: Tab[] = [
  { label: "Mp4", value: "mp4" },
  { label: "GIF", value: "gif" },
];

const meta: Meta = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  args: {
    label: "Export as",
    labelProps: { className: "text-inherit" },
    tabs: tabOptions,
  },
  argTypes: {
    label: {
      description: "Label for the Tabs group",
      control: "text",
      table: { defaultValue: { summary: "Export as" } },
    },
    labelProps: {
      description: "Props for the label element",
      control: "object",
    },
    tabs: {
      description: "Array of tab options",
      control: false,
    },
    onChange: {
      description: "Callback when tab changes",
      control: false,
    },
    defaultActive: {
      description: "Default active tab value (for controlled usage)",
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Basic: Story = {
  args: {},
  render: (args) => (
    <div className="w-72">
      <Tabs {...args} onChange={(tab) => console.log("Selected tab:", tab)} />
    </div>
  ),
};

export const MultipleTabs: Story = {
  args: {},
  render: (args) => (
    <div className="w-2/3">
      <Tabs
        tabs={[
          ...args.tabs,
          { label: "MKV", value: "mkv" },
          { label: "MP3", value: "mp3" },
        ]}
        label={args.label}
        labelProps={args.labelProps}
        onChange={(tab) => console.log("Selected tab:", tab)}
      />
    </div>
  ),
};

export const Controlled: Story = {
  args: {
    label: "Export as (Controlled)",
    defaultActive: "gif",
  },
  render: (args) => {
    const [active, setActive] = useState("gif");
    return (
      <div className="w-72">
        <Tabs
          {...args}
          defaultActive={active}
          onChange={(tab) => setActive(tab.value)}
        />
      </div>
    );
  },
};
