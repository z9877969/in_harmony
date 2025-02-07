import mongoose from 'mongoose';

const infoCardSchema = new mongoose.Schema({
  amount: { type: String },
  title: { type: String },
  type: { type: String, required: true },
});

export const InfoCardModel = mongoose.model('InfoCards', infoCardSchema);

const heroMainPageSection = new mongoose.Schema({
  local: { type: String, required: true },
  title: { type: String },
  route: { type: String, required: true, enum: ['main', 'about'] },
  list: { type: [infoCardSchema], default: [] },
});

export const HeroMainPageSection =
  mongoose.models.Sections || mongoose.model('Sections', heroMainPageSection);

export default HeroMainPageSection;
