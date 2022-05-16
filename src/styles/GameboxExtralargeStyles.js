import { Card, CardContent, CardMedia } from "@mui/material";
import styled from "@emotion/styled";

const GameCard = styled(Card)(() => ({
  display: "flex",
  marginTop: "3rem",
  borderRadius: "2rem",
  height: "25rem",
  width: "50rem",
  backgroundColor: "#3A4750",
}));

const CardVideo = styled(CardMedia)(() => ({
  width: "25rem",
  height: "100%",
  border: "none",
}));

const GameContent = styled(CardContent)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "20rem",
}));

export { GameContent, CardVideo, GameCard };
