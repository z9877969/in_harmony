import s from './ModalContent.module.scss';
function ModalContent({ title, text, children, text_two }) {
  return (
    <>
      <div className={s.modalContent}>
        <h2 className={s.modalTitle}>{title}</h2>
        <p className={s.modalText}>{text}</p>
        <p className={s.modalText}>{text_two}</p>
      </div>
      {children}
    </>
  );
}

export default ModalContent;
