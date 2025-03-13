'use client';

import { useFormik } from 'formik';

import {
  Button,
  Container,
  ErrorMessage,
  Input,
  InputArea,
  SuccessMessage,
} from '@/shared/components';

import {
  DONATE_TYPE,
  NO_DATA_FOUND,
  PAYMENT_STATUSES,
} from '@/shared/constants/index.js';
import { usePathname } from 'next/navigation.js';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import CustomDropdown from '../CustomDropdown/CustomDropdown.jsx';
import { validationSchema } from '../validation/validationSchema';
import s from './DiscardHelpPageForm.module.scss';

const DiscardHelpPageForm = () => {
  const initialValues = {
    email: '',
    reason: '',
    donate: null,
  };

  const { t } = useTranslation('forms');
  const noDataFound = useMemo(
    () => ({
      title: t('paymentDiscard.errorMessage.noDataFound'),
      value: NO_DATA_FOUND,
    }),
    [t]
  );
  const [collections, setCollections] = useState([noDataFound]);
  const [shouldFetch, setShouldFetch] = useState(false);

  const [apiError, setApiError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const pathname = usePathname();
  const locale = pathname.split('/')[1];

  const handleCancelRegularPayment = async (data) => {
    const { email: clientEmail, reason: cancellationReason, donate } = data;

    const params = new URLSearchParams({
      type: DONATE_TYPE.REGULAR,
      clientEmail,
      donateValue: donate.value,
      status: PAYMENT_STATUSES.APPROVED,
    });

    const payment = await fetch(`/api/payment?${params.toString()}`);

    if (!payment.ok) {
      const message = t('paymentDiscard.errorMessage.searchPayment');
      throw new Error(message);
    }

    const result = await payment.json();

    if (!result || result.length === 0) {
      const message = t('paymentDiscard.errorMessage.searchPayment');
      throw new Error(message);
    }

    const discordBody = {
      orderReference: result[0]?._id,
      cancellationReason,
    };

    const discardData = await fetch('/api/payment/discard', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(discordBody),
    });
    if (!discardData.ok) {
      const errorMessage = t('paymentDiscard.errorMessage.wfpApiRemove', {
        status: discardData.status,
        statusText: discardData.statusText,
      });
      throw new Error(errorMessage);
    }
    return discardData.json();
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema(t),
    onSubmit: async (values) => {
      try {
        handleResetError();
        handleResetSuccess();
        const result = await handleCancelRegularPayment(values);

        if (!result._id) {
          throw new Error(t('paymentDiscard.errorMessage.discardResult'));
        }
        setSuccessMessage(
          t('paymentDiscard.successMessage.successDiscardResult')
        );
        setCollections([noDataFound]);
        formik.resetForm();
      } catch (error) {
        setApiError(error.message);
      }
    },
  });

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    setFieldTouched,
    isSubmitting,
    values,
    touched,
    errors,
  } = formik;

  const handleSelect = useCallback(
    (selected) => {
      if (selected.value !== values.donate?.value) {
        setFieldValue('donate', selected);
      }
      setFieldTouched('donate', true);
    },
    [setFieldValue, setFieldTouched, values.donate]
  );

  const fetchCollections = useCallback(async () => {
    const email = values.email.trim();

    if (!email || !locale) {
      return;
    }

    try {
      const response = await fetch(
        `/api/payment/discard/${locale}/collections?email=${encodeURIComponent(email)}&locale=${locale}`
      );

      if (!response?.ok) {
        setFieldValue('donate', null);
        setCollections([noDataFound]);
        return;
      }

      const { collections } = await response.json();

      const formattedCollections = collections.map((item) => ({
        value: item.value,
        title: item.title,
      }));

      setCollections((prev) => {
        if (JSON.stringify(prev) === JSON.stringify(formattedCollections)) {
          return prev;
        }
        return formattedCollections;
      });
    } catch (error) {
      setApiError(error.message);
    }
  }, [locale, noDataFound, setFieldValue, values.email]);

  const handleEmailBlur = (e) => {
    handleBlur(e);
    if (!shouldFetch) {
      setShouldFetch(true);
    }
    handleResetError();
    handleResetSuccess();
  };

  useEffect(() => {
    if (shouldFetch) {
      fetchCollections().then(() => {
        setShouldFetch(false);
      });
    }
  }, [fetchCollections, shouldFetch]);

  const handleResetError = () => {
    setApiError('');
  };

  const handleResetSuccess = () => {
    setSuccessMessage('');
  };

  const memoizedInitialValue = useMemo(() => values.donate, [values.donate]);

  return (
    <section className={s.section}>
      <Container>
        <form className={s.form} onSubmit={handleSubmit}>
          <div className={s.boxForm}>
            <Input
              className={s.inputDiscardForm}
              label={t('paymentDiscard.emailLabel')}
              name="email"
              type="text"
              value={values.email}
              placeholder={t('paymentDiscard.emailPlaceholder')}
              onChange={handleChange}
              onBlur={handleEmailBlur}
              error={touched.email && errors.email}
            />
            <CustomDropdown
              collections={collections}
              initialValue={memoizedInitialValue}
              onBlur={handleBlur}
              onSelect={handleSelect}
              label={t('paymentDiscard.purpose')}
              name="donate"
              error={touched.donate && errors.donate}
              loading={shouldFetch}
            />

            <InputArea
              className={s.textAreaDiscardForm}
              label={t('paymentDiscard.reasonLabel')}
              name="reason"
              value={values.reason}
              placeholder={t('paymentDiscard.reasonPlaceholder')}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.reason && errors.reason}
            />

            {apiError && !successMessage ? (
              <ErrorMessage
                error={apiError}
                onClose={handleResetError}
                className={s.errorMessage}
              />
            ) : successMessage ? (
              <SuccessMessage
                message={successMessage}
                onClose={handleResetSuccess}
              />
            ) : null}
          </div>
          <Button
            colors="primary"
            size="extraLarge"
            fontSize="twenty"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? t('paymentDiscard.submitButtonLoading')
              : t('paymentDiscard.submitButton')}
          </Button>
        </form>
      </Container>
    </section>
  );
};

export default DiscardHelpPageForm;
