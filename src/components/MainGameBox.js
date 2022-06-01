import { Box } from "@mui/system";
import React from "react";
import {
  CardPrice,
  CardVideo,
  GameButton,
  GameCard,
  GameContent,
  GameTitle,
} from "../styles/GameboxExtralargeStyles";
import {
  GameDesc,
  GameGenre,
  GameGenreText,
} from "../styles/GameBoxLargeStyles";

const MainGameBox = ({ ...data }) => {
  return (
    <>
      <GameCard>
        <Box sx={{ display: "flex" }} elevation={10}>
          <CardVideo component="iframe" image={data.image} />
          <GameContent
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "20rem",
            }}
          >
            <GameTitle variant="h4">{data.title}</GameTitle>
            <GameDesc variant="subtitle1">{data.description}</GameDesc>
            <Box sx={{ display: "flex" }}>
              <GameGenreText>genres:</GameGenreText>

              <GameGenre>he</GameGenre>
            </Box>
            <Box sx={{ display: "flex" }}>
              <GameGenreText>Publisher</GameGenreText>
              <GameGenre>{data.publisher}</GameGenre>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                height: "100%",
              }}
            >
              <CardPrice disableRipple>{data.cost}</CardPrice>
              <GameButton>add to cart</GameButton>
            </Box>
          </GameContent>
        </Box>
      </GameCard>
    </>
  );
};

export default MainGameBox;
