import { uploadMiddleware } from '../../../lib/multer.js';
import {
  getCollectionByIdController,
  handleUpdateCollection,
} from '../../../controllers/collectionsController';
import connectToDatabase from '../../../lib/mongodb.js';
import isValidId from '@/utils/isValidId.js';
import validateBody from '@/utils/validateBody.js';
import CollectionsSchema from '@/models/CollectionSchema.js';
export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'GET') {
    return getCollectionByIdController(req, res);
  }

  if (req.method === 'PATCH') {
    isValidId(req, res);
    await uploadMiddleware(req, res);
    validateBody(CollectionsSchema);
    return handleUpdateCollection(req, res);
  }

  res.status(405).json({ message: 'Method not allowed' });
}
