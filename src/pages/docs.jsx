// pages/docs.jsx
import Head from 'next/head';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const Docs = ({ spec }) => {
  return (
    <div>
      <Head>
        <title>API Documentation</title>
        <meta name="description" content="API Docs for my Next.js project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SwaggerUI spec={spec} />
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const getStaticProps = async () => {
  // Використовуємо наш власний API для отримання специфікації
  // У реальному додатку ви можете генерувати це на етапі білду
  // або напряму імпортувати та згенерувати тут.
  const { createSwaggerSpec } = require('next-swagger-doc');
  const { swaggerOptions } = require('../../swagger');

  const spec = createSwaggerSpec(swaggerOptions);

  return {
    props: {
      spec,
    },
  };
};

export default Docs;
