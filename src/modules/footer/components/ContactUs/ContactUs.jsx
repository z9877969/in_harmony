'use client';

import { Button, Input, InputArea } from '@/shared/components/index.js';
import { FLIPPED_TIME_MS } from '@/shared/constants/index.js';
import clsx from 'clsx';
import { useFormik } from 'formik';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import s from './ContactUs.module.scss';

const ContactUs = ({ data }) => {
  const [flipped, setFlipped] = useState(false);
  const [error, setError] = useState('');
  const initialValues = { name: '', email: '', message: '' };
  const { i18n, t } = useTranslation('footer');
  const locale = i18n.language || 'ua';
  const containerRef = useRef(null);
  const innerRef = useRef(null);
  const [size, setSize] = useState({ width: '100%', height: '100%' });
  const flipTimeoutRef = useRef(null);

  const validationSchema = useMemo(
    () =>
      Yup.object({
        name: Yup.string()
          .min(2, ({ min }) => t('validationForm.name.min', { min }))
          .required(t('validationForm.name.required')),
        email: Yup.string()
          .matches(
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            t('validationForm.email.invalid')
          )
          .required(t('validationForm.email.required')),
        message: Yup.string()
          .min(5, ({ min }) => t('validationForm.message.min', { min }))
          .required(t('validationForm.message.required')),
      }),
    [t]
  );

  useEffect(() => {
    if (!innerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { height } = entry.contentRect;
        const computedStyles = window.getComputedStyle(innerRef.current);
        const paddingTop = parseFloat(computedStyles.paddingTop);
        const paddingBottom = parseFloat(computedStyles.paddingBottom);
        const actualHeight = height + paddingTop + paddingBottom;

        setSize((prevSize) =>
          prevSize.height !== actualHeight
            ? { ...prevSize, height: actualHeight }
            : prevSize
        );
      }
    });

    observer.observe(innerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const { current: discountEl } = containerRef;
    const handleDiscountFlipToFront = (e) => {
      if (e.target.closest('#contact-us') === discountEl) return;
      setFlipped((p) => (p ? !p : p));
    };
    document.addEventListener('click', handleDiscountFlipToFront);

    return () => {
      document.removeEventListener('click', handleDiscountFlipToFront);
    };
  }, []);

  const saveSupportData = async (data) => {
    const response = await fetch('/api/support', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      const errorMessage = t('errorMessage.supportFormSaveError', {
        status: response.status,
        statusText: response.statusText,
      });
      throw new Error(errorMessage);
    }
    return response.json();
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        await saveSupportData({ ...values, locale });
        setError('');
        formik.resetForm();
        setFlipped(true);
        flipTimeoutRef.current = setTimeout(
          () => setFlipped(false),
          FLIPPED_TIME_MS
        );
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(t('errorMessage.supportFormSaveErrorException'), error);
        setError(error.message);
      }
    },
  });

  useEffect(() => {
    return () => clearTimeout(flipTimeoutRef.current);
  }, []);

  if (!data) return null;

  return (
    <section
      id="contact-us"
      className={s.contactUsSection}
      ref={containerRef}
      style={size}
    >
      <div
        className={clsx(s.cardInner, s.front, flipped && s.flipped)}
        ref={innerRef}
      >
        <h2 className={s.title}>{data.title}</h2>

        <form className={s.form} onSubmit={formik.handleSubmit}>
          <Input
            className={s.inputFooter}
            name="name"
            value={formik.values.name}
            type="text"
            placeholder={t('contactUs.placeholderName')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && formik.errors.name}
          />
          <Input
            className={s.inputFooter}
            name="email"
            value={formik.values.email}
            type="text"
            placeholder={t('contactUs.placeholderEmail')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && formik.errors.email}
          />
          <InputArea
            className={s.textAreaFooter}
            name="message"
            value={formik.values.message}
            placeholder={t('contactUs.placeholderMessage')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.message && formik.errors.message}
          />

          <Button
            type="submit"
            variant="primary"
            fontSize="twenty"
            className={s.submitBtn}
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting
              ? t('contactUs.buttonTextLoading')
              : t('contactUs.buttonText')}
          </Button>
        </form>
      </div>
      <div className={clsx(s.cardInner, s.back, flipped && s.flipped)}>
        <h2 className={s.discountTitle}>
          {error ? error : data.supportSuccessMessage}
        </h2>
      </div>
    </section>
  );
};

export default ContactUs;
