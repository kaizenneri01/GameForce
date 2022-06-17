import styled from "@emotion/styled";
import { Box } from "@mui/system";

const LoginBox = styled(Box)(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 500,
  backgroundColor: "#2D2D2D",
  boxShadow: 24,
}));

export default LoginBox;
