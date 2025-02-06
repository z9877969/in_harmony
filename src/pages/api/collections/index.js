import {
  handleCreateCollection,
  handleGetCollections,
  handleUpdateCollection,
} from '@/app/server/controllers/collectionsController';
import { uploadMiddleware } from '@/app/server/lib';
import connectToDatabase from '@/app/server/lib/mongodb';

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'GET') {
    return handleGetCollections(req, res);
  }

  if (req.method === 'POST') {
    await uploadMiddleware(req, res);
    await handleCreateCollection(req, res);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }

  if (req.method === 'PATCH') {
    await uploadMiddleware(req, res);

    return handleUpdateCollection(req, res);
  }
  res.status(405).json({ message: 'Метод не дозволений' });
}
