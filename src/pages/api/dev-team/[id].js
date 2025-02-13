import connectToDatabase from '@/app/server/lib/mongodb.js';
import { uploadMiddleware } from '../../../app/server/lib/multer.js';
import isValidId from '@/app/server/utils/isValidId.js';
import validateBody from '@/app/server/utils/validateBody.js';
import { updateMember } from '@/app/server/services/devTeamService.js';
import TeamMembersModel from '@/app/server/models/TeamMembersModels.js';

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
    return updateMember(req, res);
  }

  res.status(405).json({ message: 'Method not allowed' });
}
