import { DiscardHelpPageForm } from '@/modules/discardHelpPageForm/index.js';
import { DiscardHelpPageHero } from '@/modules/discardHelpPageHero';
// import { insideServerApi as api } from '@/shared/services';
// import s from './page.module.scss';

const DiscardHelpPage = () => {
  // const { sectionsDict } = await api.getPageApi({
  //   locale,
  //   page: 'discard',
  // });
  // const pages = await api.getAllPages({ locale });

  // // eslint-disable-next-line
  // console.log('sectionsDict >> ', sectionsDict);
  // // eslint-disable-next-line
  // console.log('pages :>> ', pages);
  return (
    <>
      <DiscardHelpPageHero />
      <DiscardHelpPageForm />
    </>
  );
};

export default DiscardHelpPage;
