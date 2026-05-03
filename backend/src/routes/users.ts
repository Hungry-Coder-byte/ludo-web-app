import express from 'express';
import {z} from 'zod';
import {UserModel} from '../models/Users';
import {userService} from '../services/userService';

const router = express.Router();

// Register a new user
router.post('/register', async (req, res) => {
  try {
    const userInput = req.body;

    const schema = z.object({
      username: z.string().email().max(50),
      password: z.string().min(8).max(100),
    });

    const validatedUser = await schema.safeParse(userInput);

    if (!validatedUser.success) {
      return res.status(400).json({ error: validatedUser.error.message });
    }

    const newUser = await userService.createUser(validatedUser.data);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to register user' });
  }
});

// Login an existing user
router.post('/login', async (req, res) => {
  try {
    const userInput = req.body;

    const schema = z.object({
      username: z.string().email().max(50),
      password: z.string().min(8).max(100),
    });

    const validatedUser = await schema.safeParse(userInput);

    if (!validatedUser.success) {
      return res.status(400).json({ error: validatedUser.error.message });
    }

    const user = await userService.getUserByCredentials(validatedUser.data);

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    res.status(200).json({ token: user.generateToken() });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to login user' });
  }
});

export default router;