import { Container, Grid } from "@mui/material";
import React from "react";
import NavButton from "../../styles/NavButton";

const NavigationBar = () => {
  return (
    <Container>
      <Grid container sx={{ paddingTop: "1rem" }}>
        <Grid container item xs={7}>
          <NavButton variant="text">HOME</NavButton>
          <NavButton variant="text">GAMES</NavButton>
          <NavButton variant="text">ABOUT</NavButton>
        </Grid>
        <Grid container item xs={5} justifyContent="flex-end">
          <NavButton variant="text">SIGN IN</NavButton>
          <NavButton variant="text">SIGN UP</NavButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NavigationBar;
