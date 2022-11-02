import React, { FC } from "react";
import PendingIcon from "@mui/icons-material/Pending";
import { Grid, Typography, useTheme } from "@mui/material";
import { fontSize } from "@mui/system";

const filters: { id: number; title: string }[] = [
  { id: 1, title: "دسته بندی" },
  { id: 2, title: "ژانر" },
  { id: 3, title: "اخبار سینما" },
  { id: 4, title: "برنامه هفتگی سریال ها" },
  { id: 5, title: "عناوین برت" },
  { id: 6, title: "لیست تماشا" },
];
const FilterMenu: FC = function FilterMenu() {
  const theme = useTheme();
  return (
    <Grid
      dir="rtl"
      sx={{
        width: "100%",
        flexWrap: "wrap",
        border: "4px solid",
        borderColor: "background.light",
        alignItems: "center",
        justifyContent: "start",
        gap: "18px",
        fontSize: "8px",
        [theme.breakpoints.up("sm")]: {
          fontSize: "10px",
        },
        [theme.breakpoints.up("md")]: {
          fontSize: "14px",
          justifyContent: "space-evenly",
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: "16px",
          justifyContent: "space-evenly",
        },
        [theme.breakpoints.up("xl")]: {
          flexWrap: "nowrap",
          justifyContent: "center",
          fontSize: "24px",
          padding: "0 60px",
          margin: "0 auto",
          maxWidth: "1662px",
          height: "108px",
          mt: "4px",
          borderRadius: "14px",
        },
      }}
      container>
      {filters.map((filter, index) => {
        return (
          <Grid
            wrap="nowrap"
            width={"auto"}
            key={filter.id}
            item
            sx={{
              alignItems: "center",
              [theme.breakpoints.up("lg")]: {
                pr: index === 0 ? "0px" : "74px",
              },
            }}
            container
            display={"inline-flex"}>
            <PendingIcon
              sx={{
                width: "20px",
                height: "20px",
                color: "background.light",
                ml: "5px",
                [theme.breakpoints.up("md")]: {
                  ml: "20px",
                  width: "36px",
                  height: "36px",
                },
              }}
            />
            <Typography
              sx={{
                maxWidth: "15px",
                fontSize: "1em",
                [theme.breakpoints.up("sm")]: {
                  maxWidth: "150px",
                },
              }}>
              {filter.title}
            </Typography>
          </Grid>
        );
      })}
    </Grid>
  );
};
export default FilterMenu;
