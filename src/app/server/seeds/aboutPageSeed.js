// import mongoose from 'mongoose';
// import env from '../utils/evn.js';
// import { Pages } from '../models/PageModels.js';

// // TO USE THIS RUN : node src/app/server/seeds/aboutPageSeed.js

// const aboutPageSeed = async () => {
//   try {
//     await mongoose.connect(env('MONGODB_URI'));
//     console.log('✅ Connected to MongoDB');

//     const sectionsUA = [
//       {
//         local: 'ua',
//         section_name: 'hero',
//         route: 'about',
//         section_content: {
//           title: 'Ми тут, щоб допомагати',
//           introText: {
//             sectionTitle: 'Заради кого ми працюємо',
//             description1:
//               'З перших днів війни ми об’єднали наші зусилля, щоб підтримати тих, хто опинився у важких умовах.',
//             description2:
//               'Наша мета — допомагати кожному, хто опинився в складних життєвих умовах, аби вони знали, що про них пам’ятають і готові підтримати.',
//             description3:
//               'Подарувати відчуття дому, турботи та впевненості в завтрашньому дні всім, хто цього потребує — цивільним, військовим, громадам та покинутим тваринам.',
//           },
//           statsTitle: 'Те, що ми вже зробили разом',

//           cards: [
//             {
//               id: '1',
//               amount: '12 000+',
//               description: 'нагодованих людей',
//               iconName: 'icon-apple',
//             },
//             {
//               id: '2',
//               amount: '4 000+',
//               description: 'забезпечені одягом',
//               iconName: 'icon-t-shirt',
//             },
//             {
//               id: '3',
//               amount: '8 500+',
//               description: 'забезпеченно водою',
//               iconName: 'icon-water-min',
//             },
//             {
//               id: '4',
//               amount: '3 000+',
//               description: 'отримали ліки',
//               iconName: 'icon-first-aid-kit',
//             },
//           ],
//         },
//       },
//       {
//         local: 'ua',
//         section_name: 'mission',
//         route: 'about',
//         section_content: {
//           title: 'Місія та цінності',
//           subtitle: 'Заради чого ми працюємо',
//           descriptionMain:
//             'Ми допомагаємо тим, хто опинився у важких життєвих умовах, створюючи позитивний вплив і надихаючи інших на добрі справи.',
//           descriptionExtra:
//             'Наші принципи — це відповідальність, щирість, благородство та бажання приносити користь. Ми прагнемо бути прикладом і дарувати надію тим, хто цього найбільше потребує.',
//           inspiration: {
//             inspirationTitle: 'Що нас надихає?',
//             description:
//               'InHarmony — це благодійна організація, що об’єднує людей, готових створювати зміни для тих, хто цього потребує найбільше.',
//             cards: [
//               {
//                 title: 'Користь',
//                 text: '"Підтримувати життя та дарувати надію."',
//               },
//               {
//                 title: 'Приклад',
//                 text: '"Показувати, як дії можуть змінювати майбутнє."',
//               },
//               {
//                 title: 'Позитивний вплив',
//                 text: '"Надихати світ змінюватися через добрі вчинки."',
//               },
//               {
//                 title: 'Мотивація',
//                 text: '"Вірити, що кожен може зробити свій внесок."',
//               },
//               {
//                 title: 'Відповідальність',
//                 text: '"Дбати про тих, хто потребує допомоги."',
//               },
//               {
//                 title: 'Оригінальність',
//                 text: '"Шукати унікальні рішення, що надихають діяти."',
//               },
//               {
//                 title: 'Шляхетність',
//                 text: '"Діяти з щирістю й співчуттям."',
//               },
//             ],
//           },
//           sub_titles: 'Ключові напрямки діяльності:',
//           motivation:
//             'Долучайтеся до нашої ініціативи — разом ми можемо врятувати ще більше життів!',
//         },
//       },

