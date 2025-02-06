import { CollectionSchema } from '../models';

export const getAllCollections = async () => {
  try {
    const collections = await CollectionSchema.find().lean();

    const sortedCollections = collections.reduce(
      (acc, collection) => {
        if (collection.isOpen) {
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
    console.error('Error retrieving collections:', error);
    throw new Error('Failed to retrieve collections');
  }
};

export const getCollectionById = async (id) => {
  const collection = await CollectionSchema.findOne({
    _id: id,
  });

  return collection;
};

export const createCollection = async (payload) => {
  const newCollection = new CollectionSchema(payload);
  await newCollection.save();
  return newCollection;
};

//UPDATE

export const updateCollectionService = async (id, payload, options = {}) => {
  if (!id) {
    console.error('Collection not found');
    return null;
  }

  try {
    const updatedCollection = await CollectionSchema.findByIdAndUpdate(
      { _id: id },
      payload,
      {
        new: true,
        includeResultMetadata: true,
        ...options,
      }
    );
    // console.log('ID', id);

    // console.log('updatedCollection', updatedCollection);

    // if (updatedCollection) {
    //   // Find the actual collection within the array
    //   const foundCollection = collection.collections.updateOne(
    //     (col) => col._id.toString() === id
    //   );
    //   return foundCollection || null;
    // }

    if (!updatedCollection) {
      console.error('Update failed, collection not found or unchanged');
      return null; // Handle this case according to your requirements
    }

    // console.log('Updated Collection:', updatedCollection);
    return updatedCollection.value; // Return the updated document
  } catch (error) {
    console.error('Error updating collection:', error);
    return null; // Handle this case according to your requirements
  }
};
