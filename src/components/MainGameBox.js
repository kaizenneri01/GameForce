import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Slider from "react-slick";

import {
  MainButton,
  MainCard,
  MainContent,
  MainDesc,
  MainGamePrice,
  MainGenre,
  MainGenreText,
  MainTitle,
  MainVideo,
} from "../styles/MainGameStyles";

const MainGameBox = ({ ...data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <>
      <MainCard>
        <Box sx={{ display: "flex", width: "100%" }} elevation={10}>
          <MainVideo component="iframe" image={data.video} />
          <MainContent>
            <MainTitle variant="h4">{data.title}</MainTitle>
            <MainDesc variant="subtitle1">{data.descriptionTwo}</MainDesc>
            <Box sx={{ display: "flex" }}>
              <MainGenreText>genres:</MainGenreText>
              {data.genre.map((genres, index) => (
                <MainGenre key={index}>{genres}</MainGenre>
              ))}
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", marginTop: "1rem" }}>
              <MainGenreText>Publisher:</MainGenreText>
              <MainGenre>{data.publisher}</MainGenre>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                height: "100%",
              }}
            >
              <MainGamePrice disableRipple>{data.cost}</MainGamePrice>
              <MainButton>add to cart</MainButton>
            </Box>
          </MainContent>
        </Box>
      </MainCard>
      <Grid container>
        <Container
          maxWidth={false}
          sx={{
            width: {
              xl: "75vw",
              lg: "70vw",
              md: "80vw",
              xs: "80vw",
            },
          }}
        >
          <Slider {...settings}>
            {data.minipic.map((item, index) => (
              <Box>
                <Box
                  key={index}
                  component="img"
                  src={item}
                  sx={{
                    height: "20vh",
                    objectFit: "cover",
                    margin: "1rem 0 1rem .4rem",
                  }}
                />
              </Box>
            ))}
          </Slider>
        </Container>
      </Grid>
    </>
  );
};

export default MainGameBox;
