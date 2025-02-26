'use client';

import clsx from 'clsx';
import { useFormik } from 'formik';
import Link from 'next/link.js';
import { useCallback, useMemo } from 'react';
import * as Yup from 'yup';

import { Button, Icon, Input } from '@/shared/components/index.js';
import { ROUTES } from '@/shared/constants';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import s from './SupportForm.module.scss';

const SupportForm = ({ data, value, className = '' }) => {
  const router = useRouter();
  const locale = usePathname().split('/')[1];
  const sectionClasses = clsx(s.sectionClass, className);
  const { t } = useTranslation('openCollectionGoal');

  const validationSchema = useMemo(
    () =>
      Yup.object({
        amount: Yup.number()
          .positive(t('supportForm.validation.positive'))
          .required(t('supportForm.validation.required')),
      }),
    [t]
  );

  const formik = useFormik({
    initialValues: { constantPrice: '', amount: '' },
    validationSchema,
    onSubmit: ({ amount }) => {
      const queryParams = new URLSearchParams({ amount, value }).toString();
      router.push(`/${locale}/${ROUTES.PAYMENTS(2)}?${queryParams}`);
      formik.resetForm();
    },
  });

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    setValues,
  } = formik;

  const handleRadioChange = useCallback(
    (e) => {
      const price = e.target.value;
      setValues({ constantPrice: price, amount: price });
    },
    [setValues]
  );

  return (
    <section className={sectionClasses}>
      <div className={s.donateLabel}>
        <span className={s.donateText}>{data.donateTitle}</span>
        <Icon
          iconName="icon-donate-arrow"
          width="24.346"
          height="18.223"
          className={s.donateArrowIcon}
        />
      </div>

      <div className={s.formWrapper}>
        <h3 className={s.title}>{data.title}</h3>

        <form className={s.form} onSubmit={handleSubmit}>
          <fieldset className={s.fieldset}>
            {data.radioPriceItems.map((price, index) => (
              <Input
                key={index}
                labelClass={s.inputRadioLabel}
                className={s.inputRadio}
                type="radio"
                value={price}
                name="constantPrice"
                label={`+${price} UAH`}
                onChange={handleRadioChange}
                checked={values.constantPrice === price.toString()}
              />
            ))}
            {touched.constantPrice && errors.constantPrice && (
              <div className={s.error}>{errors.constantPrice}</div>
            )}
          </fieldset>

          <Input
            className={s.input}
            type="number"
            name="amount"
            value={values.amount}
            currency={data.currency}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={0}
            error={touched.amount && errors.amount}
          />

          <Button type="submit" variant="primary" className={s.btnSubmit}>
            {t('supportForm.submitBtnText')}
          </Button>

          <Link className={s.link} href={`/${ROUTES.PAYMENTS(0)}`}>
            {t('supportForm.otherPaymentsLinkText')}
          </Link>
        </form>
      </div>
    </section>
  );
};

export default SupportForm;
