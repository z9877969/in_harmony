const DonateBtn = ({
  amount,
  isRegular,
  isPublic,
  clientFirstName,
  clientEmail,
  message,
  donateTitle,
  donateValue,
}) => {
  const handleClick = () => {
    const win = window.open('', '_blank');
    if (!win) return;

    fetch('/api/payment-html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount,
        isRegular,
        isPublic,
        clientFirstName,
        clientEmail,
        message,
        donateTitle,
        donateValue,
      }),
    })
      .then((res) => res.text())
      .then((html) => {
        win.document.open();
        win.document.write(html);
        win.document.close();
      })
      .catch(() => win.close());
  };

  return <button onClick={handleClick}>Підтримати</button>;
};

export default DonateBtn;
