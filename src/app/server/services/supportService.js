import createHttpError from 'http-errors';
import { Types } from 'mongoose';
import SupportModel from '../models/SupportModel/SupportModel.js';

export const createSupportData = async (data) => {
  const { name, email, message } = data;
  const supportData = new SupportModel({ name, email, message });
  await supportData.save();
  return supportData;
};

export const updateSupportData = async (data) => {
  const { id, ...updateFields } = data;

  if (!id || !Types.ObjectId.isValid(id)) {
    throw createHttpError(400, 'Invalid ID format');
  }

  const existingData = await SupportModel.findById(id);
  if (!existingData) {
    throw createHttpError(404, 'Support form data not found');
  }

  const updatedData = await SupportModel.findByIdAndUpdate(id, updateFields, {
    new: true,
  });

  if (!updatedData) {
    throw createHttpError(404, 'Support form data not found after update');
  }

  return updatedData;
};
