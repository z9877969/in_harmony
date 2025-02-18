import connectToDatabase from '@/app/server/lib/mongodb';
import { uploadMiddleware } from '@/app/server/lib/multer';
import {
  createCollection,
  getAllCollections,
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
    return getAllCollections(req, res);
  }

  if (req.method === 'POST') {
    await uploadMiddleware(req, res);
    await createCollection(req, res);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }

  if (req.method === 'PATCH') {
    await uploadMiddleware(req, res);
    return updateCollectionService(req, res);
  }
  res.status(405).json({ message: 'Method Not Allowed' });
}
