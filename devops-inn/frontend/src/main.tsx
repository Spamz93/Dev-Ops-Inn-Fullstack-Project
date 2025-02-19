// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';  // Global CSS resets if needed

// (Optional) If you use a custom MUI theme, wrap your app in ThemeProvider here:
// import { ThemeProvider } from '@mui/material/styles';
// import theme from './theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
      <App />
    {/* </ThemeProvider> */}
  </React.StrictMode>
);
