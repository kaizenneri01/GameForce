import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        sx={{ backgroundColor: "#232222", padding: "1rem" }}
      >
        <Box
          sx={{ width: "15rem", height: "7rem", backgroundColor: "#232222" }}
        >
          <Grid container justifyContent="center">
            <FacebookRoundedIcon
              sx={{
                color: "#EEEEEE",
                marginRight: ".5rem",
                fontSize: "1.8rem",
              }}
            />
            <TwitterIcon
              sx={{
                color: "#EEEEEE",
                marginRight: ".5rem",
                fontSize: "1.8rem",
              }}
            />
            <InstagramIcon
              sx={{
                color: "#EEEEEE",
                marginRight: ".5rem",
                fontSize: "1.8rem",
              }}
            />
          </Grid>
          <Box
            sx={{
              marginTop: "1rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontSize: ".9rem",
                  fontWeight: "Bolder",
                  color: "#EEEEEE",
                  textAlign: "center",
                  overflowWrap: "break-word",
                  inlineSize: "9.8rem",
                }}
              >
                Info.Support.Services.Term of Use.Privacy
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  fontSize: ".7rem",
                  fontWeight: "light",
                  color: "gray",
                  marginTop: "1rem",
                }}
              >
                2022 game force
              </Typography>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default Footer;
