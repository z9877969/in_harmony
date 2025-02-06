import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { CollectionSchema } from '../models/CollectionSchema.js'; // Adjust imports as necessary
import {
  AboutCardModel,
  InfoCardModel,
  SectionsSchema,
} from '../models/SectionSchema.js';

dotenv.config();

const collectionCard1 = new CollectionSchema({
  title: 'Collection 1',
  importance: 'High',
  image: ['https://example.com/image1.png'],
  collected: 100,
  target: 1000,
  desc: 'This is a test collection.',
  status: 'active',
  type: 'collections',
});

const collectionCard2 = new CollectionSchema({
  title: 'Collection 2',
  importance: 'Medium',
  image: ['https://example.com/image2.png'],
  collected: 200,
  target: 2000,
  desc: 'Another collection for testing.',
  status: 'closed',
  type: 'collections',
});

const heroCard1 = {
  title: 'Hero 1',
  amount: '50',
  type: 'hero',
};

const heroCard2 = {
  title: 'Hero 2',
  amount: '100',
  type: 'hero',
};

const aboutCard1 = new AboutCardModel({
  title: 'Підтримка родин військових та ВП',
  icon: 'Підтримка родин військових та ВП',
  description:
    'Ми забезпечуємо необхідною допомогою родини військових і вимушено переміщених осіб, надаючи необхідні речі, харчові продукти та психологічну підтримку.',

  type: 'about',
});

const aboutCard2 = new AboutCardModel({
  title: 'Підтримка родин військових та ВП',
  icon: 'Підтримка родин військових та ВП',
  description:
    'Ми забезпечуємо необхідною допомогою родини військових і вимушено переміщених осіб, надаючи необхідні речі, харчові продукти та психологічну підтримку.',
  type: 'about',
});

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    await CollectionSchema.deleteMany({});
    console.log('Existing collections cleared');

    await InfoCardModel.deleteMany({});
    console.log('Existing collections cleared');

    await AboutCardModel.deleteMany({});
    console.log('Existing collections cleared');

    await SectionsSchema.deleteMany({});
    console.log('Existing collections cleared');

    await collectionCard1.save();
    await collectionCard2.save();
    console.log('Seed data inserted for individual collection cards');

    const heroData = [heroCard1, heroCard2];
    for (const hero of heroData) {
      const heroCard = new InfoCardModel(hero);
      await heroCard.save();
    }
    console.log('Seed data inserted for about cards');

    const aboutData = [aboutCard1, aboutCard2];
    for (const about of aboutData) {
      const aboutCard = new AboutCardModel(about);
      await aboutCard.save();
    }
    console.log('Seed data inserted for hero cards');

    const collectionSection = new SectionsSchema({
      local: 'en',
      title: 'Donation Collection Section',
      type: 'collections',
      list: [],
    });

    const heroSection = new SectionsSchema({
      local: 'en',
      title: 'Hero Section',
      type: 'hero',
      list: [],
    });

    const aboutSection = new SectionsSchema({
      local: 'ua',
      title: 'About Section',
      description:
        'InHarmony — це благодійна організація, що об`єднує людей, готових створювати зміни для тих, хто цього потребує найбільше. Ми працюємо для підтримки родин військових, внутрішньо переміщених осіб та громадян, які постраждали від війни. Окрім цього, наша робота спрямована на турботу про тварин, які постраждали внаслідок війни, та потребують допомоги і захисту. Завдяки вашим внескам та довірі, ми можемо забезпечувати критично важливу підтримку там, де вона необхідна найбільше.',
      type: 'about',
      list: [],
    });

    await collectionSection.setListByType();
    await collectionSection.save();
    console.log('Collection section created and saved');

    await heroSection.setListByType();
    await heroSection.save();
    console.log('Hero section created and saved');

    await aboutSection.setListByType();
    await aboutSection.save();
    console.log('About section created and saved');

    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};

seedData();
