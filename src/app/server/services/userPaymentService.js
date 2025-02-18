import UserPaymentModel from '../models/UserPaymentModel/UserPaymentModel';

export const createUserPayment = async (req, res) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res
        .status(400)
        .json({ message: 'Incorrect data in the request body' });
    }

    const newCollection = new UserPaymentModel({
      data: req.body,
    });
    await newCollection.save();

    return res.status(201).json({ message: 'Payment saved successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
