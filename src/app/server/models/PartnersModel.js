import mongoose from 'mongoose';

const partnerSchema = new mongoose.Schema({
  logo: { type: String, default: null },
  type: {
    type: String,
    required: true,
    enum: ['partners'],
  },
});

export const PartnersModel =
  mongoose.models['our-partners'] ||
  mongoose.model('our-partners', partnerSchema);

export default PartnersModel;
