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
    donateTitle: { type: String, required: true },
    donateValue: { type: String, required: true },
    message: {
      type: String,
      validate: {
        validator: function (value) {
          return !this.get('isPublic') || value;
        },
        message: 'message is required when isPublic is true',
      },
    },
    cancellationReason: { type: String },
    orderDate: { type: String, required: false },
    status: {
      type: String,
      enum: [
        'InProcessing',
        'WaitingAuthComplete',
        'Approved',
        'Pending',
        'Expired',
        'Refunded',
        'Voided',
        'Declined',
        'RefundInProcessing',
        'Active',
        'Suspended',
        'Created',
        'Removed',
        'Confirmed',
        'Completed',
      ],
      required: true,
    },
  },
  { timestamps: true }
);

export const PaymentModel =
  mongoose.models.Payment || mongoose.model('Payment', PaymentSchema);

export default PaymentModel;
