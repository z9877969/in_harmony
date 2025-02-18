import { Container, Section, SectionTitle } from '@/shared/components/index.js';
import data from '../../data/sectionContent.json';
import Share from '../Share/Share.jsx';
import SupportForm from '../SupportForm/SupportForm.jsx';
import WhatCanBeDone from '../WhatCanBeDone/WhatCanBeDone.jsx';

import s from './OpenCollectionGoal.module.scss';

const OpenCollectionGoal = ({ goal }) => {
  return (
    <Section>
      <Container>
        <div className={s.grid}>
          <SectionTitle className={s.gridItemTitle} title={data.sectionTitle} />
          <WhatCanBeDone
            className={s.gridItemWhatCanBeDone}
            data={data.whatCanBeDone}
          />

          <SupportForm
            value={goal}
            className={s.gridItemForm}
            data={data.supportForm}
            goal={goal}
          />

          <Share data={data.share} className={s.gridItemShare} />
        </div>
      </Container>
    </Section>
  );
};

export default OpenCollectionGoal;
