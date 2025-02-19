import { JSX } from '@emotion/react/jsx-runtime';
import { Container, Typography } from '@mui/material';

export default function RoomsPage(): JSX.Element {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Our Rooms
      </Typography>
      <Typography variant="body1">
        This is where a list of available rooms will be displayed.
      </Typography>
    </Container>
  );
}
