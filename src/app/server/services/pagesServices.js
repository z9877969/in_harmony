import { PagesEN, PagesUK } from '../models/PageModels';

export const getPageUK = async (req, res) => {
  try {
    const page = await PagesUK.find().lean();

    res.status(200).json({ status: 200, sections: page });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPageEN = async (req, res) => {
  try {
    const page = await PagesEN.find().lean();

    res.status(200).json({ status: 200, sections: page });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPageByRouteUK = async (req, res) => {
  try {
    const { route } = req.query;

    const page = await PagesUK.findOne({ route }).lean();

    if (!page) {
      throw new Error(`Page not found for route: ${route}`);
    }

    res.status(200).json({ status: 200, section: page });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPageByRouteEN = async (req, res) => {
  try {
    const { route } = req.query;

    const page = await PagesEN.findOne({ route }).lean();

    if (!page) {
      throw new Error(`Page not found for route: ${route}`);
    }

    res.status(200).json({ status: 200, section: page });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
