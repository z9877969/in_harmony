import CopyIcon from '../CopyIcon/CopyIcon';
import Accordion from '../Accordion/Accordion';

import s from './PaymentButton.module.scss';

const PaymentButton = ({ label, sections }) => {
  return (
    <Accordion label={label}>
      {sections.map((sec, index) => (
        <RenderSection key={index} section={sec} />
      ))}
    </Accordion>
  );
};

const RenderSection = ({ section }) => (
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

export default PaymentButton;
