import PaymentModel from '../models/PaymentModels/Payment';
import CollectionModel from '../models/CollectionsModel';

export const getDiscardCollectionsList = async (req, res) => {
  try {
    const { email, locale } = req.query;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const userPayments = await PaymentModel.find({ clientEmail: email }).lean();

    if (!userPayments.length) {
      return res
        .status(404)
        .json({ error: 'No payments found for this email' });
    }

    const filteredPayments = userPayments.filter(
      (payment) =>
        payment.status === 'InProcessing' && payment.type === 'regular'
    );

    if (!filteredPayments.length) {
      return res
        .status(404)
        .json({ error: 'This user has no regular payments.' });
    }

    const collectionName = filteredPayments.map(
      (payment) => payment.donateValue
    );

    const collections = await CollectionModel.find({
      value: { $in: collectionName },
      language: locale,
    }).lean();

    res.status(200).json({
      collections: collections.map(({ title, value }) => ({ title, value })),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
