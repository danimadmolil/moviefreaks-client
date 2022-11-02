import { Box, Paper, Stack, Typography } from "@mui/material";
import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import img1 from "../assets/img/movie1.jpg";
import img2 from "../assets/img/movie2.jpg";
import img3 from "../assets/img/movie3.jpg";
const topMovies: {
  id: number;
  name: string;
  categories: string[];
  image: string;
}[] = [
  {
    id: 1,
    name: "Doctor Strange 3",
    categories: ["action", "comic"],
    image: "url to image",
  },
  {
    id: 2,
    name: "Spider man 4",
    categories: ["action", "comic"],
    image: "url to image",
  },

  {
    id: 3,
    name: "Capitan Marvel",
    categories: ["action", "comic"],
    image: "url to image",
  },
  {
    id: 4,
    name: "Capitan Marvel",
    categories: ["action", "comic"],
    image: "url to image",
  },
  {
    id: 5,
    name: "Capitan Marvel",
    categories: ["action", "comic"],
    image: "url to image",
  },
  {
    id: 6,
    name: "Capitan Marvel",
    categories: ["action", "comic"],
    image: "url to image",
  },
  {
    id: 7,
    name: "Capitan Marvel",
    categories: ["action", "comic"],
    image: "url to image",
  },
  {
    id: 8,
    name: "Capitan Marvel",
    categories: ["action", "comic"],
    image: "url to image",
  },
  {
    id: 9,
    name: "Capitan Marvel",
    categories: ["action", "comic"],
    image: "url to image",
  },
];
const TopMovieSlider: FC = function TopMovieSlider() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1672px",
        margin: "0 auto",
        height: "517px",
        fontSize: "16px",
        "@media only screen and (min-width:900px)": {
          fontSize: "20px",
        },
        "@media only screen and (min-width:1200px)": {
          fontSize: "24px",
        },
      }}>
      <Swiper
        slidesPerView={6}
        spaceBetween={34}
        breakpoints={{
          200: { slidesPerView: 1, centeredSlides: false },
          300: { slidesPerView: 1.5, centeredSlides: false },
          500: { slidesPerView: 1.8, centeredSlides: false },
          700: { slidesPerView: 2, centeredSlides: false },
          750: { slidesPerView: 2.7, centeredSlides: false },
          900: { slidesPerView: 3, centeredSlides: false },
          1200: { slidesPerView: 4, centeredSlides: false },
          1600: { slidesPerView: 5, centeredSlides: false },
          1920: { slidesPerView: 6, centeredSlides: false },
        }}
        //   breakpoints={{ 600: {} }}
        style={{ marginTop: "115px" }}>
        {topMovies.map((movie) => {
          return (
            <SwiperSlide>
              <Stack
                dir="rtl"
                sx={{ width: "100%", maxWidth: "254px", height: "495px" }}>
                <Box
                  src={img1}
                  component={"img"}
                  sx={{
                    borderRadius: "24px",
                    width: "100%",
                    height: "382px",
                    mt: "19px",
                  }}
                />
                <Typography sx={{ mt: "19px", width: "100%", fontSize: "1em" }}>
                  {movie.name}
                </Typography>
                <Grid
                  sx={{ mt: "11px", flexWrap: "nowrap" }}
                  container
                  width={"auto"}>
                  {movie.categories.map((category, index) => {
                    if (index === 0) {
                      return (
                        <Typography sx={{ color: "gold" }}>
                          {category}
                        </Typography>
                      );
                    } else {
                      return (
                        <Grid container>
                          <CircleIcon sx={{ m: "0 7px", color: "gold" }} />
                          <Typography sx={{ color: "gold" }}>
                            {category}
                          </Typography>
                        </Grid>
                      );
                    }
                  })}
                </Grid>
              </Stack>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};
export default TopMovieSlider;
