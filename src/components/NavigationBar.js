import { Grid } from "@mui/material";
import React from "react";
import NavButton from "../styles/navigationbar/NavButton";
import NavContainer from "../styles/navigationbar/NavContainer";
import logo from "../Asset/images/gameforce.png";
import NavLogo from "../styles/navigationbar/NavLogo";

const NavigationBar = () => {
  return (
    <NavContainer maxWidth={false}>
      <Grid container>
        <Grid container item md={2}>
          <NavLogo component="img" src={logo} alt="cake" />
        </Grid>
        <Grid container item md={9} alignItems="center">
          <Grid container item xs={6}>
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
          <Grid container item xs={6} justifyContent="flex-end">
            <NavButton variant="text" disableRipple>
              sign in
            </NavButton>
            <NavButton variant="text" disableRipple>
              sign up
            </NavButton>
          </Grid>
        </Grid>
      </Grid>
    </NavContainer>
  );
};

export default NavigationBar;
