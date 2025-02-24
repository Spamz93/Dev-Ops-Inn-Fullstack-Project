// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode"

// Define the expected shape of the decoded token
interface DecodedToken {
  userId: string;
  name: string;
  email: string;
  exp: number;
  iat: number;
}

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState<DecodedToken | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded: DecodedToken = jwtDecode(token);
        setUser(decoded);
      } catch (error) {
        console.error('Invalid token', error);
        localStorage.removeItem('token');
      }
    }
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    handleMenuClose();
    navigate('/');
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        The DevOps Inn
      </Typography>
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/" sx={{ textAlign: 'center' }}>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/rooms" sx={{ textAlign: 'center' }}>
            <ListItemText primary="Rooms" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/contact" sx={{ textAlign: 'center' }}>
            <ListItemText primary="Contact" />
          </ListItemButton>
        </ListItem>
        {!user ? (
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/login" sx={{ textAlign: 'center' }}>
              <ListItemText primary="Login" />
            </ListItemButton>
          </ListItem>
        ) : (
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout} sx={{ textAlign: 'center' }}>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          {/*hamburger menu */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              The DevOps Inn
            </Link>
          </Typography>

          {/* Desktop navigation - inline nav items */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/rooms">
              Rooms
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              Contact
            </Button>
            {!user ? (
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
            ) : (
              <>
                <Button color="inherit" onClick={handleMenuOpen}>
                  {user.name}
                </Button>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                >
                  <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
