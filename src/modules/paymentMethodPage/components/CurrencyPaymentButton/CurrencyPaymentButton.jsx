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

const RenderSection = ({ section }) => {
  return (
    <div className={s.section}>
      <h2 className={s.sectionTitle}>{section.title}</h2>
      {section.subsections ? (
        section.subsections.map((sub, index) => (
          <div key={index} className={s.subsection}>
            <h3 className={s.subsectionTitle}>{sub.title}</h3>
            <div className={s.subsectionContainer}>
              {sub.content && (
                <p className={s.subsectionContent}>{sub.content}</p>
              )}
              {sub.contentCopy && <CopyIcon text={sub.contentCopy} />}
            </div>
          </div>
        ))
      ) : (
        <div className={s.subsectionContent}>
          {section.content && <p>{section.content}</p>}
          {section.contentCopy && <CopyIcon text={section.contentCopy} />}
        </div>
      )}
    </div>
  );
};

export default CurrencyPaymentButton;
