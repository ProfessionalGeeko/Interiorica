import { Box, Divider, Stack, AppBar, Button, IconButton, Menu, MenuItem, Typography, Toolbar, Icon } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
// import logo from './Logo.jpg'
import logo from './Logo.png'
import whiteLogo from '../../assets/images/whiteLogo.png';
import blackLogo from '../../assets/images/blackLogo.png';
import {useEffect, useState} from "react";
import useMediaQuery from "@mui/material/useMediaQuery";


const pages = ['Home', 'Projects', 'Services', 'Process', 'Workshop', 'About'];

const Navbar = (props) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [currentPage, setCurrentPage] = useState('');

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    if(!anchorElNav)
      window.location.href = `#${currentPage}`
  }, [anchorElNav])


  return (
    <Box
      sx={{ flexGrow: 1, backgroundColor: "rgb(30,32,37)" }}
      paddingX={8}
      paddingY={1}
    >
      <Stack
        direction="column"
        spacing={2}
        divider={<Divider orientation="horizontal" flexItem />}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          paddingX={1}
          marginY={2}
        >
          <IconButton sx={{height: "6rem", width: "10rem"}} component="div" edge="start" color="inherit" aria-label="logo">
             <img style={{objectFit: "contain", width: "100%", height: "100%"}} src={whiteLogo} alt="Logo" />
          </IconButton>
          {/*<Typography component="p" textAlign="center" sx={{whiteSpace: "pre-wrap;"}}>*/}
          {/*  SINGH<br/>INTERIOR*/}
          {/*</Typography>*/}
          <Button href='tel:8591807632' variant="outlined">Contact Us</Button>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          paddingX={1}
        >
          <AppBar position="static" enableColorOnDark style={{backgroundImage: "none", backgroundColor: "rgb(30,32,37)"}} elevation={0}>
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon color="primary" />
                </IconButton>
                <Menu
                    disableScrollLock={true}
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={() => handleCloseNavMenu('Home')}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                      <MenuItem key={page} componenet="a" href={`#${page}`} onClick={() => {
                        handleCloseNavMenu(page)
                        setCurrentPage(page)
                      }
                      }>
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    href={`#${page}`}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </AppBar>
        </Stack>
      </Stack>
    </Box>
  );
};
export default Navbar;
