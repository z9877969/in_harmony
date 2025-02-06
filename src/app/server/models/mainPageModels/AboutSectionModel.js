import mongoose from 'mongoose';

// Define the AboutCard schema
const cardsAboutSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
});

// Create the AboutCard model
export const AboutCardModel = mongoose.model('AboutCard', cardsAboutSchema);

// Create the discriminator model
const aboutMainPageSection = new mongoose.Schema({
  local: { type: String, required: true },
  title: { type: String },
  route: { type: String, required: true, enum: ['main', 'about'] },
  list: { type: [cardsAboutSchema], default: [] },
});

export const AboutMainPageSection =
  mongoose.models.Sections || mongoose.model('Sections', aboutMainPageSection);

export default AboutMainPageSection;
