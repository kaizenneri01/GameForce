import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import GameBoxExtraLarge from "../components/GameBoxExtraLarge";
import GameSearch from "../components/GameSearch";
import NavigationBar from "../components/NavigationBar";
import { GameData } from "../data/GameData";
import Slider from "react-slick";
import TextStyle from "../styles/GameStyle";

const GamesPage = () => {
  const settingsTwo = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Grid container sx={{ height: "100%", backgroundColor: "#303841" }}>
      <NavigationBar />
      <GameSearch />
      <Grid container>
        <TextStyle>BEST SELLER</TextStyle>
        <Grid container direction="row" justifyContent="center">
          <Container maxWidth={false}>
            <Slider {...settingsTwo}>
              {GameData.filter((list) => list.type === "best seller").map(
                (data, index) => (
                  <Grid container>
                    <GameBoxExtraLarge key={index} {...data} />
                  </Grid>
                )
              )}
            </Slider>
          </Container>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GamesPage;
