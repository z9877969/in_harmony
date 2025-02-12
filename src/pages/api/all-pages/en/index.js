import connectToDatabase from '@/app/server/lib/mongodb';
import { getPageEN } from '@/app/server/services/pagesServices';

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'GET') {
    return getPageEN(req, res);
  }

  res.status(405).json({ message: 'Method Not Allowed' });
}
