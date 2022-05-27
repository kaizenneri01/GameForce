import { Box } from "@mui/system";
import styled from "@emotion/styled";
import { CardMedia, Typography } from "@mui/material";

const AboutContainer = styled(Box)(({ picture }) => ({
  borderRadius: "2rem",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: "2rem",
  marginTop: "5rem",
  height: "90vh",
  width: "80vw",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundImage: ` linear-gradient(90deg, #303841 30%, transparent),
url(${picture})`,
}));

const AboutBox = styled(Box)(() => ({
  height: "100%",
  width: "40%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const AboutPic = styled(CardMedia)(() => ({
  backgroundColor: "transparent",
  height: "20rem",
  width: "30vw",
  objectFit: "fill",
  marginBottom: "1rem",
}));

const AboutTitle = styled(Typography)(() => ({
  color: "#EEEEEE",
  fontSize: "3rem",
  textTransform: "capitalize",
  borderBottom: "#D72323 solid 3px",
  fontWeight: "bolder",
  marginBottom: "1rem",
  textAlign: "center",
}));

const AboutDesc = styled(Typography)(() => ({
  width: "30rem",
  fontSize: "2.3vh",
  overflowWrap: "break-word",
  inlineSize: "30rem",
  color: "#AEAEAE",
  textAlign: "center",
}));

export { AboutDesc, AboutTitle, AboutBox, AboutContainer, AboutPic };
