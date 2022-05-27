import { Box, CardContent } from "@mui/material";
import React, { useState } from "react";
import { GameData } from "../data/GameData";
import {
  AboutBox,
  AboutContainerTwo,
  AboutDescTwo,
  AboutTitle,
} from "../styles/AboutStyle";

const AboutGameCardTwo = () => {
  const [data] = useState(GameData[21]);

  return (
    <>
      <AboutContainerTwo picture={data.image}>
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

              <AboutDescTwo>{data.description}</AboutDescTwo>
            </Box>
          </CardContent>
        </AboutBox>
      </AboutContainerTwo>
    </>
  );
};

export default AboutGameCardTwo;
