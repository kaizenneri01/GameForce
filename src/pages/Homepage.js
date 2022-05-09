import { CardActions, Grid } from "@mui/material";
import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { LandingData } from "../data/LandingData";

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
  return (
    <HomeContainer maxWidth={false}>
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
    </HomeContainer>
  );
};

export default Homepage;
