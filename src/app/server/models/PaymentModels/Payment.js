import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema(
  {
    amount: { type: Number, required: true },
    type: { type: String, enum: ['regular', 'one-time'], required: true },
    isPublic: { type: Boolean, required: true },
    clientFirstName: {
      type: String,
      validate: {
        validator: function (value) {
          return !this.get('isPublic') || value;
        },
        message: 'clientFirstName is required when isPublic is true',
      },
    },
    clientEmail: {
      type: String,
      validate: {
        validator: function (value) {
          return !this.get('isPublic') || value;
        },
        message: 'clientEmail is required when isPublic is true',
      },
    },
    paymentPurpose: { type: String, required: true },
    message: {
      type: String,
      validate: {
        validator: function (value) {
          return !this.get('isPublic') || value;
        },
        message: 'message is required when isPublic is true',
      },
    },
    orderDate: { type: String, required: false },
    status: { type: String, required: true },
  },
  { timestamps: true }
);

export const PaymentModel =
  mongoose.models.Payment || mongoose.model('Payment', PaymentSchema);

export default PaymentModel;
