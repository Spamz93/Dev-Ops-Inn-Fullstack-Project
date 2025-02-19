import { Container, Typography } from '@mui/material';
import { JSX } from '@emotion/react/jsx-runtime';

export default function ContactPage(): JSX.Element {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1">
        Reach us at ....
      </Typography>
    </Container>
  );
}
