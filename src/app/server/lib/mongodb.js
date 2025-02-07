import mongoose from 'mongoose';
import { env } from '../utils';

const connectToDatabase = async () => {
  if (mongoose.connections[0].readyState) {
    return;
  }

  try {
    if (!env('MONGODB_URI')) {
      throw new Error('MongoDB URI is not defined');
    }

    await mongoose.connect(env('MONGODB_URI'));
  } catch (err) {
    process.exit(1);
  }
};

export default connectToDatabase;
