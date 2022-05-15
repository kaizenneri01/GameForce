import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const GameBoxExtraLarge = () => {
  return (
    <>
      <Card sx={{ width: "30rem" }}>
        <Box sx={{ display: "flex" }}>
          <CardMedia component="img" alt="horizon" />
          <CardContent>
            <Typography variant="h4">Title</Typography>
            <Typography variant="subtitle1">description</Typography>
            <Box sx={{ display: "flex" }}>
              <Typography>genres</Typography>
              <Button>sample</Button>
              <Button>sample</Button>
              <Button>sample</Button>
            </Box>
            <CardMedia component="img" alt="minipic" />
            <Box sx={{ display: "flex" }}>
              <Typography>price</Typography>
              <Button>add to cart</Button>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </>
  );
};

export default GameBoxExtraLarge;
