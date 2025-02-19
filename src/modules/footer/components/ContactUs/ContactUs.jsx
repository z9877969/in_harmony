'use client';

import { Button, Input, InputArea } from '@/shared/components/index.js';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { validationSchema } from '../../validation/validationSchema.js';
import s from './ContactUs.module.scss';
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
  const initialValues = { name: '', email: '', message: '' };

  const { t } = useTranslation('forms');



  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema(t),

    onSubmit: (values) => {
      // eslint-disable-next-line
      console.log('Form data:', values);

      formik.resetForm();
    },
  });

  return (
    <section className={s.contactUsSection}>
      <div className={s.formWrapper}>
        <h2 className={s.title}>{t('support.title')}</h2>

        <form className={s.form} onSubmit={formik.handleSubmit}>
          <Input
            className={s.inputFooter}
            name="name"
            value={formik.values.name}
            type="text"

            placeholder={t('support.placeholderName')}

            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && formik.errors.name}
          />

          <Input
            className={s.inputFooter}
            name="email"
            value={formik.values.email}
            type="text"

            placeholder={t('support.placeholderEmail')}

            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && formik.errors.email}
          />

          <InputArea
            className={s.textAreaFooter}
            name="message"
            value={formik.values.message}

            placeholder={t('support.placeholderMessage')}

            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.message && formik.errors.message}
          />
          <Button type="submit" variant="primary" fontSize="twenty">
            {t('support.buttonText')}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
