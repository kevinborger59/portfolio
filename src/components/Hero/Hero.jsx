import React from 'react';
import { Box, Container, Typography, Button, Grid, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const { ref: ref1, inView: inView1 } = useInView();
  const { ref: ref2, inView: inView2 } = useInView();

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: theme.palette.background.hero,
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                  ref={ref1}
                  animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                  transition={{ duration: 0.6 }}
                >
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
                    sx={{
                      fontWeight: 'bold',
                      fontSize: { xs: '2.5rem', md: '3rem' },
                      color: theme.palette.text.primary,
                    }}
                  >
                    {t('hero.title')}
                  </Typography>
                </Box>

                <Typography
                  variant="h4"
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
                  onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                  sx={{
                    backgroundColor: theme.palette.background.paper,
                    color: theme.palette.primary.main,
                    '&:hover': {
                      backgroundColor: theme.palette.background.default,
                    },
                  }}
                >
                  {t('hero.cta')}
                </Button>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
              <motion.div
                ref={ref2}
                animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                transition={{ duration: 0.6 }}
              >
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
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;
