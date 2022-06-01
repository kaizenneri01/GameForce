import React from "react";
import { useParams } from "react-router-dom";
import GameSearch from "../components/GameSearch";
import NavigationBar from "../components/NavigationBar";
import { GameData } from "../data/GameData";

const MainGamePage = () => {
  const { gamename } = useParams();

  return (
    <>
      <NavigationBar />
      <GameSearch />
      {GameData.filter((list) => list.link === `/mainGame/${gamename}`).map(
        (item, index) => (
          <h1>{item.title}</h1>
        )
      )}
    </>
  );
};

export default MainGamePage;
