import { ComponentProps } from "@stitches/react";
import { styled } from "../styles";

export const Button = styled("button", {
  all: "unset",
  fontFamily: "Poppins",
  fontSize: "$sm",
  fontWeight: "$medium",
  textAlign: "center",
  boxSizing: "border-box",
  borderRadius: "$sm",
  padding: "$2 $4",
  height: "$10",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",
  cursor: "pointer",

  svg: {
    width: "$4",
    height: "$4",
  },

  variants: {
    size: {
      sm: {
        padding: "$2 $4",
        height: "$10",
        fontSize: "$sm",
      },
      md: {
        padding: "$3 $5",
        height: "$12",
        fontSize: "$md",
      },
      lg: {
        padding: "$4 $6",
        height: "$14",
        fontSize: "$lg",
      },
      xl: {
        padding: "$5 $8",
        height: "$16",
        fontSize: "$xl",
      },
    },
  },

  defaultVariants: {
    size: "sm",
  },
});

export type ButtonProps = ComponentProps<typeof Button>;

Button.displayName = "Button";
