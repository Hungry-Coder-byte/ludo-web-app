import express from 'express';
import mongoose from 'mongoose';
import { Ai } from '../models/Ai';
import { AiController } from './aiController';
import { validateRequest } from '../middleware/auth';

const router = express.Router();

const aiController = new AiController();

// GET all AI opponents
router.get('/', async (req, res) => {
  try {
    const ais = await Ai.find({});
    res.json(ais);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve AI opponents' });
  }
});

// POST a new AI opponent
router.post('/', async (req, res) => {
  try {
    const newAi = await aiController.create(req.body);
    res.status(201).json(newAi);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Failed to create AI opponent' });
  }
});

// DELETE an AI opponent
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAi = await aiController.delete(id);
    res.json(deletedAi);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete AI opponent' });
  }
});

// PUT - Update an AI opponent
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAi = await aiController.update(id, req.body);
    res.json(updatedAi);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update AI opponent' });
  }
});