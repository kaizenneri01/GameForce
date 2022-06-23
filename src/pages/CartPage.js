import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import Cartgame from "../components/Cartgame";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import { LoginContext } from "../helper/Context";

import { MainText } from "../styles/MainGameStyles";

const CartPage = () => {
  const { cartData } = useContext(LoginContext);

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
              borderRadius: "2rem",
            }}
          >
            <Grid container justifyContent="center">
              {cartData.map((item, index) => (
                <>
                  <Cartgame key={index} {...item} />
                  <Button>remove</Button>
                </>
              ))}
            </Grid>
          </Box>
          <Box
            sx={{
              backgroundColor: "#3A4750",
              height: "70vh",
              width: "20rem",
              margin: "2rem",
              borderRadius: "2rem",
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
