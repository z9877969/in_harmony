// import mongoose from 'mongoose';
// import env from '../utils/evn.js';
// import CollectionModel from '../models/CollectionsModel.js';
// import { PagesEN, PagesUA } from '../models/PageModels/PageModels.js';

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
//             'InHarmony — це благодійна організація, що об’єднує людей, готових створювати зміни для тих, хто цього потребує найбільше.',
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
//           cards: await CollectionModel.find({
//             type: 'collections',
//             status: 'active',
//             language: 'ua',
//           }),
//         },
//       },
//       {
//         local: 'ua',
//         route: 'main',
//         section_name: 'achievements',
//         section_content: {
//           title: 'Останні досягнення',
//           cards: [
//             {
//               title: 'Вода в сіру зону',
//               text: 'Проект вирішив проблему транспортування та зберігання питної води.Завдяки цьому проекту було доставлено 500 л питної води 54 людям у сірій зоні протягом тижня.',
//               item: 'Зібрано:',
//               total: '35768',
//               currency: 'грн',
//               term: 'Термін реалізаці:',
//               days: '10 ',
//               period: 'днів',
//               type: 'progress',
//             },
//             {
//               title: 'Вода в сіру зону-2',
//               text: 'Проект вирішив проблему транспортування та зберігання питної води.Завдяки цьому проекту було доставлено 500 л питної води 54 людям у сірій зоні протягом тижня.',
//               item: 'Зібрано:',
//               total: '35768',
//               currency: 'грн',
//               term: 'Термін реалізаці:',
//               days: '10 ',
//               period: 'днів',
//               type: 'progress',
//             },
//             {
//               title: 'Вода в сіру зону-3',
//               text: 'Проект вирішив проблему транспортування та зберігання питної води.Завдяки цьому проекту було доставлено 500 л питної води 54 людям у сірій зоні протягом тижня.',
//               item: 'Зібрано:',
//               total: '35768',
//               currency: 'грн',
//               term: 'Термін реалізаці:',
//               days: '10 ',
//               period: 'днів',
//               type: 'progress',
//             },
//           ],
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
//             'InHarmony is a charitable organization that brings together people willing to create change for those who need it the most.',
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
//         section_name: 'active_acllections',
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
//         route: 'main',
//         section_name: 'achievements',
//         section_content: {
//           title: 'Recent Achievements',
//           cards: [
//             {
//               title: 'Water to the Gray Zone',
//               text: 'The project solved the problem of transporting and storing drinking water. Thanks to this project, 500 liters of drinking water were delivered to 54 people in the gray zone within a week.',
//               item: 'Amount Collected:',
//               total: '35,768',
//               currency: 'UAH',
//               term: 'Implementation Time:',
//               days: '10',
//               period: 'days',
//               type: 'progress',
//             },
//             {
//               title: 'Water to the Gray Zone-2',
//               text: 'The project solved the problem of transporting and storing drinking water. Thanks to this project, 500 liters of drinking water were delivered to 54 people in the gray zone within a week.',
//               item: 'Amount Collected:',
//               total: '35,768',
//               currency: 'UAH',
//               term: 'Implementation Time:',
//               days: '10',
//               period: 'days',
//               type: 'progress',
//             },
//             {
//               title: 'Water to the Gray Zone-3',
//               text: 'The project solved the problem of transporting and storing drinking water. Thanks to this project, 500 liters of drinking water were delivered to 54 people in the gray zone within a week.',
//               item: 'Amount Collected:',
//               total: '35,768',
//               currency: 'UAH',
//               term: 'Implementation Time:',
//               days: '10',
//               period: 'days',
//               type: 'progress',
//             },
//           ],
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

//     const mainPageDataUA = new PagesUA({
//       local: 'ua',
//       route: 'main',
//       sections_list: sectionsUA,
//     });
//     await PagesUA.create(mainPageDataUA);
//     console.log('📦 Main Page (UA) data inserted');

//     const mainPageDataEN = new PagesEN({
//       local: 'en',
//       route: 'main',
//       sections_list: sectionsEN,
//     });

//     await PagesEN.create(mainPageDataEN);
//     console.log('📦 Main Page (UA) data inserted');

//     await mongoose.connection.close();
//     console.log('🔒 Database connection closed');
//   } catch (error) {
//     console.error('❌ Error seeding database:', error);
//     await mongoose.connection.close();
//   }
// };

// mainPageSeed();
