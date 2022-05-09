import {
  Button,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import ImageOne from "../Asset/images/ResidentEvil8.jpg";
import {
  CardTitle,
  HomeCardImage,
  HomeBox,
  HomeContainer,
  CardSubtitle,
  HomeCard,
} from "../styles/Homepage/HomeStyle";

const Homepage = () => {
  return (
    <HomeContainer maxWidth={false}>
      <Grid item container justifyContent="center">
        <div
          style={{
            opacity: ".9",
            marginTop: "5rem",
            width: "70vw",
            height: "80vh",
            borderRadius: "1.5rem",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: ` linear-gradient(90deg, #303841, transparent),
            url(${ImageOne})`,
          }}
        >
          <h1>hello</h1>
        </div>
      </Grid>

      <Grid container item justifyContent="center">
        <HomeBox component="div" position="relative" boxShadow={3}>
          <HomeCard>
            <CardTitle variant="h2">Resident Evil Village</CardTitle>
            <CardSubtitle variant="subtitle1">
              Players control Ethan Winters, who searches for his kidnapped
              daughter in a village filled with mutant creatures.
            </CardSubtitle>
            <CardActions>
              <Typography>GENRES:</Typography>
              <Button>Horror</Button>
              <Button>Adventure</Button>
              <Button>First Person</Button>
            </CardActions>
            <Button>PURCHASE NOW</Button>
          </HomeCard>
          <HomeCardImage
            component="img"
            alt="resident evil 8"
            image={ImageOne}
          />
        </HomeBox>
      </Grid>
    </HomeContainer>
  );
};

export default Homepage;
