// import mongoose from 'mongoose';
// import { PagesEN, PagesUA } from '../models/PageModels/PageModels.js';
// import env from '../utils/evn.js';
// import CollectionModel from '../models/CollectionsModel.js';
// import CommentsModel from '../models/WasHelpedCommentsModels.js';

// // TO USE THIS RUN : node src/app/server/seeds/closedCollectionDetailsSeed.js

// const closedCollectionsDetailsSeed = async () => {
//   try {
//     await mongoose.connect(env('MONGODB_URI'));
//     console.log('✅ Connected to MongoDB');

//     const sectionsUA = [
//       {
//         local: 'ua',
//         route: 'closed',
//         section_name: 'collection_details',
//         section_content: [],
//       },
//       {
//         local: 'ua',
//         route: 'closed',
//         section_name: 'comments',
//         section_content: {
//           title: 'Відгуки тих, кому допомогли',
//           cards: await CommentsModel.find({
//             type: 'was-helped',
//             language: 'ua',
//           }),
//         },
//       },
//       {
//         local: 'ua',
//         route: 'closed',
//         section_name: 'other_collections',
//         section_content: {
//           title: 'Інші реалізовані проєкти:',
//           cards: await CollectionModel.find({
//             type: 'collections',
//             status: 'closed',
//             language: 'ua',
//           }),
//         },
//       },
//     ];

//     const sectionsEN = [
//       {
//         local: 'en',
//         route: 'closed',
//         section_name: 'collection_details',
//         section_content: [],
//       },
//       {
//         local: 'en',
//         route: 'closed',
//         section_name: 'comments',
//         section_content: {
//           title: 'Reviews from those who were helped',
//           cards: await CommentsModel.find({
//             type: 'was-helped',
//             language: 'en',
//           }),
//         },
//       },
//       {
//         local: 'en',
//         route: 'closed',
//         section_name: 'other_collections',
//         section_content: {
//           title: 'Other implemented projects:',
//           cards: await CollectionModel.find({
//             type: 'collections',
//             status: 'closed',
//             language: 'en',
//           }),
//         },
//       },
//     ];

//     const OpenCollectionsPageDataUA = new PagesUA({
//       local: 'ua',
//       route: 'closed',
//       sections_list: sectionsUA,
//     });
//     await PagesUA.create(OpenCollectionsPageDataUA);
//     console.log('📦 ClosedCollectionsDataEN Page (UA) data inserted');

//     const OpenCollectionsDataEN = new PagesEN({
//       local: 'en',
//       route: 'closed',
//       sections_list: sectionsEN,
//     });

//     await PagesEN.create(OpenCollectionsDataEN);
//     console.log('📦 ClosedCollectionsDataEN Page (EN) data inserted');

//     await mongoose.connection.close();
//     console.log('🔒 Database connection closed');
//   } catch (error) {
//     console.error('❌ Error seeding database:', error);
//     await mongoose.connection.close();
//   }
// };

// closedCollectionsDetailsSeed();
