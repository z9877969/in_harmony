// swagger.js
export const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My Next.js API',
      version: '1.0.0',
      description:
        'A detailed description of InHarmony Next.js API, documented with Swagger',
      contact: {
        name: 'Andrii Kyrylenko',
        email: 'z9877969@gmail.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
        description: 'Development server',
      },
      {
        url: 'https://production-url.com/api',
        description: 'Production server',
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
