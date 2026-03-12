import { Container, styled, Typography, Button } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Hero = () => {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    height: "100vh", //para q a section ocupe a tela toda
  }));

  const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%", //deixar a imagem redonda
  }));

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          {/* <Box sx={{ flexGrow: 1 }}> */}
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 4 }}>
              <StyledImg src={Avatar}></StyledImg>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography color="primary" variant="h1" textAlign="center">
                Isabela Oliveira
              </Typography>
              <Typography color="primary" variant="h2" textAlign="center">
                I'm a Software Engineer
              </Typography>
              <Grid container display="flex" justifyContent="center">
                <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                  <Button>
                    <DownloadIcon />
                    Download CV
                  </Button>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
              <Button>
                <EmailIcon/>
                Contact me
              </Button>

                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* </Box>   */}
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
