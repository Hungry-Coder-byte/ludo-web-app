import { Ai } from './ai';
import { IGame } from './game';
import { User } from './user';

export type SharedType =
  | User
  | Ai
  | IGame;