import { MainPageModelUA, MainPageModelUK } from '../models/PageModels';

export const getMainPageUA = async () => {
  try {
    const page = await MainPageModelUA.find().lean();

    return page;
  } catch (error) {
    throw new Error('Failed to retrieve collections');
  }
};

export const getMainPageUK = async () => {
  try {
    const page = await MainPageModelUK.find().lean();

    return page;
  } catch (error) {
    throw new Error('Failed to retrieve collections');
  }
};
