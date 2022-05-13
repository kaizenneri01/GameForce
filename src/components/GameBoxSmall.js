import { Card } from "@mui/material";
import React from "react";
import { CardBox, CardImage } from "../styles/GameboxSmallStyles";

const GameBoxSmall = ({ ...data }) => {
  return (
    <>
      <CardBox sx={{ marginRight: "1rem", borderRadius: "1rem" }}>
        <CardImage component="img" src={data.image} alt="picture" />
      </CardBox>
    </>
  );
};

export default GameBoxSmall;
