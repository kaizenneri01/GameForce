import { TextField } from "@mui/material";
import styled from "@emotion/styled";

const ContactInput = styled(TextField)(() => ({
  width: "12vw",
  margin: "1rem",
  backgroundColor: "#EEEEEE",
  borderRadius: "5px",
}));

const ContactInputTwo = styled(TextField)(() => ({
  width: "95%",
  margin: "1rem",
  backgroundColor: "#EEEEEE",
  borderRadius: "5px",
}));

export { ContactInput, ContactInputTwo };
