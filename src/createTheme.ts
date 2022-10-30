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
              paper: "#1A2331",
            },
          },
  });
}
