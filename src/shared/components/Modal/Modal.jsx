'use client';

import clsx from 'clsx';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.scss';

export default function Modal({ open, onClose, children, className }) {
  const dialogRef = useRef(null);
  const modalRoot = document.getElementById('modal');
  const modalClass = clsx(s['modal'], className && s[className]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (open) {
      dialog?.showModal();
      document.body.style.overflow = 'hidden';
    }
    return () => {
      dialog?.close();
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleBackdropClick = (e) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  const handleStopPropagation = (e) => {
    e.stopPropagation();
  };

  if (!open || !modalRoot) return null;

  return createPortal(
    <dialog
      className={s.modalDialog}
      ref={dialogRef}
      onCancel={onClose}
      onClick={handleBackdropClick}
    >
      <div className={modalClass} onClick={handleStopPropagation}>
        {children}
      </div>
    </dialog>,
    modalRoot
  );
}
