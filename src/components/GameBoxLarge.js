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
import { useNavigate } from "react-router-dom";

const GameBoxLarge = ({ ...games }) => {
  const navigate = useNavigate();

  return (
    <GameCard elevation={5} onClick={() => navigate(games.link)}>
      <GameImage component="img" src={games.image} alt={games.title} />
      <CardContent sx={{ height: "30%" }}>
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
            margin: "0 1rem 0 1rem",
            color: "#EEEEEE",
            "&:hover": {
              backgroundColor: "#232222",
            },
          }}
          disableRipple
        >
          {games.cost}
        </Button>
      </Grid>
    </GameCard>
  );
};

export default GameBoxLarge;
