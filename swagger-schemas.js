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
 *         example: Іван Франко
 *       email:
 *         type: string
 *         description: Email користувача
 *         example: example@mail.com
 *       password:
 *         type: string
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
 *         description: Назва збору. Max - 48
 *         example: Допомога на лікування
 *       image:
 *         type: array
 *         minItems: 1
 *         maxItems: 5
 *         items:
 *           type: string
 *           format: binary
 *         description: Масив зображень збору. Min - 1, max - 5
 *         example: ["image1.jpg", "image2.jpg"]
 *       collected:
 *         type: number
 *         minimum: 0
 *         description: Зібрана сума. Min - 0
 *         example: 15000
 *       target:
 *         type: number
 *         minimum: 0
 *         description: Цільова сума. Min - 0
 *         example: 50000
 *       alt:
 *         type: string
 *         maxLength: 24
 *         description: Alt текст для зображення. Max - 24
 *         example: Фото пацієнта
 *       peopleDonate:
 *         type: integer
 *         minimum: 0
 *         format: int32
 *         description: Кількість донорів. Min - 0
 *         example: 156
 *       peopleDonate_title:
 *         type: string
 *         enum: ['donor', 'donors', 'донор', 'донори', 'донорів']
 *         description: Текст для кількості донорів
 *         example: донорів
 *       desc:
 *         type: string
 *         maxLength: 144
 *         description: Короткий опис збору. Max - 144
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
 *         description: Кількість днів до завершення. Min - 0
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
 *         description: К-сть відгуків. Min - 0
 *         example: 12
 *         default: 0
 *       long_desc:
 *         type: array
 *         minItems: 1
 *         items:
 *           type: string
 *           minLength: 1
 *           maxLength: 224
 *           description: Min - 1, max - 224
 *         description: Детальний опис збору. Min 1
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
 *         description: Унікальний тег, який повинен бути однаковим для однакових зборів на різних мовах. Max - 48
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
 *         description: Назва збору. Max - 48
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
 */
