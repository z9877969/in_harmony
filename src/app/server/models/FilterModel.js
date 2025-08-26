import mongoose from 'mongoose';

const filtersSchema = new mongoose.Schema({
  month: { type: String, required: true },
  year: { type: String, required: true },
  url: { type: String, required: true },
  type: {
    type: String,
    enum: ['filter'],
    default: 'filter',
  },
  language: { type: String, required: true },
  status: { type: String, enum: ['filter'], default: 'filter' },
});

export const FiltersModel =
  mongoose.models['Filters'] || mongoose.model('Filters', filtersSchema);

export default FiltersModel;
