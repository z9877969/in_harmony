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

    const section = await CollectionModel.findOne({ _id: id }).lean();
    if (!section) {
      return res.status(404).json({ error: `Section not found for ID: ${id}` });
    }

    const combinedData = {
      ...page,
      dynamicSection: section,
    };
    console.log('DATA', combinedData);

    res.status(200).json({ status: 200, data: combinedData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addDynamicSectionToPage = async (req, res) => {
  const { id } = req.query; // отримуємо ID для динамічної секції
  try {
    // Підключення до MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Отримуємо динамічну секцію по id
    const dynamicSection = await CollectionModel.findOne({
      _id: new mongoose.ObjectId(id),
    });

    if (!dynamicSection) {
      return res.status(404).json({ message: 'Collection not found' });
    }

    // Формуємо нову секцію для сторінки
    const updatedSection = {
      local: dynamicSection.language, // мова для секції
      route: 'active',
      section_name: 'collection_details', // Назва секції
      section_content: {
        title: dynamicSection.title,
        image: dynamicSection.image,
        collected: dynamicSection.collected,
        target: dynamicSection.target,
        description: dynamicSection.desc,
        long_desc: dynamicSection.long_desc,
        status: dynamicSection.status,
        // Додаткові дані можна тут додавати...
      },
    };

    // Знаходимо сторінку для оновлення (наприклад, англійська версія)
    const page = await PagesEN.findOne({ route: 'active' });
    if (!page) {
      return res.status(404).json({ message: 'Page not found' });
    }

    // Додаємо нову секцію до списку секцій
    page.sections_list = page.sections_list.map((section) =>
      section.section_name === 'collection_details'
        ? {
            ...section,
            section_content: {
              ...section.section_content,
              ...updatedSection.section_content,
            },
          }
        : section
    );

    // Оновлюємо сторінку в базі даних
    await page.save();

    console.log('✅ Section added to page');
    res.status(200).json(page);
  } catch (error) {
    console.error('❌ Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  } finally {
    mongoose.connection.close();
  }
};

export default addDynamicSectionToPage;
