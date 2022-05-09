import { Typography, Container, Box, CardContent, Button } from "@mui/material";
import styled from "@emotion/styled";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { LandingData } from "../../data/LandingData";
import ImageOne from "../../Asset/images/ResidentEvil8.jpg";

const CardTitle = styled(Typography)(() => ({
  fontWeight: "bolder",
  color: "#EEEEEE",
  overflowWrap: "break-word",
  inlineSize: "30rem",
}));

const HomeContainer = styled(Container)(() => ({
  backgroundColor: "#303841",
  height: "100%",
}));

const HomeBox = styled(Box)(() => ({
  marginTop: "5rem",
  width: "70vw",
  height: "80vh",
  borderRadius: "1.5rem",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundImage: LandingData.map(
    (data) =>
      ` linear-gradient(90deg, #303841, transparent),
    url(${data.image})`
  ),
}));

const CardSubtitle = styled(Typography)(() => ({
  color: "#AEAEAE",
  fontWeight: "lighter",
  wordWrap: "break-word",
  maxWidth: "40%",
}));

const HomeCard = styled(CardContent)(() => ({
  marginTop: "5rem",
  marginLeft: "2rem",
}));

const CardGenre = styled(Button)(() => ({
  color: "#EEEEEE",
  fontWeight: "lighter",
  backgroundColor: "#3A4750",
  borderRadius: ".5rem",
  fontSize: ".7rem",
  "&:hover": {
    background: "#3A4750",
  },
}));

const CardGenreTitle = styled(Typography)(() => ({
  color: "#EEEEEE",
  marginRight: "1rem",
  fontWeight: "bold",
  textTransform: "uppercase",
}));

const CardButton = styled(Button)(() => ({
  marginTop: "1rem",
  fontSize: "1rem",
  padding: "1rem 2rem",
  backgroundColor: "#D72323",
  borderRadius: ".8rem",
  color: "#EEEEEE",
  textTransform: "capitalize",
  "&:hover": {
    backgroundColor: "#232222",
  },
}));

const HeartButton = styled(FavoriteBorderIcon)(() => ({
  color: "#EEEEEE",
  fontSize: "2.5rem",
  marginLeft: "1rem",
  marginTop: ".5rem",
}));

export {
  HeartButton,
  CardButton,
  CardTitle,
  HomeContainer,
  CardGenreTitle,
  CardGenre,
  HomeBox,
  CardSubtitle,
  HomeCard,
};
