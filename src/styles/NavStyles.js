import { Box, Button, Container } from "@mui/material";
import styled from "@emotion/styled";

const NavButton = styled(Button)(() => ({
  overflow: "hidden",
  marginRight: "2rem",
  position: "relative",
  color: "#232222",
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
  "&:hover": {
    background: "none",
  },
}));

const NavLogo = styled(Box)(() => ({
  height: "3.5rem",
  width: "6rem",
  padding: ".5rem",
}));

const NavContainer = styled(Container)(() => ({
  backgroundColor: "#EEEEEE",
}));

export { NavButton, NavLogo, NavContainer };
