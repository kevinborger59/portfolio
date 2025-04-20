import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { GB, FR } from 'country-flag-icons/react/3x2';
import { useTranslation } from 'react-i18next';

const LanguageSelector = ({ onLanguageChange }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { i18n } = useTranslation();
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (lang) => {
    setAnchorEl(null);
    if (typeof lang === 'string') {
      onLanguageChange(lang);
    }
  };

  const CurrentFlag = i18n.language === 'en' ? GB : FR;

  return (
    <>
      <IconButton onClick={handleClick} color="inherit">
        <CurrentFlag style={{ width: '24px', height: '24px' }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleClose()}
      >
        <MenuItem onClick={() => handleClose('fr')}>
          <FR style={{ width: '24px', height: '24px', marginRight: '8px' }} />
          Français
        </MenuItem>
        <MenuItem onClick={() => handleClose('en')}>
          <GB style={{ width: '24px', height: '24px', marginRight: '8px' }} />
          English
        </MenuItem>
      </Menu>
    </>
  );
};

export default LanguageSelector;