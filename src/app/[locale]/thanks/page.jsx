import { insideServerApi as api } from '@/shared/services';
import { ThanksPage as ThanksPageComponent } from '@/modules/thanksPage';
// import s from './page.module.scss';

const ThanksPage = async ({ params: { locale } }) => {
  const { sectionsDict } = await api.getPageApi({
    locale,
    page: 'thanks',
  });

  return <ThanksPageComponent content={sectionsDict.thanks.section_content} />;
};

export default ThanksPage;
