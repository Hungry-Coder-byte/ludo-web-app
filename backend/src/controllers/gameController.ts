import { Game } from '../models/Game';
import { NextFunction, Request, Response } from 'express';

export class GameController {
  async getGame(req: Request, res: Response, next: NextFunction) {
    try {
      const game = await Game.findOne().populate('players');

      if (game) {
        res.json(game);
      } else {
        res.status(404).json({ message: 'No game in progress' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to retrieve game' });
    }
  }

  async createGame(req: Request, res: Response, next: NextFunction) {
    try {
      const { board, currentPlayerIndex, players } = req.body;

      if (!board || !currentPlayerIndex || !players) {
        return res.status(400).json({ message: 'Missing required fields' });
      }

      const newGame = new Game({
        board,
        currentPlayerIndex,
        players,
        gameOver: false,
      });

      await newGame.save();
      res.status(201).json(newGame);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to create game' });
    }
  }

  async updateGame(req: Request, res: Response, next: NextFunction) {
    try {
      const gameId = req.params.id;
      const { board, currentPlayerIndex, players, gameOver, winner } = req.body;

      const game = await Game.findById(gameId);

      if (!game) {
        return res.status(404).json({ message: 'Game not found' });
      }

      game.board = board;
      game.currentPlayerIndex = currentPlayerIndex;
      game.players = players;
      game.gameOver = gameOver;
      game.winner = winner;

      await game.save();
      res.json(game);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to update game' });
    }
  }
}