//       {
//         local: 'ua',
//         route: 'about',
//         section_name: 'together',
//         section_content: {
//           title: 'Разом ми сильніші та можемо більше!',
//           team: {
//             title: 'Наша команда',
//             description: 'Кожен із нас працює із натхненням і турботою.',
//             cards: [
//               {
//                 id: '1',
//                 icon: 'icon-non-image',
//                 name: 'Михайлов Сергій',
//                 role: 'Проєктний менеджер (засновник)',
//                 description:
//                   '"Більше 4 років у проєктній діяльності допомагають мені перетворювати ідеї на реальність."',
//               },
//               {
//                 id: '2',
//                 icon: 'icon-non-image',
//                 name: 'Жилюк Олександр',
//                 role: 'Менеджер з розвитку',
//                 description:
//                   '"Цифри — це моє натхнення. Більше 5 років у діджитал маркетингу я знаходжу відповіді в аналітиці, щоб розвивати наші ідеї та втілювати їх у життя."',
//               },
//               {
//                 id: '3',
//                 icon: 'icon-non-image',
//                 name: 'Дюміна Олена',
//                 role: 'Дизайнерка',
//                 description:
//                   '"У нашій команді я відповідаю за візуальну сторону комунікацій, аби ваш досвід допомоги був приємним та ефективним."',
//               },
//               {
//                 id: '4',
//                 icon: 'icon-non-image',
//                 name: 'Свистун Павло',
//                 role: 'Фронтенд розробник',
//                 description:
//                   '"Досвід більше 5 років у фронтенд-розробці. Планую архітектуру рішень, що допомагають команді фонду реалізовувати важливі соціальні проєкти."',
//               },
//             ],
//           },
//         },
//       },
//       {
//         local: 'ua',
//         route: 'about',
//         section_name: 'partners',
//         section_content: {
//           title: 'Наші партнери',
//           desc: 'Команда, партнери і ви — наші ключові сили! Ми вдячні тим, хто розділяє нашу мету і допомагає реалізовувати добрі справи.',
//           cards: [
//             { logo: 'icon-non-image' },
//             { logo: 'icon-non-image' },
//             { logo: 'icon-non-image' },
//             { logo: 'icon-non-image' },
//             { logo: 'icon-non-image' },
//             { logo: 'icon-non-image' },
//             { logo: 'icon-non-image' },
//             { logo: 'icon-non-image' },
//             { logo: 'icon-non-image' },
//             { logo: 'icon-non-image' },
//           ],
//         },
//       },
//       {
//         local: 'ua',
//         route: 'about',
//         section_name: 'donats',
//         section_content: {
//           title: 'Будьмо разом!',
//           desc: 'Команда, партнери і ви — наші ключові сили! Ми вдячні тим, хто розділяє нашу мету і допомагає реалізовувати добрі справи.',
//           button_donate: 'Допомогти',
//           button_enjoy: 'Приєднатися',
//           image: 'icon-non-image',
//         },
//       },
//     ];

//     const sectionsEN = [
//       {
//         local: 'en',
//         section_name: 'hero',
//         route: 'about',
//         section_content: {
//           title: 'We Are Here to Help',
//           introText: {
//             sectionTitle: 'Who We Work For',
//             description1:
//               'From the first days of the war, we united our efforts to support those in difficult conditions.',
//             description2:
//               'Our goal is to help everyone who finds themselves in tough life situations, so they know they are remembered and supported.',
//             description3:
//               'To give a sense of home, care, and confidence in the future to everyone in need — civilians, military personnel, communities, and abandoned animals.',
//           },
//           statsTitle: 'What We Have Achieved Together',

//           cards: [
//             {
//               id: '1',
//               amount: '12,000+',
//               description: 'people fed',
//               iconName: 'icon-apple',
//             },
//             {
//               id: '2',
//               amount: '4,000+',
//               description: 'provided with clothing',
//               iconName: 'icon-t-shirt',
//             },
//             {
//               id: '3',
//               amount: '8,500+',
//               description: 'supplied with water',
//               iconName: 'icon-water-min',
//             },
//             {
//               id: '4',
//               amount: '3,000+',
//               description: 'received medicines',
//               iconName: 'icon-first-aid-kit',
//             },
//           ],
//         },
//       },
//       {
//         local: 'en',
//         section_name: 'mission',
//         route: 'about',
//         section_content: {
//           title: 'Mission and Values',
//           subtitle: 'Why We Work',
//           descriptionMain:
//             'We help those in difficult life situations, creating a positive impact and inspiring others to do good.',
//           descriptionExtra:
//             'Our principles are responsibility, sincerity, nobility, and the desire to be helpful. We strive to set an example and give hope to those who need it most.',
//           inspiration: {
//             inspirationTitle: 'What Inspires Us?',
//             description:
//               'InHarmony is a charitable organization that unites people ready to create change for those who need it most.',
//             cards: [
//               {
//                 title: 'Benefit',
//                 text: '"Supporting life and giving hope."',
//               },
//               {
//                 title: 'Example',
//                 text: '"Showing how actions can change the future."',
//               },
//               {
//                 title: 'Positive Impact',
//                 text: '"Inspiring the world to change through good deeds."',
//               },
//               {
//                 title: 'Motivation',
//                 text: '"Believing that everyone can make a difference."',
//               },
//               {
//                 title: 'Responsibility',
//                 text: '"Caring for those in need of help."',
//               },
//               {
//                 title: 'Originality',
//                 text: '"Seeking unique solutions that inspire action."',
//               },
//               {
//                 title: 'Nobility',
//                 text: '"Acting with sincerity and compassion."',
//               },
//             ],
//           },
//           sub_titles: 'Key Areas of Activity:',
//           motivation:
//             'Join our initiative — together we can save even more lives!',
//         },
//       },

