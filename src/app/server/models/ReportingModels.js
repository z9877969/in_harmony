import mongoose from 'mongoose';

const reportingSchema = new mongoose.Schema({
  title: { type: String },
  item: { type: String },
  image: { type: [String], default: [] },
  total: { type: String },
  term: { type: String },
  days: { type: String },
  period: { type: String },
  comments: { type: String },
  quantity: { type: String },
  createdAt: { type: Date, default: Date.now },
  closedAt: { type: Date, default: null },
  type: {
    type: String,
    required: true,
    enum: ['reportings'],
  },
  language: { type: String },
});

export const ReportingsModel =
  mongoose.models['Reportings'] ||
  mongoose.model('Reportings', reportingSchema);

export default ReportingsModel;
