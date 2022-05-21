import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box, height } from "@mui/system";
import React from "react";
import { GameSix } from "../data/ImageData";

const GameBoxMedium = () => {
  return (
    <>
      <Card
        sx={{
          width: "18rem",
          height: "25srem",
          margin: "1rem",
          borderRadius: "1rem",
          backgroundColor: "black",
        }}
      >
        <CardMedia
          component="img"
          src={GameSix}
          alt="games"
          sx={{ width: "100%", height: "20rem", objectFit: "fill" }}
        />
        <CardContent sx={{ backgroundColor: "#3A4750" }}>
          <Typography
            sx={{ color: "#EEEEEE", fontWeight: "light" }}
            variant="h6"
          >
            Resident evil 4
          </Typography>
          <Grid container>
            <Button sx={{ backgroundColor: "#D72323", height: "3rem" }}>
              25%
            </Button>
            <Button sx={{ backgroundColor: "#232222", color: "#EEEEEE" }}>
              P 450
            </Button>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default GameBoxMedium;
