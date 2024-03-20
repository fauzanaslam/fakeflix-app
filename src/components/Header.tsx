import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";
import { useEffect, useState } from "react";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <Box sx={{ borderBottom: `8px solid ${grey[900]}` }}>
      <AppBar
        sx={{
          backgroundColor: "transparent",
          padding: "25px 20px",
        }}
        elevation={0}
      >
        <Toolbar
          sx={{
            visibility: visible ? "visible" : "hidden",
            transition: "visibility 0.3s ease-in-out",
          }}
        >
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs>
              <img
                src="../images/fakeflix-logo.png"
                width="167px"
                alt="Netflix logo"
              />
            </Grid>
            <Grid item xs="auto">
              <Select
                name="lang"
                variant="outlined"
                size="small"
                defaultValue="EN"
                sx={{
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderColor: "common.white",
                  color: "common.white",
                  "& .MuiSelect-icon": {
                    color: "common.white",
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
              >
                <MenuItem value="ID">Bahasa Indonesia</MenuItem>
                <MenuItem value="EN">English</MenuItem>
              </Select>
            </Grid>
            <Grid item xs="auto">
              <Button color="primary" variant="contained">
                Sign in
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          position: "relative",
          height: "745px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&::after": {
            position: "absolute",
            content: '""',
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            background: "rgba(0, 0, 0, 0.4)",
            backgroundImage: `linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.6) 0,
              rgba(0, 0, 0, 0) 60%,
              rgba(0, 0, 0, 0.8) 100%
            )`,
          },
        }}
      >
        <img src="../images/backdrop.jpg" alt="Backdrop Netflix" width="100%" />
        <Container maxWidth="md" sx={{ position: "absolute", zIndex: 1000 }}>
          <Typography
            variant="h2"
            component="h1"
            color="common.white"
            fontWeight="600"
            textAlign="center"
          >
            Unlimited movies, TV shows, and more.
          </Typography>
          <Typography
            variant="h5"
            component="p"
            color="common.white"
            textAlign="center"
            gutterBottom
          >
            Watch anywhere. Cancel anytime.
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="common.white"
            textAlign="center"
            sx={{ my: 3 }}
          >
            Ready to watch? Enter your email to create or restart your
            membership.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Header;
