import mongoose, { Schema, Document } from 'mongoose';

export interface IGame extends Document {
  board: string[];
  currentPlayerIndex: number;
  players: string[];
  gameOver: boolean;
  winner?: string;
}

const gameSchema: Schema = {
  board: [
    {
      type: String,
      required: true,
    },
  ],
  currentPlayerIndex: {
    type: Number,
    required: true,
  },
  players: [
    {
      type: String,
      required: true,
    },
  ],
  gameOver: {
    type: Boolean,
    default: false,
  },
  winner: {
    type: String,
    default: null,
  },
};

export type GameModel = typeof GameSchema;