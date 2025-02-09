import { handleGetPagesEN } from '@/app/server/controllers/pagesController';
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
    return handleGetPagesEN(req, res);
  }

  res.status(405).json({ message: 'Method Not Allowed' });
}

