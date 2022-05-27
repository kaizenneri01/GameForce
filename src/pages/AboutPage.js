import { Grid } from "@mui/material";
import React from "react";
import AboutGameCard from "../components/AboutGameCard";
import GameComponent from "../components/GameComponent";
import NavigationBar from "../components/NavigationBar";
import { GameData } from "../data/GameData";

const AboutPage = () => {
  return (
    <>
      <NavigationBar />
      {GameComponent({
        name: "aboutpage",
        data: GameData,
        component: (index, data) => <AboutGameCard key={index} {...data} />,
      })}
    </>
  );
};

export default AboutPage;
