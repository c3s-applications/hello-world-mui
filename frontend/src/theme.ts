import { createTheme } from '@mui/material/styles';
import { blue, deepOrange, green, purple, red } from '@mui/material/colors';

import { PaletteColor, PaletteColorOptions } from '@mui/material/styles/createPalette';
import { responsiveFontSizes } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: PaletteColor;
    navigation: PaletteColor;
    link: PaletteColor;
    accent: PaletteColor;
  }

  interface PaletteOptions {
    tertiary: PaletteColorOptions;
    navigation?: PaletteColorOptions;
    link?: PaletteColorOptions;
    accent?: PaletteColorOptions;
  }

  interface ThemeOptions {
    palette?: PaletteOptions;
  }

  interface Theme {
    palette: Palette;
  }
}

const theme = createTheme({
  palette: {
    background: {
      default: '#ffffff'
    },
    primary: {
      main: 'rgb(143, 33, 33)',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#f1f1f1',
      contrastText: '#ffffff'
    },
    tertiary: {
      main: '#232323',
      contrastText: '#ffffff'
    },
    navigation: {
      main: 'rgb(143, 33, 33)',
      contrastText: '#ffffff'
    },
    link: {
      main: '#008099'
    },
    info: {
      main: blue[700],
      contrastText: '#ffffff'
    },
    success: {
      main: green[700],
      contrastText: '#ffffff'
    },
    warning: {
      main: deepOrange[700],
      contrastText: '#ffffff'
    },
    error: {
      main: red[700],
      contrastText: '#ffffff'
    },
    accent: {
      main: purple[700],
      contrastText: '#ffffff'
    }
  },
  typography: {
    fontFamily: '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontSize: 14,
    h1: {
      fontSize: '2.4rem',
      fontWeight: 300
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 300
    },
    h3: {
      fontSize: '1.825rem',
      fontWeight: 300
    },
    h4: {
      fontSize: '1.3rem',
      fontWeight: 300
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 300
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 300,
      textTransform: 'uppercase'
    }
  }
});

export default responsiveFontSizes(theme);
