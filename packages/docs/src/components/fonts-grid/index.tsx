import React from "react";
import { fonts } from "@les-ui/tokens";

export function FontsGrid() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
      {Object.entries(fonts).map(([key, value]) => (
        <div
          key={key}
          style={{
            aspectRatio: "1/1",
            backgroundColor: "white",
            display: "grid",
            placeItems: "center",
            width: 200,
            borderRadius: 3,
            fontFamily: value,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>{`${key}: `}</span>
            <span>{value}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
