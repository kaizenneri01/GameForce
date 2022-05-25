import { Typography } from "@mui/material";
import styled from "@emotion/styled";

const TextStyle = styled(Typography)(() => ({
  color: "#EEEEEE",
  fontSize: "2rem",
  margin: "1rem 2rem",
  borderBottom: "4px #D72323 solid",
  fontWeight: "bolder",
}));

const TextStyleTwo = styled(Typography)(() => ({
  color: "#EEEEEE",
  fontWeight: "lighter",
  fontSize: "1rem",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "90%",
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

export { TextStyleTwo, TextStyle };
