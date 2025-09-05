import { SORT_ORDER } from '../constants';
import Payment from '../models/PaymentModels/Payment';
import { calcBorderDates } from '../utils/calcBorderDates';
import { parsePaginationParams } from '../utils/pagination';

export const getAllPaymants = async (req, res) => {
  try {
    const {
      page: reqPage = 1,
      perPage: reqPerPage = 6,
      sortField,
      sortOrder,
      minAmount,
      maxAmount,
      type,
      isPublic,
      collectionTag,
      minDate,
      maxDate,
      status,
    } = req.query;
    const { page, perPage } = parsePaginationParams({
      page: reqPage,
      perPage: reqPerPage,
    });

    const options = {};
    const sortOptions = {};

    if (sortField && sortOrder) {
      sortOptions[sortField] = sortOrder === SORT_ORDER.DESC ? -1 : 1;
    }
    if (minAmount && !maxAmount) {
      options.amount = { $gte: minAmount };
    }
    if (maxAmount && !minAmount) {
      options.amount = { $lte: maxAmount };
    }
    if (minAmount && maxAmount) {
      options.amount = { $gte: minAmount, $lte: maxAmount };
    }
    if (type) {
      options.type = type;
    }
    if (isPublic) {
      const publicStatus = isPublic === 'true' ? true : false;
      options.isPublic = publicStatus;
    }
    if (collectionTag) {
      options.donateValue = collectionTag;
    }
    if (minDate || maxDate) {
      const { prev, next } = calcBorderDates({ minDate, maxDate });
      if (minDate && !maxDate) {
        options.orderDate = { $gte: prev };
      }
      if (maxDate && !minDate) {
        options.orderDate = { $lte: next };
      }
      if (minDate && maxDate) {
        options.orderDate = { $gte: prev, $lte: next };
      }
    }
    if (status) {
      options.status = status;
    }

    const totalCollections = await Payment.countDocuments(options);
    const payments = await Payment.find(options)
      .collation({ locale: 'uk', strength: 2 })
      .sort(sortOptions)
      .skip((page - 1) * perPage)
      .limit(perPage)
      .lean();

    res.status(200).json({
      payments,
      pagination: {
        totalItems: totalCollections,
        totalPages: Math.ceil(totalCollections / perPage),
        currentPage: page,
        perPage: perPage,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
