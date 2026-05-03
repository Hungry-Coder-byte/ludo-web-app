import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  password?: string;
  email?: string;
}

const UserSchema: Schema = {
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String },
};

export const User = mongoose.model<IUser>('User', UserSchema) as IUser;