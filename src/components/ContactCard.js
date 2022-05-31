import { Box, CardContent, Grid, TextField } from "@mui/material";
import React from "react";
import { AboutPicThree } from "../data/ImageData";
import {
  AboutBox,
  AboutBoxTwo,
  AboutContainerThree,
  AboutDesc,
  AboutTitleThree,
  ContactText,
} from "../styles/AboutStyle";

const ContactCard = () => {
  return (
    <>
      <AboutContainerThree picture={AboutPicThree}>
        <AboutBoxTwo>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <AboutTitleThree>CONTACT US</AboutTitleThree>
              <Box component="form">
                <Grid container item>
                  <TextField
                    label="First name"
                    size="normal"
                    sx={{ width: "12vw", margin: "1rem" }}
                  />
                  <TextField
                    label="Last name"
                    size="normal"
                    sx={{ width: "12vw", margin: "1rem" }}
                  />
                </Grid>
                <Grid container item flexDirection="column">
                  <TextField
                    label="Email Address"
                    size="normal"
                    sx={{ width: "95%", margin: "1rem 0 0 1rem" }}
                  />
                  <TextField
                    label="Contact number"
                    size="normal"
                    sx={{ width: "95%", margin: "1rem 0 0 1rem" }}
                  />
                  <TextField
                    label="message"
                    size="normal"
                    id="outlined-required"
                    sx={{
                      width: "95%",
                      margin: "1rem 0 0 1rem",
                    }}
                    inputProps={{
                      style: {
                        height: "10rem",
                      },
                    }}
                  />
                </Grid>
              </Box>
            </Box>
          </CardContent>
        </AboutBoxTwo>
      </AboutContainerThree>
    </>
  );
};

export default ContactCard;
