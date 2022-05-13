import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import {
  FormBox,
  SectionGrid,
  SectionLabel,
  SectionSelect,
} from "../styles/GameSearchStyles";

const GameSearch = () => {
  const [section, setSection] = useState("");
  const [genres, setGenres] = useState("");

  const handleChange = (event) => {
    setSection(event.target.value);
  };

  const handleChangeTwo = (event) => {
    setGenres(event.target.value);
  };
  return (
    <>
      <SectionGrid container>
        <FormBox>
          <SectionLabel>Section</SectionLabel>
          <SectionSelect
            value={section}
            label="section"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </SectionSelect>
        </FormBox>
        <FormControl>
          <SectionLabel>Genres</SectionLabel>
          <SectionSelect
            value={genres}
            label="section"
            onChange={handleChangeTwo}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </SectionSelect>
        </FormControl>
      </SectionGrid>
    </>
  );
};

export default GameSearch;
