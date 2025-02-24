import { Router, Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
// Optionally, you can import bcrypt to hash passwords
// import bcrypt from 'bcrypt';

const router = Router();

// Define the User interface for our in-memory store
interface User {
  id: string;
  email: string;
  password: string;
  name: string;
}

// In-memory users store (for demo purposes)
const users: User[] = [];

// Use an environment variable for JWT secret in production
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// POST /api/auth/signup - Register a new user and return a token
router.post(
  '/signup',
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password, name } = req.body as { email: string; password: string; name: string };
    const errors: Record<string, string> = {};

    // Basic validations
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

    // For demo purposes, we are not hashing the password.
    // In production, hash the password before storing:
    // const hashedPassword = await bcrypt.hash(password, 10);
    const newUser: User = {
      id: (users.length + 1).toString(),
      email,
      password, // or hashedPassword
      name,
    };

    users.push(newUser);

    const payload = { userId: newUser.id, name: newUser.name, email: newUser.email };
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ message: 'User created.', user: newUser, token });
  }
);

// POST /api/auth/login - Authenticate user and return a token
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

  // For production, if passwords are hashed, compare with bcrypt.compare()
  if (password !== user.password) {
    res.status(422).json({ error: 'Invalid credentials.' });
    return
  }

  // Create a JWT token for the user
  const payload = { userId: user.id, name: user.name, email: user.email };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

  res.json({ token });
});

export default router;
