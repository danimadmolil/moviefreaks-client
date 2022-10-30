import React, { FC } from "react";
import { Grid, Typography, IconButton,useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
type MenuItem = {
  id: number;
  title: string;
  subMenus?: {};
};
const menuItems: MenuItem[] | [] = [
  { id: 1, title: "خانه" },
  { id: 2, title: "فیلمهای ویژه" },
  { id: 3, title: "زیرنویس اختصاصی" },
  { id: 1, title: "باکس افیس" },
  { id: 1, title: "اشتراک ویژه" },
];

const HeaderMenu: FC<{ isDrawerOpen: boolean; closeDrawer: () => void }> =
  function HeaderMenu({ closeDrawer, isDrawerOpen }) {
    
    const theme = useTheme();
    const biggerThanMd = useMediaQuery(theme.breakpoints.up('md'))
    return (
      <>
        <Grid
          sx={{
            transition: "transform 0.25s ease-in-out",
            zIndex: 999,
            padding: "10% 0",
            width: "100vw",
            height: "100vh",
            flexDirection: "column",
            position: "fixed",
            top: 0,
            left: "100%",
            transform: !biggerThanMd && isDrawerOpen ? "translateX(-100%)" : "translateX(+100%)",
            background: "#131720",
            fontSize: "12px",
            [theme.breakpoints.up("md")]: {
              padding: "0px",
              position: "relative",
              width: "757px",
              left: 0,
              transform: "translateX(0px)",
              height: "30px",
              fontSize: "20px",
              marginRight: "60px",
            },
          }}
          container
          alignItems={"center"}
          justifyContent={"space-between"}>
          <IconButton
            onClick={() => closeDrawer()}
            sx={{
              opacity: isDrawerOpen ? 1 : 0.1,
              transition: "opacity 0.25s 0.25s ease-in",
              color: "white",
              position: "absolute",
              top: "5px",
              left: "5px",
              [theme.breakpoints.up("md")]: { display: "none" },
            }}>
            <CloseIcon />
          </IconButton>
          {menuItems.map((menuItem) => {
            return (
              <Typography
                sx={{ color: "white", fontSize: "1em", cursor: "pointer" }}
                key={menuItem.id}>
                {menuItem.title}
              </Typography>
            );
          })}
        </Grid>
      </>
    );
  };
export default HeaderMenu;
