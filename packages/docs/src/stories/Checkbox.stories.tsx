import React, { useState } from "react";
import { Checkbox } from "@les-ui/react";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
};

export const Checked = () => (
  <div className="w-1/3">
    <Checkbox checked={true} onChange={() => console.log("checked")} />
  </div>
);

export const Unchecked = () => (
  <div className="w-1/3">
    <Checkbox checked={false} onChange={() => console.log("checked")} />
  </div>
);

export const Controlled = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="w-1/3">
      <Checkbox
        checked={checked}
        onChange={() => setChecked((prevState) => !prevState)}
      />
    </div>
  );
};
