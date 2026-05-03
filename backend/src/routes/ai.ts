import express from 'express';
import mongoose from 'mongoose';
import { Ai } from '../models/Ai';
import { AiController } from '../controllers/aiController';
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
    const newAi = await new AiController().create(req.body);
    res.status(201).json(newAi);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Failed to create AI opponent', error: error.message });
  }
});

// GET an AI opponent by ID
router.get('/:id', async (req, res) => {
  try {
    const ai = await Ai.findById(req.params.id);
    if (!ai) {
      return res.status(404).json({ message: 'AI opponent not found' });
    }
    res.json(ai);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve AI opponent' });
  }
});

// PUT (update) an AI opponent by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedAi = await aiController.update(req, res, req.params.id);
    res.json(updatedAi);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Failed to update AI opponent', error: error.message });
  }
});

// DELETE an AI opponent by ID
router.delete('/:id', async (req, res) => {
  try {
    await aiController.delete(req, res, req.params.id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete AI opponent' });
  }
});