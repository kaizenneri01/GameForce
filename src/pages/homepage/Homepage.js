import { Grid, Typography } from "@mui/material";
import React from "react";
import HomeBox from "../../styles/Homepage/HomeBox";
import HomeContainer from "../../styles/Homepage/HomeContainer";
import ImageOne from "../../Asset/images/ResidentEvil8.jpg";

const Homepage = () => {
  return (
    <HomeContainer maxWidth={false}>
      <Grid container item justifyContent="center">
        <HomeBox component="div" position="relative">
          <img
            src={ImageOne}
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "1.4rem",
              zIndex: "-100",
            }}
            alt="resident evil 8"
          />
          <Typography>hello</Typography>
        </HomeBox>
      </Grid>
    </HomeContainer>
  );
};

export default Homepage;
