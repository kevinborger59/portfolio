import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import { useTranslation } from 'react-i18next';
import './i18n';
import CV from './components/CV/CV';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';
import About from './components/About/About';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196F3',
    },
    secondary: {
      main: '#21CBF3',
    },
  },
});

function App() {
  const { i18n } = useTranslation();
  const [contactOpen, setContactOpen] = useState(false);

  const handleLanguageChange = (newLang) => {
    i18n.changeLanguage(newLang);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header onLanguageChange={handleLanguageChange} onContactOpen={() => setContactOpen(true)} />
      <Hero />
      <About />
      <CV />
      <Services onContactClick={() => setContactOpen(true)} />
      <Contact open={contactOpen} onClose={() => setContactOpen(false)} />
    </ThemeProvider>
  );
}

export default App;
