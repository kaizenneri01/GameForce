import { Typography, Container, Box, CardContent, Button } from "@mui/material";
import styled from "@emotion/styled";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CardTitle = styled(Typography)(() => ({
  fontWeight: "bolder",
  color: "#EEEEEE",
  overflowWrap: "break-word",
  inlineSize: "30rem",
}));

const HomeContainer = styled(Container)(() => ({
  backgroundColor: "#303841",
  height: "100%",
  paddingBottom: "5rem",
}));

const HomeBox = styled(Box)(({ data }) => ({
  marginLeft: "auto",
  marginRight: "auto",
  display: "flex",
  alignItems: "center",
  marginBottom: "2rem",
  marginTop: "5rem",
  width: "70vw",
  height: "80vh",
  borderRadius: "1.5rem",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundImage: ` linear-gradient(90deg, #303841, transparent),
    url(${data})`,
}));

const CardSubtitle = styled(Typography)(() => ({
  color: "#AEAEAE",
  fontWeight: "lighter",
  wordWrap: "break-word",
  maxWidth: "50%",
}));

const HomeCard = styled(CardContent)(() => ({
  marginLeft: "3rem",
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
  cursor: "pointer",
}));

const HomeGenreTitle = styled(Typography)(() => ({
  color: "#EEEEEE",
  fontSize: "2rem",
  borderBottom: "5px solid #D72323",
  fontWeight: "bolder",
  marginTop: "5rem",
  textTransform: "uppercase",
}));

const SpecialText = styled(Typography)(() => ({
  color: "#EEEEEE",
  borderBottom: "2px solid #D72323",
  textTransform: "uppercase",
  fontSize: "1.2rem",
  margin: ".5rem 0 2rem 1rem",
}));

const SpecialTextTwo = styled(Typography)(() => ({
  position: "relative",
  color: "#EEEEEE",
  textTransform: "uppercase",
  fontSize: "1rem",
  overflow: "hidden",
  cursor: "pointer",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "80%",
    left: "-100%",
    height: "7%",
    width: "100%",
    backgroundColor: "red",
    transition: "0.5s",
  },
  "&:hover::before": {
    left: "0",
  },
}));

const SpecialArrow = styled(ArrowForwardIosIcon)(() => ({
  color: "#EEEEEE",
}));

export {
  SpecialArrow,
  SpecialTextTwo,
  SpecialText,
  HomeGenreTitle,
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
