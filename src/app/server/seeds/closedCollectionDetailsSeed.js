// import mongoose from 'mongoose';
// import env from '../utils/evn.js';
// import { Pages } from '../models/PageModels.js';

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
//         },
//       },
//       {
//         local: 'ua',
//         route: 'closed',
//         section_name: 'closed_collections',
//         section_content: {
//           title: 'Інші реалізовані проєкти:',
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
//         },
//       },
//       {
//         local: 'en',
//         route: 'closed',
//         section_name: 'closed_collections',
//         section_content: {
//           title: 'Other implemented projects:',
//         },
//       },
//     ];

//     const OpenCollectionsPageDataUA = new Pages({
//       local: 'ua',
//       route: 'closed',
//       sections_list: sectionsUA,
//     });
//     await Pages.create(OpenCollectionsPageDataUA);
//     console.log('📦 ClosedCollectionsDataEN Page (UA) data inserted');

//     const OpenCollectionsDataEN = new Pages({
//       local: 'en',
//       route: 'closed',
//       sections_list: sectionsEN,
//     });

//     await Pages.create(OpenCollectionsDataEN);
//     console.log('📦 ClosedCollectionsDataEN Page (EN) data inserted');

//     await mongoose.connection.close();
//     console.log('🔒 Database connection closed');
//   } catch (error) {
//     console.error('❌ Error seeding database:', error);
//     await mongoose.connection.close();
//   }
// };

// closedCollectionsDetailsSeed();
