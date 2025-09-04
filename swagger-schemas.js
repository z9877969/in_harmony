/**
 * @swagger
 * components:
 *   examples:
 *     page:
 *       name:
 *         type: string
 *         example: page-name
 *       descr:
 *         type: string
 *         example: some page description
 *     user:
 *       name:
 *         type: string
 *         description: Ім'я користувача
 *         maxLength: 64
 *         example: Іван Франко
 *       email:
 *         type: string
 *         description: Email користувача
 *         maxLength: 64
 *         example: example@mail.com
 *       password:
 *         type: string
 *         minLength: 8
 *         maxLength: 128
 *         description: Пароль користувача
 *         example: xxxxxxxx
 *       role:
 *         type: string
 *         description: Роль користувача
 *         enum: ['admin', 'editor']
 *         default: 'editor'
 *     collection:
 *       title:
 *         type: string
 *         maxLength: 48
 *         description: Назва збору. Maкс - 48 симв.
 *         example: Допомога на лікування
 *       image:
 *         type: string
 *         format: binary
 *         example: "image1.jpg"
 *         description: Зображення збору
 *       collected:
 *         type: number
 *         minimum: 0
 *         description: Зібрана сума. Мінім - 0.
 *         example: 15000
 *       target:
 *         type: number
 *         minimum: 0
 *         description: Цільова сума. Мінім - 0.
 *         example: 50000
 *       alt:
 *         type: string
 *         maxLength: 24
 *         description: Alt текст для зображення. Maкс - 24 симв.
 *         example: Фото пацієнта
 *       peopleDonate:
 *         type: integer
 *         minimum: 0
 *         format: int32
 *         description: Кількість донорів. Мінім - 0.
 *         example: 156
 *       peopleDonate_title:
 *         type: string
 *         enum: ['donor', 'donors', 'донор', 'донори', 'донорів']
 *         description: Текст для кількості донорів
 *         example: донорів
 *       desc:
 *         type: string
 *         maxLength: 144
 *         description: Короткий опис збору. Maкс - 144 симв.
 *         example: Допоможіть зібрати кошти на лікування
 *       language:
 *         type: string
 *         enum: ['en', 'ua']
 *         description: Мова контенту - ['en', 'ua']
 *         example: ua
 *       days:
 *         type: integer
 *         minimum: 0
 *         format: int32
 *         description: Кількість днів до завершення. Мінім - 0.
 *         example: 30
 *         default: 0
 *       period:
 *         type: string
 *         enum: ['day', 'days', 'день', 'дні', 'днів']
 *         description: Текст для періоду - ['day', 'days', 'день', 'дні', 'днів']
 *         example: днів
 *       quantity:
 *         type: integer
 *         minimum: 0
 *         format: int32
 *         description: К-сть відгуків. Мінім - 0.
 *         example: 12
 *         default: 0
 *       long_desc:
 *         type: array
 *         minItems: 1
 *         items:
 *           type: string
 *           minLength: 1
 *           maxLength: 224
 *           description: Мінім - 1  симв., Макс - 224 симв.
 *         description: Детальний опис збору. Мінім - 1 елем.
 *         example: ["Перший параграф опису", "Другий параграф опису"]
 *       status:
 *         type: string
 *         enum: ['active', 'closed']
 *         description: Статус збору - ['active', 'closed']
 *         example: active
 *         default: active
 *       value:
 *         type: string
 *         maxLength: 48
 *         description: Унікальний тег, який повинен бути однаковим для однакових зборів на різних мовах. Maкс - 48 симв.
 *         example: help-treatment-ivan
 *       importance:
 *         type: string
 *         enum: ['urgent', 'important', 'non-urgent', 'permanent']
 *         description: "Значення типу важливості збору: 'urgent' - Терміново, 'important' - Важливий, 'non-urgent' - Не терміново, 'permanent' - Постійний]"
 *         example: urgent
 *     report:
 *       month:
 *         type: string
 *         maxLength: 16
 *         description: Назва збору. Maкс - 48 симв.
 *         example: Квітень
 *       year:
 *         type: string
 *         min: "2025"
 *         description: Рік періоду звітності
 *         patern: /20([2][5-9]|[3-9][0-9])/
 *         example: 2025
 *       url:
 *         type: string
 *         format: url
 *         description: Посилання на звітність
 *         example: https://some-reports-sourse.com/path/to/report
 *       language:
 *         type: string
 *         enum: ['en', 'ua']
 *         description: Мова контенту - ['en', 'ua']
 *         example: ua
 *     partner:
 *       language:
 *         type: string
 *         enum: ['en', 'ua']
 *         description: Мова контенту - ['en', 'ua']
 *         example: ua
 *       logo:
 *         type: string
 *         maxLength: 128
 *         description: Назва організації партнера. Maкс - 128 симв.
 *         example: METRO
 *       link:
 *         type: string
 *         maxLength: 512
 *         description: Посилання на сайт партнера. Maкс - 512 симв.
 *         example: https://www.metro.ua/
 *       image:
 *         type: string
 *         format: binary
 *         example: "image1.jpg"
 *         description: Зображення партнера
 *     merch:
 *       status:
 *         type: string
 *         enum: ['on', 'off']
 *         description: Статус відображення кнопки мерча
 *         example: 'off'
 *       content:
 *         type: string
 *         maxLength: 12
 *         description: Текстовий контент кнопки мерча
 *         example: Наш мерч
 *       link:
 *         type: string
 *         maxLength: 512
 *         description: Посилання на сайт мерча. Maкс - 512 симв.
 *         example: https://some-link-to-merch.com/
 *     teammate:
 *       name:
 *         type: string
 *         maxLength: 24
 *         description: Ім'я учасника команди. Maкс - 24 симв.
 *         example: Жанна Іванівна
 *       locale:
 *         type: string
 *         enum: ['en', 'ua']
 *         description: Мова контенту - ['en', 'ua']
 *         example: ua
 *       description:
 *         type: string
 *         maxLength: 320
 *         description: Описова інформація про учасника команди. Maкс - 320 симв.
 *         example: Створюю та адмініструю проєкти вже 5 років. Р\nоблю...
 *       role:
 *         type: string
 *         maxLength: 48
 *         description: Посада учасника команди. Maкс - 48 симв.
 *         example: засновник
 *       image:
 *         type: string
 *         format: binary
 *         example: "image1.jpg"
 *         description: Фото учасника команди
 *     stats:
 *       fedPeople:
 *         type: number
 *         format: integer
 *         min: 0
 *         description: Кількість нагодованих людей. Мін - 0.
 *         example: 20000
 *       providedWithClothing:
 *         type: number
 *         format: integer
 *         min: 0
 *         description: Кількість забезпечених одягом людей. Мін - 0.
 *         example: 15000
 *       providedWithWater:
 *         type: number
 *         format: integer
 *         min: 0
 *         description: Кількість забезпечених водою людей. Мін - 0.
 *         example: 12000
 *       receivedMedications:
 *         type: number
 *         format: integer
 *         min: 0
 *         description: Кількість людей, які отримали медикаменти. Мін - 0.
 *         example: 3000
 *       fedAnimals:
 *         type: number
 *         format: integer
 *         min: 0
 *         description: Кількість нагодованих тварин. Мін - 0.
 *         example: 14000
 *       providedWithElectricity:
 *         type: number
 *         format: integer
 *         min: 0
 *         description: Кількість людей забезпечених електроенергією. Мін - 0.
 *         example: 4000
 */
