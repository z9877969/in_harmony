import mongoose from 'mongoose';

const commentsSchema = new mongoose.Schema({
  comment: { type: String },
  name: { type: String },
  age: { type: String },
  user_status: {
    type: String,
  },
  language: { type: String },
  type: { type: String, default: 'was-helped' },
  term: { type: String },
});

export const CommentsModel =
  mongoose.models['Comments-helped'] ||
  mongoose.model('Comments-helped', commentsSchema);

export default CommentsModel;
