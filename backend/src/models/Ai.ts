import mongoose, { Schema, Document } from 'mongoose';

export interface Ai extends Document {
  name: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

const aiSchema: Schema = {
  name: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
    enum: ['easy', 'medium', 'hard'],
  },
};

export type AiModel = typeof aiSchema;