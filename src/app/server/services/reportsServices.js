import createHttpError from 'http-errors';
import FiltersModel from '../models/FilterModel';
import { LANGUAGE_TYPE } from '@/app/server/constants';

export const getAllReports = async (req, res) => {
  const { locale = LANGUAGE_TYPE.UA } = req.query;

  const result = await FiltersModel.find({ language: locale });

  res.json(result);
};

export const createReport = async (req, res) => {
  //   const { month, year, url, language } = req.body;

  const { month, year, url, language, _id } = await FiltersModel.create(
    req.body
  );

  res.json({
    _id,
    month,
    year,
    url,
    language,
  });
};

export const updateReport = async (req, res) => {
  //   const { month, year, url, language } = req.body;
  const { id } = req.query;
  const report = await FiltersModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!report) {
    throw createHttpError(404, 'Report not found');
  }
  const { month, year, url, language, _id } = report;
  res.json({
    _id,
    month,
    year,
    url,
    language,
  });
};

export const removeReport = async (req, res) => {
  const { id } = req.query;
  const report = await FiltersModel.findByIdAndDelete(id);
  if (!report) {
    throw createHttpError(404, 'Report not found');
  }
  res.status(204).json();
};
