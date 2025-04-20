import React from 'react';
import { Box, Container, Typography, Paper, Grid, Divider, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';

const CV = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box id="cv" sx={{ 
      py: 8, 
      backgroundColor: theme.palette.background.section 
    }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" sx={{ mb: 4, textAlign: 'center' }}>
            {t('cv.title')}
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={7}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
              >
                <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
  <WorkIcon sx={{ mr: 2, color: 'primary.main', fontSize: 30 }} />
  <Typography variant="h4">{t('cv.experience')}</Typography>
</Box>
<Divider sx={{ mb: 4 }} />

<Box sx={{ mb: 5 }}>
  <Typography variant="h5" sx={{ color: 'primary.main', mb: 1 }}>{t('cv.skills.webProjectManagement')}</Typography>
  <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
    • {t('cv.skills.corporateWebsite')}<br />
    • {t('cv.skills.ecommerce')}<br />
    • {t('cv.skills.mobileApps')}<br />
    • {t('cv.skills.restApi')}<br />
    • WordPress, Symfony, PHP
  </Typography>
</Box>

<Box sx={{ mb: 5 }}>
  <Typography variant="h5" sx={{ color: 'primary.main', mb: 1 }}>{t('cv.skills.technicalArchitecture')}</Typography>
  <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
    • {t('cv.skills.backendArchitecture')}<br />
    • Elasticsearch, RabbitMQ<br />
    • {t('cv.skills.apiDesign')}<br />
    • {t('cv.skills.databaseOptimization')}
  </Typography>
</Box>

<Box sx={{ mb: 5 }}>
  <Typography variant="h5" sx={{ color: 'primary.main', mb: 1 }}>{t('cv.skills.projectLeadership')}</Typography>
  <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
    • {t('cv.skills.teamManagement')}<br />
    • {t('cv.skills.technicalPlanning')}<br />
    • {t('cv.skills.clientCommunication')}<br />
    • {t('cv.skills.agileMethodology')}
  </Typography>
</Box>

<Box sx={{ mb: 5 }}>
  <Typography variant="h5" sx={{ color: 'primary.main', mb: 1 }}>{t('cv.skills.webDevelopment')}</Typography>
  <Typography variant="body1" sx={{ mb: 2, color: 'text.secondary' }}>
    • React.js, AngularJS<br />
    • PHP, Symfony, WordPress<br />
    • REST API, GraphQL<br />
    • {t('cv.skills.responsiveDesign')}
  </Typography>
</Box>
              </Paper>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={5}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <CodeIcon sx={{ mr: 2, color: 'primary.main', fontSize: 30 }} />
                  <Typography variant="h4">{t('cv.skill')}</Typography>
                </Box>
                <Divider sx={{ mb: 4 }} />
                
                <Box sx={{ mb: 4 }}>
                  <Typography variant="h5" sx={{ color: 'primary.main', mb: 2 }}>{t('cv.backEnd')}</Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>• PHP, Symfony Framework</Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>• REST API Development</Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>• WordPress, CodeIgniter</Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>• Python</Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>• SQL, GraphQL</Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                  <Typography variant="h5" sx={{ color: 'primary.main', mb: 2 }}>{t('cv.frontEnd')}</Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>• React.js, React Native</Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>• JavaScript, jQuery</Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>• AngularJS</Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>• CSS Grid Layout</Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                  <Typography variant="h5" sx={{ color: 'primary.main', mb: 2 }}>{t('cv.infrastructure')}</Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>• Elasticsearch</Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>• RabbitMQ</Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>• Postman API Testing</Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>• Data Analytics</Typography>
                </Box>

                <Box sx={{ mb: 4 }}>
                  <Typography variant="h5" sx={{ color: 'primary.main', mb: 2 }}>{t('cv.professional')}</Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>• {t('cv.skills.projectManagement')}</Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>• {t('cv.skills.projectPlanning')}</Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>• {t('cv.skills.english')}</Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>• {t('cv.skills.techLead')}</Typography>
                </Box>
              </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CV;
