import { useId } from 'react';
import { useMemo, useState, useEffect } from 'react';
import useCurrencyInfo from '../hooks/useCurrencyInfo';

const InputContainer = ({
  currency,
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = 'inr',
  amountDisable = false,
  currencyDisable = false,
  fromCurrency: initialFromCurrency,
  toCurrency: initialToCurrency,
  className = '',
}) => {
  const amountInputId = useId();
  const [error, setError] = useState(null);
  const [fromCurrency, setFromCurrency] = useState(initialFromCurrency);
  const [toCurrency, setToCurrency] = useState(initialToCurrency);
  const [conversionRates, setConversionRates] = useState({
    fromCurrencyToToCurrencyRate: 0,
    toCurrencyToFromCurrencyRate: 0,
  });

  const fromCurrencyInfo = useCurrencyInfo(fromCurrency);
  const toCurrencyInfo = useCurrencyInfo(toCurrency);

  useEffect(() => {
    if (fromCurrencyInfo && toCurrencyInfo) {
      const fromRate = Number(fromCurrencyInfo[toCurrency]).toFixed(2);
      const toRate = Number(
        toCurrencyInfo[fromCurrency] / toCurrencyInfo[toCurrency]
      ).toFixed(2);

      setConversionRates({
        fromCurrencyToToCurrencyRate: fromRate,
        toCurrencyToFromCurrencyRate: toRate,
      });
    }
  }, [fromCurrencyInfo, toCurrencyInfo, fromCurrency, toCurrency]);

  const options = useMemo(() =>
    currencyOptions.map(
      (currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ),
      [currencyOptions]
    )
  );

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (isNaN(value) || value < 0) {
      setError(
        value < 0 ? 'Input must be a positive number' : 'Input must be a number'
      );
    } else {
      setError(null);
      onAmountChange && onAmountChange(Number(value));
    }
  };

  const handleCurrencyChange = (e) => {
    const selectedCurrency = e.target.value;
    if (currencyOptions.includes(selectedCurrency)) {
      if (e.target.name === 'fromCurrency') {
        setFromCurrency(selectedCurrency);
      } else if (e.target.name === 'toCurrency') {
        setToCurrency(selectedCurrency);
      }
      onCurrencyChange && onCurrencyChange(selectedCurrency);
    } else {
      setError('Invalid currency selected');
      onCurrencyChange && onCurrencyChange('usd');
    }
  };

  return (
    <div className={`px-10 py-6 ${className}`}>
      <h3 className='text-3xl font-bold text-gray-600 mb-6'>{label}</h3>
      <select
        className='uppercase w-full px-4 py-2 mb-4 border border-gray-200 rounded-lg text-gray-900 bg-gray-200'
        value={selectCurrency}
        onChange={handleCurrencyChange}
        disabled={currencyDisable}
        name={currency}
      >
        {options}
      </select>
      <div className='px-4 py-2 border border-blue-500 rounded-lg'>
        <input
          id={amountInputId}
          type='text'
          className='uppercase w-full outline-none text-3xl font-bold bg-transparent py-2'
          placeholder={currency}
          disabled={amountDisable}
          value={isNaN(amount) ? '' : amount}
          onChange={handleAmountChange}
        />
        {error && <div className='text-red-500'>{error}</div>}
        {/* <p className='text-gray-400 text-lg uppercase mt-3 font-medium'>
          1 {label === 'From' ? fromCurrency : toCurrency} ={' '}
          {label === 'From'
            ? conversionRates.fromCurrencyToToCurrencyRate !== undefined &&
              !isNaN(conversionRates.fromCurrencyToToCurrencyRate)
              ? conversionRates.fromCurrencyToToCurrencyRate
              : 'N/A'
            : conversionRates.toCurrencyToFromCurrencyRate !== undefined &&
              !isNaN(conversionRates.toCurrencyToFromCurrencyRate)
            ? conversionRates.toCurrencyToFromCurrencyRate
            : 'N/A'}{' '}
          {label === 'From' ? toCurrency : fromCurrency}
        </p> */}
      </div>
    </div>
  );
};

export default InputContainer;
