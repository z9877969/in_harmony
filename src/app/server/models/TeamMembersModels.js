import mongoose from 'mongoose';

const membersSchema = new mongoose.Schema({
  firstName: { type: String, default: null },
  lastName: { type: String, default: null },
  position: { type: String, default: null },
  image: { type: [String], default: [] },
  social: { type: [mongoose.Schema.Types.Mixed] },
  language: { type: String, required: true },
  type: { type: String, enum: ['team'], required: true },
});

export const TeamMembersModel =
  mongoose.models['Team-members'] ||
  mongoose.model('Team-members', membersSchema);

export default TeamMembersModel;
