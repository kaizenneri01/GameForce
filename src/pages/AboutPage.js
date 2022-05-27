import { Grid } from "@mui/material";
import React from "react";
import AboutGameCard from "../components/AboutGameCard";
import AboutGameCardTwo from "../components/AboutGameCardTwo";
import NavigationBar from "../components/NavigationBar";

const AboutPage = () => {
  return (
    <>
      <NavigationBar />
      <Grid container sx={{ backgroundColor: "#303841" }}>
        <AboutGameCard />
      </Grid>
      <Grid container sx={{ backgroundColor: "#232222" }}>
        <AboutGameCardTwo />
      </Grid>
    </>
  );
};

export default AboutPage;
