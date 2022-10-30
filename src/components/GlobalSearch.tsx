import React, { FC, useState } from "react";
import {
  IconButton,
  Paper,
  Grid,
  styled,
  useMediaQuery,
  PaperProps,
  Backdrop,
  ClickAwayListener,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

const SearchInput = styled("input")({
  paddingRight: "15px",
  fontSize: "1em",
  color: "white",
  border: "none",
  outline: "none",
  background: "transparent",
  width: "100%",
  "::placeholder": {
    color: "white",
  },
  "@media only screen and (max-width:1144px)": {
    display: "none",
  },
});
type MyT = React.ComponentType<
  PaperProps<typeof Grid, { component: typeof Grid }>
>;
const GlobalSearchRoot: MyT = styled(Paper)(() => ({
  flexWrap: "nowrap",
  marginRight: "auto",
  marginLeft: "12px",
  fontSize: "20px",
  width: "298px",
  height: "53px",
  borderRadius: "14px",
  background: "#1A2331",

  "@media only screen and (max-width:1240px)": {
    width: "200px",
  },
  "@media only screen and (max-width:1144px)": {
    width: "50px",
    height: "50px",
    borderRadius: "25px",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    overflow: "hidden",
  },
  "@media only screen and (max-width:500px)": {
    width: "30px",
    height: "30px",
  },
})) as typeof Paper;
const GlobalSearch: FC = function () {
  const [open, setOpen] = useState(false);
  const hideSearch = useMediaQuery("@media only screen and (max-width:1144px)");
  console.log({ hideSearch, open });
  return (
    <>
      <GlobalSearchRoot
        onClick={() => {
          setTimeout(() => {
            hideSearch && setOpen(true);
          }, 0);
        }}
        dir="rtl"
        component={Grid}
        container
        alignItems={"center"}>
        <IconButton
          size="medium"
          sx={{
            marginRight: "27px",
            color: "white",
            "@media only screen and (max-width:1144px)": {
              marginRight: 0,
            },
          }}>
          <SearchIcon />
        </IconButton>
        <SearchInput placeholder="جستجو" />
      </GlobalSearchRoot>
      <Backdrop open={open}>
        <ClickAwayListener
          onClickAway={() => {
            open === true && setOpen(false);
          }}>
          {open === true ? (
            <Paper
              onClick={() => hideSearch && setOpen(true)}
              dir="rtl"
              sx={{
                flexWrap: "nowrap",
                marginRight: "109px",
                fontSize: "20px",
                width: "80%",
                height: "53px",
                borderRadius: "14px",
                background: "#1A2331",
              }}
              component={Grid}
              container
              alignItems={"center"}>
              <IconButton
                size="medium"
                sx={{
                  marginRight: "27px",
                  color: "white",
                  "@media only screen and (max-width:1144px)": {
                    marginRight: 0,
                  },
                }}>
                <SearchIcon />
              </IconButton>
              <input
                style={{
                  paddingRight: "15px",
                  fontSize: "1em",
                  color: "white",
                  border: "none",
                  outline: "none",
                  background: "transparent",
                }}
                placeholder="جستجو"
              />
            </Paper>
          ) : (
            <></>
          )}
        </ClickAwayListener>
      </Backdrop>
    </>
  );
};

export default GlobalSearch;
