'use client';

import Link from 'next/link.js';
import { usePathname } from 'next/navigation.js';
import s from './LegalInfo.module.scss';

function LegalInfo() {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  return (
    <section className={s.legalInfoSection}>
      <h1 className="visuallyHidden">Юридична інформація</h1>
      <Link href={`/${locale}/policy`} className={s.navLink}>
        Політика конфіденційності
      </Link>

      <section>
        <h2 className={s.title}>Реквізити:</h2>
        <dl className={s.text}>
          <div className={s.toLine}>
            <dt className={s.key}>Company name:</dt>
            <dd className={s.value}>ГО ІНХАРМОНІ.ЮА</dd>
          </div>
          <div className={s.toLine}>
            <dt className={s.key}>Code: </dt>
            <dd className={s.value}>44849411</dd>
          </div>
          <div className={s.toLine}>
            <dt className={s.key}>IBAN Code: </dt>
            <dd className={s.value}>UA503052990000026005026109109</dd>
          </div>
        </dl>
      </section>

      <Link href={`/${locale}/unsubscribe`} className={s.navLink}>
        Скасувати підписку
      </Link>
    </section>
  );
}

export default LegalInfo;
