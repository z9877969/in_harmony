import createHttpError from 'http-errors';
import mongoose from 'mongoose';
import SupportModel from '../models/SupportModel/SupportModel.js';

export const createSupportData = async (data) => {
  try {
    const { name, email, message } = data;
    const supportData = new SupportModel({ name, email, message });
    await supportData.save();
    return supportData;
  } catch (error) {
    console.error('Error creating support data:', error);
    throw new Error(error.message);
  }
};

export const updateSupportData = async (data) => {
  try {
    const { id, ...updateFields } = data;

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
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
      throw createHttpError(404, 'Failed to update support form data');
    }

    return updatedData;
  } catch (error) {
    console.error('Error updating support data:', error);
    throw new Error(error.message);
  }
};
