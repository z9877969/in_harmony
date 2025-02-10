import { DiscardHelpPageForm } from '@/modules/discardHelpPageForm/index.js';
import { DiscardHelpPageHero } from '@/modules/discardHelpPageHero/index.js';
// import s from './page.module.scss';

const DiscardHelpPage = () => {
  return (
    <>
      <DiscardHelpPageHero />
      <DiscardHelpPageForm />
    </>
  );
};

export default DiscardHelpPage;
