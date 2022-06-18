import React from "react";
import Modal from "@mui/material/Modal";
import {
  SignUpBox,
  SignUpEmail,
  SignUpInput,
} from "../styles/SignUpModalStyles";
import logo from "../Asset/images/games/gf.png";
import { LogoBox } from "../styles/SignInmodalStyle";
import { Grid } from "@mui/material";

const SignUpModal = ({ open, onClose }) => {
  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <SignUpBox>
          <Grid container justifyContent="center">
            <LogoBox component="img" src={logo} alt="logo" />
          </Grid>
          <Grid container>
            <Grid
              container
              item
              xs={12}
              justifyContent="center"
              alignItems="center"
              sx={{ margin: ".5rem 0" }}
            >
              <SignUpEmail />
              <SignUpInput placeholder="Email address.." disableUnderline />
            </Grid>
            <Grid
              container
              item
              xs={12}
              justifyContent="center"
              alignItems="center"
              sx={{ margin: ".5rem 0" }}
            >
              <SignUpEmail />
              <SignUpInput placeholder="Email address.." disableUnderline />
            </Grid>
            <Grid
              container
              item
              xs={12}
              justifyContent="center"
              alignItems="center"
              sx={{ margin: ".5rem 0" }}
            >
              <SignUpEmail />
              <SignUpInput placeholder="Email address.." disableUnderline />
            </Grid>
            <Grid
              container
              item
              xs={12}
              justifyContent="center"
              alignItems="center"
              sx={{ margin: ".5rem 0" }}
            >
              <SignUpEmail />
              <SignUpInput placeholder="Email address.." disableUnderline />
            </Grid>
          </Grid>
        </SignUpBox>
      </Modal>
    </div>
  );
};

export default SignUpModal;
