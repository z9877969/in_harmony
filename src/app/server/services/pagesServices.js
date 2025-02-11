import CollectionModel from '../models/CollectionsModel';
import { PagesEN, PagesUA } from '../models/PageModels/PageModels';

export const getPageUK = async (req, res) => {
  try {
    const page = await PagesUA.find().lean();

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

export const getPageByRouteUA = async (req, res) => {
  try {
    const { route } = req.query;

    const page = await PagesUA.findOne({ route }).lean();

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

export const getCollectionDetailsByIdEN = async (req, res) => {
  try {
    const { route, id, sectionName = 'collection_details' } = req.query;

    const page = await PagesEN.findOne({ route }).lean();
    if (!page) {
      return res
        .status(404)
        .json({ error: `Page not found for route: ${route}` });
    }

    const collection = await CollectionModel.findOne({ _id: id }).lean();
    if (!collection) {
      return res
        .status(404)
        .json({ error: `Collection not found for ID: ${id}` });
    }

    const updatedSections = page.sections_list.map((section) => {
      if (section.section_name === sectionName) {
        return {
          ...section,
          section_content: { ...section.section_content, ...collection },
        };
      }
      return section;
    });

    res.status(200).json({ status: 200, data: updatedSections });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCollectionDetailsByIdUA = async (req, res) => {
  try {
    const { route, id, sectionName = 'collection_details' } = req.query;

    const page = await PagesUA.findOne({ route }).lean();
    if (!page) {
      return res
        .status(404)
        .json({ error: `Page not found for route: ${route}` });
    }

    const collection = await CollectionModel.findOne({ _id: id }).lean();
    if (!collection) {
      return res
        .status(404)
        .json({ error: `Collection not found for ID: ${id}` });
    }

    const updatedSections = page.sections_list.map((section) => {
      if (section.section_name === sectionName) {
        return {
          ...section,
          section_content: { ...section.section_content, ...collection },
        };
      }
      return section;
    });

    res.status(200).json({ status: 200, data: updatedSections });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
