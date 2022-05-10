import { CardActions, Grid } from "@mui/material";
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
} from "../styles/Homepage/HomeStyle";

const Homepage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
                  <CardGenre disableRipple>Horror</CardGenre>
                  <CardGenre disableRipple>Adventure</CardGenre>
                  <CardGenre disableRipple>First Person</CardGenre>
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
    </HomeContainer>
  );
};

export default Homepage;
