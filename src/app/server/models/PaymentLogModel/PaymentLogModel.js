import mongoose from 'mongoose';

const PaymentLogSchema = new mongoose.Schema(
  {},
  { timestamps: true, strict: false }
);

export const PaymentLogModel =
  mongoose.models.PaymentLog || mongoose.model('PaymentLog', PaymentLogSchema);

export default PaymentLogModel;
