import React, { FC } from "react";
import {
  Container,
  Box,
  CssBaseline,
  styled,
  ThemeProvider,
} from "@mui/material";
import Header from "./parts/Header";
import { useSelector } from "react-redux";

import HeaderConnector from "./parts/HeaderConnector";
import createTheme from "./createTheme";
interface AppProps {}
const Root = styled(Box)(() => ({
  maxWidth: "1920px",
  width: "100%",
  margin: "0 auto",
}));

type ThemeModeType = "dark" | "light";
let App: FC<AppProps> = function App() {
  const themeMode: ThemeModeType = useSelector(
    (state: { theme: { mode: "light" | "dark" } }) => {
      return state.theme.mode;
    }
  );
  return (
    <ThemeProvider theme={createTheme(themeMode)}>
      <Root>
        <CssBaseline />
        <HeaderConnector />
      </Root>
    </ThemeProvider>
  );
};
// export default App;
export default App;
