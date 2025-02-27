import { connectToDatabase } from '@/app/server/lib';
import { getDiscardCollectionsList } from '@/app/server/services/discardCollectionsListService';

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
export default async function handler(req, res) {
  await connectToDatabase();
  if (req.method === 'GET') {
    return getDiscardCollectionsList(req, res);
  }

  res.status(405).json({ message: 'Method not allowed' });
}
