// import mongoose from 'mongoose';
// import env from '../utils/evn.js';
// import { Pages } from '../models/PageModels.js';

// // TO USE THIS RUN : node src/app/server/seeds/mainPageSeed.js

// const mainPageSeed = async () => {
//   try {
//     await mongoose.connect(env('MONGODB_URI'));
//     console.log('✅ Connected to MongoDB');

//     const sectionsUA = [
//       {
//         local: 'ua',
//         section_name: 'hero',
//         route: 'main',
//         section_content: {
//           title: 'Допомагаємо тим, хто опинився в важких життєвих умовах',
//           cards: [
//             {
//               amount: '1 млн грн',
//               label: 'Загальна сума зборів',
//             },
//             {
//               amount: '8 000+',
//               label: 'Кількість реалізованих проєктів',
//             },
//             {
//               amount: '35 000+',
//               label: 'Кількість врятованих життів',
//             },
//           ],
//         },
//       },
//       {
//         local: 'ua',
//         section_name: 'about',
//         route: 'main',
//         section_content: {
//           title: 'Про нас',
//           description:
//             'InHarmony — це благодійна організація, що об`єднує людей, готових створювати зміни для тих, хто цього потребує найбільше. Ми працюємо для підтримки родин військових, внутрішньо переміщених осіб та громадян, які постраждали від війни. Окрім цього, наша робота спрямована на турботу про тварин, які постраждали внаслідок війни, та потребують допомоги і захисту. Завдяки вашим внескам та довірі, ми можемо забезпечувати критично важливу підтримку там, де вона необхідна найбільше.',
//           cards: [
//             {
//               title: 'Підтримка родин військових та ВПО',
//               description:
//                 'Ми забезпечуємо необхідною допомогою родини військових і вимушено переміщених осіб, надаючи необхідні речі, харчові продукти та психологічну підтримку.',
//             },
//             {
//               title: 'Допомога прифронтовим територіям',
//               description:
//                 'Доправляємо гуманітарну допомогу жителям сіл на лінії фронту. Забезпечуємо продукти, ліки та засоби першої необхідності, підтримуючи їх у важкий час.',
//             },
//             {
//               title: 'Підтримка тварин у кризових регіонах',
//               description:
//                 'Годуємо та евакуюємо тварин із небезпечних зон бойових дій, надаємо ветеринарну допомогу та допомагаємо знайти їм новий прихисток.',
//             },
//             {
//               title: 'Розробка модульного містечка для переселенців',
//               description:
//                 'Ми створюємо проєкт сучасного та безпечного модульного містечка для мешканців Маріуполя, що втратили свої домівки через війну.',
//             },
//           ],
//           sub_titles: 'Ключові напрямки діяльності:',
//           motivation:
//             'Долучайтеся до нашої ініціативи — разом ми можемо врятувати ще більше життів!',
//         },
//       },

//       {
//         local: 'ua',
//         route: 'main',
//         section_name: 'active_collections',
//         section_content: {
//           title: 'Активні збори',
//         },
//       },
//       {
//         local: 'ua',
//         route: 'main',
//         section_name: 'closed_collections',
//         section_content: {
//           title: 'Останні досягнення',
//         },
//       },
//       {
//         local: 'ua',
//         route: 'main',
//         section_name: 'donats',
//         section_content: {
//           title: 'Внесок заради добра',
//           description:
//             'Разом ми змінюємо життя тих, хто потребує допомоги найбільше — долучайтесь до нашої місії сьогодні!',
//           alt: 'Фото з людьми',
//         },
//       },
//     ];

//     const sectionsEN = [
//       {
//         local: 'en',
//         section_name: 'hero',
//         route: 'main',
//         section_content: {
//           title: 'Helping those in difficult life situations',
//           cards: [
//             {
//               amount: '1 million UAH',
//               label: 'Total amount collected',
//             },
//             {
//               amount: '8,000+',
//               label: 'Number of completed projects',
//             },
//             {
//               amount: '35,000+',
//               label: 'Number of lives saved',
//             },
//           ],
//         },
//       },
//       {
//         local: 'en',
//         section_name: 'about',
//         route: 'main',
//         section_content: {
//           title: 'About Us',

//           description:
//             'InHarmony — is a charity that brings together people who are committed to making a difference for those who need it most. We work to support military families, internally displaced persons, and war-affected citizens. In addition, our work is focused on caring for animals affected by war and in need of help and protection. Thanks to your contributions and trust, we can provide critical support where it is needed most.',
//           cards: [
//             {
//               title: 'Support for Military Families and IDPs',
//               description:
//                 'We provide necessary assistance to military families and internally displaced persons (IDPs), offering essential items, food, and psychological support.',
//             },
//             {
//               title: 'Aid to Frontline Areas',
//               description:
//                 'We deliver humanitarian aid to the villages on the front lines, providing food, medicine, and necessities, supporting them in difficult times.',
//             },
//             {
//               title: 'Support for Animals in Crisis Regions',
//               description:
//                 'We feed and evacuate animals from combat zones, provide veterinary care, and help find them new shelters.',
//             },
//             {
//               title: 'Development of Modular Settlements for IDPs',
//               description:
//                 'We are creating a project for a modern and safe modular settlement for residents of Mariupol who lost their homes due to the war.',
//             },
//           ],
//           sub_titles: 'Key Areas of Activity:',
//           motivation:
//             'Join our initiative—together we can save even more lives!',
//         },
//       },

//       {
//         local: 'en',
//         route: 'main',
//         section_name: 'active_collections',
//         section_content: {
//           title: 'Active Collections',
//         },
//       },
//       {
//         local: 'en',
//         route: 'main',
//         section_name: 'closed_collections',
//         section_content: {
//           title: 'Recent Achievements',
//         },
//       },
//       {
//         local: 'en',
//         route: 'main',
//         section_name: 'donats',
//         section_content: {
//           title: 'Contribution for the Greater Good',
//           description:
//             'Together we are changing the lives of those who need help the most—join our mission today!',
//           alt: 'Photo with people',
//         },
//       },
//     ];

//     const PageData1 = new Pages({
//       local: 'ua',
//       route: 'main',
//       sections_list: sectionsUA,
//     });
//     await Pages.create(PageData1);
//     console.log('📦 Main Page (UA) data inserted');

//     const PageData2 = new Pages({
//       local: 'en',
//       route: 'main',
//       sections_list: sectionsEN,
//     });
//     await Pages.create(PageData2);
//     console.log('📦 Main Page (En) data inserted');

//     await mongoose.connection.close();
//     console.log('🔒 Database connection closed');
//   } catch (error) {
//     console.error('❌ Error seeding database:', error);
//     await mongoose.connection.close();
//   }
// };

// mainPageSeed();
