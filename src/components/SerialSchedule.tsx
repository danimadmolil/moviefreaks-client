import React, { useRef, useState, ReactElement } from "react";
import {
  Grid,
  Stack,
  Typography,
  IconButton,
  Paper,
  Tabs,
  Tab,
  Box,
  useTheme,
  styled,
} from "@mui/material";
import img1 from "../assets/img/movie2.jpg";
import { ExpandMore, LockClock } from "@mui/icons-material";
import Scrollbar from "./Scrollbar";

type Props = {};
const CustomTab = styled(Tab)({
  fontSize: "1em",
  width: "50px",
});
export default function SerialSchedule({}: Props): ReactElement {
  const theme = useTheme();
  const rootScrollable = useRef(null);
  const scrollableRef = useRef(null);
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  return (
    <Paper
      sx={{
        maxWidth: "1117px",
        width: "100%",
        height: "209px",
        background: "#1A2331",
        fontSize: "6px",
        borderRadius: "8px",
        padding: "4px 2px",
        [theme.breakpoints.up("xs")]: {
          borderRadius: "24px",
          fontSize: "10px",
          padding: "20px 4px",
          height: "553px",
        },
        [theme.breakpoints.up("sm")]: {
          fontSize: "12px",
          padding: "29px 12px",
        },
        [theme.breakpoints.up("md")]: {
          fontSize: "14px",
          padding: "39px 22px",
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: "16px",
          padding: "49px 32px",
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: "20px",
          padding: "49px 32px",
        },
      }}>
      {/** Header*/}
      <Grid
        dir="rtl"
        container
        alignItems={"center"}
        justifyContent="center"
        sx={{
          height: "32px",
          flexDirection: "column",
          [theme.breakpoints.up("md")]: {
            paddingRight: "65px",
            flexDirection: "row",

            // alignItems: "center",
          },
        }}>
        <Typography
          sx={{ fontSize: "1.2em", fontWeight: "600" }}
          component={"h2"}>
          {"جدول پخش هفتگی سریال ها"}
        </Typography>
        {/***/}
        <Stack
          direction={"row"}
          sx={{
            mr: 0,
            [theme.breakpoints.up("xs")]: {
              mr: "56px",
            },
          }}>
          {Array(0)
            .fill(null)
            .map((item) => {
              return (
                <Typography
                  sx={{
                    fontSize: "1em",
                    ml: "6px",

                    [theme.breakpoints.up("sm")]: {
                      ml: "10px",
                      fontSize: "1em",
                    },
                    [theme.breakpoints.up("md")]: {
                      ml: "20px",
                      fontSize: "1em",
                    },
                    [theme.breakpoints.up("lg")]: {
                      ml: "35px",
                      fontSize: "1em",
                    },
                    [theme.breakpoints.up("xl")]: {
                      ml: "35px",
                      fontSize: "1.1em",
                    },
                  }}>
                  ایران
                </Typography>
              );
            })}
        </Stack>
        <IconButton
          sx={{
            width: "20px",
            height: "20px",
            [theme.breakpoints.up("md")]: {
              marginRight: "auto",
              width: "45px",
              height: "45px",
            },
          }}>
          <ExpandMore />
        </IconButton>
      </Grid>
      {/**  days of week filter */}
      <Grid
        dir="rtl"
        container
        sx={{
          height: "20px",
          [theme.breakpoints.up("xs")]: {
            height: "48px",
            mr: "37px",
            mt: "52px",
          },
        }}>
        <Tabs
          sx={{
            color: "gold",
            "& .MuiTabs-indicator": {
              background: "#eac016",
            },
          }}
          onChange={(e, v) => setCurrentTabIndex(v)}
          value={currentTabIndex}>
          <CustomTab
            sx={{
              fontSize: "1em",
              "& .Mui-selected": {
                color: "#eac016",
              },
            }}
            label="شنبه"></CustomTab>
          <CustomTab sx={{}} label="یکشنبه"></CustomTab>
          <CustomTab sx={{ fontSize: "1em" }} label="دوشنبه"></CustomTab>
          <CustomTab sx={{ fontSize: "1em" }} label="چهارشنبه"></CustomTab>
          <CustomTab sx={{ fontSize: "1em" }} label="پنجشنبه"></CustomTab>
          <CustomTab sx={{ fontSize: "1em" }} label="جمعه"></CustomTab>
        </Tabs>
      </Grid>
      {/**series for a day */}
      <Grid
        container
        flexWrap={"nowrap"}
        alignItems="center"
        sx={{
          [theme.breakpoints.down("xs")]: {},
        }}>
        <Scrollbar
          style={{ height: "140px" }}
          root={rootScrollable}
          scrollableRef={scrollableRef}
        />
        <Grid
          ref={rootScrollable}
          dir="rtl"
          container
          sx={{
            width: "98%",
            margin: "0 auto",
            marginTop: "28px",
            overflow: "hidden",
            height: "100px",
            [theme.breakpoints.up("xs")]: {
              height: "289px",
            },
          }}>
          <Grid
            ref={scrollableRef}
            container
            gap={"25px"}
            sx={{
              [theme.breakpoints.down("sm")]: {
                margin: "0 auto",
                paddingRight: "10px",
              },
            }}>
            {Array(8)
              .fill(null)
              .map((item) => {
                return (
                  <Paper
                    dir="ltr"
                    component={Stack}
                    direction="row"
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      width: "100%",
                      height: "132px",
                      margin: "0 auto",
                      paddingRight: "15px",
                      background: "transparent",
                      border: "2px solid #242F3F",
                      borderRadius: "20px",
                      padding: "5px 6px",
                      gap: "8px",
                      [theme.breakpoints.down("xs")]: {
                        flexDirection: "column",
                        padding: "0",
                      },
                      [theme.breakpoints.up("xs")]: {
                        width: "47%",
                      },
                      [theme.breakpoints.up("sm")]: {
                        width: "47%",
                        gap: "14px",
                      },
                      [theme.breakpoints.up("md")]: {
                        width: "47%",
                        gap: "18px",
                      },
                      [theme.breakpoints.up("lg")]: {
                        width: "47%",
                        gap: "22px",
                        borderRadius: "20px",
                        padding: "16px 17px",
                      },
                    }}>
                    <Box
                      component="img"
                      src={img1}
                      sx={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        zIndex: 1,
                        objectFit: "cover",
                        borderRadius: "9px",
                        [theme.breakpoints.up("xs")]: {
                          width: "95px",
                          height: "95px",
                          position: "static",
                          borderRadius: "9px",
                        },
                      }}
                    />
                    <Box
                      sx={{
                        [theme.breakpoints.up("xs")]: {
                          display: "none",
                        },
                        [theme.breakpoints.down("xs")]: {
                          zIndex: 200,
                          width: "100%",
                          height: "100%",
                          top: 0,
                          left: 0,
                          position: "absolute",
                          background:
                            "linear-gradient(to top, #000000cf 0%,#0000005c 100%)",
                        },
                      }}
                      className="filter"></Box>
                    <Stack
                      sx={{
                        [theme.breakpoints.down("xs")]: {
                          height: "100%",
                          pt: "80px",
                          ml: "20px",
                          position: "absolute",
                          zIndex: 1000,
                          color: "white",
                        },
                      }}>
                      <Typography
                        sx={{
                          fontSize: "1em",
                          fontWeight: "700",
                          color: "white",
                          [theme.breakpoints.up("xs")]: {
                            mt: "14px",
                          },
                        }}>
                        {"The Mysterius Benedic Society"}
                      </Typography>
                      <Grid
                        gap={"28px"}
                        container
                        sx={{ mt: "18px" }}
                        alignItems="center">
                        <Stack direction={"row"} alignItems="center">
                          <LockClock
                            sx={{
                              fontSize: "1em",
                              mt: "-6px",
                              color: "gold",
                            }}
                          />
                          <Typography sx={{ fontSize: "1em", ml: "7px" }}>
                            {"7:36"}
                          </Typography>
                        </Stack>
                        <Typography sx={{ fontSize: "1em" }}>
                          {"Season 1 Episode 2"}
                        </Typography>
                      </Grid>
                    </Stack>
                  </Paper>
                );
              })}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
