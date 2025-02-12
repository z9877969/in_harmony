// import mongoose from 'mongoose';
// import TeamMembersModel from '../models/TeamMembersModels.js';
// import env from '../utils/evn.js';

// // TO USE THIS RUN : node src/app/server/seeds/teamMembersSeed.js

// const reportingSeed = async () => {
//   try {
//     await mongoose.connect(env('MONGODB_URI'));
//     console.log('✅ Connected to MongoDB');

//     const membersEN = [
//       {
//         language: 'ua',
//         firstName: 'Ілона',
//         lastName: 'Морараш',
//         position: 'UI/UX Designer',
//         image: '/images/default_image.webp',
//         social: [
//           { name: 'instagram', url: 'https://www.instagram.com' },
//           { name: 'telegram', url: 'https://www.telegram.com' },
//           { name: 'facebook', url: 'https://www.facebook.com' },
//           { name: 'linkedin', url: 'https://www.linkedin.com' },
//           { name: 'behance', url: 'https://www.behance.net' },
//         ],
//         type: 'team',
//       },
//       {
//         language: 'ua',

//         firstName: 'Ганна',
//         lastName: 'Желдак',
//         position: 'UI/UX Designer',
//         image: '/images/default_image.webp',
//         social: [
//           { name: 'instagram', url: 'https://www.instagram.com' },
//           { name: 'telegram', url: 'https://www.telegram.com' },
//           { name: 'facebook', url: 'https://www.facebook.com' },
//           { name: 'linkedin', url: 'https://www.linkedin.com' },
//           { name: 'behance', url: 'https://www.behance.net' },
//         ],
//         type: 'team',
//       },
//       {
//         language: 'ua',

//         firstName: 'Наталія',
//         lastName: 'Медведєва',
//         position: 'UI/UX Designer',
//         image: '/images/default_image.webp',
//         social: [
//           { name: 'instagram', url: 'https://www.instagram.com' },
//           { name: 'telegram', url: 'https://www.telegram.com' },
//           { name: 'facebook', url: 'https://www.facebook.com' },
//           { name: 'linkedin', url: 'https://www.linkedin.com' },
//           { name: 'behance', url: 'https://www.behance.net' },
//         ],
//         type: 'team',
//       },
//     ];

//     await TeamMembersModel.insertMany(membersEN);
//     console.log('📦 Reporting inserted');

//     const membersUA = [
//       {
//         language: 'en',
//         firstName: 'Ilona',
//         lastName: 'Morarash',
//         position: 'UI/UX Designer',
//         image: '/images/default_image.webp',
//         social: [
//           { name: 'instagram', url: 'https://www.instagram.com' },
//           { name: 'telegram', url: 'https://www.telegram.com' },
//           { name: 'facebook', url: 'https://www.facebook.com' },
//           { name: 'linkedin', url: 'https://www.linkedin.com' },
//           { name: 'behance', url: 'https://www.behance.net' },
//         ],
//         type: 'team',
//       },
//       {
//         language: 'en',
//         firstName: 'Hanna',
//         lastName: 'Zheldak',
//         position: 'UI/UX Designer',
//         image: '/images/default_image.webp',
//         social: [
//           { name: 'instagram', url: 'https://www.instagram.com' },
//           { name: 'telegram', url: 'https://www.telegram.com' },
//           { name: 'facebook', url: 'https://www.facebook.com' },
//           { name: 'linkedin', url: 'https://www.linkedin.com' },
//           { name: 'behance', url: 'https://www.behance.net' },
//         ],
//         type: 'team',
//       },
//       {
//         language: 'en',
//         firstName: 'Nataliia',
//         lastName: 'Medvedieva',
//         position: 'UI/UX Designer',
//         image: '/images/default_image.webp',
//         social: [
//           { name: 'instagram', url: 'https://www.instagram.com' },
//           { name: 'telegram', url: 'https://www.telegram.com' },
//           { name: 'facebook', url: 'https://www.facebook.com' },
//           { name: 'linkedin', url: 'https://www.linkedin.com' },
//           { name: 'behance', url: 'https://www.behance.net' },
//         ],
//         type: 'team',
//       },
//     ];
//     await TeamMembersModel.insertMany(membersUA);
//     console.log('📦 Reporting inserted');

//     await mongoose.connection.close();
//     console.log('🔒 Database connection closed');
//   } catch (error) {
//     console.error('❌ Error seeding database:', error);
//     await mongoose.connection.close();
//   }
// };

// reportingSeed();
