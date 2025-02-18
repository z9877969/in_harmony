'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';

import { Container } from '@/shared/components';
import s from './not-found.module.scss';

export default function NotFound() {
  const { t } = useTranslation('notFound');

  return (
    <section>
      <Container>
        <div className={s.container}>
          <h2 className={s.title}>{t('notFoundTitle')}</h2>
          <p className={s.message}>{t('notFoundMessage')}</p>
          <Link href="/" className={s.link}>
            {t('backToHome')}
          </Link>
        </div>
      </Container>
    </section>
  );
}
