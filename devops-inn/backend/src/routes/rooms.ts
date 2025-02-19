import { Router } from 'express';

const router = Router();

const rooms = [
  {
    id: '1',
    name: 'Deluxe Suite',
    description: 'A spacious suite with a sea view.',
    price: 250,
    imageUrl: '/assets/room1.jpg'
  },
  {
    id: '2',
    name: 'Standard Room',
    description: 'A cozy room for solo travelers or couples.',
    price: 120,
    imageUrl: '/assets/room2.jpg'
  },
  {
    id: '3',
    name: 'Family Room',
    description: 'A larger room with extra beds for families.',
    price: 180,
    imageUrl: '/assets/room3.jpg'
  }
];


router.get('/', (req, res) => {
  res.json(rooms);
});

export default router;
