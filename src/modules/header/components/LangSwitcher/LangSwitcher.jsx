import { Icon } from '@/shared/components';
import { uaFlag as LangIcon } from '/public/icons';

import s from './LangSwitcher.module.scss';

const LangSwitcher = () => {
  return (
    <div className={s.langBlock}>
      <LangIcon className={s.langIcon} />
      <button className={s.langBtn}>
        <Icon className={s.langBtnIcon} iconName="icon-chevron-down" />
      </button>
    </div>
  );
};

export default LangSwitcher;
