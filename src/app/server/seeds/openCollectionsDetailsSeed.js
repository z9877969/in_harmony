// import mongoose from 'mongoose';
// import env from '../utils/evn.js';
// import { Pages } from '../models/PageModels.js';

// // TO USE THIS RUN : node src/app/server/seeds/openCollectionsDetailsSeed.js

// const openCollectionsDetailsSeed = async () => {
//   try {
//     await mongoose.connect(env('MONGODB_URI'));
//     console.log('✅ Connected to MongoDB');

//     const sectionsUA = [
//       {
//         local: 'ua',
//         route: 'active',
//         section_name: 'collection_details',
//         section_content: [],
//       },
//       {
//         local: 'ua',
//         route: 'active',
//         section_name: 'together',
//         section_content: {
//           title: 'Разом до мети',
//           whatCanBeDone: {
//             title: 'Що можна зробити:',
//             whatCanBeDoneItems: [
//               'Поділитися збором із друзями',
//               'Розказати тим, кого це може зацікавити',
//               'Задонатити комфортну суму',
//             ],
//           },
//           supportForm: {
//             title: 'Разом ми можемо більше – підтримайте наш фонд!',
//             radioPriceItems: ['200', '500', '1000'],
//             currency: 'UAH',
//             submitBtnText: 'До сплати',
//             otherPaymentsLinkText: 'Інші способи оплати',
//           },
//           share: {
//             title: 'Поділитися',
//             text: 'Розкажіть про збір друзям — це теж допомога!',
//             social: [
//               { name: 'instagram', url: 'https://www.instagram.com' },
//               { name: 'telegram', url: 'https://www.telegram.com' },
//               { name: 'facebook', url: 'https://www.facebook.com' },
//             ],
//           },
//         },
//       },
//       {
//         local: 'ua',
//         route: 'active',
//         section_name: 'active_collections',
//         section_content: {
//           title: 'Інші активні збори:',
//         },
//       },
//     ];

//     const sectionsEN = [
//       {
//         local: 'en',
//         route: 'active',
//         section_name: 'collection_details',
//         section_content: [],
//       },
//       {
//         local: 'en',
//         route: 'active',
//         section_name: 'together',
//         section_content: {
//           title: 'Together Towards the Goal',
//           whatCanBeDone: {
//             title: 'What Can Be Done:',
//             whatCanBeDoneItems: [
//               'Share the collection with friends',
//               'Tell those who might be interested',
//               'Donate a comfortable amount',
//             ],
//           },
//           supportForm: {
//             title: 'Together We Can Do More – Support Our Fund!',
//             radioPriceItems: ['200', '500', '1000'],
//             currency: 'UAH',
//             submitBtnText: 'Proceed to Payment',
//             otherPaymentsLinkText: 'Other Payment Methods',
//           },
//           share: {
//             title: 'Share',
//             text: 'Tell your friends about the collection — that’s also help!',
//             social: [
//               { name: 'instagram', url: 'https://www.instagram.com' },
//               { name: 'telegram', url: 'https://www.telegram.com' },
//               { name: 'facebook', url: 'https://www.facebook.com' },
//             ],
//           },
//         },
//       },
//       {
//         local: 'en',
//         route: 'active',
//         section_name: 'active_collections',
//         section_content: {
//           title: 'Other Active Collections:',
//         },
//       },
//     ];

//     const OpenCollectionsPageDataUA = new Pages({
//       local: 'ua',
//       route: 'active',
//       sections_list: sectionsUA,
//     });
//     await Pages.create(OpenCollectionsPageDataUA);
//     console.log('📦 OpenCollectionsDataEN Page (UA) data inserted');

//     const OpenCollectionsDataEN = new Pages({
//       local: 'en',
//       route: 'active',
//       sections_list: sectionsEN,
//     });

//     await Pages.create(OpenCollectionsDataEN);
//     console.log('📦 OpenCollectionsDataEN Page (EN) data inserted');

//     await mongoose.connection.close();
//     console.log('🔒 Database connection closed');
//   } catch (error) {
//     console.error('❌ Error seeding database:', error);
//     await mongoose.connection.close();
//   }
// };

// openCollectionsDetailsSeed();
