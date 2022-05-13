import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import styled from "@emotion/styled";

const SectionGrid = styled(Grid)(() => ({
  backgroundColor: "#232222",
  padding: "2rem",
}));

const FormBox = styled(FormControl)(() => ({
  marginRight: "1rem",
}));

const SectionSelect = styled(Select)(() => ({
  backgroundColor: "#303841",
  height: "2.3rem",
  width: "8rem",
  top: "30%",
}));

const SectionLabel = styled(InputLabel)(() => ({
  Color: "#EEEEEE",
  fontSize: "1rem",
  "&.MuiFormLabel-filled": {
    color: "white",
  },
}));

const SectionItem = styled(MenuItem)(() => ({
  Color: "#EEEEEE",
  fontSize: "1rem",
}));

export { SectionLabel, SectionSelect, FormBox, SectionGrid };
