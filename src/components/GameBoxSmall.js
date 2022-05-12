import { Card } from "@mui/material";
import React from "react";
import CardImage from "../styles/GameboxSmallStyles";

const GameBoxSmall = ({ ...data }) => {
  return (
    <>
      <Card sx={{ marginRight: "1rem", borderRadius: "1rem" }}>
        <CardImage component="img" src={data.image} alt="picture" />
      </Card>
    </>
  );
};

export default GameBoxSmall;
