import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Slider from "react-slick";

import {
  MainButton,
  MainCard,
  MainCardTwo,
  MainContent,
  MainDesc,
  MainDescTwo,
  MainGamePrice,
  MainGenre,
  MainGenreText,
  MainPrice,
  MainText,
  MainTitle,
  MainVideo,
} from "../styles/MainGameStyles";

const MainGameBox = ({ ...data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <>
      <MainCard>
        <Box sx={{ display: "flex", width: "100%" }} elevation={10}>
          <MainVideo component="iframe" image={data.video} />
          <MainContent>
            <MainTitle variant="h4">{data.title}</MainTitle>
            <MainDesc variant="subtitle1">{data.descriptionTwo}</MainDesc>
            <Box sx={{ display: "flex" }}>
              <MainGenreText>genres:</MainGenreText>
              {data.genre.map((genres, index) => (
                <MainGenre key={index}>{genres}</MainGenre>
              ))}
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", marginTop: "1rem" }}>
              <MainGenreText>Publisher:</MainGenreText>
              <MainGenre>{data.publisher}</MainGenre>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                height: "100%",
              }}
            >
              <MainGamePrice disableRipple>{data.cost}</MainGamePrice>
              <MainButton>add to cart</MainButton>
            </Box>
          </MainContent>
        </Box>
      </MainCard>
      <Grid container>
        <Container
          maxWidth={false}
          sx={{
            width: {
              xl: "74vw",
              lg: "74vw",
              md: "80vw",
              xs: "80vw",
            },
          }}
        >
          <Slider {...settings}>
            {data.minipic.map((item, index) => (
              <Box>
                <Box
                  key={index}
                  component="img"
                  src={item}
                  sx={{
                    height: "20vh",
                    objectFit: "cover",
                    margin: "1rem 0 1rem .4rem",
                    transition: ".3s",
                    "&:hover": {
                      transform: "translate(1px , 1px) scale(1.1)",
                    },
                  }}
                />
              </Box>
            ))}
          </Slider>
        </Container>
        <Grid container flexDirection="column">
          <MainText>{`More About ${data.title}`}</MainText>
          <MainDescTwo variant="subtitle1">
            On our Windows 10 test rig consisting of an i5-3470 at 3.2GHz, 16GB
            RAM, an Nvidia GTX 1070, and a 500GB SSD Shadow of War was a treat
            to play. At 1080p (1920x1080) with every detail set to the Ultra
            option saw an average of around 84fps dropping between 58 and 60fps
            in more busy situations featuring plenty of enemies, weather
            effects, and siege warfare that has massive units on screen ranging
            from giant trolls to dragons. Even at 1080p Shadow of War on PC
            looked better than it does on the PS4 Pro thanks to vibrant lighting
            and sharper environments. Throw the high frame-per-second and 1080p
            is the sweet spot for those with older machines like ours. Bumping
            up the resolution to 4K (3840x2160) saw our frame rate effectively
            halved to around 38 to 40fps, dipping to as low as 20fps in more
            hectic scenes. Despite the sharper image quality due to the higher
            pixel count, the experience wasn't as fluid as it could be thanks to
            the drop in frame rate so much so that it impacts gameplay with
            stringing combos not being as smooth and effortless was at lower
            resolution settings. Switching off anti-aliasing at 4K eased things
            a bit, adding around 5fps more to each scenario though the middle
            ground for Shadow of War seems to be 2560x1440. Here the frame rate
            was a steady 60fps with minor drops to the early 50s in the most
            strenuous situations. Thanks to the perceptibly enhanced visual
            fidelity at this resolution and mostly 60fps gameplay makes
            2560x1440 the sweet spot for Shadow of War.
          </MainDescTwo>
        </Grid>
        <Grid container>
          <MainCardTwo>
            <Grid container item xs={6}>
              <Grid container flexDirection="column">
                <Typography>title</Typography>
                <Typography>description</Typography>
              </Grid>
              <Grid
                container
                alignItems="flex-end"
                justifyContent="space-between"
              >
                <MainPrice>P 2,500.00</MainPrice>
                <MainButton>add to cart</MainButton>
              </Grid>
            </Grid>
            <Grid container item xs={6}>
              <Grid container flexDirection="column">
                <Typography>title</Typography>
                <Typography>description</Typography>
              </Grid>
              <Grid
                container
                alignItems="flex-end"
                justifyContent="space-between"
              >
                <MainPrice>P 2,500.00</MainPrice>
                <MainButton>add to cart</MainButton>
              </Grid>
            </Grid>
          </MainCardTwo>
        </Grid>
      </Grid>
    </>
  );
};

export default MainGameBox;
