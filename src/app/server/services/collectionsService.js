import createHttpError from 'http-errors';
import { ObjectId } from 'bson';
import fs from 'node:fs/promises';
import path from 'node:path';
import { responseError, saveFileToUploadDir } from '../lib';
import { saveFileToCloudinary } from '../lib/saveFileToCloudinary';
import { env } from '../utils';
import CollectionModel from '../models/CollectionsModel';
import { parsePaginationParams } from '../utils/pagination';
import { convertToLongDescrObj } from '../utils/convertToLongDescrObj';
import {
  COLLECTION_COLLECTED_TITLES,
  COLLECTION_COMMENTS_LABEL,
  COLLECTION_STATUS_TYPE,
  COLLECTION_TARGET_TITLES,
  COLLECTION_TERMS_LABEL,
  CURRENCY_TYPES,
  LANGUAGE_TYPE,
  PUBLIC_IMAGES_ALL_DIR,
} from '../constants';

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
      throw createHttpError(404, 'Collection not found');
    }
    res.status(200).json({ status: 200, data: collection });
  } catch (error) {
    responseError(res, error, 'Failed to fetch collection');
  }
};

export const createCollection = async (req, res) => {
  try {
    const image = req.file;
    let photoUrls = [];
    const { locale } = req.query;

    const translations = new ObjectId().toString();
    if (image) {
      const isCloudinaryEnabled = env('ENABLE_CLOUDINARY') === 'true';
      if (isCloudinaryEnabled) {
        const photoUrl = await saveFileToCloudinary(image);
        photoUrls.push({ path: null, url: photoUrl });
      } else {
        const photo = await saveFileToUploadDir(image, translations);
        photoUrls.push({ path: photo.path, url: photo.url });
      }
    }

    req.body.long_desc = convertToLongDescrObj(req.body.long_desc);
    req.body.translations = translations;
    req.body.language = locale;

    if (locale === LANGUAGE_TYPE.EN) {
      req.body.currency = CURRENCY_TYPES.EN;
      req.body.collected_title = COLLECTION_COLLECTED_TITLES.EN;
      req.body.target_title = COLLECTION_TARGET_TITLES.EN;
      req.body.term = COLLECTION_TERMS_LABEL.EN;
      req.body.comments = COLLECTION_COMMENTS_LABEL.EN;
    } else {
      req.body.currency = CURRENCY_TYPES.UA;
      req.body.collected_title = COLLECTION_COLLECTED_TITLES.UA;
      req.body.target_title = COLLECTION_TARGET_TITLES.UA;
      req.body.term = COLLECTION_TERMS_LABEL.UA;
      req.body.comments = COLLECTION_COMMENTS_LABEL.UA;
    }

    const newCollection = await CollectionModel.create({
      ...req.body,
      image: photoUrls,
    });

    res.status(201).json(newCollection);
  } catch (error) {
    responseError(res, error);
  }
};

const findAndDeleteImage = async (partialName) => {
  const files = await fs.readdir(PUBLIC_IMAGES_ALL_DIR);
  const fileToDelete = files.find((file) => file.startsWith(partialName));
  if (fileToDelete) {
    const fullPath = path.join(PUBLIC_IMAGES_ALL_DIR, fileToDelete);
    await fs.unlink(fullPath);
  }
};

export const updateCollectionService = async (req, res) => {
  try {
    const { id } = req.query;
    const image = req.file;

    const existingCollection = await CollectionModel.findById(id);

    if (!existingCollection) {
      throw createHttpError(404, 'Collection not found');
    }

    let photoUrls = [];

    if (image) {
      let photoUrl;
      if (env('ENABLE_CLOUDINARY') === 'true') {
        photoUrl = await saveFileToCloudinary(image);
      } else {
        await findAndDeleteImage(existingCollection.translations);
        photoUrl = await saveFileToUploadDir(
          image,
          existingCollection.translations
        );
      }
      photoUrls.push(photoUrl);
    }

    if (req.body.long_desc) {
      req.body.long_desc = convertToLongDescrObj(req.body.long_desc);
    }
    if (photoUrls.length > 0) {
      req.body.image = photoUrls;
    }
    if (req.body.status === COLLECTION_STATUS_TYPE.CLOSED) {
      req.body.closedAt = new Date();
    }
    const result = await CollectionModel.findByIdAndUpdate(
      id,
      { ...req.body },
      {
        new: true,
        // includeResultMetadata: true,
      }
    );

    res.status(200).json(result);
  } catch (error) {
    responseError(res, error);
  }
};

export const removeCollectionService = async (req, res) => {
  try {
    const { id } = req.query;

    const collection = await CollectionModel.findByIdAndDelete(id);

    if (!collection) {
      throw createHttpError(404, 'Collection not found');
    }

    res.status(204).json();
  } catch (error) {
    responseError(res, error);
  }
};

export const getCollectionTags = async (req, res) => {
  const tagsList = await CollectionModel.aggregate([
    {
      $match: { status: COLLECTION_STATUS_TYPE.ACTIVE },
    },
    {
      $project: {
        language: 1,
        title: 1,
        value: 1,
      },
    },
    {
      $sort: { value: -1 },
    },
  ]);

  res.json(tagsList);
};
