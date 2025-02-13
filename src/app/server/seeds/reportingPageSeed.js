// import mongoose from 'mongoose';
// // import { PagesEN, PagesUA } from '../models/PageModels/PageModels.js';
// import { FiltersModel } from '../models/FilterModel.js';
// import env from '../utils/evn.js';

// // TO USE THIS RUN : node src/app/server/seeds/reportingPageSeed.js

// const reportingPageSeed = async () => {
//   try {
//     await mongoose.connect(env('MONGODB_URI'));
//     console.log('✅ Connected to MongoDB');

//     const filtersUA = [
//       {
//         month: 'Квітень',
//         year: '2024',
//         url: 'https://docs.google.com/spreadsheets/d/1Edsv3kINu8kFqZuAkwHbbwdPMWGjjIjKADR_-s_O7-0/edit?gid=959038513#gid=959038513',
//         type: 'filter',
//         language: 'ua',
//         status: 'filter',
//       },
//       {
//         month: 'Травень',
//         year: '2024',
//         url: 'https://docs.google.com/spreadsheets/d/1Edsv3kINu8kFqZuAkwHbbwdPMWGjjIjKADR_-s_O7-0/edit?gid=0#gid=0',
//         type: 'filter',
//         language: 'ua',
//         status: 'filter',
//       },
//       {
//         month: 'Червень',
//         year: '2024',
//         url: 'https://docs.google.com/spreadsheets/d/1Edsv3kINu8kFqZuAkwHbbwdPMWGjjIjKADR_-s_O7-0/edit?gid=1377878926#gid=1377878926',
//         type: 'filter',
//         language: 'ua',
//         status: 'filter',
//       },
//       {
//         month: 'Липень',
//         year: '2024',
//         url: 'https://docs.google.com/spreadsheets/d/1Edsv3kINu8kFqZuAkwHbbwdPMWGjjIjKADR_-s_O7-0/edit?gid=240537339#gid=240537339',
//         type: 'filter',
//         language: 'ua',
//         status: 'filter',
//       },
//       {
//         month: 'Серпень',
//         year: '2024',
//         url: 'https://docs.google.com/spreadsheets/d/1Edsv3kINu8kFqZuAkwHbbwdPMWGjjIjKADR_-s_O7-0/edit?gid=1917631733#gid=1917631733',
//         type: 'filter',
//         language: 'ua',
//         status: 'filter',
//       },
//       {
//         month: 'Вересень',
//         year: '2024',
//         url: 'https://docs.google.com/spreadsheets/d/1Edsv3kINu8kFqZuAkwHbbwdPMWGjjIjKADR_-s_O7-0/edit?gid=1070334992#gid=1070334992',
//         type: 'filter',
//         language: 'ua',
//         status: 'filter',
//       },
//       {
//         month: 'Жовтень',
//         year: '2024',
//         url: 'https://docs.google.com/spreadsheets/d/1Edsv3kINu8kFqZuAkwHbbwdPMWGjjIjKADR_-s_O7-0/edit?gid=523745186#gid=523745186',
//         type: 'filter',
//         language: 'ua',
//         status: 'filter',
//       },
//       {
//         month: 'Листопад',
//         year: '2024',
//         url: 'https://docs.google.com/spreadsheets/d/1Edsv3kINu8kFqZuAkwHbbwdPMWGjjIjKADR_-s_O7-0/edit?gid=287277574#gid=287277574',
//         type: 'filter',
//         language: 'ua',
//         status: 'filter',
//       },
//       {
//         month: 'Грудень',
//         year: '2024',
//         url: 'https://docs.google.com/spreadsheets/d/1Edsv3kINu8kFqZuAkwHbbwdPMWGjjIjKADR_-s_O7-0/edit?gid=391773256#gid=391773256',
//         type: 'filter',
//         language: 'ua',
//         status: 'filter',
//       },
//       {
//         month: 'Січень',
//         year: '2025',
//         url: 'https://docs.google.com/spreadsheets/d/1Edsv3kINu8kFqZuAkwHbbwdPMWGjjIjKADR_-s_O7-0/edit?gid=1845796710#gid=1845796710',
//         type: 'filter',
//         language: 'ua',
//         status: 'filter',
//       },
//     ];

//     await FiltersModel.insertMany(filtersUA);
//     console.log('📦 Filters inserted');

//     // const sectionsUA = [
//     //   {
//     //     local: 'ua',
//     //     route: 'reporting',
//     //     section_name: 'filters',
//     //     section_content: {
//     //       title: 'Звітність "ІнХармоні.Юа"',
//     //     },
//     //   },
//     //   {
//     //     local: 'ua',
//     //     route: 'reporting',
//     //     section_name: 'closed_collections',
//     //     section_content: {
//     //       title: 'Реалізовані проєкти',
//     //     },
//     //   },
//     //   {
//     //     local: 'ua',
//     //     route: 'reporting',
//     //     section_name: 'donations',
//     //     section_content: {
//     //       title:
//     //         'Твоя підтримка –це шанс на краще майбутнє для тих, хто цього потребує!',
//     //     },
//     //   },
//     // ];

