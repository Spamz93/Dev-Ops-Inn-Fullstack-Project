import { Router } from 'express';

export interface Reservation {
  id: string;
  roomId: string;
  checkInDate: string;
  checkOutDate: string;
  guests: number;
  name: string;
  email: string;
}

const reservations: Reservation[] = [];

const router = Router();


router.get('/', async (req, res) => {
 
  await new Promise((resolve) => setTimeout(resolve, 100));
  res.json(reservations);
});


router.post('/', async (req, res) => {
  try {
    const { roomId, checkInDate, checkOutDate, guests, name, email } = req.body;

    if (!roomId || !checkInDate || !checkOutDate || !guests || !name || !email) {
       res.status(400).json({ error: 'Missing required fields' });
       return;
    }

   
    const newReservation: Reservation = {
      id: (reservations.length + 1).toString(), 
      roomId,
      checkInDate,
      checkOutDate,
      guests,
      name,
      email,
    };

    await new Promise((resolve) => setTimeout(resolve, 100));

    reservations.push(newReservation);
    res.status(201).json(newReservation);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});


export default router;
