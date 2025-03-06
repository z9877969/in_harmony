import { Icon } from '@/shared/components/index.js';
import Image from 'next/image.js';
import { Trans, useTranslation } from 'react-i18next';

import s from './SuccessSendMessage.module.scss';

const SuccessSendMessage = () => {
  const { t } = useTranslation('successSendMessage');
  return (
    <div className={s.mainContainer}>
      <Icon iconName="icon-success" width={64} height={64} />

      <div className={s.contentWrapper}>
        <h2 className={s.title}>{t('title')}</h2>

        <div className={s.middleContent}>
          <p className={s.text}>{t('thanksText')}</p>

          <p className={s.text}>
            <Trans
              i18nKey="successSendMessage:contactUs"
              components={{
                email: (
                  <a className={s.link} href="mailto:help@inharmony.com.ua" />
                ),
                telegram: (
                  <a
                    className={s.link}
                    href="https://t.me/inharmonyua"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                ),
              }}
            />
          </p>
        </div>

        <div className={s.bottomContent}>
          <p className={s.text}>{t('withCare')}</p>
          <Image
            className={s.imgInHarmony}
            src="/images/inharmony_like.webp"
            alt="InHarmony Logo"
            width={180}
            height={43}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default SuccessSendMessage;
