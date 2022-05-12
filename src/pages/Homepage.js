import { CardActions, Grid } from "@mui/material";
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
  SpecialText,
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
    <>
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

        <Grid container>
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
        </Grid>
      </HomeContainer>
      <Grid
        container
        sx={{ backgroundColor: "#232222", padding: " 0 0 2rem 0" }}
      >
        <Grid container>
          <SpecialText>special offer</SpecialText>
        </Grid>
        <Grid container flexDirection="row" justifyContent="center">
          {GameData.filter((list) => list.type === "landing").map(
            (data, index) => (
              <GameBoxSmall key={index} {...data} />
            )
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Homepage;
