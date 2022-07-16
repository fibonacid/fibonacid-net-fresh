import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
export * from "twind";
export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  theme: {
    fontFamily: {
      sans: ["Comic Mono", "sans-serif"],
    },
    colors: {
      "black": "#121212",
      white: "#fff",
    },
  },
};
if (IS_BROWSER) setup(config);
