// import mongoose from 'mongoose';
// import { PagesEN, PagesUA } from '../models/PageModels/PageModels.js';
// import env from '../utils/evn.js';
// // TO USE THIS RUN : node src/app/server/seeds/activeCollectionsSeed.js

// const activeCollectionsSeed = async () => {
//   try {
//     await mongoose.connect(env('MONGODB_URI'));
//     console.log('✅ Connected to MongoDB');

//     const sectionsUA = [
//       {
//         local: 'ua',
//         route: 'collection',
//         section_name: 'active_collections',
//         section_content: {
//           title: 'Активні збори',
//         },
//       },
//       {
//         local: 'ua',
//         route: 'collection',
//         section_name: 'closed_collections',
//         section_content: {
//           title: 'Звітність',
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
//         },
//       },

//       {
//         local: 'en',
//         route: 'collection',
//         section_name: 'closed_collections',
//         section_content: {
//           title: 'Reporting',
//         },
//       },
//     ];

//     const collectionPageDataUA = new PagesUA({
//       local: 'ua',
//       route: 'collection',
//       sections_list: sectionsUA,
//     });
//     await PagesUA.create(collectionPageDataUA);
//     console.log('📦 Collection Page (UA) data inserted');

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

// activeCollectionsSeed();
