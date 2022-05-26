import { Grid } from "@mui/material";
import React from "react";
import AboutGameCard from "../components/AboutGameCard";
import GameSearch from "../components/GameSearch";
import NavigationBar from "../components/NavigationBar";

const AboutPage = () => {
  return (
    <>
      <NavigationBar />
      <GameSearch />
      <Grid container>
        <AboutGameCard />
      </Grid>
    </>
  );
};

export default AboutPage;
