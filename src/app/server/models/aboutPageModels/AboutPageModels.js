import mongoose from 'mongoose';

export const aboutPageSchemaUK = new mongoose.Schema({
  local: { type: String, required: true },
  sections_list: { type: [mongoose.Schema.Types.Mixed] },
  route: { type: String, required: true },
});

export const aboutPageSchemaUA = new mongoose.Schema({
  local: { type: String, required: true },
  route: { type: String, required: true, enum: ['main', 'about'] },
  sections_list: { type: [mongoose.Schema.Types.Mixed] },
});

export const AboutPageModelUK =
  mongoose.models.MainPageUK ||
  mongoose.model('About-PageUK', aboutPageSchemaUK);
export const AboutPageModelUA =
  mongoose.models.MainPageUA ||
  mongoose.model('About-PageUA', aboutPageSchemaUA);
