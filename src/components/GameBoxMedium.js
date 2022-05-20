import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const GameBoxMedium = () => {
  return (
    <>
      <Card>
        <CardMedia component="img" alt="games" />
        <CardContent>
          <Typography>Resident evil 4</Typography>
          <Button>price</Button>
        </CardContent>
      </Card>
    </>
  );
};

export default GameBoxMedium;
