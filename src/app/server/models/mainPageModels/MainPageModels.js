import mongoose from 'mongoose';
import SectionsSchema from '../SectionSchema.js';

export const mainPageSchemaUK = new mongoose.Schema({
  local: { type: String, required: true },
  list: { type: [mongoose.Schema.Types.Object] },
  route: { type: String, required: true },
});

export const mainPageSchemaUA = new mongoose.Schema({
  local: { type: String, required: true },
  route: { type: String, required: true, enum: ['main', 'about'] },
  list: { type: [mongoose.Schema.Types.Object] },
});

mainPageSchemaUK.methods.setListByType = async function () {
  if (this.local === 'uk') {
    const sections = await SectionsSchema.find({
      local: 'uk',
      route: 'main',
    });
    this.list = sections.map((section) => section);
  } else {
    this.list = [];
  }
};

mainPageSchemaUA.methods.setListByType = async function () {
  if (this.local === 'ua') {
    const sections = await SectionsSchema.find({
      local: 'ua',
      route: 'main',
    });
    this.list = sections.map((section) => section);
  } else {
    this.list = [];
  }
};

export const MainPageModelUK =
  mongoose.models.MainPageUK || mongoose.model('MainPageUK', mainPageSchemaUK);
export const MainPageModelUA =
  mongoose.models.MainPageUA || mongoose.model('MainPageUA', mainPageSchemaUA);
