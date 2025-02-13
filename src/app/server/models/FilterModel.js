import mongoose from 'mongoose';

const filtersSchema = new mongoose.Schema({
  month: { type: String },
  year: { type: String },
  url: { type: String },
  type: {
    type: String,
    required: true,
    enum: ['filter'],
  },
  language: { type: String },
  status: { type: String, enum: ['filter'], required: true },
});

export const FiltersModel =
  mongoose.models['Filters'] || mongoose.model('Filters', filtersSchema);

export default FiltersModel;
