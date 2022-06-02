import {
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
  marginBottom: "5rem",
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
  fontSize: ".9rem",
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

export {
  MainDesc,
  MainGenreText,
  MainGenre,
  MainCard,
  MainContent,
  MainVideo,
  MainButton,
  MainPrice,
  MainMedia,
  MainTitle,
};
