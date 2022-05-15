import { Grid } from "@mui/material";
import React from "react";
import GameBoxExtraLarge from "../components/GameBoxExtraLarge";
import GameSearch from "../components/GameSearch";
import NavigationBar from "../components/NavigationBar";

const GamesPage = () => {
  return (
    <Grid container>
      <NavigationBar />
      <GameSearch />
      <Grid container justifyContent="center">
        <GameBoxExtraLarge />
      </Grid>
    </Grid>
  );
};

export default GamesPage;
