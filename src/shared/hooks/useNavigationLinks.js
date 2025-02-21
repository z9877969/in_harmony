import { useTranslation } from 'react-i18next';

export const useNavigationLinks = () => {
  const { i18n, t } = useTranslation('header');

  const locale = i18n.language || 'ua';

  const navLinks = t('links', { returnObjects: true });

  return { navLinks, locale };
};
