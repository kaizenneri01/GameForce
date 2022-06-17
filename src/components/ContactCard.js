import { Box, CardContent, Grid } from "@mui/material";
import React from "react";
import { AboutPicThree } from "../data/ImageData";
import {
  AboutBoxTwo,
  AboutContainerThree,
  AboutTitleThree,
} from "../styles/AboutStyle";
import { ContactInput, ContactInputTwo } from "../styles/ContactStyles";

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
                  <ContactInput
                    label="First name"
                    size="normal"
                    placeholder="First name"
                    inputProps={{
                      style: {
                        color: "#222",
                        fontWeight: "bold",
                      },
                    }}
                    InputLabelProps={{
                      shrink: true,
                      style: {
                        top: "-15%",
                        color: "#b3b3b3",
                        fontWeight: "bolder",
                        fontSize: "1.1rem",
                      },
                    }}
                  />
                  <ContactInput
                    label="Last name"
                    placeholder="Last name"
                    size="normal"
                    inputProps={{
                      style: {
                        color: "#222",
                        fontWeight: "bold",
                      },
                    }}
                    InputLabelProps={{
                      shrink: true,
                      style: {
                        top: "-15%",
                        color: "#b3b3b3",
                        fontWeight: "bolder",
                        fontSize: "1.1rem",
                      },
                    }}
                  />
                </Grid>
                <Grid container item flexDirection="column">
                  <ContactInputTwo
                    label="Email address"
                    placeholder="Email address"
                    size="normal"
                    inputProps={{
                      style: {
                        color: "#222",
                        fontWeight: "bold",
                      },
                    }}
                    InputLabelProps={{
                      shrink: true,
                      style: {
                        top: "-15%",
                        color: "#b3b3b3",
                        fontWeight: "bolder",
                        fontSize: "1.1rem",
                      },
                    }}
                  />
                  <ContactInputTwo
                    label="Contact number"
                    placeholder="Contact number"
                    size="normal"
                    inputProps={{
                      style: {
                        color: "#222",
                        fontWeight: "bold",
                      },
                    }}
                    InputLabelProps={{
                      shrink: true,
                      style: {
                        top: "-15%",
                        color: "#b3b3b3",
                        fontWeight: "bolder",
                        fontSize: "1.1rem",
                      },
                    }}
                  />
                  <ContactInputTwo
                    label="message"
                    placeholder="message"
                    size="normal"
                    inputProps={{
                      style: {
                        color: "#222",
                        fontWeight: "bold",
                        height: "10rem",
                        "&.placeholder": {
                          textOverflow: "ellipsis !important",
                        },
                      },
                    }}
                    InputLabelProps={{
                      shrink: true,
                      style: {
                        top: "-5%",
                        color: "#b3b3b3",
                        fontWeight: "bolder",
                        fontSize: "1.1rem",
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
