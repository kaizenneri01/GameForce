import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import styled from "@emotion/styled";

const SectionGrid = styled(Grid)(() => ({
  backgroundColor: "#232222",
  paddingLeft: "1rem",
  height: "100%",
}));

const FormBox = styled(FormControl)(() => ({
  margin: "1rem .5rem 0 ",
}));

const SectionSelect = styled(Select)(() => ({
  backgroundColor: "#303841",
  width: "8rem",
  height: "70%",
  borderRadius: "10px",
  color: "#EEEEEE",
  fontSize: ".8rem",
}));

const SectionLabel = styled(InputLabel)(() => ({
  Color: "#EEEEEE",
  top: "-15%",
  "&.MuiFormLabel-filled": {
    color: "#EEEEEE",
    fontSize: ".9rem",
    top: "-10%",
  },
  "&.MuiInputLabel-root": {
    color: "white",
    justifyContent: "center",
    fontSize: ".9rem",
  },
}));

const SectionItem = styled(MenuItem)(() => ({
  color: "#303841",
  fontSize: ".8rem",
  fontWeight: "bold",
}));

export { SectionItem, SectionLabel, SectionSelect, FormBox, SectionGrid };
