import { Grid } from "@mui/material";
import React from "react";
import GameBoxExtraLarge from "./GameBoxExtraLarge";

const GameComponent = ({ name, container, data, component, Settings }) => {
  return (
    <div>
      {container === "extra" ? (
        <Settings>
          {data
            .filter((list) => list.type === name)
            .map((data, index) => (
              <Grid container>
                <GameBoxExtraLarge key={index} {...data} />
              </Grid>
            ))}
        </Settings>
      ) : (
        <Grid container justifyContent="center" sx={{ paddingBottom: "5rem" }}>
          {data
            .filter((list) => list.type === name)
            .map((data, index) => (
              <div>{component(index, data)}</div>
            ))}
        </Grid>
      )}
    </div>
  );
};
export default GameComponent;
