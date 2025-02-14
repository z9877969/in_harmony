import mongoose from 'mongoose';

const filtersSchema = new mongoose.Schema({
  month: { type: String, default: null },
  year: { type: String, default: null },
  url: { type: String, default: null },
  type: {
    type: String,
    required: true,
    enum: ['filter'],
  },
  language: { type: String, required: true },
  status: { type: String, enum: ['filter'], required: true },
});

export const FiltersModel =
  mongoose.models['Filters'] || mongoose.model('Filters', filtersSchema);

export default FiltersModel;
