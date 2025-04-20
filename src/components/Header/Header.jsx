import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AppBar, Toolbar, Button, Box, Typography, IconButton, Drawer, List, ListItem, useScrollTrigger } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const Header = ({ onLanguageChange, onContactOpen, onThemeToggle, themeMode }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslation();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });


  const menuItems = [
    { key: 'about', label: t('menu.about') },
    { key: 'services', label: t('menu.services') },
    { key: 'pricing', label: t('menu.pricing') },
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
    } else if (key === 'pricing') {
      document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
    } else if (key === 'services') {
      document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <AppBar 
      position="fixed" 
      color={trigger ? 'transparent' : 'primary'} 
      elevation={trigger ? 4 : 0}
    >
      <Toolbar>
        <Typography variant="logo">
          <Typography component="span" variant="logoFirst">Kevin</Typography>
          <Typography component="span" variant="logoLast"> Borger</Typography>
        </Typography>
        
        <LanguageSelector onLanguageChange={onLanguageChange} />
        
        <IconButton onClick={onThemeToggle} color="inherit">
          {themeMode === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>

        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
          {menuItems.map((item) => (
            <Button 
              key={item.key}
              variant="menuItem"
              onClick={() => handleMenuClick(item.key)}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          sx={{ display: { xs: 'block', sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        <List>
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
  );
};

export default Header;