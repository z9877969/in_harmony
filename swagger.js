// swagger.js
export const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My Next.js API',
      version: '1.0.0',
      description:
        'A detailed description of my awesome Next.js API, documented with Swagger',
      contact: {
        name: 'Developer Name',
        email: 'developer@example.com',
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
        name: 'Pages',
        description: 'API для керування сторінками',
      },
      {
        name: 'Collections',
        description: 'Ендпоінти для взаємодії зі зборами',
      },
    ],
  },
  apis: ['./src/pages/api/**/*.js', './swagger-schemas.js'], // Шлях до файлів з JSDoc коментарями
};
