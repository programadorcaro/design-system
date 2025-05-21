import React, { useState } from "react";
import { Tabs, Tab } from "@les-ui/react";

export default {
  title: "Components/Tabs",
  component: Tabs,
};

const tabOptions: Tab[] = [
  { label: "Mp4", value: "mp4" },
  { label: "GIF", value: "gif" },
];

export const Basic = () => (
  <div className="w-1/3">
    <Tabs
      label="Export as"
      labelProps={{ className: "text-white" }}
      tabs={tabOptions}
      onChange={(tab) => console.log("Selected tab:", tab)}
    />
  </div>
);

export const Controlled = () => {
  const [active, setActive] = useState("gif");
  return (
    <div className="w-1/3">
      <Tabs
        label="Export as (Controlled)"
        labelProps={{ className: "text-white" }}
        tabs={tabOptions}
        defaultActive={active}
        onChange={(tab) => setActive(tab.value)}
      />
    </div>
  );
};

export const MultipleTabs = () => {
  return (
    <div className="w-2/3">
      <Tabs
        tabs={[
          ...tabOptions,
          { label: "MKV", value: "mkv" },
          { label: "MP3", value: "mp3" },
        ]}
        label="Export as"
        labelProps={{ className: "text-white" }}
        onChange={(tab) => console.log("Selected tab:", tab)}
      />
    </div>
  );
};

export const Disabled = () => (
  <div className="w-1/3">
    <Tabs
      label="Export as"
      labelProps={{ className: "text-white" }}
      tabs={tabOptions}
      disabled
      onChange={(tab) => console.log("Selected tab:", tab)}
    />
  </div>
);
