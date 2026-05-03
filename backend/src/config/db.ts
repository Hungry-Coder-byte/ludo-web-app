import { MongoClient } from 'mongodb';
import { env } from '../.env';

const dbURL = env.MONGODB_URI || 'mongodb://localhost:27017';

const db = new MongoClient(dbURL);

export const client = new MongoClient(dbURL);

async function connect() {
  try {
    await db.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
}

async function disconnect() {
  try {
    await db.close();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Error disconnecting from MongoDB:', error);
  }
}

export const dbConnect = async () => {
  try {
    await connect();
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
};

export const dbDisconnect = async () => {
  try {
    await disconnect();
  } catch (error) {
    console.error("Failed to disconnect from MongoDB:", error);
  }
};