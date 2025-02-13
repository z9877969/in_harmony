import mongoose from 'mongoose';

export const pageSchema = new mongoose.Schema({
  local: { type: String, required: true },
  route: {
    type: String,
    required: true,
    enum: [
      'main',
      'about',
      'collection',
      'reporting',
      'active',
      'footer',
      'closed',
      'terms',
    ],
  },
  sections_list: { type: [mongoose.Schema.Types.Mixed] },
});

export const Pages =
  mongoose.models['all-pages'] || mongoose.model('all-pages', pageSchema);
