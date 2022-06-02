import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { CardPrice } from "../styles/GameboxExtralargeStyles";
import Slider from "react-slick";

import {
  MainButton,
  MainCard,
  MainContent,
  MainDesc,
  MainGenre,
  MainGenreText,
  MainTitle,
  MainVideo,
} from "../styles/MainGameStyles";

const MainGameBox = ({ ...data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <MainCard>
        <Box sx={{ display: "flex", width: "100%" }} elevation={10}>
          <MainVideo component="iframe" image={data.image} />
          <MainContent>
            <MainTitle variant="h4">{data.title}</MainTitle>
            <MainDesc variant="subtitle1">{data.description}</MainDesc>
            <Box sx={{ display: "flex" }}>
              <MainGenreText>genres:</MainGenreText>
              {data.genre.map((genres, index) => (
                <MainGenre key={index}>{genres}</MainGenre>
              ))}
            </Box>
            <Box sx={{ display: "flex" }}>
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
              <CardPrice disableRipple>{data.cost}</CardPrice>
              <MainButton>add to cart</MainButton>
            </Box>
          </MainContent>
        </Box>
      </MainCard>
      <Container maxWidth="m">
        <Slider {...settings}>
          <Box>hello</Box>
          <Box>hello</Box>
        </Slider>
      </Container>
    </>
  );
};

export default MainGameBox;
