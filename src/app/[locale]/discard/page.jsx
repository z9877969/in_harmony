import { DiscardHelpPageForm } from '@/modules/discardHelpPageForm/index.js';
import s from './page.module.scss';

const DiscardHelpPage = () => {
  return (
    <>
      <h1 className={s.title}>Discard Help Page</h1>
      <DiscardHelpPageForm />
    </>
  );
};

export default DiscardHelpPage;
