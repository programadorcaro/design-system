import { ComponentProps } from "@stitches/react";
import { styled } from "../styles";

export const Box = styled("div", {
  padding: "$4",
  borderRadius: "$md",
  background: "#000",
  fontFamily: "$default",
});

export type BoxProps = ComponentProps<typeof Box>;

Box.displayName = "Box";
