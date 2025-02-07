import mongoose from 'mongoose';

const collectionSchema = new mongoose.Schema({
  title: { type: String },
  importance: { type: String },
  image: { type: [String], default: [] },
  collected: { type: Number, default: 0 },
  target: { type: Number },
  alt: { type: String, default: '' },
  peopleDonate: { type: Number, default: 0 },
  desc: { type: String },
  long_desc: { type: String, default: '' },
  status: { type: String, enum: ['active', 'closed'], default: 'active' },
  createdAt: { type: Date, default: Date.now },
  closedAt: { type: Date, default: null },
  type: {
    type: String,
    required: true,
    enum: ['collections'],
  },
  language: { type: String },
});

export const CollectionModel = mongoose.model('Collections', collectionSchema);
export default CollectionModel;
