'use client';

import { Button, Input, InputArea } from '@/shared/components/index.js';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { validationSchema } from '../../validation/validationSchema.js';
import s from './ContactUs.module.scss';

const ContactUs = ({ data }) => {
  const initialValues = { name: '', email: '', message: '' };
  const { t } = useTranslation('footer');

  const formik = useFormik({
    initialValues,
    validationSchema,

    onSubmit: (values) => {
      // eslint-disable-next-line
      console.log('Form data:', values);

      formik.resetForm();
    },
  });

  if (!data) {
    return null;
  }

  return (
    <section className={s.contactUsSection}>
      <div className={s.formWrapper}>
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
          <Button type="submit" variant="primary" fontSize="twenty">
            {t('contactUs.buttonText')}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
