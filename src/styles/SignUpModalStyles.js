import styled from "@emotion/styled";
import { Box } from "@mui/system";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import HttpsRoundedIcon from "@mui/icons-material/HttpsRounded";
import { Input } from "@mui/material";

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

const SignUpEmail = styled(
  AccountCircleRoundedIcon,
  HttpsRoundedIcon
)(() => ({
  backgroundColor: "#303841",
  padding: "1rem",
  borderRadius: " .5rem 0 0 .5rem",
  color: "#EEEEEE",
}));

const SignUpInput = styled(Input)(() => ({
  backgroundColor: "#EEEEEE",
  width: "70%",
  padding: ".7rem",
  borderRadius: "0 .5rem .5rem 0",
  fontWeight: "bold",
}));

export { SignUpInput, SignUpEmail, SignUpBox, LogoBox };
