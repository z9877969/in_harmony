import { MainPageModelUA, MainPageModelUK } from '../models/mainPageModels';

export const getMainPageUA = async () => {
  try {
    const page = await MainPageModelUA.find().lean();

    return page;
  } catch (error) {
    console.error('Error retrieving collections:', error);
    throw new Error('Failed to retrieve collections');
  }
};

export const getMainPageUK = async () => {
  try {
    const page = await MainPageModelUK.find().lean();

    return page;
  } catch (error) {
    console.error('Error retrieving collections:', error);
    throw new Error('Failed to retrieve collections');
  }
};
