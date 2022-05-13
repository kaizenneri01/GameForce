import { Card, CardMedia } from "@mui/material";
import styled from "@emotion/styled";

const CardBox = styled(Card)(() => ({
  position: "relative",
  backgroundColor: "black",
  marginBottom: "1rem",
  "&::before": {
    fontWeight: "bolder",
    position: "absolute",
    content: "'BUY'",
    backgroundColor: "red",
    textAlign: "center",
    paddingTop: "1rem",
    top: "30%",
    left: "30%",
    height: "25%",
    width: "40%",
    borderRadius: "1rem",
    cursor: "pointer",
    color: "white",
  },
  "&:hover": {
    opacity: ".5",
  },
  "&:hover::before": {
    zIndex: "1",
  },
}));
const CardImage = styled(CardMedia)(() => ({
  position: "relative",
  height: "23vh",
  width: "15vw",
}));

export { CardBox, CardImage };
