import type { StorybookConfig } from "@storybook/react-vite";

import { dirname, join } from "path";

function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: ["../src/pages/**/*.mdx", "../src/stories/**/*.stories.tsx"],
  addons: [
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-interactions"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  viteFinal: (config, { configType }) => {
    if (configType === "PRODUCTION") {
      config.base = "/design-system/";
    }
    return {
      ...config,
      build: {
        ...config.build,
        sourcemap: true
      }
    };
  },
};
export default config;