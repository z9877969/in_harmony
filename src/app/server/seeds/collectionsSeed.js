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
//         title: 'На корм для покинутих тварин',
//         importance: 'permanent',
//         image: [
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739447574/photo_2024-09-29_16.40.23_k4h5tl.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739447574/photo_2024-09-29_16.45.33_vytlik.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739447573/IMG_5908_oxlyeq.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739447572/IMG_7404_dsdidn.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739447571/photo_2024-09-29_16.46.08_dxcnu4.jpg',
//         ],
//         collected: 27350,
//         target: 200000,
//         alt: 'photo of collection',
//         peopleDonate: 28,
//         peopleDonate_title: 'донорів',
//         desc: 'Степногірськ, Плавні та Кам‘янське постійно обстрілюються, немає води, десятки тварин колись будучи домашніми, тепер живуть на вулицях.',
//         long_desc: {
//           section1:
//             'Степногірськ, Плавні та Кам‘янське постійно обстрілюються, немає води, десятки тварин колись будучи домашніми, тепер живуть на вулицях.',
//           section2:
//             '100% ваших донатів піде на купівлю корму для братів наших менших.',
//           section3:
//             'Підтримайте цих беззахисних тварин і подаруйте їм шанс на життя.',
//         },
//         status: 'active',
//         type: 'collections',
//         language: 'ua',
//         value: 'foodCollection',
//         collected_title: 'Зібрано',
//         target_title: 'Ціль',
//       },
//       {
//         title: 'Світло в "Сіру Зону"!',
//         image: [
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739447395/IMG_8875_sdzygp.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739447393/IMG_8293_onddmb.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739447392/IMG_8299_iy0ncb.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739447391/IMG_8300_ktmzeb.jpg',
//         ],
//         importance: 'urgent',
//         collected: 4165,
//         target: 380000,
//         alt: 'collection photo',
//         peopleDonate: 9,
//         peopleDonate_title: 'донорів',
//         desc: 'Немає електроенергії, води, газу, щоденні обстріли, 54 особи пенсійного віку.',
//         long_desc: {
//           section1:
//             'Продовжуємо збір коштів, щоб нагодувати тварин, які постраждали від війни та знаходяться у зоні бойових дій.',
//           section2: 'Села Плавні і Кам‘янське (Запорізька лінія фронту).',
//           section3:
//             'Проєкт полягає в купівлі 10 зарядних станцій для нагріву води, їжі та зарядки телефонів.',
//         },
//         status: 'active',
//         type: 'collections',
//         language: 'ua',
//         value: 'lightCollection',
//         collected_title: 'Зібрано',
//         target_title: 'Ціль',
//       },
//       {
//         title: 'Підтримка воїнів на передовій',
//         image: [
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739445637/jae3whc5gdsnmosftgqs.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739445636/o6o0ozrfeeesd5hc7x6h.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739445635/enc6ghmpdviorbenxxco.jpg',
//         ],

//         importance: 'permanent',
//         collected: 2600,
//         target: 200000,
//         alt: 'collection photo',
//         peopleDonate: 7,
//         peopleDonate_title: 'донорів',
//         desc: 'Наші воїни перебувають у найжорстокіших умовах, щодня ризикують своїм життям захищаючи нас.',
//         long_desc: {
//           section1:
//             'Наші воїни перебувають у найжорстокіших умовах, щодня ризикують своїм життям захищаючи нас.',
//           section2:
//             'Енергетичні батончики, їжа швидкого приготування, кевларові устілки, засоби особистої гігієни, вітаміни - все це необхідно щодня.',
//           section3:
//             'Долучайтеся до збору, нагодуємо та підтримаємо наших воїнів разом.',
//         },
//         status: 'active',
//         type: 'collections',
//         language: 'ua',
//         value: 'foodCollection',
//         collected_title: 'Зібрано',
//         target_title: 'Ціль',
//       },
//       {
//         title: 'Газовий Балон в Кожний Двір',
//         image: [
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739447391/IMG_8304_j02ebr.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739447390/IMG_8305_ipnqn7.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739447388/IMG_8448_xb8ogf.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739447387/IMG_1569_xitoqp.jpg',
//         ],

