import mongoose from 'mongoose';

const commentsSchema = new mongoose.Schema({
  comment: { type: String, default: null },
  name: { type: String, default: null },
  age: { type: String, default: null },
  user_status: { type: String, default: null },
  language: { type: String, required: true },
  type: { type: String, default: 'was-helped' },
  term: { type: String, required: true },
  status: { type: String, default: 'comments' },
  createdAt: { type: Date, default: Date.now },
});

export const CommentsModel =
  mongoose.models['Comments-helped'] ||
  mongoose.model('Comments-helped', commentsSchema);

export default CommentsModel;
