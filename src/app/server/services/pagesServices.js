import mongoose from 'mongoose';
import CollectionModel from '../models/CollectionsModel';
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

export const getPageWithSectionById = async (req, res) => {
  try {
    const { route, id } = req.query;
    console.log('Route:', route, 'ID:', id);

    const page = await PagesEN.findOne({ route }).lean();
    if (!page) {
      return res
        .status(404)
        .json({ error: `Page not found for route: ${route}` });
    }

    const collection = await CollectionModel.findOne({ _id: id }).lean();

    const combinedData = {
      ...page.sections_list[0],
      section_content: { ...collection },
    };
    console.log('DATA', combinedData);

    const addToPage = { ...page.sections_list, ...combinedData };

    res.status(200).json({ status: 200, data: addToPage });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