//         importance: 'urgent',
//         collected: 800,
//         target: 1040000,
//         alt: 'collection photo',
//         peopleDonate: 2,
//         peopleDonate_title: 'донорів',
//         desc: 'Немає електроенергії, води, газу, щоденні обстріли, їжу готують на кострі.',
//         long_desc: {
//           section1:
//             'Немає електроенергії, води, газу, щоденні обстріли, їжу готують на кострі.',
//           section2:
//             'Збираємо на 1600 газових балонів з конфорками для 1600 дворів громади Гуляйполя.',
//           section3:
//             'Проєкт надасть можливість швидко розігріти воду, приготовити їжу, зігрітися 2500 місцевим.',
//         },
//         status: 'active',
//         type: 'collections',
//         language: 'ua',
//         value: 'lightCollection',
//         collected_title: 'Зібрано',
//         target_title: 'Ціль',
//       },
//       {
//         title: 'Безкоштовна Питна Вода в Сіру Зону',
//         image: [
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739447389/IMG_8325_nfmy6n.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739447388/IMG_8340_pl21o0.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739447388/IMG_8449_ov3hie.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739447388/IMG_8450_whziyy.jpg',
//         ],
//         importance: 'urgent',
//         collected: 800,
//         target: 3216419,
//         alt: 'collection photo',
//         peopleDonate: 3,
//         peopleDonate_title: 'донорів',
//         desc: 'Запорізька лінія фронту, 3 села, відсутність питної води.',
//         long_desc: {
//           section1: 'Запорізька лінія фронту, 3 села, відсутність питної води.',
//           section2:
//             'Збираємо на 2 свердловини і 3 водоочисні системи, щоб забезпечити чисту питну воду 24/7 для більше ніж 4000 людей.',
//           section3:
//             'Проєкт надасть доступ до безкоштовної питної води для місцевих мешканців.',
//         },
//         status: 'active',
//         type: 'collections',
//         language: 'ua',
//         value: 'waterCollection',
//         collected_title: 'Зібрано',
//         target_title: 'Ціль',
//       },
//       {
//         title: 'Модульне містечко для 37 родин Маріупольців',
//         image: [
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739445718/bemtrbvvihc7fcol4gbt.png',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739445711/s1yjz1vux9f5sqtlfxes.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739445710/bn36eyruygim27ksxizv.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739445709/quudemu2rluyf5ilwe5v.jpg',
//         ],

//         importance: 'non-urgent',
//         collected: 2000,
//         target: 42000000,
//         alt: 'Світло в "Сіру Зону',
//         peopleDonate: 2,
//         peopleDonate_title: 'донорів',
//         desc: "Перше модульне містечко для 37 сімей маріупольців. Ми надаємо 37 окремих будинків для кожної сім'ї з дитячим майданчиком.",
//         long_desc: {
//           section1:
//             "Перше модульне містечко для 37 сімей маріупольців. Ми надаємо 37 окремих будинків для кожної сім'ї з дитячим майданчиком.",
//           section2:
//             'Маріупольці проживатимуть в теплих і екологічно чистих модульних будинках, що дозволить заощадити на оренді житла.',
//           section3:
//             'Ваш внесок - це важлива частина майбутнього будиночка для маріупольців!',
//         },
//         status: 'active',
//         type: 'collections',
//         language: 'ua',
//         value: 'placesToStayCollection',
//         collected_title: 'Зібрано',
//         target_title: 'Ціль',
//       },
//       {
//         title: 'Вода в Гуляйполе',
//         image: [
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739445929/k3hegjd56rtd9led1fov.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739445920/dpab8e8sgmf8n71kd5fj.jpg',
//         ],

