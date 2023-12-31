import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Link from "next/link";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import Drawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight"; // Import Drawer for the side menu
import { Divider, Stack } from "@mui/material";
import ProjectHover from "@/pages/projects/ProjectHover";
import CoursesHover from "@/pages/courses/CoursesHover";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

  const handleDrawerClose = () => {
    setMenuOpen(false);
  };

  const handleSubMenuClose = () => {
    setSubMenuOpen(false);
  };

  return (
    <>
      <AppBar
        position=""
        sx={{
          background: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
          color: "primary.dark",
          boxShadow: "none",
        }}
      >
        <Grid container spacing={4} justifyContent="space-between" alignItems="center">
          <Grid item  lg={2} xl={2}>
           
            <Link href="/" component="div">
              <Image src="/logo.png" alt="IEACT logo" width={160} height={160} />
            </Link>
           
          </Grid>

          <Hidden smDown mdDown>
            <Grid item   lg={2} xl={2} >
             <Typography variant="h6">INDRA EDUCATIONAL AND CHARITABLE TRUST </Typography>
             </Grid></Hidden>
          {/* <Hidden mdUp>
          <Grid item>
             <Typography variant="h3" sx={{p:1}}> </Typography>
             </Grid>
</Hidden> */}
          <Grid item >
            <Toolbar>
              <Hidden mdUp>
                {/* Show menu icon and open side menu on small screens */}
                <Typography variant="h3" sx={{p:1}}> </Typography>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={toggleMenu}
                >
             <MenuIcon />
                </IconButton>
                <Drawer anchor="left" open={menuOpen} onClose={toggleMenu}>
                  {/* Side menu items for small screens */}
                  <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                      {" "}
                      <ChevronLeftIcon />
                      {/* // {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon/>} */}
                    </IconButton>
                  </DrawerHeader>
                  <Divider />
                  <div
                    style={{
                      width: "250px",
                    }}
                  >
                    <Stack direction={"column"}>
                      <Link href="/">
                        <Button onClick={toggleMenu}>Home</Button>
                      </Link>
                      <Divider/>

                      <Link href="/aboutus">
                        <Button onClick={toggleMenu}>About us</Button>
                      </Link> <Divider/>
                      <Button onClick={toggleSubMenu} sx={{justifyContent:'left'}}>Projects</Button>
                      {subMenuOpen && (
                        <div style={{ paddingLeft: '20px' }}>
                          <Stack direction={"column"}>
                          <Link href="/projects/nsdc/NSDC">
                            <Button onClick={handleSubMenuClose}>NSDC</Button>
                          </Link>
                          <Link href="/projects/tnsdc/TNSDC">
                            <Button onClick={handleSubMenuClose}> TNSTC</Button>
                          </Link>
                          <Link href="/projects/moma/MoMA">
                            <Button onClick={handleSubMenuClose}>Day-NULM</Button>
                          </Link>
                          <Link href="/projects/ddugky/DDU">
                            <Button onClick={handleSubMenuClose}> DDU-GKY</Button>
                          </Link>  
                          <Link href="/projects/moma/MoMA">
                            <Button onClick={handleSubMenuClose}>MoMA</Button>
                          </Link>  </Stack>              
                        </div>)} <Divider/>
                      <Button onClick={toggleSubMenu} sx={{justifyContent:'left'}}>Courses</Button>
                      {subMenuOpen && (
                        <div style={{ paddingLeft: '20px' }}>
                          <Stack direction={"column"}>
                          <Link href="/courses/ithelp/Ithelp">
                            <Button onClick={handleSubMenuClose}>IT Help Assistant</Button>
                          </Link>
                          <Link href="/courses/assistantElect/Electrician">
                            <Button onClick={handleSubMenuClose}>AssitantElectrician</Button>
                          </Link>
                          <Link href="/courses/generalDuty/Generalduty">
                            <Button onClick={handleSubMenuClose}>Generalduty Assitant</Button>
                          </Link>
                          <Link href="/courses/handset/HandsetRepair">
                            <Button onClick={handleSubMenuClose}>Handset Repair</Button>
                          </Link>  </Stack>               
                        </div>)} <Divider/>
                      <Link href="/aboutus">
                        <Button onClick={toggleMenu}>Affiliation-PIA</Button>{" "}
                      </Link> <Divider/>
                      <Link href="/contactform/contact">
                        <Button onClick={toggleMenu}>Contact Us</Button>
                      </Link> <Divider/>
                    </Stack>
                  </div>
                </Drawer>
              </Hidden>

              <Hidden smDown mdDown>
                <Stack direction={"row"} spacing={2}>
                  <Link href="/">
                    <Button
                      sx={{
                        fontSize: "1.2rem",
                        color: "warning.dark",
                        "&:hover": { color: "secondary.dark" },
                      }}
                    >
                      Home
                    </Button>
                  </Link>

                  <Link href="/aboutus">
                    <Button
                      sx={{
                        fontSize: "1.2rem",
                        color: "warning.dark",
                        "&:hover": { color: "secondary.dark" },
                      }}
                    >
                      About-Us
                    </Button>
                  </Link>
                  <ProjectHover />
                  <CoursesHover />
                  <Button
                    sx={{
                      fontSize: "1.2rem",
                      color: "warning.dark",
                      "&:hover": { color: "secondary.dark" },
                    }}
                  >
                    Affiliation-PIA
                  </Button>

                  <Link href="/contactform/contact">
                    <Button
                      sx={{
                        fontSize: "1.2rem",
                        color: "warning.dark",
                        "&:hover": { color: "secondary.dark" },
                      }}
                    >
                      Contact-Us
                    </Button>
                  </Link>
                </Stack>
              </Hidden>
            </Toolbar>
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
}
