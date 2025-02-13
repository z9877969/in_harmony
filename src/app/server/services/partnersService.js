import mongoose from 'mongoose';
import createHttpError from 'http-errors';
import env from '../utils/evn.js';
import { saveFileToCloudinary } from '../lib/saveFileToCloudinary.js';
import saveFileToUploadDir from '../lib/saveFileToUploadDir.js';
import PartnersModel from '../models/PartnersModel.js';

export const getAllPartners = async (req, res) => {
  try {
    const partners = await PartnersModel.find().lean();

    res.status(200).json({ status: 200, data: partners });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createPartner = async (req, res) => {
  try {
    const image = req.files;
    let photoUrls = [];

    if (image && image.length) {
      for (const img of image) {
        let photoUrl;
        if (env('ENABLE_CLOUDINARY') === 'true') {
          photoUrl = await saveFileToCloudinary(img);
        } else {
          photoUrl = await saveFileToUploadDir(img);
        }
        photoUrls.push(photoUrl);
      }
    }

    const newPartner = new PartnersModel({
      ...req.body,
      image: photoUrls,
    });

    await newPartner.save();
    res.status(201).json(newPartner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePartner = async (req, res) => {
  try {
    const { id } = req.query;
    const image = req.files;

    if (!id) {
      return null;
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid ID format' });
    }
    const existingPartner = await PartnersModel.findById(id);

    if (!existingPartner) {
      throw createHttpError(404, 'Comment not found');
    }

    let photoUrls = existingPartner.image || [];

    if (image && image.length) {
      for (const img of image) {
        let photoUrl;
        if (env('ENABLE_CLOUDINARY') === 'true') {
          photoUrl = await saveFileToCloudinary(img);
        } else {
          photoUrl = await saveFileToUploadDir(img);
        }
        photoUrls.push(photoUrl);
      }
    }

    const result = await PartnersModel.findByIdAndUpdate(
      { _id: id },
      { ...req.body, image: photoUrls },
      {
        new: true,
        includeResultMetadata: true,
      }
    );

    if (!result) {
      throw createHttpError(404, 'Partner not found');
    }

    res.status(200).json({
      data: result.value,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
