import { Container, styled, Typography, Button } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {
  const StyledHero = styled("div")(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh", //para q a section ocupe a tela toda
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up('xs')]:{  // <= mobile

    },

    [theme.breakpoints.up('md')]:{ // >= mobile
      paddingTop: "0" 
    }
  }));

  const StyledImg = styled("img")(({theme}) => ({
    width: "80%",
    borderRadius: "50%", //deixar a imagem redonda
    border: `1px solid ${theme.palette.primary.contrastText}`
  }));

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          {/* <Box sx={{ flexGrow: 1 }}> */}
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 5 }} >
              <Box position="relative">
                <Box position="absolute" width={"150%"} top={-100} right={0} zIndex={1}>
                  <AnimatedBackground/>
                </Box>
                <Box textAlign="center" position="relative" zIndex={2}>
                  <StyledImg src={Avatar}/>
                </Box>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography color="primary.contrastText" variant="h1" textAlign="center">
                Isabela Oliveira
              </Typography>
              <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={2}>
                I'm a Software Engineer
              </Typography>
              <Grid container display="flex" justifyContent="center" spacing={3} pb={3}>
                <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">

              <StyledButton onClick={() => console.log("download")}> 
                <DownloadIcon /> 
                <Typography>
                Download CV
                </Typography>
                </StyledButton>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
              <StyledButton onClick={() => console.log("contact")}>
                <EmailIcon/>
                <Typography>
                Contact me

                </Typography>
              </StyledButton>
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
