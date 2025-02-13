// import { insideServerApi as api } from '@/shared/services';
import { ThanksPage as ThanksPageComponent } from '@/modules/thanksPage';
// import s from './page.module.scss';

const ThanksPage = () => {
  // const { sectionsDict } = await api.getPageApi({ locale, page: 'thanks' });
  // const pages = await api.getAllPages({ locale });

  // // eslint-disable-next-line
  // console.log('sectionsDict :>> ', sectionsDict);
  // // eslint-disable-next-line
  // console.log('pages :>> ', pages);
  return <ThanksPageComponent />;
};

export default ThanksPage;
