import { connectToDatabase } from '@/app/server/lib';
import { getPageByRouteUK } from '@/app/server/services/pagesServices';

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'GET') {
    return getPageByRouteUK(req, res);
  }

  res.status(405).json({ message: 'Method Not Allowed' });
}
