import React from "react";
import Modal from "@mui/material/Modal";
import { SignUpBox, SignUpBtn, SignUpInput } from "../styles/SignUpModalStyles";
import logo from "../Asset/images/games/gf.png";
import { LogoBox } from "../styles/SignInmodalStyle";
import { Grid } from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";

const SignUpModal = ({ open, onClose }) => {
  const style = {
    backgroundColor: "#303841",
    padding: "1rem",
    borderRadius: " .5rem 0 0 .5rem",
    color: "#EEEEEE",
  };

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
              <AccountCircleRoundedIcon sx={style} />
              <SignUpInput placeholder="Full Name.." disableUnderline />
            </Grid>
            <Grid
              container
              item
              xs={12}
              justifyContent="center"
              alignItems="center"
              sx={{ margin: ".5rem 0" }}
            >
              <MailIcon sx={style} />
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
              <LockIcon sx={style} />
              <SignUpInput placeholder="Password.." disableUnderline />
            </Grid>
            <Grid
              container
              item
              xs={12}
              justifyContent="center"
              alignItems="center"
              sx={{ margin: ".5rem 0" }}
            >
              <LockIcon sx={style} />
              <SignUpInput placeholder="Confirm Password.." disableUnderline />
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <SignUpBtn>CREATE ACCOUNT</SignUpBtn>
          </Grid>
        </SignUpBox>
      </Modal>
    </div>
  );
};

export default SignUpModal;
