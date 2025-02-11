// import mongoose from 'mongoose';
// import env from '../utils/evn.js';
// import CommentsModel from '../models/WasHelpedCommentsModels.js';

// // TO USE THIS RUN : node src/app/server/seeds/commentsSeed.js

// const commentsSeed = async () => {
//   try {
//     await mongoose.connect(env('MONGODB_URI'));
//     console.log('✅ Connected to MongoDB');

//     const commentsUA = [
//       {
//         name: 'Олена Михайлівна',
//         user_status: 'місцева жителька',
//         comment:
//           '“Завдяки вашій допомозі ми отримали найнеобхідніше – питну воду. Щиро дякую за вашу турботу!”',
//         age: '62',
//         term: 'роки',
//         language: 'ua',
//         type: 'was-helped',
//       },
//       {
//         name: 'Андрій',
//         user_status: 'волонтер',
//         comment:
//           '“Цей проєкт став прикладом того, як разом ми можемо змінювати життя людей. Вдячний фонду за можливість бути частиною цієї великої справи!”',
//         age: '32',
//         term: 'роки',
//         language: 'ua',
//         type: 'was-helped',
//       },
//       {
//         name: 'Петро Іванович',
//         user_status: 'місцевий житель',
//         comment:
//           '“Ця допомога була для нас справжнім спасінням у найтемніші дні. Ви надихаєте нас!”',
//         age: '56',
//         term: 'роки',
//         language: 'ua',
//         type: 'was-helped',
//       },
//       {
//         name: 'Петро Іванович',
//         user_status: 'місцевий житель',
//         comment:
//           '“Ця допомога була для нас справжнім спасінням у найтемніші дні. Ви надихаєте нас!”',
//         age: '56',
//         term: 'роки',
//         language: 'ua',
//         type: 'was-helped',
//       },
//       {
//         name: 'Петро Іванович',
//         user_status: 'місцевий житель',
//         comment:
//           '“Ця допомога була для нас справжнім спасінням у найтемніші дні. Ви надихаєте нас!”',
//         age: '56',
//         term: 'роки',
//         language: 'ua',
//         type: 'was-helped',
//       },
//     ];

//     await CommentsModel.insertMany(commentsUA);
//     console.log('📦 Comments inserted');

//     const commentsEN = [
//       {
//         name: 'Olena Mykhailivna',
//         user_status: 'local resident',
//         comment:
//           '“Thanks to your help, we received the most essential thing – drinking water. Sincerely grateful for your care!”',
//         age: '62',
//         term: 'years',
//         language: 'en',
//         type: 'was-helped',
//       },
//       {
//         name: 'Andriy',
//         user_status: 'volunteer',
//         comment:
//           '“This project has become an example of how together we can change people’s lives. Grateful to the foundation for the opportunity to be part of this great cause!”',
//         age: '32',
//         term: 'years',
//         language: 'en',
//         type: 'was-helped',
//       },
//       {
//         name: 'Petro Ivanovych',
//         user_status: 'local resident',
//         comment:
//           '“This assistance was a real lifeline for us during the darkest days. You inspire us!”',
//         age: '56',
//         term: 'years',
//         language: 'en',
//         type: 'was-helped',
//       },
//       {
//         name: 'Petro Ivanovych',
//         user_status: 'local resident',
//         comment:
//           '“This assistance was a real lifeline for us during the darkest days. You inspire us!”',
//         age: '56',
//         term: 'years',
//         language: 'en',
//         type: 'was-helped',
//       },
//       {
//         name: 'Petro Ivanovych',
//         user_status: 'local resident',
//         comment:
//           '“This assistance was a real lifeline for us during the darkest days. You inspire us!”',
//         age: '56',
//         term: 'years',
//         language: 'en',
//         type: 'was-helped',
//       },
//     ];
//     await CommentsModel.insertMany(commentsEN);
//     console.log('📦 Comments (EN) inserted');

//     await mongoose.connection.close();
//     console.log('🔒 Database connection closed');
//   } catch (error) {
//     console.error('❌ Error seeding database:', error);
//     await mongoose.connection.close();
//   }
// };

// commentsSeed();
