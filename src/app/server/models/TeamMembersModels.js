import mongoose from 'mongoose';

const membersSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  position: { type: String },
  image: { type: [String], default: [] },
  social: { type: [mongoose.Schema.Types.Mixed] },
  language: { type: String },
  type: { type: String, enum: ['team'] },
});

export const TeamMembersModel =
  mongoose.models['Team-members'] ||
  mongoose.model('Team-members', membersSchema);

export default TeamMembersModel;
