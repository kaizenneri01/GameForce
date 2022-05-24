import React from "react";
import { Button, CardContent, Grid } from "@mui/material";
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
      <CardContent sx={{ height: "28%" }}>
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
      <Grid container alignItems="flex-end" justifyContent="flex-end">
        <Button
          sx={{
            backgroundColor: "#232222",
            fontSize: "1rem",
            margin: "0 .5rem 0 1rem",
            color: "#EEEEEE",
            "&:hover": {
              backgroundColor: "#232222",
            },
          }}
          disableRipple
        >
          P 1,400.45
        </Button>
      </Grid>
    </GameCard>
  );
};

export default GameBoxLarge;
