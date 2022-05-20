import { Grid, Typography } from "@mui/material";
import React from "react";
import GameBoxExtraLarge from "../components/GameBoxExtraLarge";
import GameSearch from "../components/GameSearch";
import NavigationBar from "../components/NavigationBar";
import { GameData } from "../data/GameData";

const GamesPage = () => {
  return (
    <Grid container>
      <NavigationBar />
      <GameSearch />
      <Grid container sx={{ height: "100%", backgroundColor: "#303841" }}>
        <Typography>BEST SELLER</Typography>
        <Grid container justifyContent="center">
          {GameData.filter((list) => list.type === "best seller").map(
            (data, index) => (
              <GameBoxExtraLarge key={index} {...data} />
            )
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GamesPage;
