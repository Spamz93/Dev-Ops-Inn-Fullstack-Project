import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import RoomCard, { Room } from '../../components/RoomCard/RoomCard';
import { useLoaderData } from 'react-router-dom';

const RoomsPage: React.FC = () => {
  // useLoaderData returns the data loaded by roomsLoader
  const rooms = useLoaderData() as Room[];

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        Our Rooms
      </Typography>
      <Grid container spacing={4}>
        {rooms.map((room) => (
          <Grid item key={room.id} xs={12} sm={6} md={4}>
            <RoomCard room={room} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default RoomsPage;
