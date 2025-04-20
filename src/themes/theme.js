import { createTheme } from '@mui/material/styles';

const baseTheme = {
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
      variants: [
        {
          props: { variant: 'menuItem' },
          style: ({ theme }) => ({
            color: theme.palette.text.primary,
            '&:hover': {
              backgroundColor: 'rgba(139, 92, 246, 0.1)'
            }
          })
        }
      ]
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(10px)',
        }
      },
      variants: [
        {
          props: { color: 'transparent' },
          style: ({ theme }) => ({
            background: theme.palette.mode === 'dark'
              ? 'rgba(139, 92, 246, 0.1)'
              : 'rgba(255, 255, 255, 0.1)',
          }),
        },
      ],
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          justifyContent: 'space-between',
        }
      }
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'logo' },
          style: {
            flexGrow: 1,
            fontWeight: 700,
            letterSpacing: 1.2,
            fontSize: { xs: '1.2rem', sm: '1.5rem' },
            fontFamily: "'Montserrat', sans-serif",
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.02)',
            }
          }
        },
        {
          props: { variant: 'logoFirst' },
          style: ({ theme }) => ({
            color: theme.palette.secondary.dark
          })
        },
        {
          props: { variant: 'logoLast' },
          style: ({ theme }) => ({
            color: theme.palette.text.primary
          })
        }
      ]
    },
    MuiDrawer: {
      styleOverrides: {
        paper: ({ theme }) => ({
          backgroundColor: theme.palette.background.default,
          width: 200,
          padding: theme.spacing(2, 0)
        })
      }
    }
  }
};

const lightTheme = createTheme({
    ...baseTheme,
    palette: {
      mode: 'light',
      primary: {
        light: '#D6E4FF',
        main: '#9DB2D9',
        dark: '#6C83B5',
      },
      secondary: {
        light: '#FBEFF4',
        main: '#F4A9C4',
        dark: '#B83265',
      },
      background: {
        default: '#F9FAFB',
        paper: '#FFFFFF',
        hero: 'linear-gradient(135deg, #D8E3F2 0%, #AFCBFF 100%)', // Nouveau gradient : bleu lavande
        section: '#F3F4F6',
        button: '#D8E3F2'
      },
      text: {
        primary: '#1E1E1E',
        secondary: '#4B5563',
      },
    },
  });

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#9DB2D9',
      light: '#C4D3F2',
      dark: '#6C83B5',
    },
    secondary: {
      main: '#F4A9C4',
      light: '#FBEFF4',
      dark: '#B83265',
    },
    background: {
      default: '#0F172A',
      paper: '#1E293B',
      hero: 'linear-gradient(135deg, #384375 0%, #7A3E65 100%)', // Violet-gris vers rose foncé
      section: '#1C2433',
    },
    text: {
      primary: '#F3F4F6',
      secondary: '#CBD5E1'
    },
  },
});

export { lightTheme, darkTheme };