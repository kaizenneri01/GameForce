import { Button, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {
  CardVideo,
  GameCard,
  GameContent,
} from "../styles/GameboxExtralargeStyles";

const GameBoxExtraLarge = () => {
  return (
    <>
      <GameCard>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <CardVideo
            component="iframe"
            image="https://www.youtube.com/embed/P9fK77eE7fs"
          />
          <GameContent
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "20rem",
            }}
          >
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
          </GameContent>
        </Box>
      </GameCard>
    </>
  );
};

export default GameBoxExtraLarge;
