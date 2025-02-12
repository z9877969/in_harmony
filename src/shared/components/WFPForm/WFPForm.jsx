'use client';

import { usePathname } from 'next/navigation.js';
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

const WFPForm = forwardRef(
  (
    {
      isPublic = true,
      isRegular = true,
      message = '',
      amount = 0,
      clientFirstName = 'Serhii',
      clientLastName = 'Hudzenko',
      clientEmail = 'serhii.hudzenko@mail.com',
      paymentPurpose = 'inHarmony Donate',
    },
    ref
  ) => {
    const [formData, setFormData] = useState(null);
    console.log('formData: ', formData);
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);

    const pathname = usePathname();
    const locale = pathname.split('/')[1];
    console.log('locale: ', locale);

    async function generateOrderAndSubmit() {
      if (loading) return;

      try {
        setLoading(true);
        const response = await fetch('/api/payments', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            amount,
            type: isRegular ? 'regular' : 'one-time',
            clientFirstName: isPublic ? clientFirstName : '',
            clientLastName: isPublic ? clientLastName : '',
            clientEmail: isPublic ? clientEmail : '',
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
        console.error('Помилка під час запиту:', error);
        setLoading(false);
      }
    }

    useImperativeHandle(ref, () => ({
      generateOrderAndSubmit,
    }));

    let serviceUrl = '';
    useEffect(() => {
      if (formData) {
        formRef.current?.submit();
      }
      serviceUrl =
        `${formData.appBaseUR}/${locale}/?isPublic=${isPublic}&isRegular=${isRegular}&amount=${amount}` +
        (isPublic
          ? `&message=${message}&clientFirstName=${clientFirstName}&clientLastName=${clientLastName}&clientEmail=${clientEmail}&paymentPurpose=${paymentPurpose}`
          : '');

      console.log('formData: ', formData);
    }, [formData]);

    return (
      <>
        {formData && (
          <form
            ref={formRef}
            method="post"
            action={formData.paymentUrl}
            acceptCharset="utf-8"
          >
            <input
              type="hidden"
              name="defaultPaymentSystem"
              value={formData.defaultPaymentSystem}
            />

            <input type="hidden" name="serviceUrl" value={serviceUrl} />
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
            {isPublic && clientLastName && (
              <input
                type="hidden"
                name="clientLastName"
                value={clientLastName}
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
