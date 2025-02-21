import mongoose from 'mongoose';
import createHttpError from 'http-errors';
import CommentsModel from '../models/WasHelpedCommentsModels';
import env from '../utils/evn.js';
import { saveFileToCloudinary } from '../lib/saveFileToCloudinary.js';
import saveFileToUploadDir from '../lib/saveFileToUploadDir.js';
import { parsePaginationParams } from '../utils/pagination';

export const getAllComments = async (req, res) => {
  try {
    const { locale } = req.query;
    const { page, perPage } = parsePaginationParams(req.query);

    const totalComments = await CommentsModel.countDocuments({
      language: locale,
    });
    const comments = await CommentsModel.find({ language: locale })
      .skip((page - 1) * perPage)
      .limit(perPage)
      .lean();

    res.status(200).json({
      status: 200,
      data: comments,
      pagination: {
        totalItems: totalComments,
        totalPages: Math.ceil(totalComments / perPage),
        currentPage: page,
        perPage: perPage,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCommentById = async (req, res) => {
  try {
    const { id } = req.query;

    const comment = await CommentsModel.findOne({
      _id: id,
    });
    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }
    res.status(200).json({ status: 200, data: comment });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch comment' });
  }
};

export const createComment = async (req, res) => {
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

    const newComment = new CommentsModel({
      ...req.body,
      image: photoUrls,
    });

    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateComment = async (req, res) => {
  try {
    const { id } = req.query;
    const image = req.files;

    if (!id) {
      return null;
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid ID format' });
    }
    const existingComment = await CommentsModel.findById(id);

    if (!existingComment) {
      throw createHttpError(404, 'Comment not found');
    }

    let photoUrls = existingComment.image || [];

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

    const result = await CommentsModel.findByIdAndUpdate(
      { _id: id },
      { ...req.body, image: photoUrls },
      {
        new: true,
        includeResultMetadata: true,
      }
    );

    if (!result) {
      throw createHttpError(404, 'Comment not found');
    }

    res.status(200).json({
      data: result.value,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
