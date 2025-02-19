import { JSX } from 'react';
import { Container, Typography } from '@mui/material';

export default function LoginPage(): JSX.Element {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <Typography variant="body1">
        Implement your login form here.
      </Typography>
    </Container>
  );
}
