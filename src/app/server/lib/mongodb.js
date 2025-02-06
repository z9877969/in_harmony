import mongoose from 'mongoose';
import { env } from '../utils';

const connectToDatabase = async () => {
  if (mongoose.connections[0].readyState) {
    console.log('Already connected to MongoDB');
    return;
  }

  try {
    if (!env('MONGODB_URI')) {
      throw new Error('MongoDB URI is not defined');
    }

    await mongoose.connect(env('MONGODB_URI'));
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  }
};

export default connectToDatabase;
