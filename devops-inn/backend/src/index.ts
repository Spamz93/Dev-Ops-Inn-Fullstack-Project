import express from 'express';
import cors from 'cors';
import roomsRouter from './routes/rooms';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.use('/api/rooms', roomsRouter);

app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to The DevOps Inn API' });
});

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
