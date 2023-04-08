import { Box, Divider, Stack, AppBar, Button, IconButton, Menu, MenuItem, Typography, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
// import logo from './Logo.jpg'
// import logo from './Logo.png'
import { useState } from "react";

const pages = ['Home', 'Projects', 'Services', 'Process', 'Workshop', 'About'];

const Navbar = (props) => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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
          <IconButton size="large" edge="start" color="inherit" aria-label="logo">
            {/* <img src={logo} alt="Logo" /> */}
          </IconButton>
          <Button href='#contact' variant="outlined">Contact Us</Button>
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
                  <MenuIcon />
                </IconButton>
                <Menu
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
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                      <div key={page} href={`#${page}`}>
                        <MenuItem key={page}>
                          <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                      </div>
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
