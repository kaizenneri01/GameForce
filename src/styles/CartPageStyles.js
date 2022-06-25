import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const CartPageBox = styled(Box)(() => ({
  backgroundColor: "#222",
  height: "80vh",
  width: "60vw",
  margin: "2rem",
  borderRadius: "2rem",
}));

const CartPageBoxTwo = styled(Box)(() => ({
  backgroundColor: "#3A4750",
  height: "80vh",
  width: "25vw",
  margin: "2rem",
  borderRadius: "2rem",
}));

const CartPageText = styled(Typography)(() => ({
  color: "#EEEEEE",
  margin: "1rem 1rem",
  fontWeight: "400",
}));

const CartPageSubText = styled(Typography)(() => ({
  color: "#EEEEEE",
  margin: ".5rem 2rem",
  fontWeight: "100",
  overflowWrap: "break-word",
  inlineSize: "20rem",
  fontSize: "2.2vh",
}));

export { CartPageBox, CartPageBoxTwo, CartPageText, CartPageSubText };
