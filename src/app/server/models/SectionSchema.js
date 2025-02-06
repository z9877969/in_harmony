import mongoose from 'mongoose';

const progressSchema = new mongoose.Schema({
  title: { type: String, default: '' },
  text: { type: String, default: '' },
  item: { type: String, default: '' },
  total: { type: String, default: '' },
  currency: { type: String, default: '' },
  term: { type: String, default: '' },
  days: { type: String, default: '' },
  period: { type: String, default: '' },
  imageUrl: { type: String, default: '' },
  type: { type: String, required: true },
});

export const ProgressModel = mongoose.model('Progress', progressSchema);

const collectionSchema = new mongoose.Schema({
  title: { type: String },
  importance: { type: String },
  image: { type: [String], default: [] },
  collected: { type: Number, default: 0 },
  target: { type: Number },
  alt: { type: String, default: '' },
  peopleDonate: { type: Number, default: 0 },
  desc: { type: String },
  long_desc: { type: String, default: '' },
  status: { type: String, enum: ['active', 'closed'], default: 'active' },
  createdAt: { type: Date, default: Date.now },
  closedAt: { type: Date, default: null },
  type: { type: String, required: true },
});

export const CollectionModel = mongoose.model('Collection', collectionSchema);

const sectionSchema = new mongoose.Schema({
  local: { type: String, required: true },
  title: { type: String },
  sub_titles: { type: String },
  description: { type: String },
  alt: { type: String },
  list: { type: [mongoose.Schema.Types.Mixed] },
  type: {
    type: String,
    required: true,
    enum: ['collections', 'progress', 'hero', 'about', 'none'],
  },
  route: { type: String, required: true, enum: ['main', 'about'] },

  motivation: { type: String },
});
sectionSchema.methods.setListByType = async function () {
  if (this.type === 'collections') {
    const collectionCards = await CollectionModel.find({
      type: 'collections',
      status: 'active',
    });
    this.list = collectionCards.map((card) => card);
  } else if (this.type === 'progress') {
    const progressCards = await CollectionModel.find({
      type: 'progress',
    });
    this.list = progressCards.map((card) => card);
  } else {
    this.list = [];
  }
};

export const SectionsSchema =
  mongoose.models.Sections || mongoose.model('Sections', sectionSchema);

// export const SectionsSchema =
//   mongoose.models.Sections || mongoose.model('Sections', sectionSchema);

export default SectionsSchema;
