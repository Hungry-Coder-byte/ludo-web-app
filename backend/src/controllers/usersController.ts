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
    res.status(500).json({ error: 'Failed to create user' });
  }
});

// Login an existing user
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const schema = z.object({
      username: z.string(),
      password: z.string(),
    });

    const validatedUser = await schema.safeParse({ username, password });

    if (!validatedUser.success) {
      return res.status(401).json({ error: validatedUser.error.message });
    }

    const user = await UserModel.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = await userService.generateToken(user.username);
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to login' });
  }
});

// Get a user by ID
router.get('/:id', async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to get user' });
  }
});