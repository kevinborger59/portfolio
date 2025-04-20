import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Grid container spacing={4} alignItems="center">
            {/* Colonne gauche : contenu */}
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Box
                  component="img"
                  src="/logo.png"
                  alt="Logo"
                  sx={{
                    width: { xs: '60px', md: '80px' },
                    height: 'auto',
                  }}
                />
                <Typography
                  variant="h1"
                  color="white"
                  sx={{
                    fontWeight: 'bold',
                    fontSize: { xs: '2.5rem', md: '3rem' },
                  }}
                >
                  {t('hero.title')}
                </Typography>
              </Box>

              <Typography
                variant="h4"
                color="white"
                sx={{
                  mb: 2,
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  fontWeight: 300
                }}
              >
                {t('hero.subtitle')}
              </Typography>

              <Typography
                variant="h6"
                color="white"
                sx={{
                  mb: 4,
                  maxWidth: '600px',
                  opacity: 0.9,
                  lineHeight: 1.6,
                  fontSize: { xs: '1rem', md: '1.2rem' },
                }}
              >
                {t('hero.description')}
              </Typography>

              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: 'white',
                  color: '#2196F3',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.9)',
                  },
                }}
              >
                {t('hero.cta')}
              </Button>
            </Grid>

            {/* Colonne droite : image visible uniquement sur desktop */}
            <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box
                component="img"
                src="/ai-image.png"
                alt="Illustration"
                sx={{
                  width: '100%',
                  maxWidth: '500px',
                  maxHeight: '500px',
                  height: 'auto',
                  borderRadius: 4,
                  boxShadow: 3,
                  mx: 'auto',
                  display: 'block',
                }}
              />
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
