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
