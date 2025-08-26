import mongoose from 'mongoose';
import {
  COLLECTION_IMPORTANCE_TYPE,
  COLLECTION_STATUS_TYPE,
} from '@/app/server/constants';

const collectionSchema = new mongoose.Schema({
  title: { type: String, default: null },
  image: {
    type: [
      {
        url: String,
        path: String,
      },
    ],
    default: [],
  },
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
  long_desc: {
    type: Map,
    of: String,
    required: true,
  },
  status: {
    type: String,
    enum: [COLLECTION_STATUS_TYPE.ACTIVE, COLLECTION_STATUS_TYPE.CLOSED],
    default: COLLECTION_STATUS_TYPE.ACTIVE,
  },
  type: {
    type: String,
    required: true,
    enum: ['collections'],
    default: 'collections',
  },
  value: {
    type: String,
    required: true,
    default: null,
  },
  importance: {
    type: String,
    enum: [
      COLLECTION_IMPORTANCE_TYPE.URGENT,
      COLLECTION_IMPORTANCE_TYPE.IMPORTANT,
      COLLECTION_IMPORTANCE_TYPE.NON_URGENT,
      COLLECTION_IMPORTANCE_TYPE.PERMANENT,
    ],
    required: true,
  },
});

export const CollectionModel =
  mongoose.models['Collections'] ||
  mongoose.model('Collections', collectionSchema);

export default CollectionModel;
