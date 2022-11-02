// @ts-nocheck
import { createTheme } from "@mui/material/styles";
import { MixinsOptions } from "@mui/material/styles/createMixins";
import { StyleOptions } from "@mui/system";
import { CSSProperties } from "@mui/material/styles/createMixins";

declare module "@mui/material/styles/createMixins" {
  // Allow for custom mixins to be added
  interface Mixins {
    urlLink?: CSSProperties;
    header?: CSSProperties;
  }
}
export default function themeCreator(mode: "light" | "dark") {
  return createTheme({
    breakpoints: {
      values: {
        xs: 500,
        sm: 700,
        md: 900,
        lg: 1200,
        xl: 1920,
      },
    },
    typography: {
      fontFamily: "Vazirmatn",
    },
    palette:
      mode === "light"
        ? {
            mode: "light",
            background: {
              default: "gray",
              paper: "white",
            },
          }
        : {
            mode: "dark",
            background: {
              default: "#131720",
              light: "#1A2331",
              paper: "#1A2331",
            },
          },
  });
}
