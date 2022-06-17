import { Grid } from "@mui/material";
import React, { useState } from "react";
import { NavButton, NavLogo, NavContainer } from "../styles/NavStyles";

import logo from "../Asset/images/games/gameforce.png";
import { useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal";

const NavigationBar = () => {
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <NavContainer maxWidth={false}>
      <Grid container>
        <Grid container item md={2}>
          <NavLogo component="img" src={logo} alt="logo" />
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
            <NavButton
              variant="text"
              disableRipple
              onClick={() => navigate("/About")}
            >
              about
            </NavButton>
          </Grid>
          <Grid container item md={6} justifyContent="flex-end">
            <NavButton
              variant="text"
              disableRipple
              onClick={() => setOpen(true)}
            >
              sign in
            </NavButton>
            <NavButton variant="text" disableRipple>
              sign up
            </NavButton>
          </Grid>
        </Grid>
      </Grid>
      <LoginModal open={open} onClose={() => setOpen(false)} />
    </NavContainer>
  );
};

export default NavigationBar;
