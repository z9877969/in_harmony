//TODO in progress

// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import { CollectionSchema } from '../models/CollectionSchema.js';
// import {
//   AboutCardModel,
//   InfoCardModel,
//   SectionsSchema,
// } from '../models/SectionSchema.js';

// dotenv.config();

// const seedData = async () => {
//   try {
//     await mongoose.connect(process.env.MONGODB_URI);
//     console.log('Connected to MongoDB');

//     await CollectionSchema.deleteMany({});
//     console.log('Existing collections cleared');

//     await InfoCardModel.deleteMany({});
//     console.log('Existing collections cleared');

//     await AboutCardModel.deleteMany({});
//     console.log('Existing collections cleared');

//     await SectionsSchema.deleteMany({});
//     console.log('Existing collections cleared');

//     await collectionCard1.save();
//     await collectionCard2.save();
//     console.log('Seed data inserted for individual collection cards');

//     const heroData = [heroCard1, heroCard2];
//     for (const hero of heroData) {
//       const heroCard = new InfoCardModel(hero);
//       await heroCard.save();
//     }
//     console.log('Seed data inserted for about cards');

//     const aboutData = [aboutCard1, aboutCard2];
//     for (const about of aboutData) {
//       const aboutCard = new AboutCardModel(about);
//       await aboutCard.save();
//     }
//     console.log('Seed data inserted for hero cards');

//     const collectionSection = new SectionsSchema({
//       local: 'en',
//       title: 'Donation Collection Section',
//       type: 'collections',
//       list: [],
//     });

//     const heroSection = new SectionsSchema({
//       local: 'en',
//       title: 'Hero Section',
//       type: 'hero',
//       list: [],
//     });

//     const aboutSection = new SectionsSchema({
//       local: 'ua',
//       title: 'About Section',
//       description:
//         'InHarmony — це благодійна організація, що об`єднує людей, готових створювати зміни для тих, хто цього потребує найбільше. Ми працюємо для підтримки родин військових, внутрішньо переміщених осіб та громадян, які постраждали від війни. Окрім цього, наша робота спрямована на турботу про тварин, які постраждали внаслідок війни, та потребують допомоги і захисту. Завдяки вашим внескам та довірі, ми можемо забезпечувати критично важливу підтримку там, де вона необхідна найбільше.',
//       type: 'about',
//       list: [],
//     });

//     await collectionSection.setListByType();
//     await collectionSection.save();
//     console.log('Collection section created and saved');

//     await heroSection.setListByType();
//     await heroSection.save();
//     console.log('Hero section created and saved');

//     await aboutSection.setListByType();
//     await aboutSection.save();
//     console.log('About section created and saved');

//     mongoose.connection.close();
//   } catch (error) {
//     console.error('Error seeding database:', error);
//   }
// };

// seedData();
