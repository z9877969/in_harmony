import Link from 'next/link';

import { Container } from '@/shared/components';

import s from './not-faund.module.scss';

export default function NotFound() {
  return (
    <section>
      <Container>
        <div className={s.container}>
          <h2 className={s.title}>404 - Сторінку не знайдено</h2>
          <p className={s.message}>Здається, такої сторінки не існує.</p>
          <Link href="/" className={s.link}>
            Повернутися на головну
          </Link>
        </div>
      </Container>
    </section>
  );
}
