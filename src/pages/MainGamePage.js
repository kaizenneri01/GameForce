import React from "react";
import { useParams } from "react-router-dom";
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
      {GameData.filter((list) => list.link === `/mainGame/${gamename}`).map(
        (data, index) => (
          <MainGameBox key={index} {...data} />
        )
      )}
    </>
  );
};

export default MainGamePage;