//         collected: 60130,
//         target: 60130,
//         alt: 'collection photo',
//         peopleDonate: 1,
//         peopleDonate_title: 'донорів',
//         long_desc: {
//           section1:
//             'Цей проєкт, вирішивпроблему зберігання питної води, для мешканців громади Гуляйполя (2500 людей).',
//           section2:
//             'Придбали та доставили 10 ємностей по 750л для зберігання питної води.',
//           section3:
//             'Громада Гуляйполя знаходиться в зоні бойових дій, відсутні водопостачання, газ та електроенергія.',
//         },
//         status: 'closed',
//         type: 'collections',
//         language: 'ua',
//         value: 'lightCollection',
//         collected_title: 'Зібрано',
//         target_title: 'Ціль',
//         currency: 'грн',
//         term: 'Термін реалізаці:',
//         days: '65',
//         period: 'днів',
//         comments: 'Відгуків:',
//       },
//       {
//         title: 'Питну воду в Сіру Зону!',
//         image: [
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739446394/wzbi4davcctilzoj0zrj.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739446392/rjxffueayx2krshw6qzp.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739446391/rik5ncp5ljbzmdin84ky.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739446390/qvb3zr1nchdupoa4fbxp.jpg',
//         ],

//         collected: 18900,
//         target: 18900,
//         alt: 'collection photo',
//         desc: 'Реалізований проєкт',
//         peopleDonate: 9,
//         peopleDonate_title: 'донорів',
//         long_desc: {
//           section1:
//             'Проєкт вирішив проблему транспортування питної води та їжі для 56 жителів сіл Плавні та Кам‘янське (Запорізька лінія фронту).',
//           section2:
//             'Придбали 10 укріплених візків для транспортування гуманітарної допомоги. Жителі сіл – пенсійного віку, їжу та воду забирають с безпечної точки та ідуть (або їдуть на велосипедах) 5км.',
//           section3: 'Села закриті на в‘їзд та виїзд через небезпеку обстрілів.',
//         },
//         status: 'closed',
//         type: 'collections',
//         language: 'ua',
//         value: 'lightCollection',
//         collected_title: 'Зібрано',
//         target_title: 'Ціль',
//         currency: 'грн',
//         term: 'Термін реалізаці:',
//         days: '70',
//         period: 'днів',
//         comments: 'Відгуків:',
//       },
//     ];

//     await CollectionModel.insertMany(collectionsUA);
//     console.log('📦 Collections inserted');

//     const collectionsEN = [
//       {
//         title: 'For Feeding Abandoned Animals',
//         image: [
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739447574/photo_2024-09-29_16.40.23_k4h5tl.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739447574/photo_2024-09-29_16.45.33_vytlik.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739447573/IMG_5908_oxlyeq.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739447572/IMG_7404_dsdidn.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739447571/photo_2024-09-29_16.46.08_dxcnu4.jpg',
//         ],
//         importance: 'permanent',
//         collected: 27350,
//         target: 200000,
//         alt: 'photo of collection',
//         peopleDonate: 28,
//         peopleDonate_title: 'donors',
//         desc: 'Stepnohirsk, Plavni, and Kamianske are constantly shelled, there is no water, and dozens of once-domestic animals now live on the streets.',
//         long_desc: {
//           section1:
//             'Stepnohirsk, Plavni, and Kamianske are constantly shelled, there is no water, and dozens of once-domestic animals now live on the streets.',
//           section2:
//             '100% of your donations will go towards buying food for our little brothers.',
//           section3:
//             'Support these defenseless animals and give them a chance to live.',
//         },
//         status: 'active',
//         type: 'collections',
//         language: 'en',
//         value: 'foodCollection',
//         collected_title: 'Collected',
//         target_title: 'Target',
//       },
//       {
//         title: 'Light in the "Gray Zone"!',
//         image: [
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739447395/IMG_8875_sdzygp.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739447393/IMG_8293_onddmb.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739447392/IMG_8299_iy0ncb.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739447391/IMG_8300_ktmzeb.jpg',
//         ],

