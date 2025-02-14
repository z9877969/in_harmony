import { uploadMiddleware } from '../../../app/server/lib/multer.js';
import connectToDatabase from '@/app/server/lib/mongodb';
import {
  createMember,
  getAllTeam,
} from '@/app/server/services/devTeamService.js';

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'GET') {
    return getAllTeam(req, res);
  }

  if (req.method === 'POST') {
    await uploadMiddleware(req, res);
    await createMember(req, res);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }

  res.status(405).json({ message: 'Method Not Allowed' });
}
