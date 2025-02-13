import mongoose from 'mongoose';
import { Pages } from '../models/PageModels.js';
import env from '../utils/evn.js';

//  node src/app/server/seeds/termsSeed.js

// eslint-disable-next-line
const termsSeed = async () => {
  try {
    await mongoose.connect(env('MONGODB_URI'));
    // eslint-disable-next-line
    console.log('�� Connected to MongoDB');

    const termsData = [
      {
        id: 1,
        title: 'Визначення',
        description:
          'Користувач сайту (далі Користувач) – особа, яка має доступ до Сайту, за допомогою мережі Інтернет і використовує Сайт. Адміністрація сайту (далі адміністрація сайту) – уповноважені співробітники управління сайтом, які організовують і (або) здійснюють обробку персональних даних, а також визначають цілі обробки персональних даних, склад персональних даних, що підлягають обробці, дії (операції), здійснюються з персональними даними.',
      },
      {
        id: 2,
        title: 'Загальні положення',
        description:
          'Ці Правила та умови користування сайтом (далі, Правила) є публічним договором між власником компанії у формі товариства з обмеженою відповідальністю і кожним зареєстрованим користувачем нашого сервісу. Використовуючи наш сайт, Ви розумієте і погоджуєтеся з цими Правилами та умовами користування сайтом в цілому, а також з правилами і умовами, викладеними в кожному розділі. Будь ласка, не використовуйте сайт, якщо Ви не згодні з цими Правилами.',
      },
      {
        id: 3,
        title: 'Правила',
        description:
          'Інформація, розміщена на сайті, може використовуватися тільки за умови дотримання всіх вимог, тому просимо уважно прочитати правила користування (далі – Правила / Правилами). Кожна Сторона гарантує іншій Стороні, що володіє необхідною право- і дієздатністю.',
      },
      {
        id: 4,
        title: 'Інтелектуальна власність',
        description:
          'Вся текстова інформація та графічні зображення, які містить цей сайт, є власністю Продавця і його контрагентів. Назви торгових марок, товарних знаків і логотипи, розміщені на сайті, є власністю їх власників. Користувач може переглядати і завантажувати матеріали цього сайту тільки для особистого некомерційного використання, за умови збереження всієї інформації про авторське право та інших відомостей про право власності, що містяться у вихідних матеріалах і будь-яких їхніх копіях. Забороняється змінювати матеріали цього Сайту, а також поширювати або демонструвати їх в будь-якому вигляді або використовувати їх будь-яким іншим чином для суспільних або комерційних цілей. Будь-яке використання цих матеріалів на інших сайтах або в комп’ютерних мережах забороняється.',
      },
      {
        id: 5,
        title: 'Посилання на інші сайти',
        description:
          'Посилання на інші ресурси (сайти), які знаходяться на цьому сайті, призначені виключно для ознайомлювальних цілей. Адміністрація сайту не несе ніякої відповідальності за будь-які збитки або втрати, які можуть бути понесені в результаті переходу на сайти, посилання на які знаходяться на цьому сайті.',
      },
      {
        id: 6,
        title: 'Зміни',
        description:
          'Адміністрація сайту залишає за собою право на свій власний розсуд в будь-який час вносити зміни та поправки, а також доповнювати або видаляти будь-які розділи цієї Угоди, повністю або частково. Зміни, внесені до Угоди, будуть дійсні після того, як повідомлення про ці зміни буде розміщена на Сайті. Ваше подальше використання Сайту після розміщення повідомлення про зміни в Угоді означає Вашу згоду з цими змінами. Адміністрація сайту може в будь-який час без попереднього повідомлення скасовувати, змінювати, виправляти будь-які помилки або упущення в будь-якому розділі сайту, а також вносити інші зміни в матеріали сайту і розміщувати на ньому інформацію про продукцію або цінах (якщо така є), призупиняти або припиняти роботу різних розділів сайту, включаючи доступ до деяких функцій сайту. Адміністрація сайту також може накладати обмеження на певні функції і послуги або обмежувати Ваш доступ до окремих розділів сайту або до всього сайту без повідомлення та будь-якої відповідальності зі свого боку.',
      },
      {
        id: 7,
        title: 'Безпека',
        description:
          'Ви не повинні: – використовувати будь-які пристрої або програмне забезпечення, яке може перешкодити роботі Сайту; – здійснювати будь-які дії, в результаті яких інфраструктура Сайту піддасться непропорційно великий і необгрунтованою навантаженні (наприклад, розсилка масових електронних листів – «спам»); – втручатися в роботу програмного забезпечення сайту, або його функціональних елементів, включаючи розміщення на Сайті матеріалів, заражених вірусами, шкідливими програмами типу «троянський кінь», «бомба уповільненої дії» або іншими елементами, які можуть завдати шкоди програмної структурі сайту або вплинути на її роботу.',
      },
      {
        id: 8,
        title: 'Повідомлення',
        description:
          'Всі номери «листи», «повідомлення» і інші подібні висловлювання відносяться до електронного способу зв’язку (наприклад, по електронній пошті), за умови збереження посилається на повідомлення стороною достовірних доказів того, що повідомлення було відправлено і отримано.',
      },
      {
        id: 9,
        title: 'Обмеження відповідальності',
        description:
          'Адміністрація сайту ні при яких обставинах не несе відповідальності за будь-які прямі, непрямі, побічні, фактичні або випадкові збитки, або випадкові штрафні збитки (включаючи, без будь-яких обмежень, збиток, нанесений в зв’язку з втратою підприємства, які не укладенням договору, неотриманням доходу , даних, інформації або перервою в продуктивної діяльності), що виникли в результаті або у зв’язку з використанням або неможливістю використання даного сайту або його змісту; або в зв’язку з цією угодою, навіть якщо Адміністрація',
      },
      {
        id: 10,
        title: 'Вирішення конфліктів і суперечок',
        description:
          'Користувач, який вважає, що його / її права і / або інтереси були порушені адміністрацією сайту може відправити претензію по електронній пошті за адресою info@uanimals.org нa українською або російською мовою з зазначенням повного юридичного імені (для юридичних осіб) або ім’я, прізвище та по батькові (для фізичних осіб), а також зворотної адреси (поштового та електронного) і контактного номера телефону. Протягом 10 робочих днів після отримання претензії адміністрація сайту зобов’язується відправити відповідь по суті на електронну адресу відправника, вказаний в листі. Адміністрація сайту не розглядає анонімні скарги або скарги, які не містять правдиву або повну інформацію про відправника. У разі, якщо відправник не задоволений відповіддю, отриманою від адміністрації сайту, або користувач не отримав його в призначений час, процедура повинна бути пройдена заново через поштове листування. Для цих цілей використовується поштова адреса info@uanimals.org. Також, термін відповіді від компанії в письмовій формі буде продовжений до 10 робочих днів. У разі невирішеності спору через процедуру подачі претензії суперечка вирішити в суді.',
      },
    ];

    const termsDataEN = [
      {
        id: 1,
        title: 'Definitions',
        description:
          'Website User (hereinafter referred to as the User) – a person who has access to the Website via the Internet and uses the Website. Website Administration (hereinafter referred to as the Website Administration) – authorized employees managing the Website, who organize and/or carry out the processing of personal data, as well as determine the purposes of personal data processing, the composition of personal data to be processed, and the actions (operations) performed with personal data.',
      },
      {
        id: 2,
        title: 'General Provisions',
        description:
          'These Terms and Conditions of Website Use (hereinafter referred to as the Terms) are a public agreement between the owner of the company in the form of a limited liability company and each registered user of our service. By using our website, you understand and agree to these Terms and Conditions of Website Use as a whole, as well as the rules and conditions outlined in each section. Please do not use the website if you do not agree with these Terms.',
      },
      {
        id: 3,
        title: 'Rules',
        description:
          'The information posted on the website may be used only if all requirements are met, so please read the terms of use carefully (hereinafter referred to as the Rules). Each Party guarantees to the other Party that it has the necessary legal capacity and authority.',
      },
      {
        id: 4,
        title: 'Intellectual Property',
        description:
          'All textual information and graphic images contained on this website are the property of the Seller and its contractors. The names of trademarks, trade names, and logos displayed on the website are the property of their respective owners. The User may view and download materials from this website for personal non-commercial use only, provided all copyright and proprietary notices contained in the original materials and any copies thereof are retained. It is prohibited to modify the materials on this Website, distribute or display them in any form, or use them in any other way for public or commercial purposes. Any use of these materials on other websites or in computer networks is prohibited.',
      },
      {
        id: 5,
        title: 'Links to Other Websites',
        description:
          'Links to other resources (websites) found on this website are provided solely for informational purposes. The Website Administration is not responsible for any damages or losses that may result from visiting websites linked from this site.',
      },
      {
        id: 6,
        title: 'Changes',
        description:
          'The Website Administration reserves the right, at its sole discretion, to make changes, amendments, add or delete any sections of this Agreement, in whole or in part, at any time. Changes to the Agreement will be effective after a notice of such changes is posted on the Website. Your continued use of the Website after such notice has been posted constitutes your acceptance of the changes. The Website Administration may, at any time and without prior notice, cancel, modify, correct any errors or omissions in any section of the site, make other changes to the website materials, and post information about products or prices (if applicable). It may also suspend or discontinue certain sections of the website, including access to specific features. The Website Administration may impose restrictions on certain features and services or limit your access to certain sections of the website or the entire website without prior notice and without any liability on its part.',
      },
      {
        id: 7,
        title: 'Security',
        description:
          'You must not: – use any devices or software that may interfere with the operation of the Website; – perform any actions that may result in disproportionately large or unreasonable loads on the Website infrastructure (e.g., sending bulk emails – "spam"); – interfere with the website software or its functional elements, including posting materials infected with viruses, malicious programs like "Trojan horses," "time bombs," or other elements that may harm the website’s software structure or affect its operation.',
      },
      {
        id: 8,
        title: 'Notices',
        description:
          'All references to "letters," "notices," and other similar terms refer to electronic communication methods (such as email), provided the sending party retains reliable proof that the notice was sent and received.',
      },
      {
        id: 9,
        title: 'Limitation of Liability',
        description:
          'Under no circumstances shall the Website Administration be liable for any direct, indirect, incidental, consequential, or punitive damages (including, without limitation, loss of business, contracts, revenue, data, information, or interruption of business activity) arising from or related to the use or inability to use this website or its content; or in connection with this Agreement, even if the Website Administration has been advised of the possibility of such damages.',
      },
      {
        id: 10,
        title: 'Dispute Resolution',
        description:
          'A User who believes that their rights and/or interests have been violated by the Website Administration may send a complaint via email to info@uanimals.org in Ukrainian or Russian, specifying the full legal name (for legal entities) or full name (for individuals), as well as a return address (postal and email) and a contact phone number. Within 10 business days of receiving the complaint, the Website Administration undertakes to respond substantively to the sender’s email address provided in the letter. The Website Administration does not consider anonymous complaints or complaints that do not contain accurate or complete information about the sender. If the sender is dissatisfied with the response from the Website Administration or does not receive it within the specified time, the procedure must be repeated through postal correspondence using the postal address info@uanimals.org. In such cases, the response period will be extended to 10 business days. If the dispute remains unresolved through the complaint procedure, it shall be settled in court.',
      },
    ];

    const OpenCollectionsPageDataUA = new Pages({
      local: 'en',
      route: 'terms',
      sections_list: termsDataEN,
    });
    await Pages.create(OpenCollectionsPageDataUA);
    // eslint-disable-next-line
    console.log('📦 OpenCollectionsDataEN Page (UA) data inserted');

    const OpenCollectionsDataEN = new Pages({
      local: 'ua',
      route: 'terms',
      sections_list: termsData,
    });

    await Pages.create(OpenCollectionsDataEN);
    // eslint-disable-next-line
    console.log('📦 OpenCollectionsDataEN Page (EN) data inserted');

    await mongoose.connection.close();
    // eslint-disable-next-line
    console.log('🔒 Database connection closed');
  } catch (err) {
    // eslint-disable-next-line
    console.error('❌ Error seeding database:', err);
    await mongoose.connection.close();
  }
};

// termsSeed();
