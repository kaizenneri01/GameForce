import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Cartgame = ({ ...item }) => {
  return (
    <>
      <Box sx={{ borderBottom: "2px solid red", width: "85%", margin: "1rem" }}>
        <Grid container item xs={6} justifyContent="flex-start">
          <Box
            component="img"
            src={item.image}
            alt="games"
            sx={{ height: "10vh" }}
          />

          <Typography>Title</Typography>
          <Typography>package</Typography>
        </Grid>
        <Grid
          container
          item
          xs={6}
          flexDirection="column"
          alignItems="flex-end"
          sx={{ marginLeft: "auto" }}
        >
          <Button sx={{ backgroundColor: "#303841" }}>price</Button>
          <Button sx={{ backgroundColor: "#D72323" }}>Remove</Button>
        </Grid>
      </Box>
    </>
  );
};

export default Cartgame;
