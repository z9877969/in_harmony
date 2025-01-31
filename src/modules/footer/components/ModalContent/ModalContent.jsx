import s from './ModalContent.module.scss';
function ModalContent({ title, text, children }) {
  return (
    <>
      <div>
        <h2 className={s.modalTitle}>{title}</h2>
        <p className={s.modalText}>{text}</p>
      </div>
      {children}
    </>
  );
}

export default ModalContent;
