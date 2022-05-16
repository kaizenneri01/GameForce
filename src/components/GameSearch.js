import React, { useState } from "react";
import {
  FormBox,
  SectionBox,
  SectionGrid,
  SectionIcon,
  SectionItem,
  SectionLabel,
  SectionSearch,
  SectionSelect,
} from "../styles/GameSearchStyles";

const GameSearch = () => {
  const [section, setSection] = useState("");
  const [genres, setGenres] = useState("");
  const [support, setSupport] = useState("");

  const handleChange = (event) => {
    setSection(event.target.value);
  };

  const handleChangeTwo = (event) => {
    setGenres(event.target.value);
  };

  const handleChangeThree = (event) => {
    setSupport(event.target.value);
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
            <SectionItem value={1}>Free to play</SectionItem>
            <SectionItem value={2}>Demos</SectionItem>
            <SectionItem value={3}>Early access</SectionItem>
          </SectionSelect>
        </FormBox>
        <FormBox>
          <SectionLabel>Genres</SectionLabel>
          <SectionSelect
            value={genres}
            label="genres"
            onChange={handleChangeTwo}
          >
            <SectionItem value={1}>Horror</SectionItem>
            <SectionItem value={2}>Action</SectionItem>
            <SectionItem value={3}>Sport</SectionItem>
            <SectionItem value={4}>Adventure</SectionItem>
            <SectionItem value={5}>Open world</SectionItem>
            <SectionItem value={6}>Shooting</SectionItem>
          </SectionSelect>
        </FormBox>
        <FormBox>
          <SectionLabel>Support</SectionLabel>
          <SectionSelect
            value={support}
            label="support"
            onChange={handleChangeThree}
          >
            <SectionItem value={1}>LAN</SectionItem>
            <SectionItem value={3}>Online</SectionItem>
            <SectionItem value={2}>Single player</SectionItem>
            <SectionItem value={3}>Multi player</SectionItem>
          </SectionSelect>
        </FormBox>
        <SectionBox>
          <SectionSearch placeholder="Search here.." disableUnderline />
          <SectionIcon />
        </SectionBox>
      </SectionGrid>
    </>
  );
};

export default GameSearch;
