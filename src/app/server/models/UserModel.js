import mongoose from 'mongoose';
import { USER_ROLE } from '@/app/server/constants';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: USER_ROLE.EDITOR,
  },
  name: {
    type: String,
    required: true,
  },
});

export const UserModel =
  mongoose.models['user'] || mongoose.model('user', userSchema);

export default UserModel;
