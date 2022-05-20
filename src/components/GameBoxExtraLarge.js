import { Box } from "@mui/system";
import React from "react";
import {
  CardPrice,
  CardVideo,
  GameButton,
  GameCard,
  GameContent,
  GameMedia,
  GameTitle,
} from "../styles/GameboxExtralargeStyles";
import {
  GameDesc,
  GameGenre,
  GameGenreText,
} from "../styles/GameBoxLargeStyles";

const GameBoxExtraLarge = ({ ...data }) => {
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
              {data.genre.map((genres, index) => (
                <GameGenre key={index}>{genres}</GameGenre>
              ))}
            </Box>
            <Box sx={{ display: "flex" }}>
              <GameGenreText>Publisher</GameGenreText>
              <GameGenre>{data.publisher}</GameGenre>
            </Box>
            <Box sx={{ display: "flex", marginTop: "1rem" }}>
              {data.minipictures?.map((minipics, index) => (
                <GameMedia
                  key={index}
                  component="img"
                  src={minipics}
                  alt="minipic"
                />
              ))}
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

export default GameBoxExtraLarge;
