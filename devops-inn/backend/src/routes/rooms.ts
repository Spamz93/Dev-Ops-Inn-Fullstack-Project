import { Router } from 'express';

const router = Router();

const rooms = [
  {
    id: '1',
    name: 'Deluxe Suite',
    description: 'A spacious suite with a sea view.',
    price: 250,
    imageUrl: '/Deluxe Suite.webp'
  },
  {
    id: '2',
    name: 'Standard Room',
    description: 'A cozy room for solo travelers or couples.',
    price: 120,
    imageUrl: '/double room.webp'
  },
  {
    id: '3',
    name: 'Family Room',
    description: 'A larger room with extra beds for families.',
    price: 180,
    imageUrl: '/family room.webp'
  },
  {
    id: '4',
    name: 'Deluxe Suite Pro',
    description: 'A deluxe suite with a sea view and your own jacuzzi',
    price: 300,
    imageUrl: '/jacuzzi.webp'
  }
];


router.get('/', (req, res) => {
  res.json(rooms);
});

export default router;
