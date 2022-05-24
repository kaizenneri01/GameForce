import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const GameBoxMediumTwo = ({ ...data }) => {
  return (
    <>
      <Card
        sx={{
          width: "18rem",
          height: "25rem",
          margin: "1rem",
          borderRadius: "1rem",
          backgroundColor: "#232222",
          transition: "all .2s",
          "&:hover": {
            transform: "translate(1px , 1px) scale(1.05)",
          },
        }}
      >
        <CardMedia
          component="img"
          src={data.image}
          alt="games"
          sx={{ width: "100%", height: "70%" }}
        />
        <CardContent sx={{ backgroundColor: "#3A4750", height: "30%" }}>
          <Typography
            sx={{
              color: "#EEEEEE",
              marginBottom: ".5rem",
              fontWeight: "normal",
            }}
          >
            {data.title}
          </Typography>
          <Grid container>
            <Grid container justifyContent="flex-end">
              <Button
                sx={{
                  marginTop: ".5rem",
                  backgroundColor: "#232222",
                  height: "3rem",
                  width: "6rem",
                  borderRadius: "5px",
                  "&:hover": {
                    backgroundColor: "#232222",
                  },
                }}
                disableRipple
              >
                <Grid container justifyContent="flex-end">
                  <Typography
                    sx={{
                      fontSize: "1rem",
                      color: "#EEEEEE",
                      fontWeight: "bolder",
                    }}
                  >
                    {data.cost}
                  </Typography>
                </Grid>
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default GameBoxMediumTwo;
