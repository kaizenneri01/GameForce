import { CardActions, Grid, Typography } from "@mui/material";
import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { GameData } from "../data/GameData";
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
} from "../styles/HomeStyle";
import GameBoxLarge from "../components/GameBoxLarge";
import GameBoxSmall from "../components/GameBoxSmall";

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
        {GameData.filter((list) => list.type === "landing").map(
          (landingInfo, index) => (
            <Grid container item justifyContent="center" key={index}>
              <HomeBox component="div" data={landingInfo.image}>
                <HomeCard>
                  <CardTitle variant="h2">{landingInfo.title}</CardTitle>
                  <CardSubtitle variant="subtitle1">
                    {landingInfo.description}
                  </CardSubtitle>
                  <CardActions>
                    <CardGenreTitle>Genres:</CardGenreTitle>
                    {landingInfo.genres.map((genre, index) => (
                      <CardGenre key={index} disableRipple>
                        {genre}
                      </CardGenre>
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
          )
        )}
      </Slider>

      <Grid container sx={{ paddingBottom: "5rem" }}>
        <Grid container item justifyContent="center">
          <HomeGenreTitle>featured & recommended</HomeGenreTitle>
        </Grid>
        <Grid container item justifyContent="center">
          {GameData.filter((list) => list.type === "featured").map(
            (games, index) => (
              <GameBoxLarge key={index} {...games} />
            )
          )}
        </Grid>
        <Grid container>
          <Grid container>
            <Typography>special offer</Typography>
          </Grid>
          <Grid contain item>
            <GameBoxSmall />
            <GameBoxSmall />
            <GameBoxSmall />
            <GameBoxSmall />
          </Grid>
        </Grid>
      </Grid>
    </HomeContainer>
  );
};

export default Homepage;
