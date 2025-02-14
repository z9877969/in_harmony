import connectToDatabase from '@/app/server/lib/mongodb.js';
import { uploadMiddleware } from '../../../app/server/lib/multer.js';
import isValidId from '@/app/server/utils/isValidId.js';
import validateBody from '@/app/server/utils/validateBody.js';
import CollectionModel from '@/app/server/models/CollectionsModel.js';
import {
  getCollectionById,
  updateCollectionService,
} from '@/app/server/services/collectionsService.js';
export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'GET') {
    return getCollectionById(req, res);
  }

  if (req.method === 'PATCH') {
    isValidId(req, res);
    await uploadMiddleware(req, res);
    validateBody(CollectionModel);
    return updateCollectionService(req, res);
  }

  res.status(405).json({ message: 'Method not allowed' });
}
