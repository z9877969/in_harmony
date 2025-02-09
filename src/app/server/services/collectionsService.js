import CollectionModel from '../models/CollectionsModel';

export const getAllCollections = async () => {
  try {
    const collections = await CollectionModel.find().lean();

    const sortedCollections = collections.reduce(
      (acc, collection) => {
        if (collection.status === 'active') {
          acc.activeCollections.push(collection);
        } else {
          acc.closedCollections.push(collection);
        }
        return acc;
      },
      { activeCollections: [], closedCollections: [] }
    );

    return sortedCollections;
  } catch (error) {
    throw new Error('Failed to retrieve collections');
  }
};

export const getCollectionById = async (id) => {
  const collection = await CollectionModel.findOne({
    _id: id,
  });

  return collection;
};

export const createCollection = async (payload) => {
  const newCollection = new CollectionModel(payload);
  await newCollection.save();
  return newCollection;
};

export const updateCollectionService = async (id, payload, options = {}) => {
  if (!id) {
    return null;
  }

  try {
    const updatedCollection = await CollectionModel.findByIdAndUpdate(
      { _id: id },
      payload,
      {
        new: true,
        includeResultMetadata: true,
        ...options,
      }
    );

    if (!updatedCollection) {
      return null; 
    }

    return updatedCollection.value; 
  } catch (error) {
    return null; 
  }
};
