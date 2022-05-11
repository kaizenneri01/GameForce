import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const GameBoxLarge = ({ ...games }) => {
  return (
    <Card>
      <CardMedia component="img" src={games.image} alt="sample" />
      <CardContent>
        <Typography variant="h6">{games.title}</Typography>
        <Typography variant="subtitle1">{games.description}</Typography>
        <Typography> genre</Typography>
        {games.genre.map((type) => (
          <Button>{type}</Button>
        ))}
      </CardContent>
    </Card>
  );
};

export default GameBoxLarge;
