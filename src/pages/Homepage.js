import { CardActions, Grid, Typography } from "@mui/material";
import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { LandingData } from "../data/LandingData";
import Slider from "react-slick";

import {
  CardTitle,
  HomeBox,
  HomeContainer,
  CardSubtitle,
  HomeCard,
  CardGenre,
  CardGenreTitle,
  CardButton,
  HeartButton,
  HomeGenreTitle,
} from "../styles/Homepage/HomeStyle";
import GameBoxLarge from "../components/GameBoxLarge";

const Homepage = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <HomeContainer maxWidth={false}>
      <Slider {...settings}>
        {LandingData.map((landingInfo, index) => (
          <Grid container item justifyContent="center" key={index}>
            <HomeBox component="div" data={landingInfo.image}>
              <HomeCard>
                <CardTitle variant="h2">{landingInfo.title}</CardTitle>
                <CardSubtitle variant="subtitle1">
                  {landingInfo.description}
                </CardSubtitle>
                <CardActions>
                  <CardGenreTitle>Genres:</CardGenreTitle>
                  {landingInfo.genres.map((genre) => (
                    <CardGenre disableRipple>{genre}</CardGenre>
                  ))}
                </CardActions>

                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                >
                  <CardButton>
                    <CardGenreTitle> purchase now </CardGenreTitle>
                    <ShoppingCartOutlinedIcon />
                  </CardButton>
                  <HeartButton />
                </Grid>
              </HomeCard>
            </HomeBox>
          </Grid>
        ))}
      </Slider>
      <Grid container>
        <Grid container item justifyContent="center">
          <HomeGenreTitle>featured & recommended</HomeGenreTitle>
        </Grid>
        <Grid container item justifyContent="center">
          <GameBoxLarge />
          <GameBoxLarge />
          <GameBoxLarge />
        </Grid>
        <Grid container item></Grid>
      </Grid>
    </HomeContainer>
  );
};

export default Homepage;
