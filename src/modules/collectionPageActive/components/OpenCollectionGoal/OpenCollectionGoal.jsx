import { Container, SectionTitle } from '@/shared/components/index.js';
import Share from '../Share/Share.jsx';
import SupportForm from '../SupportForm/SupportForm.jsx';
import WhatCanBeDone from '../WhatCanBeDone/WhatCanBeDone.jsx';
import s from './OpenCollectionGoal.module.scss';

const OpenCollectionGoal = () => {
  return (
    <section>
      <Container>
        <div className={s.grid}>
          <SectionTitle className={s.gridItemTitle} title={'Разом до мети'} />
          <WhatCanBeDone className={s.gridItemWhatCanBeDone} />

          <SupportForm className={s.gridItemForm} />

          <Share className={s.gridItemShare} />
        </div>
      </Container>
    </section>
  );
};

export default OpenCollectionGoal;
