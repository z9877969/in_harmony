'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Container, Icon } from '@/shared/components';
import { useTranslation } from 'react-i18next';
import { useEffect, useMemo, useState } from 'react';
import s from './Breadcrumbs.module.scss';
const isId = (segment) => /^[a-f0-9]{24}$/i.test(segment);

const Breadcrumbs = () => {
  const pathname = usePathname();
  const local = pathname.split('/')[1];
  const { t } = useTranslation('breadcrumbs');
  const [titles, setTitles] = useState({});

  const pathSegments = useMemo(() => {
    return pathname
      .split('/')
      .filter((segment) => segment)
      .slice(1);
  }, [pathname]);

  useEffect(() => {
    const fetchTitles = async () => {
      try {
        const response = await fetch(`/api/collections/${local}`);
        if (!response.ok) throw new Error('Failed to fetch collections');
        const collection = await response.json();
        const allCollections = [
          ...collection.data.activeCollections,
          ...collection.data.closedCollections,
        ];
        const newTitles = {};

        for (const segment of pathSegments) {
          if (isId(segment)) {
            const foundItem = allCollections.find(
              (item) => item._id === segment
            );
            if (foundItem) {
              newTitles[segment] = foundItem.title;
            }
          }
        }
        setTitles(newTitles);
      } catch (error) {
        //eslint-disable-next-line
        console.error('Error fetching titles:', error);
      }
    };

    fetchTitles();
  }, [local, pathSegments]);

  if (pathname === `/${local}`) return null;
  return (
    <Container>
      <nav aria-label="breadcrumb" className={s.breadcrumbs}>
        <ul className={s.list}>
          <li className={s.item}>
            <Link href={`/${local}`} className={s.link}>
              {t('home')}
            </Link>
          </li>
          {pathSegments.map((segment, index) => {
            const href = `/${local}/${pathSegments.slice(0, index + 1).join('/')}`;
            const isLast = index === pathSegments.length - 1;
            const translatedSegment = t(segment, { defaultValue: segment });
            let segmentName =
              isId(segment) && titles[segment]
                ? titles[segment]
                : translatedSegment;

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
