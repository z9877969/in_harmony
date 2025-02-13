import connectToDatabase from '@/app/server/lib/mongodb.js';
import { uploadMiddleware } from '../../../app/server/lib/multer.js';
import isValidId from '@/app/server/utils/isValidId.js';
import validateBody from '@/app/server/utils/validateBody.js';
import TeamMembersModel from '@/app/server/models/TeamMembersModels.js';
import { updatePartner } from '@/app/server/services/partnersService.js';

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'PATCH') {
    isValidId(req, res);
    await uploadMiddleware(req, res);
    validateBody(TeamMembersModel);
    return updatePartner(req, res);
  }

  res.status(405).json({ message: 'Method not allowed' });
}
