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
import SerialSchedule from "./components/SerialSchedule";

interface AppProps {}
const Root = styled(Box)(({ theme }) => ({
  maxWidth: "1920px",
  width: "100%",
  margin: "0 auto",
  padding: "0 0px",
  [theme.breakpoints.up("sm")]: {
    padding: "0 24px",
  },
  [theme.breakpoints.up("md")]: {
    padding: "0 44px",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "0 64px",
  },
  [theme.breakpoints.up("xl")]: {
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
          sx={{ mt: "83px", height: "auto", width: "100%" }}
          className="main_content">
          {/**main content */}
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={8}
            xl={8.1}
            sx={{
              outline: "2px solid blue",
              [theme.breakpoints.down("sm")]: {
                width: "100%",
              },
            }}>
            <SerialSchedule />
          </Grid>
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
            lg={3.4}
            xl={3.35}></Grid>
        </Grid>
      </Root>
    </ThemeProvider>
  );
};
// export default App;
export default App;
