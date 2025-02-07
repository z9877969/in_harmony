import mongoose from 'mongoose';

const progressSchema = new mongoose.Schema({
  title: { type: String, default: '' },
  text: { type: String, default: '' },
  item: { type: String, default: '' },
  total: { type: String, default: '' },
  currency: { type: String, default: '' },
  term: { type: String, default: '' },
  days: { type: String, default: '' },
  period: { type: String, default: '' },
  image: { type: String },
  type: { type: String },
});

export const ProgressModel = mongoose.model('Progress', progressSchema);
