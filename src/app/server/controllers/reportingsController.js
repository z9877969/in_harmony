import mongoose from 'mongoose';
import createHttpError from 'http-errors';
import { env } from '../utils';
import { saveFileToCloudinary } from '../lib/saveFileToCloudinary.js';
import saveFileToUploadDir from '../lib/saveFileToUploadDir.js';
import {
  createReporting,
  getAllReportings,
  getReportingById,
  updateReportingService,
} from '../services/reportingsService';

//get all collections
export const handleGetReportings = async (req, res) => {
  try {
    const reportings = await getAllReportings();
    res.status(200).json({ status: 200, data: reportings });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get collection by id

export const getReportById = async (req, res) => {
  try {
    const { id } = req.query;

    const report = await getReportingById(id);

    if (!report) {
      return res.status(404).json({ error: 'Report not found' });
    }

    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch report' });
  }
};

//create collection

export const handleCreateReport = async (req, res) => {
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

    // const collectionData = {
    //   image: photoUrls,
    //   title: req.body.title,
    //   importance: req.body.importance,
    //   collected: parseInt(req.body.collected, 10),
    //   target: parseInt(req.body.target, 10),
    //   peopleDonate: parseInt(req.body.peopleDonate, 10),
    //   desc: req.body.desc,
    //   long_desc: req.body.long_desc,
    //   isOpen: req.body.isOpen === 'true',
    //   closedAt: req.body.closedAt ? new Date(req.body.closedAt) : null,
    //   type: req.body.type,
    // };

    // if (
    //   !collectionData.title ||
    //   !collectionData.collected ||
    //   !collectionData.target
    // ) {
    //   return res.status(400).json({ message: 'Invalid input data' });
    // }

    const newReport = await createReporting(req.body);

    res.status(201).json(newReport);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

//update collection

export const handleUpdateReport = async (req, res) => {
  const { id } = req.query;
  const image = req.files;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid ID format' });
  }
  const existingReport = await getReportingById(id);

  if (!existingReport) {
    throw createHttpError(404, 'Report not found');
  }

  let photoUrls = existingReport.image || [];

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

  const result = await updateReportingService(id, {
    ...req.body,
    image: photoUrls,
  });

  if (!result) {
    throw createHttpError(404, 'Report not found');
  }

  res.json({
    status: 200,
    message: 'Successfully patched a report!',
    data: result,
  });
};
