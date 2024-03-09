import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../images/logo@2x.png";
import { Container } from "react-bootstrap";
const pages = [
  "Home",
  "About",
  "PlacesReview",
  "Services",
  "FeaturedTours",
  "Popular Destionations",
  "OurTeam",
  "Footer",
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Box className="nav-header" component="a" href="#">
            <img src={logo} alt="GoTour" width={"60px"} height={"20px"} />
          </Box>

          <Box
            sx={{
              flexGrow: "1",
            }}
          ></Box>

          <Box sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}>
            <Box flexGrow={1}></Box>

            <IconButton onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon
                sx={{
                  fontSize: "30px",
                }}
              />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: { xs: "none", sm: "none", md: "flex" },
              color: "white",
              fontFamily: "Gill Sans , sans-serif",
            }}
          >
            <Button
              sx={{
                color: "white",
                fontSize: "14px",

                "&:hover": {
                  color: "#fff",
                },
              }}
              href="#home"
            >
              {pages[0]}
            </Button>
            <Button
              sx={{
                color: "white",
                fontSize: "14px",
                "&:hover": {
                  color: "#fff",
                },
              }}
              href="#about"
            >
              {pages[1]}
            </Button>
            <Button
              sx={{
                color: "white",
                fontSize: "14px",
                "&:hover": {
                  color: "#fff",
                },
              }}
              href="#placesReview"
            >
              {pages[2]}
            </Button>
            <Button
              sx={{
                color: "white",
                fontSize: "14px",
                "&:hover": {
                  color: "#fff",
                },
              }}
              href="#services"
            >
              {pages[3]}
            </Button>
            <Button
              sx={{
                color: "white",
                fontSize: "14px",
                "&:hover": {
                  color: "#fff",
                },
              }}
              href="#tours"
            >
              {pages[4]}
            </Button>
            <Button
              sx={{
                color: "white",
                fontSize: "14px",
                "&:hover": {
                  color: "#fff",
                },
              }}
              href="#PopularDestination"
            >
              {pages[5]}
            </Button>
            <Button
              sx={{
                color: "white",
                fontSize: "14px",
                "&:hover": {
                  color: "#fff",
                },
              }}
              href="#team"
            >
              {pages[6]}
            </Button>
            <Button
              sx={{
                color: "white",
                fontSize: "14px",
                "&:hover": {
                  color: "#fff",
                },
              }}
              href="#footer"
            >
              {pages[7]}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
export default Navbar;
