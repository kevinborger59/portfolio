import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AppBar, Toolbar, Button, Box, Typography, IconButton, Drawer, List, ListItem, useScrollTrigger  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const Header = ({ onLanguageChange, onContactOpen }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslation();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });


  const menuItems = [
    { key: 'about', label: t('menu.about') },
    { key: 'services', label: t('menu.services') },
    { key: 'cv', label: t('menu.cv') },
    { key: 'contact', label: t('menu.contact') }
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleContactClick = () => {
    onContactOpen();
    setMobileOpen(false);
  };

  const handleMenuClick = (key) => {
    if (key === 'contact') {
      handleContactClick();
    } else if (key === 'about') {
      document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    } else if (key === 'cv') {
      document.getElementById('cv').scrollIntoView({ behavior: 'smooth' });
    } else if (key === 'services') {
      document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <AppBar position="fixed" color={trigger ? 'primary' : 'transparent'} elevation={trigger ? 4 : 0}>
        <Toolbar>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: 1.2,
              fontSize: { xs: '1.2rem', sm: '1.5rem' },
              fontFamily: "'Montserrat', sans-serif",
              '&:hover': {
                transform: 'scale(1.02)',
                transition: 'transform 0.3s ease'
              }
            }}
          >
            <span style={{ color: '#21CBF3' }}>Kevin</span> Borger
          </Typography>
          <LanguageSelector onLanguageChange={onLanguageChange} />
          {/* Hide menu items on mobile */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            {menuItems.map((item) => (
              <Button 
                key={item.key} 
                color="inherit"
                onClick={() => handleMenuClick(item.key)}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          {/* Show menu icon only on mobile */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: 'block', sm: 'none' }, ml: 1 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{ display: { xs: 'block', sm: 'none' } }}
        >
          <List sx={{ width: 200, pt: 2 }}>
            {menuItems.map((item) => (
              <ListItem 
                button 
                key={item.key}
                onClick={() => handleMenuClick(item.key)}
              >
                <Typography>{item.label}</Typography>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </AppBar>
      {/* Remove the Contact component from here since it's now in App.js */}
    </>
  );
};

export default Header;