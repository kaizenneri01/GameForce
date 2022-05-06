import { Button, Container, Grid } from "@mui/material";
import React from "react";

const NavigationBar = () => {
  return (
    <Container>
      <Grid container sx={{ paddingTop: "1rem" }}>
        <Grid container item xs={7}>
          <Button variant="text">HOME</Button>
          <Button variant="text">GAMES</Button>
          <Button variant="text">ABOUT</Button>
        </Grid>
        <Grid container item xs={5} justifyContent="flex-end">
          <Button variant="text">SIGN IN</Button>
          <Button variant="text">SIGN UP</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NavigationBar;
