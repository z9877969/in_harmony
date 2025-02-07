import { handleGetMainPageUA } from '../../../../app/server/controllers/mainPageController.js';
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
    return handleGetMainPageUA(req, res);
  }

  res.status(405).json({ message: 'Method Not Allowed' });
}