//         importance: 'urgent',
//         collected: 4165,
//         target: 380000,
//         alt: 'collection photo',
//         peopleDonate: 9,
//         peopleDonate_title: 'donors',
//         desc: 'No electricity, water, or gas, daily shelling, 54 elderly people.',
//         long_desc: {
//           section1:
//             'We continue raising funds to feed animals affected by the war in active combat zones.',
//           section2:
//             'Villages of Plavni and Kamianske (Zaporizhzhia front line).',
//           section3:
//             'The project involves purchasing 10 charging stations for heating water, preparing food, and charging phones.',
//         },
//         status: 'active',
//         type: 'collections',
//         language: 'en',
//         value: 'lightCollection',
//         collected_title: 'Collected',
//         target_title: 'Target',
//       },
//       {
//         title: 'Support for Frontline Soldiers',
//         image: [
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739445637/jae3whc5gdsnmosftgqs.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739445636/o6o0ozrfeeesd5hc7x6h.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739445635/enc6ghmpdviorbenxxco.jpg',
//         ],

//         importance: 'permanent',
//         collected: 2600,
//         target: 200000,
//         alt: 'collection photo',
//         peopleDonate: 7,
//         peopleDonate_title: 'donors',
//         desc: 'Our soldiers are in the harshest conditions, risking their lives daily to protect us.',
//         long_desc: {
//           section1:
//             'Our soldiers are in the harshest conditions, risking their lives daily to protect us.',
//           section2:
//             'Energy bars, instant food, Kevlar insoles, personal hygiene products, vitamins - all are needed daily.',
//           section3:
//             'Join the fundraiser, let’s feed and support our soldiers together.',
//         },
//         status: 'active',
//         type: 'collections',
//         language: 'en',
//         value: 'foodCollection',
//         collected_title: 'Collected',
//         target_title: 'Target',
//       },
//       {
//         title: 'A Gas Cylinder for Every Household',
//         image: [
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739447391/IMG_8304_j02ebr.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739447390/IMG_8305_ipnqn7.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739447388/IMG_8448_xb8ogf.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739447387/IMG_1569_xitoqp.jpg',
//         ],

//         importance: 'urgent',
//         collected: 800,
//         target: 1040000,
//         alt: 'collection photo',
//         peopleDonate: 2,
//         peopleDonate_title: 'donors',
//         desc: 'No electricity, water, or gas, daily shelling, cooking on open fires.',
//         long_desc: {
//           section1:
//             'No electricity, water, or gas, daily shelling, cooking on open fires.',
//           section2:
//             'Raising funds for 1600 gas cylinders with burners for 1600 households in Huliaipole community.',
//           section3:
//             'The project will allow 2,500 locals to quickly heat water, prepare food, and stay warm.',
//         },
//         status: 'active',
//         type: 'collections',
//         language: 'en',
//         value: 'lightCollection',
//         collected_title: 'Collected',
//         target_title: 'Target',
//       },
//       {
//         title: 'Free Drinking Water in the Gray Zone',
//         image: [
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739447389/IMG_8325_nfmy6n.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739447388/IMG_8340_pl21o0.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739447388/IMG_8449_ov3hie.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739447388/IMG_8450_whziyy.jpg',
//         ],

