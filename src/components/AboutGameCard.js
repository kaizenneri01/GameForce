import { Box, CardContent, Grid } from "@mui/material";
import React from "react";
import picTwo from "../Asset/images/games/gf.png";
import {
  AboutBox,
  AboutContainer,
  AboutDesc,
  AboutPic,
  AboutTitle,
} from "../styles/AboutStyle";

const AboutGameCard = ({ ...data }, index) => {
  return (
    <>
      <AboutContainer key={index} picture={data.image}>
        <AboutBox>
          <AboutPic component="img" src={picTwo} alt="destiny2" />
          <CardContent>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <AboutTitle>{data.title}</AboutTitle>

              <AboutDesc>{data.description}</AboutDesc>
            </Box>
          </CardContent>
        </AboutBox>
      </AboutContainer>
    </>
  );
};

export default AboutGameCard;
