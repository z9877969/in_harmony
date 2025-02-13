// import mongoose from 'mongoose';
// import env from '../utils/evn.js';
// import { Pages } from '../models/PageModels.js';

// // TO USE THIS RUN : node src/app/server/seeds/footerSeed.js

// const footerPageSeed = async () => {
//   try {
//     await mongoose.connect(env('MONGODB_URI'));
//     console.log('✅ Connected to MongoDB');

//     const sectionsUA = [
//       {
//         local: 'ua',
//         route: 'footer',
//         section_name: 'footer',
//         section_content: {
//           team: {
//             socialTitle: 'Cоціальні мережі',
//             openModalButtonText:
//               'Команда дизайнерів та розробників сайту InHarmony',
//             openModalButtonAriaLabelText:
//               'Переглянути команду дизайнерів та розробників сайту InHarmony',
//             teamModalContent: {
//               title: 'Знайомтесь з нашою командою',
//               text: 'Цей сайт був створений завдяки зусиллям студентів GoIT, які працювали над його розробкою. Кожен учасник команди вніс важливий внесок, застосовуючи знання, навички та креативність для досягнення спільної мети. Познайомтеся з людьми, які стоять за створенням цього проєкту:',
//             },
//           },
//           company: {
//             contacts: {
//               title: 'Контакти:',
//               addressTitle: 'Адреса: ',
//               address:
//                 ' Україна, 24000, Вінницька обл., місто Могилів-Подільський, вул. Верхня Вокзальна, будинок 1',
//               emailTitle: 'Email: ',
//               email: 'info@inharmony.ua',
//               phoneTitle: 'Телефон: ',
//               phone: '+38 (096) 339-08-45',
//             },
//             social: [
//               {
//                 name: 'instagram',
//                 url: 'https://www.instagram.com/inharmony.ua',
//               },
//               { name: 'telegram', url: 'https://t.me/inharmonyua' },
//               {
//                 name: 'tiktok',
//                 url: 'https://www.tiktok.com/@inharmony.ua?_t=8pfFP3VEltN&_r=1',
//               },
//               {
//                 name: 'facebook',
//                 url: 'https://www.facebook.com/inharmony.com.ua',
//               },
//             ],
//             legalInfo: {
//               title: 'Юридична інформація',
//               linkPolicyText: 'Політика конфіденційності',
//               paymentDetails: {
//                 title: 'Реквізити:',
//                 companyNameTitle: 'Company name:',
//                 companyName: 'ГО ІНХАРМОНІ.ЮА',
//                 companyCodeTitle: 'Code: ',
//                 companyCode: '44849411',
//                 companyIBANTitle: 'IBAN Code: ',
//                 companyIBAN: 'UA503052990000026005026109109',
//               },
//               linkUnsubscribeText: 'Скасувати підписку',
//             },
//             contactUs: {
//               title: "Зв'язатися з нами",
//               placeholderName: "Ваше ім'я",
//               placeholderEmail: 'Ваш email',
//               placeholderMessage: 'Ваше повідомлення',
//               buttonText: 'Надіслати',
//               buttonAriaLabel: 'Відправити форму з контактними даними',
//             },
//           },

//           siteNavigation: {
//             navAriaLabel: 'навігація сайту у футері',
//             navigation: ['Головна', 'Поточні збори', 'Звітність', 'Про нас'],
//           },

//           copyright: '© 2024 InHarmony',
//         },
//       },
//     ];

//     const sectionsEN = [
//       {
//         local: 'en',
//         route: 'footer',
//         section_name: 'footer',
//         section_content: {
//           team: {
//             socialTitle: 'Social Media',
//             openModalButtonText:
//               'InHarmony Website Design and Development Team',
//             openModalButtonAriaLabelText:
//               'View the InHarmony website design and development team',
//             teamModalContent: {
//               title: 'Meet Our Team',
//               text: 'This website was created thanks to the efforts of GoIT students who worked on its development. Each team member made an important contribution, applying knowledge, skills, and creativity to achieve a common goal. Get to know the people behind this project:',
//             },
//           },
//           company: {
//             contacts: {
//               title: 'Contacts:',
//               addressTitle: 'Address:',
//               address:
//                 'Uaraine, 24000, Vinnytsia region, Mohyliv-Podilskyi city, Verkhnia Vokzalna St., building 1',
//               emailTitle: 'Email:',
//               email: 'info@inharmony.ua',
//               phoneTitle: 'Phone:',
//               phone: '+38 (096) 339-08-45',
//             },
//             social: [
//               {
//                 name: 'instagram',
//                 url: 'https://www.instagram.com/inharmony.ua',
//               },
//               { name: 'telegram', url: 'https://t.me/inharmonyua' },
//               {
//                 name: 'tiktok',
//                 url: 'https://www.tiktok.com/@inharmony.ua?_t=8pfFP3VEltN&_r=1',
//               },
//               {
//                 name: 'facebook',
//                 url: 'https://www.facebook.com/inharmony.com.ua',
//               },
//             ],
//             legalInfo: {
//               title: 'Legal Information',
//               linkPolicyText: 'Privacy Policy',
//               paymentDetails: {
//                 title: 'Payment Details:',
//                 companyNameTitle: 'Company Name:',
//                 companyName: 'NGO INHARMONY.UA',
//                 companyCodeTitle: 'Code:',
//                 companyCode: '44849411',
//                 companyIBANTitle: 'IBAN Code:',
//                 companyIBAN: 'UA503052990000026005026109109',
//               },
//               linkUnsubscribeText: 'Unsubscribe',
//             },
//             contactUs: {
//               title: 'Contact Us',
//               placeholderName: 'Your Name',
//               placeholderEmail: 'Your Email',
//               placeholderMessage: 'Your Message',
//               buttonText: 'Send',
//               buttonAriaLabel: 'Submit the contact form',
//             },
//           },
//           siteNavigation: {
//             navAriaLabel: 'site navigation in footer',
//             navigation: [
//               'Home',
//               'Current Collections',
//               'Reporting',
//               'About Us',
//             ],
//           },
//           copyright: '© 2024 InHarmony',
//         },
//       },
//     ];

//     const footerPageDataUA = new Pages({
//       local: 'ua',
//       route: 'footer',
//       sections_list: sectionsUA,
//     });
//     await Pages.create(footerPageDataUA);
//     console.log('📦 Reporting Page (UA) data inserted');

//     const footerPageDataEN = new Pages({
//       local: 'en',
//       route: 'footer',
//       sections_list: sectionsEN,
//     });

//     await Pages.create(footerPageDataEN);
//     console.log('📦 Reporting Page (EN) data inserted');

//     await mongoose.connection.close();
//     console.log('🔒 Database connection closed');
//   } catch (error) {
//     console.error('❌ Error seeding database:', error);
//     await mongoose.connection.close();
//   }
// };

// footerPageSeed();
