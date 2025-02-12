// import mongoose from 'mongoose';
// import { saveFileToUploadDir } from '../lib';
// import { saveFileToCloudinary } from '../lib/saveFileToCloudinary';
// import ReportingModel from '../models/ReportingModels';
// import { env } from '../utils';
// import createHttpError from 'http-errors';

export const getAllReportings = async (req, res) => {
  try {
    // const reportings = await ReportingModel.find().lean();

    // res.status(200).json({ status: 200, data: reportings });

    // ===========
    // remove after fixed -Start
    res.status(200).json({ status: 200, data: [] });
    // remove after fixed -End
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getReportingById = async (req, res) => {
  try {
    // const { id } = req.query;

    // const report = await ReportingModel.findOne({
    //   _id: id,
    // });

    // if (!report) {
    //   return res.status(404).json({ error: 'Report not found' });
    // }

    // res.status(200).json(report);

    // =========
    // remove after fixed -End
    res.status(200).json({});
    // remove after fixed -End
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch report' });
  }
};

export const createReporting = async (req, res) => {
  try {
    // const image = req.files;
    // let photoUrls = [];

    // if (image && image.length) {
    //   for (const img of image) {
    //     let photoUrl;
    //     if (env('ENABLE_CLOUDINARY') === 'true') {
    //       photoUrl = await saveFileToCloudinary(img);
    //     } else {
    //       photoUrl = await saveFileToUploadDir(img);
    //     }
    //     photoUrls.push(photoUrl);
    //   }
    // }

    // const newReport = new ReportingModel({
    //   ...req.body,
    //   image: photoUrls,
    // });

    // await newReport.save();

    // res.status(201).json(newReport);

    // =========
    // remove after fixed -End
    res.status(201).json({});
    // remove after fixed -End
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateReportingService = async (req, res) => {
  try {
    // const { id } = req.query;
    // const image = req.files;
    // if (!id) {
    //   return null;
    // }
    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //   return res.status(400).json({ message: 'Invalid ID format' });
    // }
    // const existingReport = await ReportingModel.findById(id);
    // if (!existingReport) {
    //   throw createHttpError(404, 'Report not found');
    // }
    // let photoUrls = existingReport.image || [];
    // if (image && image.length) {
    //   for (const img of image) {
    //     let photoUrl;
    //     if (env('ENABLE_CLOUDINARY') === 'true') {
    //       photoUrl = await saveFileToCloudinary(img);
    //     } else {
    //       photoUrl = await saveFileToUploadDir(img);
    //     }
    //     photoUrls.push(photoUrl);
    //   }
    // }
    // const result = await ReportingModel.findByIdAndUpdate(
    //   id,
    //   {
    //     ...req.body,
    //     image: photoUrls,
    //   },
    //   { new: true, includeResultMetadata: true }
    // );
    // if (!result) {
    //   throw createHttpError(404, 'Report not found');
    // }
    // res.json({
    //   status: 200,
    //   message: 'Successfully patched a report!',
    //   data: result.value,
    // });

    // ============
    // remove after fixed -End
    res.json({});
    // remove after fixed -End
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
