import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { motion } from 'framer-motion';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import { useTranslation } from 'react-i18next';
import './i18n';
import CV from './components/CV/CV';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import { lightTheme, darkTheme } from './themes/theme';


function App() {
  const { i18n } = useTranslation();
  const [contactOpen, setContactOpen] = useState(false);
  const [mode, setMode] = useState(() => localStorage.getItem('themeMode') || 'light');

  const theme = React.useMemo(
    () => mode === 'light' ? lightTheme : darkTheme,
    [mode]
  );

  useEffect(() => {
    localStorage.setItem('themeMode', mode);
  }, [mode]);

  const handleLanguageChange = (newLang) => {
    i18n.changeLanguage(newLang);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header 
        onLanguageChange={handleLanguageChange} 
        onContactOpen={() => setContactOpen(true)}
        onThemeToggle={() => setMode(mode === 'light' ? 'dark' : 'light')}
        themeMode={mode}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <CV />
        <Services onContactClick={() => setContactOpen(true)} />
        <Contact open={contactOpen} onClose={() => setContactOpen(false)} />
      </motion.div>
    </ThemeProvider>
  );
}

export default App;
