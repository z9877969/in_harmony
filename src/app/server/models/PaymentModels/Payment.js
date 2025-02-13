import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema(
  {
    amount: { type: Number, required: true },
    type: { type: String, enum: ['regular', 'one-time'], required: true },
    clientFirstName: { type: String, required: false },
    clientLastName: { type: String, required: false },
    clientEmail: { type: String, required: false },
    paymentPurpose: { type: String, required: false },
    orderDate: { type: String, required: false },
    status: { type: String, required: true },
  },
  { timestamps: true }
);

export const PaymentModel =
  mongoose.models.Payment || mongoose.model('Payment', PaymentSchema);

export default PaymentModel;
