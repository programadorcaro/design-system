import { ComponentProps } from "react";
import { styled } from "./styles";

export const Button = styled("button", {
  fontFamily: "Poppins",
  borderRadius: "$md",
  padding: "$2 $4",
  height: "$10",
  border: 0,

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
