import { createTheme } from '@mui/material';

export const themeColors = {
  light: {
    mode: 'light' as const,
    primary: { main: '#ff0000' },
    secondary: { main: '#00ff00' },
    background: {
      default: '#ffff99',
      paper: '#ffffff'
    },
    text: {
      primary: '#0000ff',
      secondary: '#800080'
    }
  },
  dark: {
    mode: 'dark' as const,
    primary: { main: '#00ffff' },
    secondary: { main: '#ff00ff' },
    background: {
      default: '#222222',
      paper: '#000000'
    },
    text: {
      primary: '#ffff00',
      secondary: '#00ff00'
    }
  }
};
export const muiTheme = createTheme({
  cssVariables: { colorSchemeSelector: 'data-mui-color-scheme' },
  colorSchemes: {
    light: {
      palette: themeColors.light
    },
    dark: {
      palette: themeColors.dark
    }
  }
});
