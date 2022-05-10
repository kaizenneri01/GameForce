import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const GameBoxLarge = () => {
  return (
    <Card>
      <CardMedia component="img" alt="sample" />
      <CardContent>
        <Typography variant="h6">title</Typography>
        <Typography variant="subtitle1">description</Typography>
        <Typography> genre</Typography>
        <Button>sample</Button>
        <Button>sample</Button>
        <Button>sample</Button>
      </CardContent>
    </Card>
  );
};

export default GameBoxLarge;
