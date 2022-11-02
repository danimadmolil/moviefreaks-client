import React, { FC } from "react";
import PendingIcon from "@mui/icons-material/Pending";
import { Grid, Typography } from "@mui/material";
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
  return (
    <Grid
      dir="rtl"
      wrap="nowrap"
      sx={{
        fontSize: "24px",
        padding: "0 60px",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
        width: "100%",
        maxWidth: "1662px",
        height: "108px",
        mt: "4px",
        borderRadius: "14px",
        border: "4px solid",
        borderColor: "background.light",
      }}
      container>
      {filters.map((filter, index) => {
        return (
          <Grid
            wrap="nowrap"
            width={"auto"}
            key={filter.id}
            item
            paddingRight={index === 0 ? "0px" : "74px"}
            container
            display={"inline-flex"}>
            <PendingIcon
              sx={{
                width: "36px",
                height: "36px",
                ml: "20px",
                color: "background.light",
              }}
            />
            <Typography sx={{ fontSize: "1em" }}>{filter.title}</Typography>
          </Grid>
        );
      })}
    </Grid>
  );
};
export default FilterMenu;
