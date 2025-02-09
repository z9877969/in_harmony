import ReportingsModel from '../models/ReportingModels';

export const getAllReportings = async () => {
  try {
    const reportings = await ReportingsModel.find().lean();

    return reportings;
  } catch (error) {
    throw new Error('Failed to retrieve reportings');
  }
};

export const getReportingById = async (id) => {
  const collection = await ReportingsModel.findOne({
    _id: id,
  });

  return collection;
};

export const createReporting = async (payload) => {
  const newReport = new ReportingsModel(payload);
  await newReport.save();
  return newReport;
};

export const updateReportingService = async (id, payload, options = {}) => {
  if (!id) {
    return null;
  }

  try {
    const updatedReport = await ReportingsModel.findByIdAndUpdate(
      { _id: id },
      payload,
      {
        new: true,
        includeResultMetadata: true,
        ...options,
      }
    );

    if (!updatedReport) {
      return null;
    }

    return updatedReport.value;
  } catch (error) {
    return null;
  }
};
