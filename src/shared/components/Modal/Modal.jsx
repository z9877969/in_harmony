'use client';

import clsx from 'clsx';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.scss';

export default function Modal({ open, onClose, children, className }) {
  const dialogRef = useRef(null);

  const modalRoot = useMemo(
    () =>
      typeof document !== 'undefined' ? document.getElementById('modal') : null,
    []
  );

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      requestAnimationFrame(() => {
        dialog.showModal();
      });
      document.body.style.overflow = 'hidden';
    }

    return () => {
      if (dialog.open) {
        dialog.close();
        document.body.style.overflow = '';
      }
    };
  }, [open]);

  const handleBackdropClick = useCallback(
    (e) => {
      if (e.target === dialogRef.current) onClose();
    },
    [onClose]
  );

  const handleStopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  if (!open || !modalRoot) return null;

  return createPortal(
    <dialog
      className={s.modalDialog}
      ref={dialogRef}
      onCancel={onClose}
      onClick={handleBackdropClick}
    >
      <div className={clsx(s.modal, className)} onClick={handleStopPropagation}>
        {children}
      </div>
    </dialog>,
    modalRoot
  );
}
