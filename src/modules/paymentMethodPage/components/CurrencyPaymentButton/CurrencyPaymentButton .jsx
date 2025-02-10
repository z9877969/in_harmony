'use client';
import { useState } from 'react';

import CurrencySwitcher from '../CurrencySwitcher/CurrencySwitcher';
import CopyIcon from '../CopyIcon/CopyIcon';
import Accordion from '../Accordion/Accordion';

import s from './CurrencyPaymentButton.module.scss';

const CurrencyPaymentButton = ({ label, sections }) => {
  const [activeCurrency, setActiveCurrency] = useState('UAH');
  const activeSection = sections.find(
    (sec) => sec.key === activeCurrency.toLowerCase()
  );

  return (
    <Accordion label={label}>
      <CurrencySwitcher
        activeCurrency={activeCurrency}
        onCurrencyChange={setActiveCurrency}
      />
      {activeSection && <RenderSection section={activeSection} />}
    </Accordion>
  );
};

const RenderSection = ({ section }) => (
  <div className={s.section}>
    <h2 className={s.sectionTitle}>{section.title}</h2>

    <ul className={s.subsectionList}>
      {section.subsections?.map((sub, index) => (
        <li key={index} className={s.subsectionItem}>
          {sub.title && <h3 className={s.subsectionTitle}>{sub.title}</h3>}

          {sub.content && <p className={s.content}>{sub.content}</p>}

          {(sub.contentTitle || sub.contentCopy) && (
            <div className={s.copyBlock}>
              {sub.contentTitle && (
                <h4 className={s.contentTitle}>{sub.contentTitle}</h4>
              )}
              {sub.contentCopy && <CopyIcon text={sub.contentCopy} />}
            </div>
          )}
        </li>
      ))}
      {!section.subsections?.length && (
        <li className={s.subsection}>
          {section.content && <p>{section.content}</p>}
          {section.contentCopy && (
            <div className={s.copyBlock}>
              <CopyIcon text={section.contentCopy} />
            </div>
          )}
        </li>
      )}
    </ul>
  </div>
);

export default CurrencyPaymentButton;
