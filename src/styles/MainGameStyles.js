import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";

const MainCard = styled(Card)(() => ({
  display: "flex",
  marginTop: "3rem",
  borderRadius: "1rem",
  height: "70vh",
  width: "65vw",
  backgroundColor: "#3A4750",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: "1rem",
}));

const MainCardTwo = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  marginTop: "3rem",
  borderRadius: "1rem",
  height: "70vh",
  width: "65vw",
  backgroundColor: "#3A4750",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: "1rem",
}));

const MainContent = styled(CardContent)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "50%",
}));

const MainVideo = styled(CardMedia)(() => ({
  width: "50%",
  border: "none",
}));

const MainTitle = styled(Typography)(() => ({
  color: "#EEEEEE",
  fontSize: "5vh",
  fontWeight: "bolder",
  marginBottom: "5px",
  textTransform: "Capitalize",
}));

const MainButton = styled(Button)(() => ({
  backgroundColor: "#D72323",
  color: "#EEEEEE",
  padding: "1rem",
  borderRadius: ".5rem",
  fontSize: "2vh",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "#232222",
  },
}));

const MainPrice = styled(Button)(() => ({
  backgroundColor: "#232222",
  color: "#EEEEEE",
  fontSize: "1.5rem",
  width: "10rem",
  fontWeight: "bolder",
  cursor: "default",
  "&:hover": {
    backgroundColor: "#232222",
  },
}));

const MainMedia = styled(CardMedia)(() => ({
  height: "6rem",
  marginLeft: ".5rem",
  width: "8rem",
}));

const MainGenre = styled(Button)(() => ({
  color: "#EEEEEE",
  fontWeight: "lighter",
  backgroundColor: "#303841",
  borderRadius: ".5rem",
  fontSize: "1.5vh",
  margin: ".3rem .2rem",
  "&:hover": {
    background: "#303841",
  },
}));

const MainGenreText = styled(Typography)(() => ({
  color: "#EEEEEE",
  textTransform: "uppercase",
  margin: ".6rem .2rem",
  fontSize: "2vh",
}));

const MainDesc = styled(Typography)(() => ({
  color: "#AEAEAE",
  fontSize: "2vh",
  marginBottom: "2rem",
}));

const MainDescTwo = styled(Typography)(() => ({
  color: "#AEAEAE",
  fontSize: "2.5vh",
  marginBottom: "2rem",
  textAlign: "start",
  overflowWrap: "breakWord",
  inlineSize: "80vw",
  alignSelf: "center",
}));

const MainGamePrice = styled(Button)(() => ({
  backgroundColor: "#232222",
  color: "#EEEEEE",
  fontSize: "3.5vh",
  fontWeight: "bolder",
  cursor: "default",
  "&:hover": {
    backgroundColor: "#232222",
  },
}));

const MainText = styled(Typography)(() => ({
  color: "#EEEEEE",
  fontSize: "5vh",
  margin: "5rem 0 3rem 2rem",
  borderBottom: "2px #D72323 solid",
  fontWeight: "normal",
  width: "30vw",
}));

export {
  MainText,
  MainGamePrice,
  MainDesc,
  MainDescTwo,
  MainGenreText,
  MainGenre,
  MainCard,
  MainCardTwo,
  MainContent,
  MainVideo,
  MainButton,
  MainPrice,
  MainMedia,
  MainTitle,
};
