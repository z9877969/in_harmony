import mongoose from 'mongoose';

const SupportSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true },
    email: {
      type: String,
      trim: true,
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format'],
    },
    message: { type: String, trim: true },
    status: {
      type: String,
      enum: ['New', 'Delivered', 'Resolved'],
      default: 'New',
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

const SupportModel =
  mongoose.models.Support || mongoose.model('Support', SupportSchema);

export default SupportModel;
