import mongoose from 'mongoose';

const userPaymentSchema = new mongoose.Schema({
  data: { type: [mongoose.Schema.Types.Mixed] },
});

export const UserPaymentModel =
  mongoose.models['UserPayment'] ||
  mongoose.model('UserPayment', userPaymentSchema);

export default UserPaymentModel;
