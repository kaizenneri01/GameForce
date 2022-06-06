import { Grid } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import GameSearch from "../components/GameSearch";
import MainGameBox from "../components/MainGameBox";
import NavigationBar from "../components/NavigationBar";
import { GameData } from "../data/GameData";

const MainGamePage = () => {
  const { gamename } = useParams();

  return (
    <>
      <NavigationBar />
      <GameSearch />
      <Grid
        container
        sx={{ backgroundColor: "#303841", paddingBottom: "5rem" }}
      >
        {GameData.filter((list) => list.link === `/mainGame/${gamename}`).map(
          (data, index) => (
            <MainGameBox key={index} {...data} />
          )
        )}
      </Grid>
      <Footer />
    </>
  );
};

export default MainGamePage;
