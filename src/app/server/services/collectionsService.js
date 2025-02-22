import mongoose from 'mongoose';
import createHttpError from 'http-errors';
import { saveFileToUploadDir } from '../lib';
import { saveFileToCloudinary } from '../lib/saveFileToCloudinary';
import { env } from '../utils';
import CollectionModel from '../models/CollectionsModel';
import { parsePaginationParams } from '../utils/pagination';

export const getAllCollections = async (req, res) => {
  try {
    const { locale } = req.query;
    const { page, perPage } = parsePaginationParams(req.query);

    const totalCollections = await CollectionModel.countDocuments({
      language: locale,
    });

    const collections = await CollectionModel.find({ language: locale })
      .skip((page - 1) * perPage)
      .limit(perPage)
      .lean();

    const sortedCollections = collections.reduce(
      (acc, collection) => {
        if (collection.status === 'active') {
          acc.activeCollections.push(collection);
        } else {
          acc.closedCollections.push(collection);
        }
        return acc;
      },
      { activeCollections: [], closedCollections: [] }
    );

    res.status(200).json({
      status: 200,
      data: sortedCollections,
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

export const getCollectionById = async (req, res) => {
  try {
    const { id } = req.query;

    const collection = await CollectionModel.findOne({
      _id: id,
    });
    if (!collection) {
      return res.status(404).json({ error: 'Collection not found' });
    }
    res.status(200).json({ status: 200, data: collection });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch collection' });
  }
};

export const createCollection = async (req, res) => {
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

    const newCollection = new CollectionModel({
      ...req.body,
      image: photoUrls,
    });
    await newCollection.save();
    res.status(201).json(newCollection);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCollectionService = async (req, res) => {
  try {
    const { id } = req.query;
    const image = req.files;

    if (!id) {
      return null;
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid ID format' });
    }
    const existingCollection = await CollectionModel.findById(id);

    if (!existingCollection) {
      throw createHttpError(404, 'Collection not found');
    }

    let photoUrls = existingCollection.image || [];

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

    const result = await CollectionModel.findByIdAndUpdate(
      { _id: id },
      { ...req.body, image: photoUrls },
      {
        new: true,
        includeResultMetadata: true,
      }
    );

    if (!result) {
      throw createHttpError(404, 'Collection not found');
    }

    res.status(200).json({
      data: result.value,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
