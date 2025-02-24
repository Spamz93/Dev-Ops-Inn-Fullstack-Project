import React, { useState } from 'react';
import { 
  Card, 
  CardMedia, 
  CardContent, 
  CardActions, 
  Typography, 
  Button,
  Dialog,
  DialogContent
} from '@mui/material';
import { Link } from 'react-router-dom';

export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface RoomCardProps {
  room: Room;
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  const [open, setOpen] = useState(false);

  const handleImageClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="180"
          image={room.imageUrl}
          alt={room.name}
          onClick={handleImageClick}
          sx={{ cursor: 'pointer' }}
        />
        <CardContent>
          <Typography variant="h6" component="div">
            {room.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {room.description}
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 1 }}>
            ${room.price} / night
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" component={Link} to={`/rooms/${room.id}/reserve`} sx={{ m: 1 }}>
            Book Now
          </Button>
        </CardActions>
      </Card>

      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <DialogContent sx={{ p: 0 }}>
          <img 
            src={room.imageUrl} 
            alt={room.name} 
            style={{ width: '100%', display: 'block' }} 
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RoomCard;
