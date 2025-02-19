// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#6750A4' },
    secondary: { main: '#03DAC6' },
    background: { default: '#F7F7F7' },
  },
  typography: {
    fontFamily: ['Roboto', 'Poppins', 'Helvetica', 'Arial', 'sans-serif'].join(','),
  },
});

export default theme;
