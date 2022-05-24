import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import GameBoxExtraLarge from "../components/GameBoxExtraLarge";
import GameSearch from "../components/GameSearch";
import NavigationBar from "../components/NavigationBar";
import { GameData } from "../data/GameData";
import Slider from "react-slick";
import { TextStyle, TextStyleTwo } from "../styles/GameStyle";
import GameBoxMedium from "../components/GameBoxMedium";
import { SpecialArrow } from "../styles/HomeStyle";
import GameBoxMediumTwo from "../components/GameBoxMediumTwo";
import Footer from "../components/Footer";

const GamesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const settingsTwo = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Grid container sx={{ height: "100%", backgroundColor: "#303841" }}>
      <NavigationBar />
      <GameSearch />
      <TextStyle>NEW RELEASE</TextStyle>
      <Grid container direction="row" justifyContent="center">
        <Container maxWidth={false}>
          <Slider {...settingsTwo}>
            {GameData.filter((list) => list.type === "new release").map(
              (data, index) => (
                <Grid container>
                  <GameBoxExtraLarge key={index} {...data} />
                </Grid>
              )
            )}
          </Slider>
        </Container>
      </Grid>
      <Grid container item xs={6}>
        <TextStyle>SALE EVENT</TextStyle>
      </Grid>
      <Grid
        container
        item
        justifyContent="flex-end"
        alignItems="center"
        xs={6}
        sx={{ paddingRight: "2rem" }}
      >
        <TextStyleTwo>SEE MORE</TextStyleTwo>
        <SpecialArrow />
      </Grid>
      <Grid container justifyContent="center" sx={{ paddingBottom: "5rem" }}>
        {GameData.filter((list) => list.type === "best seller").map(
          (data, index) => (
            <GameBoxMedium key={index} {...data} />
          )
        )}
      </Grid>
      <Grid container item xs={6}>
        <TextStyle>BEST SELLER</TextStyle>
      </Grid>
      <Grid
        container
        item
        justifyContent="flex-end"
        alignItems="center"
        xs={6}
        sx={{ paddingRight: "2rem" }}
      >
        <TextStyleTwo>SEE MORE</TextStyleTwo>
        <SpecialArrow />
      </Grid>
      <Grid container justifyContent="center" sx={{ paddingBottom: "5rem" }}>
        {GameData.filter((list) => list.type === "best seller").map(
          (data, index) => (
            <GameBoxMediumTwo key={index} {...data} />
          )
        )}
      </Grid>
      <Grid container item xs={6}>
        <TextStyle>POPULAR</TextStyle>
      </Grid>
      <Grid
        container
        item
        justifyContent="flex-end"
        alignItems="center"
        xs={6}
        sx={{ paddingRight: "2rem" }}
      >
        <TextStyleTwo>SEE MORE</TextStyleTwo>
        <SpecialArrow />
      </Grid>
      <Grid container justifyContent="center" sx={{ paddingBottom: "5rem" }}>
        {GameData.filter((list) => list.type === "best seller").map(
          (data, index) => (
            <GameBoxMediumTwo key={index} {...data} />
          )
        )}
      </Grid>
      <Footer />
    </Grid>
  );
};

export default GamesPage;
