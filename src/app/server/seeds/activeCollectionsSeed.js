// import mongoose from 'mongoose';
// import { PagesEN, PagesUK } from '../models/PageModels/PageModels.js';
// import env from '../utils/evn.js';
// import CollectionModel from '../models/CollectionsModel.js';
// import ReportingModel from '../models/ReportingModels.js';

// // TO USE THIS RUN : node src/app/server/seeds/activeCollectionsSeed.js

// const mainPageSeed = async () => {
//   try {
//     await mongoose.connect(env('MONGODB_URI'));
//     console.log('✅ Connected to MongoDB');

//     const sectionsUK = [
//       {
//         local: 'uk',
//         route: 'collection',
//         section_name: 'active_collections',
//         section_content: {
//           title: 'Активні збори',
//           cards: await CollectionModel.find({
//             type: 'collections',
//             status: 'active',
//             language: 'uk',
//           }),
//         },
//       },
//       {
//         local: 'uk',
//         route: 'collection',
//         section_name: 'reporting',
//         section_content: {
//           title: 'Звітність',
//           cards: await ReportingModel.find({
//             type: 'reporting',
//             language: 'uk',
//           }),
//         },
//       },
//     ];

//     const sectionsEN = [
//       {
//         local: 'en',
//         route: 'collection',
//         section_name: 'active_collections',
//         section_content: {
//           title: 'Active Collections',

//           cards: await CollectionModel.find({
//             type: 'collections',
//             status: 'active',
//             language: 'en',
//           }),
//         },
//       },

//       {
//         local: 'en',
//         route: 'collection',
//         section_name: 'reporting',
//         section_content: {
//           title: 'Reporting',
//           cards: await ReportingModel.find({
//             type: 'reporting',
//             language: 'en',
//           }),
//         },
//       },
//     ];

//     const collectionPageDataUK = new PagesUK({
//       local: 'uk',
//       route: 'collection',
//       sections_list: sectionsUK,
//     });
//     await PagesUK.create(collectionPageDataUK);
//     console.log('📦 Collection Page (UK) data inserted');

//     const collectionsPageDataEN = new PagesEN({
//       local: 'en',
//       route: 'collection',
//       sections_list: sectionsEN,
//     });

//     await PagesEN.create(collectionsPageDataEN);
//     console.log('📦 Collection Page (EN) data inserted');

//     await mongoose.connection.close();
//     console.log('🔒 Database connection closed');
//   } catch (error) {
//     console.error('❌ Error seeding database:', error);
//     await mongoose.connection.close();
//   }
// };

// mainPageSeed();
