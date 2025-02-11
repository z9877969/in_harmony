import mongoose from 'mongoose';

export const mainPageSchemaEN = new mongoose.Schema({
  local: { type: String, required: true },
  sections_list: { type: [mongoose.Schema.Types.Mixed] },
  route: { type: String, required: true },
});

export const mainPageSchemaUA = new mongoose.Schema({
  local: { type: String, required: true },
  route: {
    type: String,
    required: true,
    enum: ['main', 'about', 'collection', 'reporting', 'active', 'footer'],
  },
  sections_list: { type: [mongoose.Schema.Types.Mixed] },
});

export const PagesEN =
  mongoose.models['PageEN'] || mongoose.model('PageEN', mainPageSchemaEN);

export const PagesUA =
  mongoose.models['PagesUA'] || mongoose.model('PagesUA', mainPageSchemaUA);
