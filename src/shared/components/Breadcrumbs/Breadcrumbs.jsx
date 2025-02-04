'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Container, Icon } from '@/shared/components';
import { nameMap } from './route';
import s from './Breadcrumbs.module.scss';
import { useEffect, useMemo, useState } from 'react';
import collections from '../../../modules/collectionPageActive/data/section-content.json';
const isId = (segment) => /^[a-f0-9]{24}$/i.test(segment);

const Breadcrumbs = () => {
  const pathname = usePathname();
  const locale = pathname.split('/')[1];
  const [titles, setTitles] = useState({});
  const collection = collections.collections;

  const pathSegments = useMemo(() => {
    return pathname
      .split('/')
      .filter((segment) => segment)
      .slice(1);
  }, [pathname]);

  useEffect(() => {
    const fetchTitles = async () => {
      const newTitles = {};

      for (const segment of pathSegments) {
        if (isId(segment)) {
          const foundItem = collection.find((item) => item._id === segment);
          if (foundItem) {
            newTitles[segment] = foundItem.title;
          }
        }
      }
      setTitles(newTitles);
    };

    fetchTitles();
  }, [pathSegments, collection]);

  if (pathname === `/${locale}`) return null;
  return (
    <Container>
      <nav aria-label="breadcrumb" className={s.breadcrumbs}>
        <ul className={s.list}>
          <li className={s.item}>
            <Link href={`/${locale}`} className={s.link}>
              Головна
            </Link>
          </li>
          {pathSegments.map((segment, index) => {
            const href = `/${locale}/${pathSegments.slice(0, index + 1).join('/')}`;
            const isLast = index === pathSegments.length - 1;
            let segmentName = nameMap[segment] || decodeURIComponent(segment);

            if (isId(segment) && titles[segment]) {
              segmentName = titles[segment];
            }

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

export default Breadcrumbs;
