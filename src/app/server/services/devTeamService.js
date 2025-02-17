import mongoose from 'mongoose';
import createHttpError from 'http-errors';
import env from '../utils/evn.js';
import { saveFileToCloudinary } from '../lib/saveFileToCloudinary.js';
import saveFileToUploadDir from '../lib/saveFileToUploadDir.js';
import TeamMembersModel from '../models/TeamMembersModels';

export const getAllTeam = async (req, res) => {
  try {
    const { locale } = req.query;
    const members = await TeamMembersModel.find({ language: locale }).lean();

    res.status(200).json({ status: 200, data: members });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createMember = async (req, res) => {
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

    const newMember = new TeamMembersModel({
      ...req.body,
      image: photoUrls,
    });

    await newMember.save();
    res.status(201).json(newMember);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateMember = async (req, res) => {
  try {
    const { id } = req.query;
    const image = req.files;

    if (!id) {
      return null;
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid ID format' });
    }
    const existingMember = await TeamMembersModel.findById(id);

    if (!existingMember) {
      throw createHttpError(404, 'Member not found');
    }

    let photoUrls = existingMember.image || [];

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

    const result = await TeamMembersModel.findByIdAndUpdate(
      { _id: id },
      { ...req.body, image: photoUrls },
      {
        new: true,
        includeResultMetadata: true,
      }
    );

    if (!result) {
      throw createHttpError(404, 'Member not found');
    }

    res.status(200).json({
      data: result.value,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
