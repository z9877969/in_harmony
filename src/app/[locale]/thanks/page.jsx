import { insideServerApi as api } from '@/shared/services';
import { ThanksPage as ThanksPageComponent } from '@/modules/thanksPage';
// import s from './page.module.scss';

const ThanksPage = async ({ params: { locale } }) => {
  const { sectionsDict } = await api.getPageApi({
    locale,
    page: 'thanks',
  });
  const pages = await api.getAllPages({ locale });

  // eslint-disable-next-line
  console.log('sectionsDict >> ', sectionsDict.thanks.section_content);
  // eslint-disable-next-line
  console.log('pages :>> ', pages);
  return <ThanksPageComponent content={sectionsDict.thanks.section_content} />;
};

export default ThanksPage;
