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
      black: "#000",
      dark: "#121212",
      white: "#fff",
      gray: "gray" 
    },
  },
};
if (IS_BROWSER) setup(config);
