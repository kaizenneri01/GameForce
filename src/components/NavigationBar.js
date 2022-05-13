import { Grid } from "@mui/material";
import React from "react";
import { NavButton, NavLogo, NavContainer } from "../styles/NavStyles";

import logo from "../Asset/images/games/gameforce.png";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  let navigate = useNavigate();

  return (
    <NavContainer maxWidth={false}>
      <Grid container>
        <Grid container item md={2}>
          <NavLogo component="img" src={logo} alt="cake" />
        </Grid>
        <Grid container item md={9} alignItems="center">
          <Grid container item md={6}>
            <NavButton
              variant="text"
              disableRipple
              onClick={() => navigate("/")}
            >
              home
            </NavButton>
            <NavButton
              variant="text"
              disableRipple
              onClick={() => navigate("/Games")}
            >
              games
            </NavButton>
            <NavButton variant="text" disableRipple>
              about
            </NavButton>
          </Grid>
          <Grid container item md={6} justifyContent="flex-end">
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
