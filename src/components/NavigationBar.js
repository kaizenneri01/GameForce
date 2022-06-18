import { Grid } from "@mui/material";
import React, { useState } from "react";
import { NavButton, NavLogo, NavContainer } from "../styles/NavStyles";

import logo from "../Asset/images/games/gameforce.png";
import { useNavigate } from "react-router-dom";
import SignUpModal from "./SignUpModal";
import SignInModal from "./SignInModal";

const NavigationBar = () => {
  let navigate = useNavigate();
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

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
              onClick={() => setOpenSignIn(true)}
            >
              sign in
            </NavButton>
            <NavButton
              variant="text"
              disableRipple
              onClick={() => setOpenSignUp(true)}
            >
              sign up
            </NavButton>
          </Grid>
        </Grid>
      </Grid>
      <SignInModal open={openSignIn} onClose={() => setOpenSignIn(false)} />
      <SignUpModal open={openSignUp} onClose={() => setOpenSignUp(false)} />
    </NavContainer>
  );
};

export default NavigationBar;
