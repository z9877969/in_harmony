import createHttpError from 'http-errors';
import { USER_ROLE } from '../../constants';

export const checkAdminRole = (next) => (req, res) => {
  try {
    if (req.user.role !== USER_ROLE.ADMIN) {
      throw createHttpError(
        403,
        'Access denied: User`s role does not allow this operation'
      );
    }
    next(req, res);
  } catch (error) {
    res.status(error.status).json({ message: error.message });
  }
};
