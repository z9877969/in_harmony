'use client';

import { useState } from 'react';
import { Button } from '../../..';
import s from './DonateBtn.module.scss';

const DonateBtn = ({
  amount,
  isRegular,
  isPublic,
  clientFirstName,
  clientEmail,
  message,
  donateTitle,
  donateValue,
  t,
  locale,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    const win = window.open('', '_blank');
    if (!win) return;
    try {
      setIsLoading(true);
      const res = await fetch('/api/payment-html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          isRegular,
          isPublic,
          clientFirstName,
          clientEmail,
          message,
          donateTitle,
          donateValue,
          locale,
        }),
      });
      const html = await res.text();

      win.document.open();
      win.document.write(html);
      win.document.close();
    } catch (error) {
      win.close();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      type="submit"
      colors="secondary"
      size="medium"
      className={s.btn}
      onClick={handleClick}
    >
      {!isLoading
        ? `${t('paymentInfo.btnText')}`
        : t('paymentInfo.loadingText')}
    </Button>
  );
};

export default DonateBtn;
