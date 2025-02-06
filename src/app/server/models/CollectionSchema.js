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
  isOpen: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  closedAt: { type: Date, default: null },
});

// const collectionsSchema = new mongoose.Schema({
//   collections: [collectionSchema],
// });

// const CollectionsSchema =
//   mongoose.models.Collections ||
//   mongoose.model('Collections', collectionsSchema);

export const CollectionSchema =
  mongoose.models.Collections ||
  mongoose.model('Collections', collectionSchema);

export default CollectionSchema;
