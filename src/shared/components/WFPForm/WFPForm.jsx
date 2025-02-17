'use client';

import { usePathname } from 'next/navigation.js';
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';

function generateQueryParams(params) {
  const encodedParams = Object.entries(params)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join('&');
  return encodedParams ? `${encodedParams}` : '';
}

const WFPForm = forwardRef(
  (
    {
      isPublic = false,
      isRegular = false,
      message = '',
      amount = 0,
      clientFirstName = '',
      clientEmail = '',
      paymentPurpose = 'inHarmony Donate',
    },
    ref
  ) => {
    const [formData, setFormData] = useState(null);
    const [loading, setLoading] = useState(false);

    const formRef = useRef(null);

    const pathname = usePathname();
    const locale = pathname.split('/')[1];

    async function generateOrderAndSubmit() {
      if (loading) return;

      try {
        setLoading(true);
        const response = await fetch('/api/payment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            amount,
            type: isRegular ? 'regular' : 'one-time',
            isPublic,
            clientFirstName: isPublic ? clientFirstName : '',
            clientEmail: isPublic ? clientEmail : '',
            message: isPublic ? message : '',
            paymentPurpose,
            status: 'InProcessing',
          }),
        });

        if (!response.ok) {
          throw new Error(
            `Помилка при створенні платежу: ${response.statusText}`
          );
        }

        const data = await response.json();
        if (data) {
          setFormData(data);
        }
      } catch (error) {
        // eslint-disable-next-line
        console.error('Помилка під час запиту:', error);
      } finally {
        setLoading(false);
      }
    }

    const returnUrl = useMemo(() => {
      if (!formData) return '';

      const baseUrl = `${formData.appBaseURL}/api/redirect-to-thanks`;

      const params = {
        locale,
        orderId: formData.orderReference,
      };

      const queryParams = generateQueryParams(params);

      return `${baseUrl}?${queryParams}`;
    }, [formData, locale]);

    useEffect(() => {
      if (formData) {
        formRef.current?.submit();
      }
    }, [formData]);

    useImperativeHandle(ref, () => ({
      generateOrderAndSubmit,
    }));

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
              value={formData.defaultPaymentSystem}
            />

            <input type="hidden" name="returnUrl" value={returnUrl} />
            <input
              name="serviceUrl"
              value={`${formData.appBaseURL}/api/payment-log`}
              hidden
            />
            <input type="hidden" name="language" value={formData.language} />
            <input
              type="hidden"
              name="orderTimeout"
              value={formData.orderTimeout}
            />
            {isPublic && clientFirstName && (
              <input
                type="hidden"
                name="clientFirstName"
                value={clientFirstName}
              />
            )}
            {isPublic && clientEmail && (
              <input type="hidden" name="clientEmail" value={clientEmail} />
            )}
            <input type="hidden" name="amount" value={formData.amount} />
            <input
              type="hidden"
              name="merchantAccount"
              value={formData.merchantAccount}
            />
            <input
              type="hidden"
              name="merchantAuthType"
              value={formData.merchantAuthType}
            />
            <input
              type="hidden"
              name="merchantDomainName"
              value={formData.merchantDomainName}
            />
            <input
              type="hidden"
              name="merchantSignature"
              value={formData.merchantSignature}
            />
            <input
              type="hidden"
              name="orderReference"
              value={formData.orderReference}
            />
            <input type="hidden" name="orderDate" value={formData.orderDate} />
            <input type="hidden" name="currency" value={formData.currency} />
            <input
              type="hidden"
              name="productName[]"
              value={formData.paymentPurpose}
            />
            <input
              type="hidden"
              name="productPrice[]"
              value={formData.amount}
            />
            <input
              type="hidden"
              name="productCount[]"
              value={formData.productCount}
            />
            {isRegular && (
              <>
                <input
                  type="hidden"
                  name="regularBehavior"
                  value={formData.regularBehavior}
                />
                <input
                  type="hidden"
                  name="regularMode"
                  value={formData.regularMode}
                />
                <input
                  type="hidden"
                  name="regularAmount"
                  value={formData.amount}
                />
                <input
                  type="hidden"
                  name="regularOn"
                  value={formData.regularOn}
                />
                <input
                  type="hidden"
                  name="regularCount"
                  value={formData.regularCount}
                />
              </>
            )}
          </form>
        )}
      </>
    );
  }
);

WFPForm.displayName = 'WFPForm';

export default WFPForm;
