import { PagesEN, PagesUK } from '../models/PageModels';

export const getPageUK = async () => {
  try {
    const page = await PagesUK.find().lean();

    return page;
  } catch (error) {
    throw new Error('Failed to retrieve collections');
  }
};

export const getPageEN = async () => {
  try {
    const page = await PagesEN.find().lean();

    return page;
  } catch (error) {
    throw new Error('Failed to retrieve collections');
  }
};

export const getPageByRouteUK = async (route) => {
  try {
    const page = await PagesUK.findOne({ route }).lean();

    if (!page) {
      throw new Error(`Page not found for route: ${route}`);
    }

    return page;
  } catch (error) {
    throw new Error('Failed to retrieve the page');
  }
};


export const getPageByRouteEN = async (route) => {
  try {
    const page = await PagesEN.findOne({ route }).lean();

    if (!page) {
      throw new Error(`Page not found for route: ${route}`);
    }

    return page;
  } catch (error) {
    throw new Error('Failed to retrieve the page');
  }
};
