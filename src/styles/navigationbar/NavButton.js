import { Button } from "@mui/material";
import styled from "@emotion/styled";

const NavButton = styled(Button)(() => ({
  // fontSize: "rem",
  overflow: "hidden",
  marginRight: "2rem",
  position: "relative",
  color: "black",
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

export default NavButton;
