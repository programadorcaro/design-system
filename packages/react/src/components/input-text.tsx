import { ComponentProps } from "@stitches/react";
import { styled } from "../styles";

export const TextInput = styled("input", {
  all: "unset",
  fontFamily: "$default",
  fontSize: "$sm",
  boxSizing: "border-box",
  width: "100%",
  borderRadius: "$sm",
  padding: "$3 $4",
  backgroundColor: "$gray900",
  color: "$white",

  "&::placeholder": {
    color: "$gray400",
  },

  "&:focus": {
    outline: "2px solid $colors$ignite500",
    outlineOffset: "2px",
  },

  "&:disabled": {
    cursor: "not-allowed",
    opacity: 0.5,
  },

  variants: {
    size: {
      sm: {
        padding: "$2 $3",
        fontSize: "$sm",
      },
      md: {
        padding: "$3 $4",
        fontSize: "$md",
      },
      lg: {
        padding: "$4 $5",
        fontSize: "$lg",
      },
    },
  },

  defaultVariants: {
    size: "md",
  },
});

export type TextInputProps = ComponentProps<typeof TextInput>;

TextInput.displayName = "TextInput";
