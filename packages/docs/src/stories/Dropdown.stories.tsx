import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  Dropdown,
  DropdownProps,
  DropdownItem,
  DropdownSection,
} from "@les-ui/react";

// Wrapper component to handle state
const DropdownWrapper = (props: Partial<DropdownProps>) => {
  const [open, setOpen] = useState(false);
  return <Dropdown open={open} onOpenChange={setOpen} {...props} />;
};

const meta: Meta<typeof DropdownWrapper> = {
  title: "Components/Dropdown",
  component: DropdownWrapper,
  tags: ["autodocs"],
  args: {
    trigger: <button>Click me</button>,
    children: (
      <>
        <DropdownItem>Option 1</DropdownItem>
        <DropdownItem>Option 2</DropdownItem>
        <DropdownItem>Option 3</DropdownItem>
      </>
    ),
  },
  argTypes: {
    trigger: {
      description: "Element that triggers the dropdown",
      control: "object",
    },
    children: {
      description: "Dropdown content",
      control: "object",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "3rem", minHeight: "400px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof DropdownWrapper>;

// Basic dropdown
export const Default: Story = {};

// Profile dropdown like in the screenshot
export const ProfileDropdown: Story = {
  args: {
    trigger: (
      <div className="w-10 h-10 rounded-full bg-gray-300 cursor-pointer">
        {/* Avatar placeholder */}
      </div>
    ),
    children: (
      <>
        <DropdownSection>
          <DropdownItem>My profile @mia</DropdownItem>
          <DropdownItem>Account settings</DropdownItem>
          <DropdownItem>Device management</DropdownItem>
          <DropdownItem>Sign out</DropdownItem>
        </DropdownSection>

        <DropdownSection title="SWITCH ACCOUNT">
          <DropdownItem>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-300" />
              <div>
                <div className="text-sm">Mia de Silva</div>
                <div className="text-xs text-gray-500">hi@miadesign.io</div>
              </div>
            </div>
          </DropdownItem>
          <DropdownItem>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-300" />
              <div>
                <div className="text-sm">Caitlyn King</div>
                <div className="text-xs text-gray-500">caitlyn@stripe.com</div>
              </div>
            </div>
          </DropdownItem>
          <DropdownItem>Sign out of all accounts</DropdownItem>
        </DropdownSection>
      </>
    ),
  },
};

// Simple menu
export const SimpleMenu: Story = {
  args: {
    trigger: <button className="px-4 py-2 bg-gray-800 rounded-md">Menu</button>,
    children: (
      <DropdownSection>
        <DropdownItem>Edit</DropdownItem>
        <DropdownItem>Duplicate</DropdownItem>
        <DropdownItem>Share</DropdownItem>
        <DropdownItem>Delete</DropdownItem>
      </DropdownSection>
    ),
  },
};

// With icons
export const WithIcons: Story = {
  args: {
    trigger: (
      <button className="px-4 py-2 bg-gray-800 rounded-md">Actions</button>
    ),
    children: (
      <DropdownSection>
        <DropdownItem>Edit file</DropdownItem>
        <DropdownItem>Make a copy</DropdownItem>
        <DropdownItem>Share with others</DropdownItem>
        <DropdownItem className="text-red-500">Delete</DropdownItem>
      </DropdownSection>
    ),
  },
};

// Multiple sections
export const MultipleSections: Story = {
  args: {
    trigger: (
      <button className="px-4 py-2 bg-gray-800 rounded-md">Options</button>
    ),
    children: (
      <>
        <DropdownSection title="Account">
          <DropdownItem>Profile</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
        </DropdownSection>
        <DropdownSection title="Team">
          <DropdownItem>Invite members</DropdownItem>
          <DropdownItem>Team settings</DropdownItem>
        </DropdownSection>
        <DropdownSection>
          <DropdownItem className="text-red-500">Sign out</DropdownItem>
        </DropdownSection>
      </>
    ),
  },
};

// Note: You'll need to create these icon components or import them from your icon library
const UserIcon = () => <div className="w-4 h-4 bg-gray-500 rounded" />;
const SettingsIcon = () => <div className="w-4 h-4 bg-gray-500 rounded" />;
const DeviceIcon = () => <div className="w-4 h-4 bg-gray-500 rounded" />;
const LogoutIcon = () => <div className="w-4 h-4 bg-gray-500 rounded" />;
const EditIcon = () => <div className="w-4 h-4 bg-gray-500 rounded" />;
const CopyIcon = () => <div className="w-4 h-4 bg-gray-500 rounded" />;
const ShareIcon = () => <div className="w-4 h-4 bg-gray-500 rounded" />;
const TrashIcon = () => <div className="w-4 h-4 bg-gray-500 rounded" />;
