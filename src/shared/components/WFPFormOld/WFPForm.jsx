'use client';

import { DONATE_TYPE, PAYMENT_STATUSES } from '@/shared/constants/index.js';
import { usePathname } from 'next/navigation.js';
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { ErrorMessage } from '../index.js';

const generateQueryParams = (params) => {
  const encodedParams = Object.entries(params)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join('&');
  return encodedParams ? `${encodedParams}` : '';
};

const WFPForm = forwardRef(
  (
    {
      isPublic = false,
      isRegular = false,
      message = '',
      amount = 0,
      clientFirstName,
      clientEmail,
      donateTitle = 'inHarmony Donate',
      donateValue = 'inHarmony Donate',
    },
    ref
  ) => {
    const [formData, setFormData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const formRef = useRef(null);

    const pathname = usePathname();
    const locale = pathname.split('/')[1];

    const handleClearError = () => setError('');

    const fetchPaymentData = async ({
      amount,
      isRegular,
      isPublic,
      clientFirstName,
      clientEmail,
      message,
      donateTitle,
      donateValue,
    }) => {
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          type: isRegular ? DONATE_TYPE.REGULAR : DONATE_TYPE.ONE_TIME,
          isPublic,
          clientFirstName: isPublic ? clientFirstName : '',
          clientEmail,
          message: isPublic ? message : '',
          donateTitle,
          donateValue,
          status: PAYMENT_STATUSES.IN_PROCESSING,
        }),
      });

      if (!response.ok) {
        const { message } = await response.json();
        setError(message);
        throw new Error(message);
      }

      return await response.json();
    };

    const generateOrderAndSubmit = async () => {
      if (loading) return;
      setLoading(true);
      setError('');

      try {
        const { data } = await fetchPaymentData({
          amount,
          isRegular,
          isPublic,
          clientFirstName,
          clientEmail,
          message,
          donateTitle,
          donateValue,
        });
        setFormData(data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    const returnUrl = useMemo(() => {
      if (!formData) return '';

      const baseUrl = `${formData.appBaseURL}/api/redirect-to-thanks`;

      const params = { locale, orderId: formData.orderReference };

      const queryParams = generateQueryParams(params);

      return `${baseUrl}?${queryParams}`;
    }, [formData, locale]);

    useEffect(() => {
      if (formData) {
        formRef.current?.submit();
      }
    }, [formData]);

    useImperativeHandle(ref, () => ({ generateOrderAndSubmit }));

    return (
      <>
        {formData && (
          <form
            ref={formRef}
            method="post"
            action={formData.paymentUrl}
            acceptCharset="utf-8"
            target="_blank"
          >
            <input
              type="hidden"
              name="defaultPaymentSystem"
              defaultValue={formData.defaultPaymentSystem}
            />

            <input type="hidden" name="returnUrl" defaultValue={returnUrl} />
            <input
              type="hidden"
              name="serviceUrl"
              defaultValue={`${formData?.appBaseURL}/api/payment/log`}
            />
            <input
              type="hidden"
              name="language"
              defaultValue={formData.language}
            />
            <input
              type="hidden"
              name="orderTimeout"
              defaultValue={formData.orderTimeout}
            />
            {isPublic && clientFirstName && (
              <input
                type="hidden"
                name="clientFirstName"
                defaultValue={clientFirstName}
              />
            )}
            {isPublic && clientEmail && (
              <input
                type="hidden"
                name="clientEmail"
                defaultValue={clientEmail}
              />
            )}
            <input type="hidden" name="amount" defaultValue={formData.amount} />
            <input
              type="hidden"
              name="merchantAccount"
              defaultValue={formData.merchantAccount}
            />
            <input
              type="hidden"
              name="merchantAuthType"
              defaultValue={formData.merchantAuthType}
            />
            <input
              type="hidden"
              name="merchantDomainName"
              defaultValue={formData.merchantDomainName}
            />
            <input
              type="hidden"
              name="merchantSignature"
              defaultValue={formData.merchantSignature}
            />
            <input
              type="hidden"
              name="orderReference"
              defaultValue={formData.orderReference}
            />
            <input
              type="hidden"
              name="orderDate"
              defaultValue={formData.orderDate}
            />
            <input
              type="hidden"
              name="currency"
              defaultValue={formData.currency}
            />
            <input
              type="hidden"
              name="productName[]"
              defaultValue={formData.donateTitle}
            />
            <input
              type="hidden"
              name="productPrice[]"
              defaultValue={formData.amount}
            />
            <input
              type="hidden"
              name="productCount[]"
              defaultValue={formData.productCount}
            />
            {isRegular && (
              <>
                <input
                  type="hidden"
                  name="regularBehavior"
                  defaultValue={formData.regularBehavior}
                />
                <input
                  type="hidden"
                  name="regularMode"
                  defaultValue={formData.regularMode}
                />
                <input
                  type="hidden"
                  name="regularAmount"
                  defaultValue={formData.amount}
                />
                <input
                  type="hidden"
                  name="regularOn"
                  defaultValue={formData.regularOn}
                />
                <input
                  type="hidden"
                  name="regularCount"
                  defaultValue={formData.regularCount}
                />
              </>
            )}
          </form>
        )}
        {error && <ErrorMessage error={error} onClose={handleClearError} />}
      </>
    );
  }
);

WFPForm.displayName = 'WFPForm';

export default WFPForm;
