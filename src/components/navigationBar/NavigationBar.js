import { Container, Grid } from "@mui/material";
import React from "react";
import NavButton from "../../styles/NavButton";

const NavigationBar = () => {
  return (
    <Container>
      <Grid container sx={{ paddingTop: "1rem" }}>
        <Grid container item xs={7}>
          <NavButton variant="text" disableRipple>
            home
          </NavButton>
          <NavButton variant="text" disableRipple>
            games
          </NavButton>
          <NavButton variant="text" disableRipple>
            about
          </NavButton>
        </Grid>
        <Grid container item xs={5} justifyContent="flex-end">
          <NavButton variant="text" disableRipple>
            sign in
          </NavButton>
          <NavButton variant="text" disableRipple>
            sign out
          </NavButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NavigationBar;
