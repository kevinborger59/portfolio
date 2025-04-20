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
            color: theme.palette.secondary.main
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
      light: '#8B5CF6', // Violet tendance
      main: '#A78BFA',
      dark: '#7C3AED',
    },
    secondary: {
      main: '#9e07b6', // Rose tendance
      light: '#F472B6',
      dark: '#DB2777',
    },
    background: {
      default: '#F9FAFB',
      paper: '#FFFFFF',
      hero: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)', // Gradient violet-rose
      section: '#F3F4F6',
    },
    text: {
      primary: '#111827',
      secondary: '#4B5563',
    },
  },
});

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: '#A78BFA',
      light: '#C4B5FD',
      dark: '#8B5CF6',
    },
    secondary: {
      main: '#F472B6',
      light: '#F9A8D4',
      dark: '#EC4899',
    },
    background: {
      default: '#111827',
      paper: '#1F2937',
      hero: 'linear-gradient(135deg, #6D28D9 0%, #BE185D 100%)', // Gradient violet-rose plus sombre
      section: '#1F2937',
    },
    text: {
      primary: '#F9FAFB',
      secondary: '#D1D5DB',
    },
  },
});

export { lightTheme, darkTheme };