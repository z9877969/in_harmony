'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Container, Icon } from '@/shared/components';
import { nameMap } from './route';
import s from './Breadcrumbs.module.scss';

const BreadCrumbs = () => {
  const pathname = usePathname();

  if (pathname === '/ua') return null;

  const pathSegments = pathname.split('/').filter((segment) => segment);

  if (pathSegments[0] === 'ua') {
    pathSegments.shift();
  }

  return (
    <Container>
      <nav aria-label="breadcrumb" className={s.breadcrumbs}>
        <ul className={s.list}>
          <li className={s.item}>
            <Link href="/ua" className={s.link}>
              Головна
            </Link>
          </li>
          {pathSegments.map((segment, index) => {
            const href = `/ua/${pathSegments.slice(0, index + 1).join('/')}`;
            const isLast = index === pathSegments.length - 1;
            const segmentName = nameMap[segment] || decodeURIComponent(segment);

            return (
              <li key={href} className={`${s.item} ${isLast ? s.active : ''}`}>
                <Icon iconName="icon-chevron-right" className={s.separator} />
                {!isLast ? (
                  <Link href={href} className={s.link}>
                    {segmentName}
                  </Link>
                ) : (
                  <span className={s.current}>{segmentName}</span>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </Container>
  );
};

export default BreadCrumbs;
