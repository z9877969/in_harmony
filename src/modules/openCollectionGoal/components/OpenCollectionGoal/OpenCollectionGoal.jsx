import { Suspense } from 'react';
import { Container, Section, SectionTitle } from '@/shared/components/index.js';
import Share from '../Share/Share.jsx';
import SupportForm from '../SupportForm/SupportForm.jsx';
import WhatCanBeDone from '../WhatCanBeDone/WhatCanBeDone.jsx';

import s from './OpenCollectionGoal.module.scss';

const OpenCollectionGoal = async ({ content, goal }) => {
  return (
    <Section>
      <Container>
        <div className={s.grid}>
          <div className={s.gridItemTitle}>
            <SectionTitle className={s.sectionTitle} title={content.title} />
            <WhatCanBeDone
              className={s.gridItemWhatCanBeDone}
              data={content.whatCanBeDone}
            />
          </div>

          <SupportForm
            value={goal}
            className={s.gridItemForm}
            data={content.supportForm}
            goal={goal}
          />
          <Suspense fallback={null}>
            <Share data={content.share} className={s.gridItemShare} />
          </Suspense>
        </div>
      </Container>
    </Section>
  );
};

export default OpenCollectionGoal;
