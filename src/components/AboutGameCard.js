import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { width } from "@mui/system";
import React from "react";
import pic from "../Asset/images/games/destiny2.jpg";
import picTwo from "../Asset/images/games/gf.png";

const AboutGameCard = () => {
  return (
    <>
      <Box
        sx={{
          borderRadius: "2rem",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "2rem",
          marginTop: "5rem",
          height: "100vh",
          width: "90vw",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: ` linear-gradient(90deg, #303841 40%, transparent),
    url(${pic})`,
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: "40%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            src={picTwo}
            alt="destiny2"
            sx={{
              backgroundColor: "transparent",
              height: "50%",
              width: "100%",
              objectFit: "fill",
            }}
          />
          <CardContent
            sx={{
              height: "60%",
            }}
          >
            <Box sx={{ width: "100%" }}>
              <Typography
                sx={{
                  color: "#EEEEEE",
                  fontSize: " clamp(1rem, 30vw, 2rem)",
                  textTransform: "capitalize",
                  borderBottom: "#D72323 solid 3px",
                  fontWeight: "bolder",
                  marginBottom: "1rem",
                  textAlign: "center",
                }}
              >
                about our Services
              </Typography>

              <Typography
                sx={{
                  fontSize: " clamp(1rem, 10vw, 1rem)",
                  overflowWrap: "break-word",
                  inlineSize: "30rem",
                  color: "#EEEEEE",
                }}
              >
                In the fast changing globalized and a technology-driven business
                world, Retail industry over last few decades has witnessed a sea
                change. World’s largest retail giant of the present times
                Walmart is operating worldwide by establishing hypermarkets in
                various countries by taking the help of sophisticated means of
                communication as well as information systems technology.
              </Typography>
            </Box>
          </CardContent>
        </Box>
      </Box>
    </>
  );
};

export default AboutGameCard;
