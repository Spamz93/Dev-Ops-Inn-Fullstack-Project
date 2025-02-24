import { Router, Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const router = Router();

interface User {
  id: string;
  email: string;
  password: string;
  name: string;
}

const users: User[] = [];

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

router.post(
  '/signup',
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password, name } = req.body as { email: string; password: string; name: string };
    const errors: Record<string, string> = {};

   
    if (!email) {
      errors.email = 'Email is required.';
    }
    if (!password) {
      errors.password = 'Password is required.';
    }
    if (!name) {
      errors.name = 'Name is required.';
    }
    if (Object.keys(errors).length > 0) {
      res.status(400).json({ message: 'Validation error', errors });
      return;
    }

    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
      res.status(422).json({ error: 'Email already exists.' });
      return;
    }

    
    const newUser: User = {
      id: (users.length + 1).toString(),
      email,
      password, 
      name,
    };

    users.push(newUser);

    const payload = { userId: newUser.id, name: newUser.name, email: newUser.email };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ message: 'User created.', user: newUser, token });
  }
);

router.post('/login', async (req: Request, res: Response) => {
  const { email, password } = req.body as { email: string; password: string };
  if (!email || !password) {
    res.status(400).json({ error: 'Email and password are required.' });
    return
  }

  const user = users.find((u) => u.email === email);
  if (!user) {
    res.status(401).json({ error: 'Authentication failed.' });
    return
  }

  if (password !== user.password) {
    res.status(422).json({ error: 'Invalid credentials.' });
    return
  }

  const payload = { userId: user.id, name: user.name, email: user.email };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

  res.json({ token });
});

export default router;
