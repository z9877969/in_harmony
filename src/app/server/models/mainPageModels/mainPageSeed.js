import mongoose from 'mongoose';
import {
  CollectionModel,
  ProgressModel,
  SectionsSchema,
} from '../SectionSchema.js';
import AboutMainPageSection from './AboutSectionModel.js';
import HeroMainPageSection from './HeroSectionModels.js';
import env from '../../utils/evn.js';
import { MainPageModelUA, MainPageModelUK } from './MainPageModels.js';

// TO USE THIS RUN : node src/app/server/models/mainPageModels/mainPageSeed.js

const mainPageSeed = async () => {
  try {
    await mongoose.connect(env('MONGODB_URI'));
    // console.log('✅ Connected to MongoDB');

    const collections = [
      {
        title: 'Світло в "Сіру Зону"!',
        importance: 'Терміновий збір',
        collected: 80000,
        target: 100000,
        alt: 'Світло в "Сіру Зону',
        peopleDonate: 100,
        desc: 'Збираємо на енергетичні батончики, їжа швидкого приготування, вітаміни- все це необхідно щодня. Долучайтеся до збору, підтримаємо наших воїнів разом!',
        long_desc: '',
        status: 'active',
        type: 'collections',
      },
      {
        title: 'Світло в "Сіру Зону"!',
        importance: 'Терміновий збір',
        collected: 5600,
        target: 100000,
        alt: 'Світло в "Сіру Зону',
        peopleDonate: 100,
        desc: 'Збираємо на енергетичні батончики, їжа швидкого приготування, вітаміни - все це необхідно щодня. Долучайтеся до збору, підтримаємо наших воїнів разом!',
        long_desc: '',
        status: 'active',
        type: 'collections',
      },
      {
        title: 'Світло в "Сіру Зону"!',
        importance: 'Терміновий збір',
        collected: 50000,
        target: 100000,
        alt: 'Світло в "Сіру Зону',
        peopleDonate: 100,
        desc: 'Збираємо на енергетичні батончики, їжа швидкого приготування, вітаміни - все це необхідно щодня. Долучайтеся до збору, підтримаємо наших воїнів разом!',
        long_desc: '',
        status: 'active',
        type: 'collections',
      },
      {
        title: 'Світло в "Сіру Зону"!',
        importance: 'Терміновий збір',
        collected: 2000,
        target: 100000,
        alt: 'Світло в "Сіру Зону',
        peopleDonate: 100,
        desc: 'Немає електроенергії, води, газу, щоденні обстріли, 54 особи пенсійного віку.Села Плавні і Кам‘янське (Запорізька лінія фронту).',
        long_desc: '',
        status: 'active',
        type: 'collections',
      },
      {
        title: 'Світло в "Сіру Зону"!',
        importance: 'Терміновий збір',
        collected: 2000,
        target: 100000,
        alt: 'Світло в "Сіру Зону',
        peopleDonate: 100,
        desc: 'Немає електроенергії, води, газу, щоденні обстріли, 54 особи пенсійного віку.Села Плавні і Кам‘янське (Запорізька лінія фронту).',
        long_desc: '',
        status: 'active',
        type: 'collections',
      },
      {
        title: 'Світло в "Сіру Зону"!',
        importance: 'Терміновий збір',
        collected: 2000,
        target: 100000,
        alt: 'Світло в "Сіру Зону',
        peopleDonate: 100,
        desc: 'Немає електроенергії, води, газу, щоденні обстріли, 54 особи пенсійного віку.Села Плавні і Кам‘янське (Запорізька лінія фронту).',
        long_desc: '',
        status: 'active',
        type: 'collections',
      },
    ];

    await CollectionModel.insertMany(collections);
    // console.log('📦 Collections inserted');

    const aboutCards = [
      {
        title: 'Підтримка родин військових та ВПО',
        description:
          'Ми забезпечуємо необхідною допомогою родини військових і вимушено переміщених осіб, надаючи необхідні речі, харчові продукти та психологічну підтримку.',
      },
      {
        title: 'Допомога прифронтовим територіям',
        description:
          'Доправляємо гуманітарну допомогу жителям сіл на лінії фронту. Забезпечуємо продукти, ліки та засоби першої необхідності, підтримуючи їх у важкий час.',
      },
      {
        title: 'Підтримка тварин у кризових регіонах',
        description:
          'Годуємо та евакуюємо тварин із небезпечних зон бойових дій, надаємо ветеринарну допомогу та допомагаємо знайти їм новий прихисток.',
      },
      {
        title: 'Розробка модульного містечка для переселенців',
        description:
          'Ми створюємо проєкт сучасного та безпечного модульного містечка для мешканців Маріуполя, що втратили свої домівки через війну.',
      },
    ];

    const aboutSection = new AboutMainPageSection({
      local: 'ua',
      title: 'Про нас',
      type: 'about',
      description:
        'InHarmony — це благодійна організація, що об’єднує людей, готових створювати зміни для тих, хто цього потребує найбільше.',
      route: 'main',
      list: aboutCards,
      sub_titles: 'Ключові напрямки діяльності:',
      motivation:
        'Долучайтеся до нашої ініціативи — разом ми можемо врятувати ще більше життів!',
    });

    await aboutSection.save();
    // console.log('ℹ️ About section with embedded cards inserted');

    const heroCards = [
      {
        amount: '1 млн грн',
        label: 'Загальна сума зборів',
      },
      {
        amount: '8 000+',
        label: 'Кількість реалізованих проєктів',
      },
      {
        amount: '35 000+',
        label: 'Кількість врятованих життів',
      },
    ];

    const heroSection = new HeroMainPageSection({
      local: 'ua',
      title: 'Допомагаємо тим, хто опинився в важких життєвих умовах',
      route: 'main',
      list: heroCards,
      type: 'hero',
    });

    await heroSection.save();
    // console.log('ℹ️ About section with embedded cards inserted');

    const progressSection = [
      {
        title: 'Вода в сіру зону',
        text: 'Проект вирішив проблему транспортування та зберігання питної води.Завдяки цьому проекту було доставлено 500 л питної води 54 людям у сірій зоні протягом тижня.',
        item: 'Зібрано:',
        total: '35768',
        currency: 'грн',
        term: 'Термін реалізаці:',
        days: '10 ',
        period: 'днів',
        type: 'progress',
      },
      {
        title: 'Вода в сіру зону-2',
        text: 'Проект вирішив проблему транспортування та зберігання питної води.Завдяки цьому проекту було доставлено 500 л питної води 54 людям у сірій зоні протягом тижня.',
        item: 'Зібрано:',
        total: '35768',
        currency: 'грн',
        term: 'Термін реалізаці:',
        days: '10 ',
        period: 'днів',
        type: 'progress',
      },
      {
        title: 'Вода в сіру зону-3',
        text: 'Проект вирішив проблему транспортування та зберігання питної води.Завдяки цьому проекту було доставлено 500 л питної води 54 людям у сірій зоні протягом тижня.',
        item: 'Зібрано:',
        total: '35768',
        currency: 'грн',
        term: 'Термін реалізаці:',
        days: '10 ',
        period: 'днів',
        type: 'progress',
      },
    ];

    await ProgressModel.insertMany(progressSection);
    // console.log('📦 Progress inserted');

    const sections = [
      {
        local: 'ua',
        route: 'main',
        title: 'Активні збори',
        type: 'collections',
        list: await CollectionModel.find({
          type: 'collections',
          status: 'active',
        }),
      },
      {
        local: 'ua',
        route: 'main',
        title: 'Останні досягнення',
        type: 'progress',
        list: await ProgressModel.find({ type: 'progress' }),
      },
      {
        local: 'ua',
        route: 'main',
        type: 'none',
        title: 'Внесок заради добра',
        description:
          'Разом ми змінюємо життя тих, хто потребує допомоги найбільше — долучайтесь до нашої місії сьогодні!',
        alt: 'Фото з людьми',
      },
    ];

    await SectionsSchema.insertMany(sections);
    // console.log('📄 Sections created and saved');

    const mainPageDataUA = new MainPageModelUA({
      local: 'ua',
      route: 'main',
    });
    await mainPageDataUA.setListByType();
    await mainPageDataUA.save();
    // console.log('📦 Main Page (UA) data inserted');

    const mainPageDataUK = new MainPageModelUK({
      local: 'uk',
      route: 'main',
    });

    await mainPageDataUK.setListByType();
    await mainPageDataUK.save();
    // console.log('📦 Main Page (UK) data inserted');

    await mongoose.connection.close();
    // console.log('🔒 Database connection closed');
  } catch (error) {
    // console.error('❌ Error seeding database:', error);
    await mongoose.connection.close();
  }
};

mainPageSeed();
