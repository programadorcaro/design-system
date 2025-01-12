import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/pages/**/*.mdx", "../src/stories/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    builder: "@storybook/builder-vite",
    disableTelemetry: true,
  },
  viteFinal(config) {
    return {
      ...config,
      base: "./",
    };
  },
  docs: {
    autodocs: true,
  },
};

export default config;
