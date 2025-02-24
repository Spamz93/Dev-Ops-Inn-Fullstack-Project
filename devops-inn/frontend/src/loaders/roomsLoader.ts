import { LoaderFunction } from 'react-router-dom';
import { Room } from '../components/RoomCard/RoomCard';

//loader for all rooms (fetching)
export const roomsLoader: LoaderFunction = async () => {
  const response = await fetch('http://localhost:5000/api/rooms');
  if (!response.ok) {
    throw new Response('Failed to fetch rooms', { status: response.status });
  }
  const rooms: Room[] = await response.json();
  return rooms;
};
