import PaymentLogModel from '../models/PaymentLogModel/PaymentLogModel.js';

export const createLogPayment = async (req, res) => {
  try {
    const paymentLog = new PaymentLogModel(req.body);

    await paymentLog.save();

    return res.status(201).json(paymentLog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
