import React from "react";
import Modal from "@mui/material/Modal";
import { LogoBox, LoginBox } from "../styles/SignInmodalStyle";
import logo from "../Asset/images/games/gf.png";
import { Button, Checkbox, Grid, Input, Typography } from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import HttpsRoundedIcon from "@mui/icons-material/HttpsRounded";
import GoogleIcon from "@mui/icons-material/Google";

const SignInModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <LoginBox>
        <Grid container justifyContent="center">
          <LogoBox component="img" src={logo} />
        </Grid>
        <Grid container>
          <Grid
            container
            item
            xs={12}
            justifyContent="center"
            alignItems="center"
            sx={{ margin: "1.5rem 0" }}
          >
            <AccountCircleRoundedIcon
              sx={{
                backgroundColor: "#303841",
                padding: "1rem",
                borderRadius: " .5rem 0 0 .5rem",
                color: "#EEEEEE",
              }}
            />
            <Input
              placeholder="Email address.."
              sx={{
                backgroundColor: "#EEEEEE",
                width: "70%",
                padding: ".7rem",
                borderRadius: "0 .5rem .5rem 0",
                fontWeight: "bold",
              }}
              disableUnderline
            />
          </Grid>
          <Grid
            container
            item
            xs={12}
            justifyContent="center"
            sx={{ marginBottom: ".5rem" }}
          >
            <HttpsRoundedIcon
              sx={{
                backgroundColor: "#303841",
                padding: "1rem",
                borderRadius: " .5rem 0 0 .5rem",
                color: "#EEEEEE",
              }}
            />
            <Input
              placeholder="Password.."
              sx={{
                backgroundColor: "#EEEEEE",
                width: "70%",
                padding: ".5rem",
                borderRadius: "0 .5rem .5rem 0",
                fontWeight: "bold",
              }}
              disableUnderline
            />
          </Grid>
          <Grid container>
            <Grid
              container
              item
              xs={6}
              justifyContent="center"
              alignItems="center"
            >
              <Checkbox
                defaultChecked
                style={{
                  color: "white",
                }}
              />
              <Typography sx={{ fontSize: ".8rem", color: "#EEEEEE" }}>
                Remember Account
              </Typography>
            </Grid>
            <Grid container item xs={6} justifyContent="center">
              <Button
                disableRipple
                sx={{
                  fontSize: ".7rem",
                  fontWeight: "700",
                  color: "gray",
                  "&:hover": {
                    backgroundColor: "#222",
                    color: "#EEEEEE",
                  },
                }}
              >
                Forgot Password
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          flexDirection="column"
          sx={{ marginTop: "1.5rem" }}
          alignItems="center"
        >
          <Button
            sx={{
              width: "75%",
              backgroundColor: "#303841",
              fontWeight: "bold",
              color: "#EEEEEE",
              fontSize: "1rem",
              padding: ".7rem",
              marginBottom: ".5rem",
            }}
          >
            Sign in
          </Button>
          <Button
            sx={{
              width: "75%",
              backgroundColor: "#D72323",
              fontWeight: "bold",
              color: "#EEEEEE",
              fontSize: ".6rem",
              padding: "1rem",
            }}
          >
            <GoogleIcon sx={{ marginRight: ".5rem" }} /> Sign in with google
          </Button>
        </Grid>
      </LoginBox>
    </Modal>
  );
};

export default SignInModal;
