// import mongoose from 'mongoose';
// import env from '../utils/evn.js';
// import CollectionModel from '../models/CollectionsModel.js';

// // TO USE THIS RUN : node src/app/server/seeds/collectionsSeed.js

// const collectionsSeed = async () => {
//   try {
//     await mongoose.connect(env('MONGODB_URI'));
//     console.log('✅ Connected to MongoDB');

//     const collectionsUA = [
//       {
//         title: 'Світло в "Сіру Зону"!',
//         importance: 'urgent',
//         collected: 80000,
//         target: 100000,
//         alt: 'Світло в "Сіру Зону',
//         peopleDonate: 100,
//         peopleDonate_title: 'донорів',
//         desc: 'Збираємо на енергетичні батончики, їжа швидкого приготування, вітаміни- все це необхідно щодня. Долучайтеся до збору, підтримаємо наших воїнів разом!',
//         long_desc: {
//           section1:
//             'Продовжуємо збір коштів, щоб нагодувати тварин, які постраждали від війни та знаходяться у зоні бойових дій.',
//           section2:
//             'У Степногірську, що постійно потерпає від обстрілів, десятки колись домашніх тварин тепер змушені виживати на вулицях. Підтримайте цих беззахисних тварин і подаруйте їм шанс на життя.',
//           section3:
//             'Завдяки цьому збору ми зможемо забезпечити тварин кормом, якого вистачить до квітня 2025 року.',
//         },
//         status: 'active',
//         type: 'collections',
//         language: 'ua',
//         value: 'lightCollection',
//         collected_title: 'Зібрано',
//         target_title: 'Ціль',
//       },
//       {
//         title: 'Світло в "Сіру Зону"!',
//         importance: 'urgent',
//         collected: 80000,
//         target: 100000,
//         alt: 'Світло в "Сіру Зону',
//         peopleDonate: 100,
//         peopleDonate_title: 'донорів',
//         desc: 'Збираємо на енергетичні батончики, їжа швидкого приготування, вітаміни- все це необхідно щодня. Долучайтеся до збору, підтримаємо наших воїнів разом!',
//         long_desc: {
//           section1:
//             'Продовжуємо збір коштів, щоб нагодувати тварин, які постраждали від війни та знаходяться у зоні бойових дій.',
//           section2:
//             'У Степногірську, що постійно потерпає від обстрілів, десятки колись домашніх тварин тепер змушені виживати на вулицях. Підтримайте цих беззахисних тварин і подаруйте їм шанс на життя.',
//           section3:
//             'Завдяки цьому збору ми зможемо забезпечити тварин кормом, якого вистачить до квітня 2025 року.',
//         },
//         status: 'active',
//         type: 'collections',
//         language: 'ua',
//         value: 'lightCollection',
//         collected_title: 'Зібрано',
//         target_title: 'Ціль',
//       },
//       {
//         title: 'Світло в "Сіру Зону"!',
//         importance: 'urgent',
//         collected: 40000,
//         target: 100000,
//         alt: 'Світло в "Сіру Зону',
//         peopleDonate: 100,
//         peopleDonate_title: 'донорів',
//         desc: 'Збираємо на енергетичні батончики, їжа швидкого приготування, вітаміни- все це необхідно щодня. Долучайтеся до збору, підтримаємо наших воїнів разом!',
//         long_desc: {
//           section1:
//             'Продовжуємо збір коштів, щоб нагодувати тварин, які постраждали від війни та знаходяться у зоні бойових дій.',
//           section2:
//             'У Степногірську, що постійно потерпає від обстрілів, десятки колись домашніх тварин тепер змушені виживати на вулицях. Підтримайте цих беззахисних тварин і подаруйте їм шанс на життя.',
//           section3:
//             'Завдяки цьому збору ми зможемо забезпечити тварин кормом, якого вистачить до квітня 2025 року.',
//         },
//         status: 'active',
//         type: 'collections',
//         language: 'ua',
//         value: 'lightCollection',
//         collected_title: 'Зібрано',
//         target_title: 'Ціль',
//       },
//       {
//         title: 'Світло в "Сіру Зону"!',
//         importance: 'urgent',
//         collected: 8000,
//         target: 10000,
//         alt: 'Світло в "Сіру Зону',
//         peopleDonate: 100,
//         peopleDonate_title: 'донорів',
//         desc: 'Збираємо на енергетичні батончики, їжа швидкого приготування, вітаміни- все це необхідно щодня. Долучайтеся до збору, підтримаємо наших воїнів разом!',
//         long_desc: {
//           section1:
//             'Продовжуємо збір коштів, щоб нагодувати тварин, які постраждали від війни та знаходяться у зоні бойових дій.',
//           section2:
//             'У Степногірську, що постійно потерпає від обстрілів, десятки колись домашніх тварин тепер змушені виживати на вулицях. Підтримайте цих беззахисних тварин і подаруйте їм шанс на життя.',
//           section3:
//             'Завдяки цьому збору ми зможемо забезпечити тварин кормом, якого вистачить до квітня 2025 року.',
//         },
//         status: 'active',
//         type: 'collections',
//         language: 'ua',
//         value: 'lightCollection',
//         collected_title: 'Зібрано',
//         target_title: 'Ціль',
//       },
//       {
//         title: 'Світло в "Сіру Зону"!',
//         importance: 'urgent',
//         collected: 2000,
//         target: 10000,
//         alt: 'Світло в "Сіру Зону',
//         peopleDonate: 100,
//         peopleDonate_title: 'донорів',
//         desc: 'Збираємо на енергетичні батончики, їжа швидкого приготування, вітаміни- все це необхідно щодня. Долучайтеся до збору, підтримаємо наших воїнів разом!',
//         long_desc: {
//           section1:
//             'Продовжуємо збір коштів, щоб нагодувати тварин, які постраждали від війни та знаходяться у зоні бойових дій.',
//           section2:
//             'У Степногірську, що постійно потерпає від обстрілів, десятки колись домашніх тварин тепер змушені виживати на вулицях. Підтримайте цих беззахисних тварин і подаруйте їм шанс на життя.',
//           section3:
//             'Завдяки цьому збору ми зможемо забезпечити тварин кормом, якого вистачить до квітня 2025 року.',
//         },
//         status: 'active',
//         type: 'collections',
//         language: 'ua',
//         value: 'lightCollection',
//         collected_title: 'Зібрано',
//         target_title: 'Ціль',
//       },
//     ];

