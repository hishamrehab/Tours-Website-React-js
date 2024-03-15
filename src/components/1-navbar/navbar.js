import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import logo from "../../images/logo@2x.png";
import { Container } from "react-bootstrap";

import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import "../../index.css";
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

const drawerWidth = 240;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box className="nav-header-drawer" component="a" href="#">
        <img src={logo} alt="GoTour" width={"60px"} height={"20px"} />
      </Box>
      <Divider />
      <List>
        <Box>
          <Button
            href="#home"
            sx={{
              color: "#bbb9b9",
              fontSize: "19px",
              width: "100%",
              display: "block",
              borderBottom: "1px solid #777",
              textAlign: "center",
              paddingBottom: "15px",
              paddingTop: "10px",

              "&:hover": {
                color: "#777",
              },
            }}
          >
            {pages[0]}
          </Button>
          <Button
            href="#about"
            sx={{
              color: "#bbb9b9",
              fontSize: "19px",
              width: "100%",
              display: "block",
              borderBottom: "1px solid #777",
              textAlign: "center",
              paddingBottom: "15px",
              paddingTop: "10px",
              "&:hover": {
                color: "#777",
              },
            }}
          >
            {pages[1]}
          </Button>
          <Button
            href="#placesReview"
            sx={{
              color: "#bbb9b9",
              fontSize: "19px",
              width: "100%",
              display: "block",
              borderBottom: "1px solid #777",
              textAlign: "center",
              paddingBottom: "15px",
              paddingTop: "10px",
              "&:hover": {
                color: "#777",
              },
            }}
          >
            {pages[2]}
          </Button>
          <Button
            href="#services"
            sx={{
              color: "#bbb9b9",
              fontSize: "19px",
              width: "100%",
              display: "block",
              borderBottom: "1px solid #777",
              textAlign: "center",
              paddingBottom: "15px",
              paddingTop: "10px",
              "&:hover": {
                color: "#777",
              },
            }}
          >
            {pages[3]}
          </Button>
          <Button
            href="#tours"
            sx={{
              color: "#bbb9b9",
              fontSize: "19px",
              width: "100%",
              display: "block",
              borderBottom: "1px solid #777",
              textAlign: "center",
              paddingBottom: "15px",
              paddingTop: "10px",
              "&:hover": {
                color: "#777",
              },
            }}
          >
            {pages[4]}
          </Button>
          <Button
            href="#PopularDestination"
            sx={{
              color: "#bbb9b9",
              fontSize: "19px",
              width: "100%",
              display: "block",
              borderBottom: "1px solid #777",
              textAlign: "center",
              paddingBottom: "15px",
              paddingTop: "10px",
              "&:hover": {
                color: "#777",
              },
            }}
          >
            {pages[5]}
          </Button>
          <Button
            href="#team"
            sx={{
              color: "#bbb9b9",
              fontSize: "19px",
              width: "100%",
              display: "block",
              borderBottom: "1px solid #777",
              textAlign: "center",
              paddingBottom: "15px",
              paddingTop: "10px",
              "&:hover": {
                color: "#777",
              },
            }}
          >
            {pages[6]}
          </Button>
          <Button
            href="#footer"
            sx={{
              color: "#bbb9b9",
              fontSize: "19px",
              width: "100%",
              display: "block",
              borderBottom: "1px solid #777",
              textAlign: "center",
              paddingBottom: "15px",
              paddingTop: "10px",
              "&:hover": {
                color: "#777",
              },
            }}
          >
            {pages[7]}
          </Button>
        </Box>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <CssBaseline />
      <Container>
        <AppBar
          component="nav"
          sx={{
            paddingRight: "5%",
            paddingLeft: "5%",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "100px",
          }}
        >
          <Toolbar
            sx={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "200px",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Box className="nav-header" component="a" href="#">
              <img src={logo} alt="GoTour" width={"60px"} height={"20px"} />
            </Box>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button
                className="navbar-link"
                href="#home"
                sx={{
                  color: "#fff",
                }}
              >
                {pages[0]}
              </Button>
              <Button
                className="navbar-link"
                href="#about"
                sx={{
                  color: "#fff",
                }}
              >
                {pages[1]}
              </Button>
              <Button
                className="navbar-link"
                href="#placesReview"
                sx={{
                  color: "#fff",
                  paddingRight: "30px",
                }}
              >
                {pages[2]}
              </Button>
              <Button
                className="navbar-link"
                href="#services"
                sx={{
                  color: "#fff",
                  paddingRight: "30px",
                }}
              >
                {pages[3]}
              </Button>
              <Button
                className="navbar-link"
                href="#tours"
                sx={{
                  color: "#fff",
                  paddingRight: "30px",
                }}
              >
                {pages[4]}
              </Button>
              <Button
                className="navbar-link"
                href="#PopularDestination"
                sx={{
                  color: "#fff",
                  paddingRight: "30px",
                }}
              >
                {pages[5]}
              </Button>
              <Button
                className="navbar-link"
                href="#team"
                sx={{
                  color: "#fff",
                  paddingRight: "30px",
                }}
              >
                {pages[6]}
              </Button>
              <Button
                className="navbar-link"
                href="#footer"
                sx={{
                  color: "#fff",
                  paddingRight: "30px",
                }}
              >
                {pages[7]}
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Container>

      <Container>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Container>

      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
export default Navbar;
