import { Grid } from "@mui/material";
import React from "react";
import {
  NavButton,
  NavLogo,
  NavContainer,
} from "../styles/navigationbar/NavStyles";

import logo from "../Asset/images/gameforce.png";

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
