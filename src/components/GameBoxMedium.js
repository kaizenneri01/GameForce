import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { GameSix } from "../data/ImageData";

const GameBoxMedium = () => {
  return (
    <>
      <Card
        sx={{
          width: "18rem",
          height: "25rem",
          margin: "1rem",
          borderRadius: "1rem",
          backgroundColor: "black",
        }}
      >
        <CardMedia
          component="img"
          src={GameSix}
          alt="games"
          sx={{ width: "100%", height: "70%", objectFit: "fill" }}
        />
        <CardContent sx={{ backgroundColor: "#3A4750", height: "30%" }}>
          <Typography
            sx={{
              color: "#EEEEEE",
              marginBottom: ".5rem",
              fontWeight: "normal",
            }}
          >
            Resident evil 4
          </Typography>
          <Grid container>
            <Grid container item xs={6}>
              <Box
                sx={{
                  backgroundColor: "#D72323",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "4rem",
                  borderRadius: "5px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1rem",
                    color: "#232222",
                    fontWeight: "bold",
                  }}
                >
                  -25%
                </Typography>
              </Box>
            </Grid>
            <Grid container item xs={6} justifyContent="flex-end">
              <Button
                sx={{
                  backgroundColor: "#232222",
                  width: "7rem",
                  borderRadius: "5px",
                  "&:hover": {
                    backgroundColor: "#232222",
                  },
                }}
                disableRipple
              >
                <Grid container justifyContent="flex-end">
                  <Typography
                    sx={{
                      fontSize: ".8rem",
                      color: "gray",
                      textDecoration: "line-through",
                    }}
                  >
                    P 500.00
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "1rem",
                      color: "#EEEEEE",
                    }}
                  >
                    P 450.00
                  </Typography>
                </Grid>
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default GameBoxMedium;
