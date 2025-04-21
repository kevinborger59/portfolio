import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, Link, Box } from '@mui/material';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const ExternalArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const devToUrl = encodeURIComponent('https://dev.to/feed');
        
        const devToResponse = await axios.get(`https://api.rss2json.com/v1/api.json?rss_url=${devToUrl}`);

        const combinedArticles = devToResponse.data.items.slice(0, 6);
        // Mettre à jour l'état avec les articles combinés et les mettre à jour à la fi
        setArticles(combinedArticles);
      } catch (error) {
        console.error('Error fetching RSS feeds:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography>{t('articles.loading')}</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography 
        variant="h2" 
        component="h2" 
        gutterBottom 
        align="center"
        sx={{ mb: 6 }}
      >
        {t('articles.title')}
      </Typography>
      <Grid container spacing={4}>
        {articles.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                }
              }}
            >
              {article.thumbnail && (
                <Box
                  sx={{
                    pt: '56.25%',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <Box
                    component="img"
                    src={article.thumbnail}
                    alt={article.title}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </Box>
              )}
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                <Typography 
                  variant="h6" 
                  component="h3" 
                  gutterBottom
                  sx={{
                    minHeight: '2.5em',
                    lineHeight: 1.2,
                    mb: 2
                  }}
                >
                  {article.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  Par {article.author}
                </Typography>
                <Box sx={{ mt: 'auto' }}>
                  <Link 
                    href={article.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    color="primary"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      textDecoration: 'none',
                      '&:hover': {
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    {t('articles.read')} →
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ExternalArticles;