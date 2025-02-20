import CollectionModel from '../models/CollectionsModel';
import { Pages } from '../models/PageModels';
import { updatePages, updateSections } from '../utils';

export const getPage = async (req, res) => {
  try {
    const { locale } = req.query;
    const pages = await Pages.find({ local: locale }).lean();
    const updatedPages = await updatePages(pages);

    res.status(200).json({
      status: 200,
      section: { ...pages, ...updatedPages },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPageByRoute = async (req, res) => {
  try {
    const { route, locale } = req.query;

    const page = await Pages.findOne({ route: route, local: locale }).lean();
    if (!page) {
      throw new Error(`Page not found for route: ${route}`);
    }
    const updatedSections = await updateSections(page);

    res.status(200).json({
      status: 200,
      section: { ...page, sections_list: updatedSections },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCollectionDetailsById = async (req, res) => {
  try {
    const { route, id, sectionName = 'collection_details', locale } = req.query;

    const page = await Pages.findOne({ route: route, local: locale }).lean();
    if (!page) {
      return res
        .status(404)
        .json({ error: `Page not found for route: ${route}` });
    }

    const updatedSections = await updateSections(page);

    const collection = await CollectionModel.findOne({ _id: id }).lean();
    if (!collection) {
      return res
        .status(404)
        .json({ error: `Collection not found for ID: ${id}` });
    }

    const finalSections = updatedSections.map((section) => {
      if (section.section_name === sectionName) {
        return {
          ...section,
          section_content: { ...section.section_content, ...collection },
        };
      }
      return section;
    });

    const updatedPage = {
      ...page,
      sections_list: finalSections,
    };

    res.status(200).json({ status: 200, sections: updatedPage });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