//     await CollectionModel.insertMany(collectionsUA);
//     console.log('📦 Collections inserted');

//     const collectionsEN = [
//       {
//         title: 'Light in the "Grey Zone"!',
//         importance: 'urgent',
//         collected: 80000,
//         target: 100000,
//         alt: 'Light in the "Grey Zone"',
//         peopleDonate: 100,
//         peopleDonate_title: 'donors',
//         desc: 'We are raising funds for energy bars, instant food, vitamins - all of which are needed daily. Join the collection, let’s support our warriors together!',
//         long_desc: {
//           section1:
//             'We continue to raise funds to feed animals affected by the war and located in combat zones.',
//           section2:
//             'In Stepnohirsk, which constantly suffers from shelling, dozens of once-domestic animals are now forced to survive on the streets. Support these defenseless animals and give them a chance at life.',
//           section3:
//             'Thanks to this fundraiser, we will be able to provide food for the animals until April 2025.',
//         },
//         status: 'active',
//         type: 'collections',
//         language: 'en',
//         value: 'lightCollection',
//         collected_title: 'Collected',
//         target_title: 'Target',
//       },
//       {
//         title: 'Light in the "Grey Zone"!',
//         importance: 'urgent',
//         collected: 80000,
//         target: 100000,
//         alt: 'Light in the "Grey Zone"',
//         peopleDonate: 100,
//         peopleDonate_title: 'donors',
//         desc: 'We are raising funds for energy bars, instant food, vitamins - all of which are needed daily. Join the collection, let’s support our warriors together!',
//         long_desc: {
//           section1:
//             'We continue to raise funds to feed animals affected by the war and located in combat zones.',
//           section2:
//             'In Stepnohirsk, which constantly suffers from shelling, dozens of once-domestic animals are now forced to survive on the streets. Support these defenseless animals and give them a chance at life.',
//           section3:
//             'Thanks to this fundraiser, we will be able to provide food for the animals until April 2025.',
//         },
//         status: 'active',
//         type: 'collections',
//         language: 'en',
//         value: 'lightCollection',
//         collected_title: 'Collected',
//         target_title: 'Target',
//       },
//       {
//         title: 'Light in the "Grey Zone"!',
//         importance: 'urgent',
//         collected: 40000,
//         target: 100000,
//         alt: 'Light in the "Grey Zone"',
//         peopleDonate: 100,
//         peopleDonate_title: 'donors',
//         desc: 'We are raising funds for energy bars, instant food, vitamins - all of which are needed daily. Join the collection, let’s support our warriors together!',
//         long_desc: {
//           section1:
//             'We continue to raise funds to feed animals affected by the war and located in combat zones.',
//           section2:
//             'In Stepnohirsk, which constantly suffers from shelling, dozens of once-domestic animals are now forced to survive on the streets. Support these defenseless animals and give them a chance at life.',
//           section3:
//             'Thanks to this fundraiser, we will be able to provide food for the animals until April 2025.',
//         },
//         status: 'active',
//         type: 'collections',
//         language: 'en',
//         value: 'lightCollection',
//         collected_title: 'Collected',
//         target_title: 'Target',
//       },
//       {
//         title: 'Light in the "Grey Zone"!',
//         importance: 'urgent',
//         collected: 8000,
//         target: 10000,
//         alt: 'Light in the "Grey Zone"',
//         peopleDonate: 100,
//         peopleDonate_title: 'donors',
//         desc: 'We are raising funds for energy bars, instant food, vitamins - all of which are needed daily. Join the collection, let’s support our warriors together!',
//         long_desc: {
//           section1:
//             'We continue to raise funds to feed animals affected by the war and located in combat zones.',
//           section2:
//             'In Stepnohirsk, which constantly suffers from shelling, dozens of once-domestic animals are now forced to survive on the streets. Support these defenseless animals and give them a chance at life.',
//           section3:
//             'Thanks to this fundraiser, we will be able to provide food for the animals until April 2025.',
//         },
//         status: 'active',
//         type: 'collections',
//         language: 'en',
//         value: 'lightCollection',
//         collected_title: 'Collected',
//         target_title: 'Target',
//       },
//       {
//         title: 'Light in the "Grey Zone"!',
//         importance: 'urgent',
//         collected: 2000,
//         target: 10000,
//         alt: 'Light in the "Grey Zone"',
//         peopleDonate: 100,
//         peopleDonate_title: 'donors',
//         desc: 'We are raising funds for energy bars, instant food, vitamins - all of which are needed daily. Join the collection, let’s support our warriors together!',
//         long_desc: {
//           section1:
//             'We continue to raise funds to feed animals affected by the war and located in combat zones.',
//           section2:
//             'In Stepnohirsk, which constantly suffers from shelling, dozens of once-domestic animals are now forced to survive on the streets. Support these defenseless animals and give them a chance at life.',
//           section3:
//             'Thanks to this fundraiser, we will be able to provide food for the animals until April 2025.',
//         },
//         status: 'active',
//         type: 'collections',
//         language: 'en',
//         value: 'lightCollection',
//         collected_title: 'Collected',
//         target_title: 'Target',
//       },
//     ];

//     await CollectionModel.insertMany(collectionsEN);
//     console.log('📦 Collections inserted');

//     await mongoose.connection.close();
//     console.log('🔒 Database connection closed');
//   } catch (error) {
//     console.error('❌ Error seeding database:', error);
//     await mongoose.connection.close();
//   }
// };

// collectionsSeed();
