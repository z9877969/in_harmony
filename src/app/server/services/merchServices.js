import createHttpError from 'http-errors';
import { Pages as PageModel } from '../models/PageModels';

export const getMerchData = async (_, res) => {
  const result = await PageModel.find({ route: 'header' });

  const respData = result.map((el) => {
    const [{ status, content, link, locale }] = el.sections_list;
    return { _id: el._id, status, content, link, locale };
  });

  res.json(respData);
};

export const updateMerch = async (req, res) => {
  //   const {  content, link, status } = req.body;
  const { locale } = req.query;

  const setFields = {};
  for (const [key, value] of Object.entries(req.body)) {
    setFields[`sections_list.$[elem].${key}`] = value;
  }

  const data = await PageModel.findOneAndUpdate(
    { route: 'header', local: locale },
    { $set: setFields },
    {
      arrayFilters: [{ 'elem.section_name': 'merch_button' }],
      new: true,
    }
  );

  if (!data) {
    throw createHttpError(404, 'Merch info not found');
  }
  const {
    sections_list: [{ content, link, status }],
  } = data;
  res.json({
    status,
    content,
    link,
  });
};
