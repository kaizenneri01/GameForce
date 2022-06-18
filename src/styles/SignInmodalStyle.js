import styled from "@emotion/styled";
import { Box } from "@mui/system";

const LoginBox = styled(Box)(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 410,
  height: 550,
  backgroundColor: "#222",
  boxShadow: 24,
}));

const LogoBox = styled(Box)(() => ({
  height: "5.5rem",
  width: "10rem",
  padding: "1.5rem",
  marginRight: "1.5rem",
}));

export { LoginBox, LogoBox };
