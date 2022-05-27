import { Box } from "@mui/system";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

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
  backgroundImage: ` linear-gradient(80deg, #303841 35%, transparent),
url(${picture})`,
}));

const AboutContainerTwo = styled(Box)(({ picture }) => ({
  display: "flex",
  justifyContent: "flex-end",
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
  backgroundImage: ` linear-gradient(260deg, #232222 35%, transparent),
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

const AboutPic = styled(Box)(() => ({
  backgroundColor: "transparent",
  height: "25vh",
  width: "25vw",
  objectFit: "fill",
  margin: "2rem 4rem 2rem 0",
}));

const AboutTitle = styled(Typography)(() => ({
  color: "#EEEEEE",
  fontSize: "8vh",
  textTransform: "capitalize",
  borderBottom: "#D72323 solid 3px",
  fontWeight: "bolder",
  marginBottom: "3rem",
  textAlign: "center",
  width: "20vw",
}));

const AboutDesc = styled(Typography)(() => ({
  width: "25rem",
  fontSize: "2.3vh",
  overflowWrap: "break-word",
  inlineSize: "25vw",
  color: "#AEAEAE",
  textAlign: "center",
}));

const AboutDescTwo = styled(Typography)(() => ({
  width: "25rem",
  fontSize: "3vh",
  overflowWrap: "break-word",
  inlineSize: "25vw",
  color: "#AEAEAE",
  textAlign: "center",
}));

export {
  AboutDesc,
  AboutDescTwo,
  AboutTitle,
  AboutBox,
  AboutContainer,
  AboutContainerTwo,
  AboutPic,
};
