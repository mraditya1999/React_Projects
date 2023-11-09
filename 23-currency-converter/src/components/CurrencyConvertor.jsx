import bg from '../assets/bg.svg';
import { useState, useEffect } from 'react';
import useCurrencyInfo from '../hooks/useCurrencyInfo';
import InputContainer from './InputContainer';

const CurrencyConvertor = () => {
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('usd');
  const [toCurrency, setToCurrency] = useState('inr');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const currencyInfo = useCurrencyInfo(fromCurrency);
  const currencyOptions = Object.keys(currencyInfo);

  useEffect(() => {
    if (!currencyInfo) {
      setError('Failed to fetch currency info');
      setLoading(false);
      return;
    }

    if (isNaN(amount) || amount < 0) {
      setError('Invalid amount');
    } else {
      setError(null);
      setConvertedAmount(amount * currencyInfo[toCurrency]);
    }

    setLoading(false);
  }, [amount, fromCurrency, toCurrency, currencyInfo]);

  const backgroundStyles = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
  };

  return (
    <main
      style={backgroundStyles}
      className='min-h-screen flex items-center justify-center'
    >
      <article className='border border-gray-60 p-5 backdrop-blur-sm bg-white/70  w-full md:w-[90vw] max-w-[768px] flex flex-col md:flex-row gap-4 items-center justify-center rounded-md shadow-md hover:shadow-xl duration-300 py-12 px-4 '>
        <InputContainer
          currency={fromCurrency}
          label='From'
          amount={amount}
          onAmountChange={setAmount}
          onCurrencyChange={setFromCurrency}
          currencyOptions={currencyOptions}
          selectCurrency={fromCurrency}
          fromCurrency={fromCurrency}
          error={error}
        />
        <InputContainer
          currency={toCurrency}
          label='To'
          amount={convertedAmount}
          currencyOptions={currencyOptions}
          onCurrencyChange={setToCurrency}
          selectCurrency={toCurrency}
          amountDisable={true}
          toCurrency={toCurrency}
        />
      </article>
    </main>
  );
};

export default CurrencyConvertor;
