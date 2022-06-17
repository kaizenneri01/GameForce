import React from "react";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import LoginBox from "../styles/LoginmodalStyle";
import logo from "../Asset/images/games/gf.png";
import { Box } from "@mui/system";

const LoginModal = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <LoginBox>
        <Box component="img" src={logo} />
      </LoginBox>
    </Modal>
  );
};

export default LoginModal;
