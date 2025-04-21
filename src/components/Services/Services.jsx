import React from 'react';
import { Box, Container, Typography, Paper, Grid, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ExtensionIcon from '@mui/icons-material/Extension';
import WebIcon from '@mui/icons-material/Web';
import BuildIcon from '@mui/icons-material/Build';
import TimerIcon from '@mui/icons-material/Timer';
import StorefrontIcon from '@mui/icons-material/Storefront';
import DomainIcon from '@mui/icons-material/Domain';
import LanguageIcon from '@mui/icons-material/Language';

const Services = ({ onContactClick }) => {
  const theme = useTheme();
  const { t } = useTranslation();

  const serviceCards = [
    {
      icon: <LanguageIcon sx={{ fontSize: 40 }} />,
      title: t('services.showcase.title'),
      description: t('services.showcase.description'),
    },
    {
      icon: <StorefrontIcon sx={{ fontSize: 40 }} />,
      title: t('services.ecommerce.title'),
      description: t('services.ecommerce.description'),
    },
    {
      icon: <DomainIcon sx={{ fontSize: 40 }} />,
      title: t('services.domain.title'),
      description: t('services.domain.description'),
    },
    {
      icon: <ExtensionIcon sx={{ fontSize: 40 }} />,
      title: t('services.module.title'),
      description: t('services.module.description'),
    },
    {
      icon: <WebIcon sx={{ fontSize: 40 }} />,
      title: t('services.creation.title'),
      description: t('services.creation.description'),
    },
    {
      icon: <BuildIcon sx={{ fontSize: 40 }} />,
      title: t('services.maintenance.title'),
      description: t('services.maintenance.description'),
    },
  ];

  return (
    <Box id="services" sx={{ 
      py: 8, 
      backgroundColor: theme.palette.background.section,
      mt: 8 
    }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" sx={{ mb: 2, textAlign: 'center' }}>
            {t('services.title')}
          </Typography>
          <Typography variant="h5" sx={{ mb: 6, textAlign: 'center', color: 'text.secondary' }}>
            {t('services.subtitle')}
          </Typography>

          <Grid container spacing={4} sx={{ mb: 8 }}>
            {serviceCards.map((service, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ scale: 1.03 }}
                  style={{ height: '100%' }}
                >
                  <Paper
                    elevation={3}
                    sx={{
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                      },
                    }}
                  >
                    <Box sx={{ color: 'primary.main', mb: 2 }}>{service.icon}</Box>
                    <Typography variant="h5" sx={{ mb: 2 }}>{service.title}</Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ flexGrow: 1 }}>{service.description}</Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <Paper 
              elevation={3} 
              id="pricing"
              sx={{ 
                p: 4, 
                
                textAlign: 'center'
              }}
            >
              <TimerIcon sx={{ fontSize: 40, mb: 2 }} />
              <Typography variant="h4">
                {t('services.contact.title')}
              </Typography>
              <Typography variant="body1">
                {t('services.contact.description')}
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {t('services.pricing.approach')}
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  {t('services.pricing.details')}
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  {t('services.pricing.collaboration')}
                </Typography>
                <Typography variant="body1">
                  {t('services.pricing.adaptation')}
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ mb: 4 }}>
                {t('services.contact.response')}
              </Typography>
              <Button 
                variant="contained" 
                color="primary"
                size="large"
                onClick={onContactClick}
                sx={{ 
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  backgroundColor: theme.palette.background.default,
                  color: theme.palette.text.primary,
                  '&:hover': {
                    transform: 'scale(1.05)',
                    backgroundColor: theme.palette.background.button,
                    color: theme.palette.text.secondary,
                  }
                }}
              >
                {t('services.contact.cta')}
              </Button>
            </Paper>
          </motion.div>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Services;