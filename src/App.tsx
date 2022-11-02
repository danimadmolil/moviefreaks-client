import React, { FC } from "react";
import {
  Box,
  CssBaseline,
  styled,
  ThemeProvider,
  Grid,
  useTheme,
} from "@mui/material";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { useSelector } from "react-redux";
import HeaderConnector from "./parts/HeaderConnector";
import createTheme from "./createTheme";
import FilterMenu from "./components/FilterMenu";
import TopMovieSlider from "./components/TopMovieSlider";

interface AppProps {}
const Root = styled(Box)(() => ({
  maxWidth: "1920px",
  width: "100%",
  margin: "0 auto",
  padding: "0 24px",
  "@media only screen and (min-width:1919px)": {
    padding: "0 84px",
  },
}));
const LeftArrowCircle = styled(ExpandCircleDownIcon)({
  transform: "rotate(90deg)",
});
type ThemeModeType = "dark" | "light";
let App: FC<AppProps> = function App() {
  const themeMode: ThemeModeType = useSelector(
    (state: { theme: { mode: "light" | "dark" } }) => {
      return state.theme.mode;
    }
  );
  const theme = useTheme();

  return (
    <ThemeProvider theme={createTheme(themeMode)}>
      <Root>
        <CssBaseline />
        <HeaderConnector />
        <FilterMenu />
        <TopMovieSlider />
        {/** content container*/}
        <Grid
          container
          gap="75px"
          dir="rtl"
          sx={{ mt: "83px", padding: "0 42px", height: "auto", width: "100%" }}
          className="main_content">
          {/**main content */}
          <Grid
            item
            sm={12}
            md={12}
            lg={8}
            xl={8.1}
            sx={{ outline: "2px solid blue" }}></Grid>
          {/**side bar */}
          <Grid
            item
            container
            sx={{
              height: "800px",
              paddingTop: "5px",
              outline: "2px solid red",
            }}
            sm={12}
            md={12}
            lg={3}
            xl={3}></Grid>
        </Grid>
      </Root>
    </ThemeProvider>
  );
};
// export default App;
export default App;
