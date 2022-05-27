import { Box, CardContent, Grid } from "@mui/material";
import React, { useState } from "react";
import picTwo from "../Asset/images/games/gf.png";
import { GameData } from "../data/GameData";
import {
  AboutBox,
  AboutContainer,
  AboutDesc,
  AboutPic,
  AboutTitle,
} from "../styles/AboutStyle";

const AboutGameCard = () => {
  const [data] = useState(GameData[20]);

  return (
    <>
      <Grid container justifyContent="center">
        <AboutPic component="img" src={picTwo} alt="destiny2" />
      </Grid>
      <AboutContainer picture={data.image}>
        <AboutBox>
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
