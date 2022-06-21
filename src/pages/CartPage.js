import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import { MainText } from "../styles/MainGameStyles";

const CartPage = () => {
  return (
    <>
      <NavigationBar />
      <Grid
        container
        sx={{ backgroundColor: "#303841", paddingBottom: "5rem" }}
      >
        <Grid container>
          <MainText>CART</MainText>
        </Grid>
        <Grid container justifyContent="center">
          <Box
            sx={{
              backgroundColor: "#222",
              height: "70vh",
              width: "50rem",
              margin: "2rem",
            }}
          >
            hello
          </Box>
          <Box
            sx={{
              backgroundColor: "#3A4750",
              height: "70vh",
              width: "20rem",
              margin: "2rem",
            }}
          >
            hello
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default CartPage;
