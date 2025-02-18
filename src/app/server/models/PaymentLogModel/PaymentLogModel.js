import mongoose from 'mongoose'

const PaymentLogSchema = new mongoose.Schema(
  {
    merchantAccount: { type: String, required: true },
    merchantSignature: { type: String, required: true },
    orderReference: { type: String, required: true },
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
    authCode: { type: String },
    email: { type: String },
    phone: { type: String },
    createdDate: { type: Number, required: true },
    processingDate: { type: Number, required: true },
    cardPan: { type: String },
    cardType: { type: String },
    issuerBankCountry: { type: String },
    issuerBankName: { type: String },
    recToken: { type: String },
    transactionStatus: { type: String, required: true },
    reason: { type: String },
    reasonCode: { type: Number },
    fee: { type: Number },
    paymentSystem: { type: String },
    acquirerBankName: { type: String },
    cardProduct: { type: String },
    clientName: { type: String },
  },
  { timestamps: true }
);

export const PaymentLogModel =
  mongoose.models.PaymentLog || mongoose.model('PaymentLog', PaymentLogSchema);

export default PaymentLogModel;
