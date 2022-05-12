import { Button, Card, CardMedia, Typography } from "@mui/material";
import styled from "@emotion/styled";

const GameCard = styled(Card)(() => ({
  height: "35rem",
  width: "20rem",
  backgroundColor: "#3A4750",
  margin: "5rem 1rem 1rem 1rem",
  borderRadius: "1rem",
}));

const GameImage = styled(CardMedia)(() => ({
  height: "20rem",
  width: "20rem",
  objectFit: "fill",
}));

const GameTitle = styled(Typography)(() => ({
  color: "#EEEEEE",
  borderBottom: "2px solid red",
  textTransform: "capitalize",
  marginBottom: "1rem",
}));

const GameDesc = styled(Typography)(() => ({
  color: "#AEAEAE",
  fontSize: ".8rem",
  marginBottom: ".5rem",
}));

const GameGenre = styled(Button)(() => ({
  color: "#EEEEEE",
  fontWeight: "lighter",
  backgroundColor: "#303841",
  borderRadius: ".5rem",
  fontSize: ".7rem",
  margin: ".3rem .2rem",
  "&:hover": {
    background: "#303841",
  },
}));

const GameGenreText = styled(Typography)(() => ({
  color: "#EEEEEE",
  textTransform: "uppercase",
  margin: ".6rem .2rem",
  fontSize: ".9rem",
}));

export { GameGenreText, GameGenre, GameTitle, GameImage, GameCard, GameDesc };
