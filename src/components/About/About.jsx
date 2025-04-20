import React from 'react';
import { Box, Container, Typography, Grid, Paper, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import CodeIcon from '@mui/icons-material/Code';
import HandshakeIcon from '@mui/icons-material/Handshake';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

const About = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  const values = [
    {
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      title: t('about.expertise.title'),
      description: t('about.expertise.description'),
    },
    {
      icon: <HandshakeIcon sx={{ fontSize: 40 }} />,
      title: t('about.collaboration.title'),
      description: t('about.collaboration.description'),
    },
    {
      icon: <LightbulbIcon sx={{ fontSize: 40 }} />,
      title: t('about.innovation.title'),
      description: t('about.innovation.description'),
    },
  ];

  return (
    <Box id="about" sx={{ 
      py: 8, 
      backgroundColor: theme.palette.background.paper 
    }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" sx={{ mb: 2, textAlign: 'center' }}>
            {t('about.title')}
          </Typography>
          <Typography variant="h5" sx={{ mb: 6, textAlign: 'center', color: 'text.secondary' }}>
            {t('about.subtitle')}
          </Typography>

          <Grid container spacing={4} sx={{ mb: 6 }}>
            {values.map((value, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  style={{ height: '100%' }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      backgroundColor: 'rgba(33, 150, 243, 0.02)',
                    }}
                  >
                    <Box sx={{ color: 'primary.main', mb: 2 }}>{value.icon}</Box>
                    <Typography variant="h5" sx={{ mb: 2 }}>{value.title}</Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ flexGrow: 1 }}>
                      {value.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Typography variant="body1" sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
            {t('about.description')}
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About;