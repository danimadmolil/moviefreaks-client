import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";

type Props = {};

export default function FilterSelect({}: Props) {
  const theme = useTheme();
  const [value, setValue] = useState("0");
  function handleFilterChange(e: SelectChangeEvent) {
    setValue(e.target.value);
  }
  return (
    <>
      <FormControl sx={{ height: "45px" }}>
        {/* <InputLabel id="my-lable">Score</InputLabel> */}
        <Select
          //   multiple
          fullWidth
          defaultValue={"None"}
          label="Score"
          value={value}
          // labelId="my-lable"
          id="demo-simple-select-standard"
          onChange={handleFilterChange}
          dir="ltr"
          sx={{
            "&": {
              // maxWidth: "270px",
              height: "45px",
              border: "4px solid #242F3F",
              borderRadius: "8px",
              width: "100%",
              // width: "100%",
              [theme.breakpoints.up("xs")]: {
                height: "45px",
                borderRadius: "12px",
              },
              [theme.breakpoints.up("sm")]: {
                height: "55px",
                borderRadius: "14px",
              },
              [theme.breakpoints.up("md")]: {
                height: "65px",
                borderRadius: "16px",
              },
              [theme.breakpoints.up("lg")]: {
                height: "75px",
                borderRadius: "18px",
              },
              [theme.breakpoints.up("xl")]: {
                borderRadius: "22px",

                height: "85px",
              },
            },
            "& .MuiSelect-select": {},
            "& .MuiOutlinedInput-notchedOutline": {
              display: "none",
            },

            "& .MuiSvgIcon-root": {
              color: "white",
              fontSize: "22px",
            },
          }}>
          <MenuItem sx={{ display: "none" }} value={0}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
