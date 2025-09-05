// swagger.js
export const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Inharmony Next.js project API',
      version: '1.3.0',
      description: `
Ласкаво просимо до документації API!

### Аутентифікація
Автентифікація в цьому API відбувається за допомогою токенів. Після успішного входу (логіну) токен доступу **автоматично** встановлюється в \`httpOnly\` cookies вашого браузера.

Це означає, що вам **не потрібно** вручну додавати заголовок \`Authorization\` до ваших запитів. Браузер автоматично надсилатиме токен з кожним наступним запитом до захищених ендпоінтів.

### Доступ до зображень
Щоб отримати повний URL зображення, необхідно об'єднати (конкатенувати) базовий шлях із значенням поля \`path\`, яке повертається в об'єкті \`image\`.

* **Базовий шлях:** \`https://server-url.com/images/all/\`
* **Значення з API:** Поле \`path\` з об'єкта зображення (наприклад: \`68b05a329f67cff795d884b9.jpg\`).

**Приклад повного URL:**
\`https://server-url.com/images/all/68b05a329f67cff795d884b9.jpg\`
      `,
      contact: {
        name: 'Andrii Kyrylenko',
        email: 'z9877969@gmail.com',
      },
    },
    servers: [
      {
        url: 'https://in-harmony.vercel.app/api',
        description: 'Production server',
      },
      {
        url: 'http://localhost:3000/api',
        description: 'Development server',
      },
    ],
    tags: [
      {
        name: 'Auth',
        description: 'API для керування авторизацією',
      },
      {
        name: 'Collections',
        description: 'API для взаємодії зі зборами',
      },
      {
        name: 'Reports',
        description: 'API для керування звітністю',
      },
      {
        name: 'Partners',
        description: 'API для керування інфорацією про партнерів',
      },
      {
        name: 'Merch',
        description: 'API для керування інтерфейсом переходу до сайту з мерчем',
      },
      {
        name: 'Teammates',
        description: 'API для керування інфорацією про команду',
      },
      {
        name: 'Stats',
        description:
          'API для керування інфорацією про статистику на сторінці "Про нас"',
      },
      {
        name: 'Dashboard',
        description: 'API для отримання даних зі статистикою платежів',
      },
    ],
    components: {
      securitySchemes: {
        accessTokenAuth: {
          type: 'apiKey',
          in: 'cookie',
          name: 'accessToken',
        },
        refreshTokenAuth: {
          type: 'apiKey',
          in: 'cookie',
          name: 'refreshToken',
        },
      },
      security: [
        {
          accessTokenAuth: [],
          refreshTokenAuth: [],
        },
      ],
    },
  },
  apis: ['./src/pages/api/**/*.js', './swagger-schemas.js'], // Шлях до файлів з JSDoc коментарями
};
