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

const GameBoxMedium = ({ ...data }) => {
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
            <Grid container item xs={6}>
              <Box
                sx={{
                  backgroundColor: "#D72323",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "4rem",
                  borderRadius: "5px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "1rem",
                    color: "#232222",
                    fontWeight: "bold",
                  }}
                >
                  {data.discount}
                </Typography>
              </Box>
            </Grid>
            <Grid container item xs={6} justifyContent="flex-end">
              <Button
                sx={{
                  backgroundColor: "#232222",
                  width: "7rem",
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
                      fontSize: ".8rem",
                      color: "gray",
                      textDecoration: "line-through",
                    }}
                  >
                    {data.cost}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "1rem",
                      color: "#EEEEEE",
                    }}
                  >
                    {data.discountPrice}
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

export default GameBoxMedium;
