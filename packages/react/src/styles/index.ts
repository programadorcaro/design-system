import { createStitches, defaultThemeMap } from "@stitches/react";
import {
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from "@les-ui/tokens";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: "space",
    width: "space",
  },
  theme: {
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
    space,
  },
});
