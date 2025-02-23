import { Container, SectionTitle } from '@/shared/components';

import s from './CollectionPageReporting.module.scss';
import CollectionCardList from '../CollectionCardList/CollectionCardList';
import CollectionLinkButton from '../CollectuionLinkButton/CollectionLinkButton';

export default function CollectionPageReporting({ content }) {
  return (
    <section className={s.section}>
      <Container>
        <SectionTitle title={content.title} className={s.title} />
        <CollectionCardList data={content} />
        <CollectionLinkButton />
      </Container>
    </section>
  );
}
