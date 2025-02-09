import { uploadMiddleware } from '../../../app/server/lib/multer.js';
import connectToDatabase from '@/app/server/lib/mongodb';
import {
  handleCreateReport,
  handleGetReportings,
} from '@/app/server/controllers/reportingsController.js';

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'GET') {
    return handleGetReportings(req, res);
  }

  if (req.method === 'POST') {
    await uploadMiddleware(req, res);
    await handleCreateReport(req, res);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }

  res.status(405).json({ message: 'Method Not Allowed' });
}
