import React, { FC, useState } from "react";
import GlobalSearch from "../components/GlobalSearch";
import HeaderMenu from "../components/HeaderMenu";
import {
  Switch,
  IconButton,
  Paper,
  Button,
  Grid,
  useTheme,
  Box,
  Typography,
  styled,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import brand1 from "../assets/img/moviefreaks1.png";
import brand2 from "../assets/img/moviefreaks2.png";
import HeaderMenuConnector from "../components/HeaderMenuConnector";
import { useDispatch } from "react-redux";
import { setThemeMode } from "../store/slice/theme";
import AuthButtons from "../components/AuthButtons";
const HeaderRoot = styled(Grid)(({ theme }) => ({
  width: "100%",
  flexWrap: "nowrap",
  height: "126px",
  alignItems: "center",
  margin: "0 auto",

  "@media only screen and (min-width:1920px)": {
    width: "1672px",
    flexWrap: "nowrap",
  },
}));



type HeaderProps = {
  isDrawerOpen?: boolean;
  openDrawer: () => void;
};

const Header: FC<HeaderProps> = function ({ isDrawerOpen, openDrawer }) {
    const theme = useTheme();
    const dispatch = useDispatch()
  return (
    <HeaderRoot container dir="rtl">
      <IconButton
        className="drawer_menu-open"
        onClick={() => openDrawer()}
        sx={{
          color: "white",
          display: "block",
          [theme.breakpoints.up("md")]: {
            display: "none",
          },
        }}>
        <MenuIcon />
      </IconButton>
      <Box
        component={"img"}
        sx={{ width: "152px", height: "44px", objectFit: "cover" }}
        src={brand2}></Box>
      <Switch
        sx={{
          "&": {
            width: "39px",
            height: "39px",
            marginRight: "14px",
            background: "#1A2331",
            borderRadius: "30px",
            overflow: "hidden",
          },
          "& .MuiButtonBase-root": {
            width: "100%",
            height: "100%",
            background: "transparent",
          },
          "& .MuiSwitch-switchBase.Mui-checked": {
            transform: "translate(0,0)",
            color: "black",
          },
        }}
        onChange={(e,check)=>dispatch(setThemeMode({mode:check?"light" : "dark"}))}
        icon={<LightModeIcon sx={{ color: "#EAC016" }} />}
        checkedIcon={<DarkModeIcon />}
      />
      <HeaderMenuConnector />
      <GlobalSearch />
      <AuthButtons />
    </HeaderRoot>
  );
};
export default Header;
