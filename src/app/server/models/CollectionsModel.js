import mongoose from 'mongoose';

const collectionSchema = new mongoose.Schema({
  title: { type: String },
  image: { type: [String], default: [] },
  collected: { type: Number, default: 0 },
  target: { type: Number },
  alt: { type: String, default: '' },
  peopleDonate: { type: Number, default: 0 },
  peopleDonate_title: { type: String },
  desc: { type: String },
  createdAt: { type: Date, default: Date.now },
  closedAt: { type: Date, default: null },
  language: { type: String },
  collected_title: { type: String },
  target_title: { type: String },
  //reporting options
  total: { type: String },
  term: { type: String },
  days: { type: String },
  period: { type: String },
  comments: { type: String },
  quantity: { type: String },
  //===========================
  long_desc: {
    type: {
      section1: { type: String, default: '' },
      section2: { type: String, default: '' },
      section3: { type: String, default: '' },
    },
    default: () => ({ section1: '', section2: '', section3: '' }),
  },
  status: { type: String, enum: ['active', 'closed'], default: 'active' },
  type: {
    type: String,
    required: true,
    enum: ['collections'],
  },
  value: {
    type: String,
    enum: [
      'foodCollection',
      'medicineCollection',
      'clothesCollection',
      'waterCollection',
      'lightCollection',
    ],
    required: true,
  },
  importance: {
    type: String,
    enum: ['urgent', 'important', 'non-urgent'],
    required: true,
    default: 'important',
  },
});

export const CollectionModel =
  mongoose.models['Collections'] ||
  mongoose.model('Collections', collectionSchema);

export default CollectionModel;
