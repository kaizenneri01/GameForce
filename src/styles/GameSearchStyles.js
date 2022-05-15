import {
  Box,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";

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

const SectionBox = styled(Box)(() => ({
  marginLeft: "auto",
  display: "flex",
  alignItems: "center",
  marginRight: "2rem",
}));

const SectionSearch = styled(Input)(() => ({
  backgroundColor: "#EEEEEE",
  color: "#505050",
  height: "2rem",
  width: "15rem",
  borderTopLeftRadius: "1rem",
  borderBottomLeftRadius: "1rem",
  paddingLeft: "1rem",
}));

const SectionIcon = styled(SearchIcon)(() => ({
  color: "#949494",
  backgroundColor: "#EEEEEE",
  height: "2rem",
  padding: "0 .5rem",
  marginRight: "2rem",
  borderBottomRightRadius: "1rem",
  borderTopRightRadius: "1rem",
}));

export {
  SectionIcon,
  SectionBox,
  SectionSearch,
  SectionItem,
  SectionLabel,
  SectionSelect,
  FormBox,
  SectionGrid,
};
