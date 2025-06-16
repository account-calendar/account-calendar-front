import type { Preview } from "@storybook/react";

import "@/shared/styles/index.css";

const preview: Preview = {
  parameters: {
    initialGlobals: {
      background: { value: "dark" },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
