import mongoose from 'mongoose';

const collectionSchema = new mongoose.Schema({
  title: { type: String, default: null },
  image: { type: [String], default: [] },
  collected: { type: Number, default: 0 },
  target: { type: Number, required: true },
  alt: { type: String, default: null },
  peopleDonate: { type: Number, default: 0 },
  peopleDonate_title: { type: String, default: null },
  desc: { type: String, default: null },
  createdAt: { type: Date, default: Date.now },
  closedAt: { type: Date, default: null },
  language: { type: String, required: true },
  collected_title: { type: String, default: null },
  target_title: { type: String, default: null },
  translations: { type: String, default: null, required: true },
  //reporting options
  term: { type: String, default: null },
  days: { type: String, default: null },
  period: { type: String, default: null },
  comments: { type: String, default: null },
  quantity: { type: String, default: null },
  currency: { type: String, default: null },
  //===========================
  long_desc: {
    type: {
      section1: { type: String, default: null },
      section2: { type: String, default: null },
      section3: { type: String, default: null },
    },
  },
  status: { type: String, enum: ['active', 'closed'], default: 'active' },
  type: {
    type: String,
    required: true,
    enum: ['collections'],
    default: 'collections',
  },
  value: {
    type: String,
    required: true,
  },
  importance: {
    type: String,
    enum: ['urgent', 'important', 'non-urgent', 'permanent'],
    required: true,
    default: null,
  },
});

export const CollectionModel =
  mongoose.models['Collections'] ||
  mongoose.model('Collections', collectionSchema);

export default CollectionModel;
