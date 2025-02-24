// src/pages/RoomDetail.tsx
import React from 'react';
import { Container, Typography, Card, CardMedia, CardContent, Button } from '@mui/material';
import { useLoaderData, Link } from 'react-router-dom';
import { Room } from '../../components/RoomCard/RoomCard';

const RoomDetailPage: React.FC = () => {
  // useLoaderData will return the room object loaded by the loader
  const room = useLoaderData() as Room;

  if (!room) {
    return (
      <Container sx={{ py: 5 }}>
        <Typography variant="body1">No room details available.</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        {room.name}
      </Typography>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={room.imageUrl}
          alt={room.name}
        />
        <CardContent>
          <Typography variant="body1">{room.description}</Typography>
          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            Price: ${room.price} / night
          </Typography>
        </CardContent>
      </Card>
      <Button
        variant="contained"
        component={Link}
        to={`/rooms/${room.id}/reserve`}
        sx={{ mt: 2 }}
      >
        Book Now
      </Button>
    </Container>
  );
};

export default RoomDetailPage;


