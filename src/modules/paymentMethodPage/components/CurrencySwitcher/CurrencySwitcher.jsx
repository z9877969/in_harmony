import s from './CurrencySwitcher.module.scss';

const CurrencySwitcher = ({ activeCurrency, onCurrencyChange }) => {
  return (
    <div className={s.currencySwitcher}>
      {['UAH', 'USD'].map((currency) => (
        <button
          key={currency}
          className={`${s.switchButton} ${
            activeCurrency === currency ? s.active : ''
          }`}
          onClick={() => onCurrencyChange(currency)}
        >
          {currency}
        </button>
      ))}
    </div>
  );
};

export default CurrencySwitcher;
