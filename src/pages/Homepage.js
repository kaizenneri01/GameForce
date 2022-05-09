import { CardActions, Grid } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

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
      <Grid container item justifyContent="center">
        <HomeBox component="div">
          <HomeCard>
            <CardTitle variant="h2">Resident Evil Village</CardTitle>
            <CardSubtitle variant="subtitle1">
              Players control Ethan Winters, who searches for his kidnapped
              daughter in a village filled with mutant creatures.
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
    </HomeContainer>
  );
};

export default Homepage;
