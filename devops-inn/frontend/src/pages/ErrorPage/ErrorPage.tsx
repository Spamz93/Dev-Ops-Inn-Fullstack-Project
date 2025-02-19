import { JSX } from '@emotion/react/jsx-runtime';
import { Container, Typography } from '@mui/material';

export default function ErrorPage(): JSX.Element {
  return (
    <Container>
      <Typography variant="h4" color="error" gutterBottom>
        Oops! Page Not Found.
      </Typography>
      <Typography variant="body1">
        The page you're looking for does not exist.
      </Typography>
    </Container>
  );
}
