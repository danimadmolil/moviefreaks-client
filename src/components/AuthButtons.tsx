import React, { FC, useRef, useState } from "react";
import {
  Grid,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  Menu,
  Avatar,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Paper,
} from "@mui//material";
import {
  Login,
  AppRegistrationRounded,
  SignLanguage,
} from "@mui/icons-material";
import TouchRipple from "@mui/material/ButtonBase/TouchRipple";
const AuthButtonsMobileMenuItems = (
  <Paper>
    <MenuItem>
      <ListItemIcon>
        <Login />
      </ListItemIcon>
      <ListItemText>{"ورود"}</ListItemText>
    </MenuItem>
    <MenuItem>
      <ListItemIcon>
        <AppRegistrationRounded />
      </ListItemIcon>
      <ListItemText>{"ثبت نام"}</ListItemText>
    </MenuItem>
  </Paper>
);
const AuthButtons: FC = () => {
  const theme = useTheme();
  const downLg = useMediaQuery(theme.breakpoints.down("lg"));
  const avatarRef = useRef(null);
  const [ref, setRef] = useState(null);
  function closeMenu() {
    setRef(null);
  }
  function openMenu() {
    setRef(avatarRef.current);
  }
  return downLg ? (
    <>
      <IconButton onClick={openMenu} ref={avatarRef}>
        <Avatar>
          <SignLanguage />
        </Avatar>
      </IconButton>
      <Menu onClose={closeMenu} anchorEl={ref} open={ref ? true : false}>
        {AuthButtonsMobileMenuItems}
      </Menu>
    </>
  ) : (
    <Grid
      alignItems={"center"}
      justifyContent="space-between"
      sx={{
        width: "100px",
        flexWrap: "warp",
        marginRight: "8px",

        [theme.breakpoints.up("lg")]: {
          flexWrap: "nowrap",
          marginRight: "30px",
          fontSize: "20px",
          width: "201px",
          height: "55px",
        },
      }}
      container>
      <Button
        sx={{
          background: "transparent",
          color: "white",
          borderRadius: "15px",
          border: "3px solid #EAC016",
          height: "27.5px",
          [theme.breakpoints.up("sm")]: {
            width: "100%",
          },
          [theme.breakpoints.up("lg")]: {
            width: "120px",
            height: "55px",
            fontSize: "1em",
          },
        }}>
        {"ورود"}
      </Button>
      <Button
        disableRipple={true}
        sx={{
          height: "27.5px",
          [theme.breakpoints.up("sm")]: {
            width: "100%",
          },
          [theme.breakpoints.up("lg")]: {
            width: "120px",
            height: "55px",
            fontSize: "1em",
          },
        }}>
        <Typography sx={{ fontSize: "1em", color: "white" }}>
          {"ثبت نام"}{" "}
        </Typography>
      </Button>
    </Grid>
  );
};
export default AuthButtons;