//       {
//         local: 'en',
//         route: 'about',
//         section_name: 'together',
//         section_content: {
//           title: 'Together We Are Stronger and Can Do More!',
//           team: {
//             title: 'Our Team',
//             description: 'Each of us works with inspiration and care.',
//             cards: [
//               {
//                 id: '1',
//                 icon: 'icon-non-image',
//                 name: 'Serhiy Mykhailov',
//                 role: 'Project Manager (Founder)',
//                 description:
//                   '"Over 4 years in project management help me turn ideas into reality."',
//               },
//               {
//                 id: '2',
//                 icon: 'icon-non-image',
//                 name: 'Oleksandr Zhilien',
//                 role: 'Development Manager',
//                 description:
//                   '"Numbers are my inspiration. With over 5 years in digital marketing, I find answers in analytics to develop and implement our ideas."',
//               },
//               {
//                 id: '3',
//                 icon: 'icon-non-image',
//                 name: 'Olena Dyumina',
//                 role: 'Designer',
//                 description:
//                   '"In our team, I am responsible for the visual communication to ensure your support experience is pleasant and effective."',
//               },
//               {
//                 id: '4',
//                 icon: 'icon-non-image',
//                 name: 'Pavlo Svystun',
//                 role: 'Frontend Developer',
//                 description:
//                   '"With over 5 years of experience in frontend development, I plan solution architectures that help our foundation team implement important social projects."',
//               },
//             ],
//           },
//         },
//       },
//       {
//         local: 'en',
//         route: 'about',
//         section_name: 'partners',
//         section_content: {
//           title: 'Our Partners',
//           desc: 'The team, partners, and you are our key strengths! We are grateful to those who share our goal and help bring good deeds to life.',
//           cards: [
//             { logo: 'icon-non-image' },
//             { logo: 'icon-non-image' },
//             { logo: 'icon-non-image' },
//             { logo: 'icon-non-image' },
//             { logo: 'icon-non-image' },
//             { logo: 'icon-non-image' },
//             { logo: 'icon-non-image' },
//             { logo: 'icon-non-image' },
//             { logo: 'icon-non-image' },
//             { logo: 'icon-non-image' },
//           ],
//         },
//       },
//       {
//         local: 'en',
//         route: 'about',
//         section_name: 'donats',
//         section_content: {
//           title: 'Let’s Be Together!',
//           desc: 'The team, partners, and you are our key strengths! We are grateful to those who share our goal and help bring good deeds to life.',
//           button_donate: 'Donate',
//           button_enjoy: 'Join Us',
//           image: 'icon-non-image',
//         },
//       },
//     ];

//     const aboutPageDataUA = new Pages({
//       local: 'ua',
//       route: 'about',
//       sections_list: sectionsUA,
//     });
//     await Pages.create(aboutPageDataUA);
//     console.log('📦  Page (UA) data inserted');

//     const aboutPageDataEN = new Pages({
//       local: 'en',
//       route: 'about',
//       sections_list: sectionsEN,
//     });

//     await Pages.create(aboutPageDataEN);
//     console.log('📦  Page (EN) data inserted');

//     await mongoose.connection.close();
//     console.log('🔒 Database connection closed');
//   } catch (error) {
//     console.error('❌ Error seeding database:', error);
//     await mongoose.connection.close();
//   }
// };

// aboutPageSeed();
