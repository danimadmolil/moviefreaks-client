import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  styled,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import React, { FC, useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Flag } from "@mui/icons-material";
import { getValue } from "@mui/system";
import FilterSelect from "./FilterSelect";
const AdvanceFilterRoot = styled(Grid)(({ theme }) => ({
  marginTop: "90px",
  marginLeft: "auto",
  marginRight: "auto",
  width: "1665px",
  // height: "396px",
  height: "auto",
  borderRadius: "21px",
  padding: "53px 46px",
  border: "5px solid #1A2331",
  fontSize: "10px",
  [theme.breakpoints.up("xs")]: {
    fontSize: "12px",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "14px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "16px",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.up("xl")]: {
    fontSize: "23px",
  },
}));
const filterCategories = [
  { id: 1, name: "فیلم" },
  { id: 2, name: "سریال" },
  { id: 3, name: "انیمیشن" },
  { id: 4, name: "مستند" },
  { id: 5, name: "همه" },
];
const AdvanceFilter: FC = function AdvanceFilter() {
  const theme = useTheme();
  function handleFilterChange(e: SelectChangeEvent) {
    setValue(e.target.value);
  }
  const [value, setValue] = useState("0");
  return (
    <AdvanceFilterRoot dir="rtl">
      <Grid container alignItems="center" wrap="nowrap">
        {/**header */}
        <Grid
          container
          sx={{ width: "253px", flexWrap: "nowrap" }}
          alignItems="center">
          <Typography
            sx={{
              display: "inline-block",
              fontSize: "1.3em",
              width: "auto",
              color: "white",
              fontWeight: 600,
            }}>
            جستجوی فیلم
          </Typography>
          <ChevronLeftIcon
            sx={{ fontSize: "36px", mr: "2.8px", color: "white" }}
          />
        </Grid>
        {/**filters */}
        <Grid container sx={{ mr: "25px" }}>
          {filterCategories.map((filter, index) => {
            if (index === 0) {
              return (
                <Grid container sx={{ width: "auto" }}>
                  <Typography sx={{ fontSize: "1em" }}>
                    {filter.name}
                  </Typography>
                </Grid>
              );
            } else {
              return (
                <Grid container sx={{ width: "auto", mr: "23px" }}>
                  <Typography sx={{ fontSize: "1.2em" }}>
                    {filter.name}
                  </Typography>
                </Grid>
              );
            }
          })}
        </Grid>
      </Grid>
      {/**filter selects */}
      <Grid
        sx={{
          mt: "20px",
          [theme.breakpoints.up("xs")]: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          },
          [theme.breakpoints.up("sm")]: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
          },
          [theme.breakpoints.up("md")]: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr ",
          },
          [theme.breakpoints.up("lg")]: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
          },
          [theme.breakpoints.up("xl")]: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
          },
        }}
        rowGap="26px"
        columnGap="17px"
        container>
        {Array(9)
          .fill(undefined)
          .map((item, index) => {
            return <FilterSelect />;
          })}
      </Grid>
      <Button
        sx={{
          mt: "28px",
          width: "100%",
          height: "84px",
          borderRadius: "22px",
          border: "4px solid #242F3F",
          padding: "28px 32px",
          background: "#EAC016",
          display: "flex",
          cursor: "pointer",

          color: "#131720",
          "&:hover": {
            background: "gold",
          },
          [theme.breakpoints.up("md")]: {
            width: "270px",
          },
        }}>
        <Typography sx={{ fontSize: "1em" }}>{"جستجوی پیشرفته"}</Typography>
      </Button>
    </AdvanceFilterRoot>
  );
};
export default AdvanceFilter;
