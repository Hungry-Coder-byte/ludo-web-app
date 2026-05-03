import express from 'express';
import mongoose from 'mongoose';
import { Game } from '../models/Game';
import { GameController } from '../controllers/gameController';
import { validateRequest } from '../middleware/auth';

const router = express.Router();

const gameController = new GameController();

router.get('/', async (req, res) => {
  try {
    const game = await Game.findOne({}).populate('players');
    if (game) {
      res.json(game);
    } else {
      res.status(404).json({ message: 'No game in progress' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve game' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newGame = await gameController.createGame(req.body);
    res.status(201).json(newGame);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create game' });
  }
});

router.put('/:id', validateRequest(req.headers.authorization), async (req, res) => {
  try {
    const { id } = req.params;
    const updatedGame = await gameController.updateGame(id, req.body);
    res.json(updatedGame);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update game' });
  }
});

export default router;