//     const filtersEN = [
//       {
//         month: 'April',
//         year: '2024',
//         url: 'https://docs.google.com/spreadsheets/d/1Edsv3kINu8kFqZuAkwHbbwdPMWGjjIjKADR_-s_O7-0/edit?gid=959038513#gid=959038513',
//         type: 'filter',
//         language: 'en',
//         status: 'filter',
//       },
//       {
//         month: 'May',
//         year: '2024',
//         url: 'https://docs.google.com/spreadsheets/d/1Edsv3kINu8kFqZuAkwHbbwdPMWGjjIjKADR_-s_O7-0/edit?gid=0#gid=0',
//         type: 'filter',
//         language: 'en',
//         status: 'filter',
//       },
//       {
//         month: 'June',
//         year: '2024',
//         url: 'https://docs.google.com/spreadsheets/d/1Edsv3kINu8kFqZuAkwHbbwdPMWGjjIjKADR_-s_O7-0/edit?gid=1377878926#gid=1377878926',
//         type: 'filter',
//         language: 'en',
//         status: 'filter',
//       },
//       {
//         month: 'July',
//         year: '2024',
//         url: 'https://docs.google.com/spreadsheets/d/1Edsv3kINu8kFqZuAkwHbbwdPMWGjjIjKADR_-s_O7-0/edit?gid=240537339#gid=240537339',
//         type: 'filter',
//         language: 'en',
//         status: 'filter',
//       },
//       {
//         month: 'August',
//         year: '2024',
//         url: 'https://docs.google.com/spreadsheets/d/1Edsv3kINu8kFqZuAkwHbbwdPMWGjjIjKADR_-s_O7-0/edit?gid=1917631733#gid=1917631733',
//         type: 'filter',
//         language: 'en',
//         status: 'filter',
//       },
//       {
//         month: 'September',
//         year: '2024',
//         url: 'https://docs.google.com/spreadsheets/d/1Edsv3kINu8kFqZuAkwHbbwdPMWGjjIjKADR_-s_O7-0/edit?gid=1070334992#gid=1070334992',
//         type: 'filter',
//         language: 'en',
//         status: 'filter',
//       },
//       {
//         month: 'October',
//         year: '2024',
//         url: 'https://docs.google.com/spreadsheets/d/1Edsv3kINu8kFqZuAkwHbbwdPMWGjjIjKADR_-s_O7-0/edit?gid=523745186#gid=523745186',
//         type: 'filter',
//         language: 'en',
//         status: 'filter',
//       },
//       {
//         month: 'November',
//         year: '2024',
//         url: 'https://docs.google.com/spreadsheets/d/1Edsv3kINu8kFqZuAkwHbbwdPMWGjjIjKADR_-s_O7-0/edit?gid=287277574#gid=287277574',
//         type: 'filter',
//         language: 'en',
//         status: 'filter',
//       },
//       {
//         month: 'December',
//         year: '2024',
//         url: 'https://docs.google.com/spreadsheets/d/1Edsv3kINu8kFqZuAkwHbbwdPMWGjjIjKADR_-s_O7-0/edit?gid=391773256#gid=391773256',
//         type: 'filter',
//         language: 'en',
//         status: 'filter',
//       },
//       {
//         month: 'January',
//         year: '2025',
//         url: 'https://docs.google.com/spreadsheets/d/1Edsv3kINu8kFqZuAkwHbbwdPMWGjjIjKADR_-s_O7-0/edit?gid=1845796710#gid=1845796710',
//         type: 'filter',
//         language: 'en',
//         status: 'filter',
//       },
//     ];

//     await FiltersModel.insertMany(filtersEN);
//     console.log('📦 Filters en inserted');

//     // const sectionsEN = [
//     //   {
//     //     local: 'en',
//     //     route: 'reporting',
//     //     section_name: 'filters',
//     //     section_content: {
//     //       title: 'Reporting "InHarmony.UA"',
//     //     },
//     //   },

//     //   {
//     //     local: 'en',
//     //     route: 'reporting',
//     //     section_name: 'closed_collections',
//     //     section_content: {
//     //       title: 'Implemented projects',
//     //     },
//     //   },
//     //   {
//     //     local: 'en',
//     //     route: 'reporting',
//     //     section_name: 'donations',
//     //     section_content: {
//     //       title:
//     //         'Your support is a chance for a better future for those who need it!',
//     //     },
//     //   },
//     // ];

//     // const reportingPageDataUA = new PagesUA({
//     //   local: 'ua',
//     //   route: 'reporting',
//     //   sections_list: sectionsUA,
//     // });
//     // await PagesUA.create(reportingPageDataUA);
//     // console.log('📦 Reporting Page (UA) data inserted');

//     // const reportingPageDataEN = new PagesEN({
//     //   local: 'en',
//     //   route: 'reporting',
//     //   sections_list: sectionsEN,
//     // });

//     // await PagesEN.create(reportingPageDataEN);
//     // console.log('📦 Reporting Page (EN) data inserted');

//     await mongoose.connection.close();
//     console.log('🔒 Database connection closed');
//   } catch (error) {
//     console.error('❌ Error seeding database:', error);
//     await mongoose.connection.close();
//   }
// };

// reportingPageSeed();
