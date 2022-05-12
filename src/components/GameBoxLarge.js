import React from "react";
import { CardContent, Grid } from "@mui/material";
import {
  GameCard,
  GameDesc,
  GameGenre,
  GameGenreText,
  GameImage,
  GameTitle,
} from "../styles/GameBoxLargeStyles";

const GameBoxLarge = ({ ...games }) => {
  return (
    <GameCard elevation={5}>
      <GameImage component="img" src={games.image} alt={games.title} />
      <CardContent>
        <Grid container>
          <GameTitle variant="h6">{games.title}</GameTitle>
          <GameDesc>{games.description}</GameDesc>
          <GameGenreText> genre:</GameGenreText>
          {games.genre.map((type, index) => (
            <GameGenre key={index} disableRipple>
              {type}
            </GameGenre>
          ))}
        </Grid>
      </CardContent>
    </GameCard>
  );
};

export default GameBoxLarge;