//         importance: 'urgent',
//         collected: 800,
//         target: 3216419,
//         alt: 'collection photo',
//         peopleDonate: 3,
//         peopleDonate_title: 'donors',
//         desc: 'Zaporizhzhia front line, 3 villages, no drinking water.',
//         long_desc: {
//           section1: 'Zaporizhzhia front line, 3 villages, no drinking water.',
//           section2:
//             'Raising funds for 2 wells and 3 water purification systems to provide clean drinking water 24/7 for over 4,000 people.',
//           section3:
//             'The project will provide free drinking water for local residents.',
//         },
//         status: 'active',
//         type: 'collections',
//         language: 'en',
//         value: 'waterCollection',
//         collected_title: 'Collected',
//         target_title: 'Target',
//       },
//       {
//         title: 'Modular Town for 37 Mariupol Families',
//         image: [
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739445718/bemtrbvvihc7fcol4gbt.png',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739445711/s1yjz1vux9f5sqtlfxes.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739445710/bn36eyruygim27ksxizv.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739445709/quudemu2rluyf5ilwe5v.jpg',
//         ],

//         importance: 'non-urgent',
//         collected: 2000,
//         target: 42000000,
//         alt: 'Light in the "Gray Zone"',
//         peopleDonate: 2,
//         peopleDonate_title: 'donors',
//         desc: 'The first modular town for 37 Mariupol families. We provide 37 separate houses for each family with a playground.',
//         long_desc: {
//           section1:
//             'The first modular town for 37 Mariupol families. We provide 37 separate houses for each family with a playground.',
//           section2:
//             'Mariupol residents will live in warm, eco-friendly modular houses, saving on rent.',
//           section3:
//             'Your contribution is an important part of the future home for Mariupol families!',
//         },
//         status: 'active',
//         type: 'collections',
//         language: 'en',
//         value: 'placesToStayCollection',
//         collected_title: 'Collected',
//         target_title: 'Target',
//       },
//       {
//         title: 'Water in Huliaipole',
//         image: [
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739445929/k3hegjd56rtd9led1fov.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739445920/dpab8e8sgmf8n71kd5fj.jpg',
//         ],
//         collected: 60130,
//         target: 60130,
//         alt: 'collection photo',
//         peopleDonate: 1,
//         peopleDonate_title: 'donors',
//         long_desc: {
//           section1:
//             'This project solved the problem of drinking water storage for the Huliaipole community (2,500 people).',
//           section2:
//             'Purchased and delivered 10 containers of 750 liters each for drinking water storage.',
//           section3:
//             'The Huliaipole community is in a combat zone with no water supply, gas, or electricity.',
//         },
//         status: 'closed',
//         type: 'collections',
//         language: 'en',
//         value: 'lightCollection',
//         collected_title: 'Collected',
//         target_title: 'Target',
//         currency: 'UAH',
//         term: 'Implementation Period:',
//         days: '65',
//         period: 'days',
//         comments: 'Reviews:',
//       },
//       {
//         title: 'Drinking water in the Gray Zone!',
//         image: [
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739446394/wzbi4davcctilzoj0zrj.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739446392/rjxffueayx2krshw6qzp.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739446391/rik5ncp5ljbzmdin84ky.jpg',
//           'https://res.cloudinary.com/dg56vgtae/image/upload/v1739446390/qvb3zr1nchdupoa4fbxp.jpg',
//         ],

//         collected: 18900,
//         target: 18900,
//         alt: 'Lcollection photo',
//         desc: 'Project completed',
//         peopleDonate: 9,
//         peopleDonate_title: 'donors',
//         long_desc: {
//           section1:
//             'The project solved the problem of transporting drinking water and food for 56 residents of Plavni and Kamianske villages (Zaporizhzhia front line).',
//           section2:
//             'Purchased 10 reinforced carts for transporting humanitarian aid. The village residents are elderly, collecting food and water from a safe point, traveling 5 km by foot or bicycle.',
//           section3:
//             'Villages are closed for entry and exit due to shelling risks.',
//         },
//         status: 'closed',
//         type: 'collections',
//         language: 'en',
//         value: 'lightCollection',
//         collected_title: 'Collected',
//         target_title: 'Target',
//         currency: 'UAH',
//         term: 'Implementation Period:',
//         days: '70',
//         period: 'days',
//         comments: 'Reviews:',
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
