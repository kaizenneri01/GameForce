import { Grid } from "@mui/material";
import React from "react";
import Footer from "../components/Footer";
import GameBoxLarge from "../components/GameBoxLarge";
import GameComponent from "../components/GameComponent";
import GameSearch from "../components/GameSearch";
import NavigationBar from "../components/NavigationBar";
import { GameData } from "../data/GameData";
import { TextStyle } from "../styles/GameStyle";

const SaleEventPage = () => {
  return (
    <>
      <NavigationBar />
      <GameSearch />
      <Grid container sx={{ backgroundColor: "#303841" }}>
        <TextStyle>SALE EVENT</TextStyle>
        <Grid container>
          {GameComponent({
            name: "best seller",
            data: GameData,
            component: (index, data) => <GameBoxLarge key={index} {...data} />,
          })}
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default SaleEventPage;
