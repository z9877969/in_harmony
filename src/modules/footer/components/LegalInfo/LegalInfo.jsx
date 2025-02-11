'use client';

import Link from 'next/link.js';
import { usePathname } from 'next/navigation.js';
import s from './LegalInfo.module.scss';

function LegalInfo({ data }) {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  if (!data) {
    return null;
  }

  return (
    <section className={s.legalInfoSection}>
      <h1 className="visuallyHidden">{data.title}</h1>
      <Link href={`/${locale}/policy`} className={s.navLink}>
        {data.linkPolicyText}
      </Link>

      <section>
        <h2 className={s.title}>{data.paymentDetails.title}</h2>
        <dl className={s.text}>
          <div className={s.toLine}>
            <dt className={s.key}>{data.paymentDetails.companyNameTitle}</dt>
            <dd className={s.value}>{data.paymentDetails.companyName}</dd>
          </div>
          <div className={s.toLine}>
            <dt className={s.key}>{data.paymentDetails.companyCodeTitle}</dt>
            <dd className={s.value}>{data.paymentDetails.companyCode}</dd>
          </div>
          <div className={s.toLine}>
            <dt className={s.key}>{data.paymentDetails.companyIBANTitle}</dt>
            <dd className={s.value}>{data.paymentDetails.companyIBAN}</dd>
          </div>
        </dl>
      </section>

      <Link href={'/discard'} className={s.navLink}>
        {data.linkUnsubscribeText}
      </Link>
    </section>
  );
}

export default LegalInfo;
