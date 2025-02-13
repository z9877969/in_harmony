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
//         language: 'ua',
//         term: 'роки',
//         name: 'Оксана Григоренко',
//         age: 64,
//         comment
// :
//           'Дякую вам за те, що привозите їжу та ліки, коли ніхто більше не приїжджає. Без вас багато хто залишився б без найнеобхіднішого. Бережіть себе!',
//       },
//       {
//         language: 'ua',
//         term: 'роки',
//         name: 'Сергій Антонюк',
//         age: 32,
//         comment
// :
//           'Не знав, що буває така підтримка, поки не отримав теплий одяг і ліки. Ви реально рятуєте людей. Дякую всій команді!',
//       },
//       {
//         language: 'ua',

//         term: 'років',
//         name: 'Людмила Кравець',
//         age: 57,
//         comment
// :
//           'Я думала, що ніхто вже не допоможе, поки не побачила вашу машину з гуманітаркою. Дуже вдячна за їжу, теплі речі і просто за те, що ви не забуваєте про нас.',
//       },
//       {
//         language: 'ua',

//         term: 'рік',
//         name: 'Ігор Мельник',
//         age: 41,
//         comment
// :
//           'Нема слів, щоб висловити вдячність. Їжа, вода, медикаменти — це те, без чого не вижити, і ви нам це привезли. Ви справжні герої!',
//       },
//       {
//         language: 'ua',

//         term: 'років',
//         name: 'Ганна Поліщук',
//         age: 70,
//         comment
// :
//           'Ви не просто привезли допомогу, ви привезли надію. Люди, які працюють у вас, роблять справжнє чудо. Хай Бог вас береже!',
//       },
//       {
//         language: 'ua',

//         term: 'років',
//         name: 'Віталій Климчук',
//         age: 38,
//         comment
// :
//           'Думав, шо прийдеться мерзнуть цілу зиму, но ви пригнали теплі ковдри й спальники. Краще вас ніхто не шарить, шо треба людям!',
//       },
//       {
//         language: 'ua',

//         term: 'років',
//         name: 'Роман Стельмах',
//         age: 29,
//         comment
// :
//           'Я військовий, і знаю, як важливо мати нормальні умови хоча б час від часу. Ваша підтримка — це сила, яка допомагає триматися. Дякую за вашу роботу!',
//       },
//       {
//         language: 'ua',

//         term: 'років',
//         name: 'Петро Зайчук',
//         age: 55,
//         comment
// :
//           'Шо тут сказать… Коли нема газу, нема світла, а в хаті мороз, то така допомога, як ваша — це чисте спасіння. Шана вам і повага!',
//       },
//       {
//         language: 'ua',

//         term: 'років',
//         name: 'Марина Данилюк',
//         age: 47,
//         comment
// :
//           'Важко бути далеко від дому, але завдяки вам стало трохи легше. Отримала необхідні речі і відчула, що є люди, які піклуються. Дякую вам щиро!',
//       },
//       {
//         language: 'ua',

//         term: 'років',
//         name: 'Максим Гречко',
//         age: 26,
//         comment
// :
//           'Шо я можу сказать? Ви круті. Привезли нам все, шо треба, а ще головне — ви показуєте, шо людям не все одно. Дякую від душі!',
//       },
//     ];

//     await CommentsModel.insertMany(commentsUA);
//     console.log('📦 Comments inserted');

//     const commentsEN = [
//       {
//         language: 'en',

//         term: 'years',
//         name: 'Oksana Hryhorenko',
//         age: 64,
//         comment
// :
//           'Thank you for bringing food and medicine when no one else comes. Without you, many people would be left without the most essential things. Take care of yourselves!',
//       },
//       {
//         language: 'en',

//         term: 'years',
//         name: 'Serhii Antoniuk',
//         age: 32,
//         comment
// :
//           "I didn't know such support existed until I received warm clothes and medicine. You are truly saving lives. Thanks to the whole team!",
//       },
//       {
//         language: 'en',

//         term: 'years',
//         name: 'Liudmyla Kravets',
//         age: 57,
//         comment
// :
//           "I thought no one would help anymore until I saw your humanitarian aid truck. I'm deeply grateful for the food, warm clothes, and simply for not forgetting about us.",
//       },
//       {
//         language: 'en',

//         term: 'years',
//         name: 'Ihor Melnyk',
//         age: 41,
//         comment
// :
//           "There are no words to express my gratitude. Food, water, medicine—these are things we can't survive without, and you brought them to us. You are true heroes!",
//       },
//       {
//         language: 'en',

//         term: 'years',
//         name: 'Hanna Polishchuk',
//         age: 70,
//         comment
// :
//           'You didn’t just bring aid; you brought hope. The people working with you are performing real miracles. May God protect you!',
//       },
//       {
//         language: 'en',

//         term: 'years',
//         name: 'Vitalii Klymchuk',
//         age: 38,
//         comment
// :
//           "I thought I'd have to freeze all winter, but you brought warm blankets and sleeping bags. No one understands people’s needs better than you!",
//       },
//       {
//         language: 'en',

//         term: 'years',
//         name: 'Roman Stelmakh',
//         age: 29,
//         comment
// :
//           "I'm a soldier, and I know how important it is to have decent conditions at least sometimes. Your support is the strength that helps us hold on. Thank you for your work!",
//       },
//       {
//         language: 'en',

//         term: 'years',
//         name: 'Petro Zaichuk',
//         age: 55,
//         comment
// :
//           "What can I say… When there's no gas, no electricity, and it's freezing at home, help like yours is pure salvation. Respect and honor to you!",
//       },
//       {
//         language: 'en',

//         term: 'years',
//         name: 'Maryna Danyliuk',
//         age: 47,
//         comment
// :
//           "It's hard to be far from home, but thanks to you, it became a little easier. I received the necessary things and felt that there are people who care. Thank you sincerely!",
//       },
//       {
//         language: 'en',

//         term: 'years',
//         name: 'Maksym Grechko',
//         age: 26,
//         comment
// :
//           'What can I say? You’re awesome. You brought us everything we needed, but most importantly, you showed that people still care. Thank you from the bottom of my heart!',
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
