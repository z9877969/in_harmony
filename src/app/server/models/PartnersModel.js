import mongoose from 'mongoose';
import { PARTNER_TYPES } from '../constants';

const partnerSchema = new mongoose.Schema({
  logo: { type: String, default: null },
  image: {
    type: [
      {
        url: String,
        path: String,
      },
    ],
    default: [],
  },
  link: { type: String, default: '' },
  language: { type: String, required: true },
  type: {
    type: String,
    required: true,
    enum: [PARTNER_TYPES.PARTNERS],
    default: PARTNER_TYPES.PARTNERS,
  },
});

export const PartnersModel =
  mongoose.models['our-partners'] ||
  mongoose.model('our-partners', partnerSchema);

export default PartnersModel;
