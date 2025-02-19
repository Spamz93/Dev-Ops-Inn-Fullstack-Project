import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { Toolbar, Box } from '@mui/material';
import { JSX } from '@emotion/react/jsx-runtime';

export default function RootLayout(): JSX.Element {
  return (
    <>
      <Navbar />
      <Toolbar />
      <Box sx={{ p: 2 }}>
        <Outlet />
      </Box>
    </>
  );
}
