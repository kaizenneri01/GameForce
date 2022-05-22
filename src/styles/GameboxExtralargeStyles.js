import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import styled from "@emotion/styled";

const GameCard = styled(Card)(() => ({
  display: "flex",
  marginTop: "3rem",
  borderRadius: "1rem",
  height: "30rem",
  width: "60rem",
  backgroundColor: "#3A4750",
  marginLeft: "auto",
  marginRight: "auto",
}));

const CardVideo = styled(CardMedia)(() => ({
  width: "100%",
  height: "100%",
  border: "none",
}));

const GameContent = styled(CardContent)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "80%",
}));

const GameTitle = styled(Typography)(() => ({
  color: "#EEEEEE",
  fontSize: "2rem",
  fontWeight: "bolder",
  marginBottom: "5px",
}));

const GameButton = styled(Button)(() => ({
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

const CardPrice = styled(Button)(() => ({
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

const GameMedia = styled(CardMedia)(() => ({
  height: "5rem",
  marginLeft: ".5rem",
  width: "8rem",
}));

export {
  GameMedia,
  CardPrice,
  GameButton,
  GameTitle,
  GameContent,
  CardVideo,
  GameCard,
};
