import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useParams, useNavigate } from 'react-router-dom';

const RoomReservePage: React.FC = () => {
  const { roomId } = useParams<{ roomId: string }>();
  const navigate = useNavigate();

  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [guests, setGuests] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:5000/api/reservations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          roomId,
          checkInDate: checkInDate ? checkInDate.toISOString() : null,
          checkOutDate: checkOutDate ? checkOutDate.toISOString() : null,
          guests,
          name,
          email,
        }),
      });

      if (!response.ok) {
        throw new Error('Reservation failed. Please try again.');
      }

      const data = await response.json();
      console.log('Reservation response:', data);
      alert('Reservation successful!');
      navigate('/');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        Reserve Room {roomId}
      </Typography>
      {error && (
        <Typography variant="body1" color="error" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Check-In Date"
            value={checkInDate}
            onChange={(newValue) => setCheckInDate(newValue)}
            slots={{ textField: TextField }}
            slotProps={{ textField: { required: true } }}
          />
          <DatePicker
            label="Check-Out Date"
            value={checkOutDate}
            onChange={(newValue) => setCheckOutDate(newValue)}
            slots={{ textField: TextField }}
            slotProps={{ textField: { required: true } }}
          />
        </LocalizationProvider>
        <TextField
          label="Number of Guests"
          type="number"
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          inputProps={{ min: 1 }}
          required
        />
        <TextField
          label="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button variant="contained" type="submit" disabled={loading}>
          {loading ? 'Processing...' : 'Confirm Reservation'}
        </Button>
      </Box>
    </Container>
  );
};

export default RoomReservePage;

