import connectToDatabase from '@/app/server/lib/mongodb.js';
import { uploadMiddleware } from '../../../app/server/lib/multer.js';
import {
  getCollectionByIdController,
  handleUpdateCollection,
} from '@/app/server/controllers/collectionsController.js';
import isValidId from '@/app/server/utils/isValidId.js';
import validateBody from '@/app/server/utils/validateBody.js';
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
