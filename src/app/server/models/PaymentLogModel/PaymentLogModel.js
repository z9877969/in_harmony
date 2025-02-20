import mongoose from 'mongoose';

const PaymentLogSchema = new mongoose.Schema(
  {
    merchantAccount: { type: String },
    merchantSignature: { type: String },
    orderReference: { type: String },
    amount: { type: Number },
    currency: { type: String },
    authCode: { type: String },
    email: { type: String },
    phone: { type: String },
    createdDate: { type: Number },
    processingDate: { type: Number },
    cardPan: { type: String },
    cardType: { type: String },
    issuerBankCountry: { type: String },
    issuerBankName: { type: String },
    recToken: { type: String },
    transactionStatus: { type: String },
    reason: { type: String },
    reasonCode: { type: Number },
    fee: { type: Number },
    paymentSystem: { type: String },
    acquirerBankName: { type: String },
    cardProduct: { type: String },
    clientName: { type: String },
  },
  {
    timestamps: true,
    strict: false,
  }
);

export const PaymentLogModel =
  mongoose.models.PaymentLog || mongoose.model('PaymentLog', PaymentLogSchema);

export default PaymentLogModel;
