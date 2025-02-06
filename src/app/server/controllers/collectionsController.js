import mongoose from 'mongoose';
import { createCollection, getAllCollections, getCollectionById, updateCollectionService } from '../services/collectionsService';
import { env } from '../utils';
import { saveFileToCloudinary, saveFileToUploadDir } from '../lib';
import createHttpError from 'http-errors';

export const handleGetCollections = async (req, res) => {
  try {
    const collections = await getAllCollections();
    res.status(200).json({ status: 200, data: collections });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCollectionByIdController = async (req, res) => {
  try {
    const { id } = req.query;

    const collection = await getCollectionById(id);

    if (!collection) {
      return res.status(404).json({ error: 'Collection not found' });
    }

    res.status(200).json(collection);
  } catch (error) {
    console.error('Error fetching collection:', error);
    res.status(500).json({ error: 'Failed to fetch collection' });
  }
};

export const handleCreateCollection = async (req, res) => {
  try {
    const image = req.files;
    let photoUrls = [];

    if (image && image.length) {
      for (const img of image) {
        let photoUrl;
        if (env('ENABLE_CLOUDINARY') === 'true') {
          photoUrl = await saveFileToCloudinary(img);
        } else {
          photoUrl = await saveFileToUploadDir(img);
        }
        photoUrls.push(photoUrl);
      }
    }

    const collectionData = {
      image: photoUrls,
      title: req.body.title,
      importance: req.body.importance,
      collected: parseInt(req.body.collected, 10),
      target: parseInt(req.body.target, 10),
      peopleDonate: parseInt(req.body.peopleDonate, 10),
      desc: req.body.desc,
      long_desc: req.body.long_desc,
      isOpen: req.body.isOpen === 'true',
      closedAt: req.body.closedAt ? new Date(req.body.closedAt) : null,
    };

    if (
      !collectionData.title ||
      !collectionData.collected ||
      !collectionData.target
    ) {
      return res.status(400).json({ message: 'Неправильні вхідні дані' });
    }

    const newCollection = await createCollection(collectionData);
    res.status(201).json(newCollection);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

export const handleUpdateCollection = async (req, res) => {
  const { id } = req.query;
  const image = req.files;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid ID format' });
  }

  const existingCollection = await getCollectionById(id);

  console.log('Query Is', existingCollection);

  if (!existingCollection) {
    throw createHttpError(404, 'Product not found');
  }

  let photoUrls = existingCollection.image || [];

  if (image && image.length) {
    photoUrls = [];
    for (const img of image) {
      let photoUrl;
      if (env('ENABLE_CLOUDINARY') === 'true') {
        photoUrl = await saveFileToCloudinary(img);
      } else {
        photoUrl = await saveFileToUploadDir(img);
      }
      photoUrls.push(photoUrl);
    }
  }

  const updateData = {
    collected: Number(req.body.collected) || 0,
    peopleDonate: Number(req.body.peopleDonate) || 0,
    isOpen: req.body.isOpen === 'true',
    closedAt: req.body.closedAt ? new Date(req.body.closedAt) : null,
    image: photoUrls || [],
    title: req.body.title || '',
    importance: req.body.importance || '',
    target: Number(req.body.target) || 0 || '',
    alt: req.body.alt || '',
    desc: req.body.desc || '',
    long_desc: req.body.long_desc || '',
  };
  console.log('updateData', updateData);

  const result = await updateCollectionService(
    id,
    { ...req.body },
    {
      image: photoUrls,
    }
  );
  console.log('Result', result);

  // if (!result) {
  //   throw createHttpError(404, 'Product not found');
  // }

  res.json({
    status: 200,
    message: 'Successfully patched a product!',
    data: result,
  });
};
