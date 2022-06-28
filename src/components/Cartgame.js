import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Cartgame = ({ ...item }) => {
  return (
    <>
      <Box
        sx={{
          borderBottom: "2px solid red",
          width: "85%",
          margin: ".5rem 2rem",
          padding: "1rem 0 1.5rem 0",
          display: "flex",
        }}
      >
        <Grid container item xs={6} flexDirection="row">
          <Box
            component="img"
            src={item.image}
            alt="games"
            sx={{ height: "20vh", width: "10vw", borderRadius: "1rem" }}
          />
          <Box>
            <Typography
              sx={{
                color: "#EEEEEE",
                marginLeft: "1rem",
                fontSize: "2.5vh",
                textTransform: "uppercase",
                overflowWrap: "break-word",
                inlineSize: "10rem",
              }}
            >
              {item.title}
            </Typography>
            <Typography
              sx={{
                color: "gray",
                margin: ".7rem 0 0 1rem",
                fontSize: "2vh",
                textTransform: "uppercase",
              }}
            >
              base game
            </Typography>
          </Box>
        </Grid>
        <Grid
          container
          item
          xs={6}
          flexDirection="column"
          alignItems="flex-end"
          sx={{ marginLeft: "auto" }}
        >
          <Button
            sx={{
              backgroundColor: "#303841",
              fontSize: "3vh",
              color: "#EEEEEE",
            }}
          >
            P {item.cost}
          </Button>
        </Grid>
      </Box>
    </>
  );
};

export default Cartgame;
