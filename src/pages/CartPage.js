import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import Cartgame from "../components/Cartgame";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import { LoginContext } from "../helper/Context";
import {
  CartPageBox,
  CartPageBoxTwo,
  CartPageSubText,
  CartPageText,
} from "../styles/CartPageStyles";

import { MainText } from "../styles/MainGameStyles";

const style = {
  marginLeft: "auto",
};

const arrange = {
  marginTop: "2rem",
};

const CartPage = () => {
  const { cartData, setCartData } = useContext(LoginContext);
  const [totalCost, setTotalCost] = useState([]);

  useEffect(() => {
    setTotalCost(cartData.map((item) => item.cost));
  }, [cartData]);

  const totalPrice = totalCost.reduce((total, item) => {
    return total + Number(item);
  }, 0);

  return (
    <>
      <NavigationBar />
      <Grid
        container
        sx={{
          backgroundColor: "#303841",
          paddingBottom: "5rem",
          flexWrap: "wrap",
        }}
      >
        <Grid container>
          <MainText>CART</MainText>
        </Grid>
        <Grid container justifyContent="center">
          <CartPageBox>
            <Grid container justifyContent="center">
              {cartData.map((item, index) => (
                <>
                  <Cartgame key={index} {...item} />
                  <Button
                    disableRipple
                    sx={{
                      marginLeft: "-110px",
                      marginTop: "90px",
                      height: "3rem",
                      color: "#EEEEEE",
                      backgroundColor: "#D72323",
                      "&:hover": {
                        backgroundColor: "#D72323",
                      },
                    }}
                    onClick={() => {
                      setCartData(
                        cartData.filter((citem) => citem.id !== item.id)
                      );
                      setTotalCost(
                        cartData.filter((citem) => citem.cost !== item.cost)
                      );
                    }}
                  >
                    remove
                  </Button>
                </>
              ))}
            </Grid>
          </CartPageBox>
          <CartPageBoxTwo>
            <Grid container justifyContent="center">
              <CartPageText>SUMMARY TOTAL</CartPageText>
            </Grid>
            <Grid container flexDirection="column" alignItems="center">
              {cartData.map((item) => (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                    }}
                  >
                    <CartPageSubText>{item.title}</CartPageSubText>
                    <CartPageSubText sx={style}>P {item.cost}</CartPageSubText>
                  </Box>
                </>
              ))}
            </Grid>
            <Grid container sx={arrange}>
              <CartPageSubText>Discount</CartPageSubText>
            </Grid>
            <Box sx={{ display: "flex" }}>
              <CartPageSubText>Total</CartPageSubText>
              <CartPageSubText>P {totalPrice}</CartPageSubText>
            </Box>
          </CartPageBoxTwo>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default CartPage;
