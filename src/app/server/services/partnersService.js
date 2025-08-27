import createHttpError from 'http-errors';
import PartnersModel from '../models/PartnersModel.js';
import {
  saveFileToCloudinary,
  saveFileToUploadDir,
  responseError,
} from '../lib';
import env from '../utils/evn.js';
import { findAndDeleteImage } from '../utils/findAndDeleteImage.js';

export const getAllPartners = async (req, res) => {
  try {
    const partners = await PartnersModel.find().lean();

    res.status(200).json(partners);
  } catch (error) {
    responseError(res, error);
  }
};

export const createPartner = async (req, res) => {
  try {
    const image = req.file;
    let photoUrls = [];

    if (image) {
      let photoUrl;
      if (env('ENABLE_CLOUDINARY') === 'true') {
        photoUrl = await saveFileToCloudinary(image);
      } else {
        photoUrl = await saveFileToUploadDir(image);
      }
      photoUrls.push(photoUrl);
    }

    const newPartner = await PartnersModel.create({
      ...req.body,
      image: photoUrls,
    });

    res.status(201).json(newPartner);
  } catch (error) {
    responseError(res, error);
  }
};

export const updatePartner = async (req, res) => {
  try {
    const { id } = req.query;
    const image = req.file;

    let photoUrls = [];

    if (image) {
      let photoUrl;
      if (env('ENABLE_CLOUDINARY') === 'true') {
        photoUrl = await saveFileToCloudinary(image);
      } else {
        photoUrl = await saveFileToUploadDir(image);
      }
      photoUrls.push(photoUrl);
      req.body.image = photoUrls;
    }

    const prevResult = await PartnersModel.findByIdAndUpdate(
      id,
      req.body /* {
      // new: true,
      // includeResultMetadata: true,
    } */
    ).lean();

    if (!prevResult) {
      throw createHttpError(404, 'Partner not found');
    }

    const imageToRemove = prevResult.image.path;

    await findAndDeleteImage(imageToRemove);

    const newResult = { ...prevResult, ...req.body };
    res.status(200).json(newResult);
  } catch (error) {
    responseError(res, error);
  }
};

export const removePartner = async (req, res) => {
  try {
    const { id } = req.query;

    const partner = await PartnersModel.findByIdAndDelete(id);

    if (!partner) {
      throw createHttpError(404, 'Partner not found');
    }

    await findAndDeleteImage(partner.image.path);

    res.status(204).json();
  } catch (error) {
    responseError(res, error);
  }
};
