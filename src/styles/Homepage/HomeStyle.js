import {
  CardMedia,
  Typography,
  Container,
  Box,
  CardContent,
} from "@mui/material";
import styled from "@emotion/styled";

const HomeCardImage = styled(CardMedia)(() => ({
  borderRadius: "1.4rem",
}));

const CardTitle = styled(Typography)(() => ({
  fontWeight: "bolder",
  color: "#EEEEEE",
  overflowWrap: "break-word",
  inlineSize: "30rem",
}));

const HomeContainer = styled(Container)(() => ({
  backgroundColor: "#303841",
  height: "200vh",
}));

const HomeBox = styled(Box)(() => ({
  width: "70vw",
  marginTop: "3rem",
  borderRadius: "1.5rem",
}));

const CardSubtitle = styled(Typography)(() => ({
  color: "#AEAEAE",
  fontWeight: "lighter",
  overflowWrap: "break-word",
  inlineSize: "30rem",
}));

const HomeCard = styled(CardContent)(() => ({
  position: "absolute",
  marginTop: "4rem",
  background: "linear-gradient(red, yellow)",
}));

export {
  HomeCardImage,
  CardTitle,
  HomeContainer,
  HomeBox,
  CardSubtitle,
  HomeCard,
};
