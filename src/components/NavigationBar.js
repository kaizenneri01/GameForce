import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import NavButton from "../styles/navigationbar/NavButton";
import NavContainer from "../styles/navigationbar/NavContainer";
import logo from "../Asset/images/gameforce.png";

const NavigationBar = () => {
  return (
    <NavContainer maxWidth={false}>
      <Grid container sx={{ paddingTop: "1rem" }}>
        <Box component="img" src={logo} alt="cake" />
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
    </NavContainer>
  );
};

export default NavigationBar;
