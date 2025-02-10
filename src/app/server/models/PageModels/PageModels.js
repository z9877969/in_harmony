import mongoose from 'mongoose';

export const mainPageSchemaEN = new mongoose.Schema({
  local: { type: String, required: true },
  sections_list: { type: [mongoose.Schema.Types.Mixed] },
  route: { type: String, required: true },
});

export const mainPageSchemaUK = new mongoose.Schema({
  local: { type: String, required: true },
  route: {
    type: String,
    required: true,
    enum: ['main', 'about', 'collection', 'reporting'],
  },
  sections_list: { type: [mongoose.Schema.Types.Mixed] },
});

export const PagesEN =
  mongoose.models['PageEN'] || mongoose.model('PageEN', mainPageSchemaEN);

export const PagesUK =
  mongoose.models['PagesUK'] || mongoose.model('PagesUK', mainPageSchemaUK);
