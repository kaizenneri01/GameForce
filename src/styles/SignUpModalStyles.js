import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { Button, Input } from "@mui/material";

const SignUpBox = styled(Box)(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  height: 550,
  backgroundColor: "#222",
  boxShadow: 24,
}));

const LogoBox = styled(Box)(() => ({
  height: "5.5rem",
  width: "10rem",
  padding: "1.5rem",
  marginRight: "1.5rem",
}));

const SignUpInput = styled(Input)(() => ({
  backgroundColor: "#EEEEEE",
  width: "70%",
  padding: ".7rem",
  borderRadius: "0 .5rem .5rem 0",
  fontWeight: "bold",
}));

const SignUpBtn = styled(Button)(() => ({
  width: "80%",
  backgroundColor: "#303841",
  fontWeight: "bold",
  color: "#EEEEEE",
  fontSize: "1.1rem",
  padding: ".7rem",
  marginTop: "1.5rem",
}));

export { SignUpInput, SignUpBtn, SignUpBox, LogoBox };
