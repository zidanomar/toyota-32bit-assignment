import { createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          color: '#3F4C54',
          backgroundColor: '#F5F5F9',
        },
      },
    },
  },
  palette: {
    common: {
      black: '#3F4C54',
    },
    primary: {
      main: '#91B7C2',
      light: '#ECF7FA',
    },
    secondary: { main: '#FEAF66' },
    surface: '#545F6E',
    gray: '#A6AEBA',
    bg: '#F5F5F9',
  },
  typography: {
    fontFamily: ['Nunito', 'sans-serif'].join(','),
    fontSize: 16,
  },
});

export default theme;
