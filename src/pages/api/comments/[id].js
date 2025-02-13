import connectToDatabase from '@/app/server/lib/mongodb.js';
import { uploadMiddleware } from '../../../app/server/lib/multer.js';
import isValidId from '@/app/server/utils/isValidId.js';
import validateBody from '@/app/server/utils/validateBody.js';
import {
  getCommentById,
  updateComment,
} from '@/app/server/services/commentsService.js';
import CommentsModel from '@/app/server/models/WasHelpedCommentsModels.js';

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'GET') {
    return getCommentById(req, res);
  }

  if (req.method === 'PATCH') {
    isValidId(req, res);
    await uploadMiddleware(req, res);
    validateBody(CommentsModel);
    return updateComment(req, res);
  }

  res.status(405).json({ message: 'Method not allowed' });
}
