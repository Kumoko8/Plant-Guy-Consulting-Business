import { createTheme } from '@mui/material/styles';
import { green, red} from '@mui/material/colors';

const rawTheme = createTheme({
  components: {
    MuiToolbar: {
      root: {
        backgroundColor: 'red', // Your desired background color
        color: 'white',             // Your desired text color
      },
    },
  },
  palette: {
    primary: {
      light: 'rgb(0 32 35)',
      main: 'rgb(255, 135, 165)',
    },
    secondary: {
      light: '#000000',
      main: '#ffffff',
    },
    warning: {
      main: 'rgb(253 224 71)',
    },
    error: {
      light: red[50],
      main: red[500],
    },
    success: {
      light: green[50],
      main: green[500],
    },
  },
  typography: {
    fontFamily: "'Titan One', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 700, // Roboto Condensed
  },
});

const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: "'Titan One', sans-serif",
  textTransform: 'uppercase',
};

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: rawTheme.palette.common.white,
      placeholder: red,
    },
  },
  typography: {
    ...rawTheme.typography,
    fontHeader,
    h1: {
      ...rawTheme.typography.h1,
      ...fontHeader,
      letterSpacing: 0,
      fontSize: 60,
    },
    h2: {
      ...rawTheme.typography.h2,
      ...fontHeader,
      fontSize: 40,
    },
    h3: {
      ...rawTheme.typography.h3,
      ...fontHeader,
      fontSize: 30,
    },
    h4: {
      ...rawTheme.typography.h4,
      ...fontHeader,
      fontSize: 25,
    },
    h5: {
      ...rawTheme.typography.h5,
      ...fontHeader,
      fontSize: 20,
      fontWeight: rawTheme.typography.fontWeightMedium,
    },
    h6: {
      ...rawTheme.typography.h6,
      fontSize: 20,
      fontFamily: 'Roboto'
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: 18,
    },
    body1: {
      ...rawTheme.typography.body2,
      fontWeight: rawTheme.typography.fontWeightMedium,
      fontSize: 16,
      fontFamily: 'Lexend'
    },
    body2: {
      ...rawTheme.typography.body1,
      fontSize: 14,
    },
  },
};

export default theme;
