import { useState, useEffect } from 'react';
import axios from 'axios';

const exchangeRateUrl = 'https://api.exchangerate-api.com/v4/latest';
const sourceCurrency = 'USD';
const targetCurrency = 'INR';

export const useFetchExchangeRate = (input) => {
  const [pricesInRupees, setPricesInRupees] = useState([]);

  const getPrices = async () => {
    const exchangeRate = await getExchangeRate(sourceCurrency, targetCurrency);
    if (Array.isArray(input)) {
      setPricesInRupees(
        input.map((product) =>
          convertPrice(product.attributes.price, exchangeRate)
        )
      );
    } else {
      setPricesInRupees([convertPrice(input, exchangeRate)]);
    }
  };

  const convertPrice = (price, exchangeRate) => {
    const amountToConvert = price / 100;
    const convertedAmount = amountToConvert * exchangeRate;
    return convertedAmount.toFixed(2) * 100;
  };
  useEffect(() => {
    getPrices();
  }, [input]);

  return pricesInRupees;
};

const getExchangeRate = async (sourceCurrency, targetCurrency) => {
  try {
    const response = await axios.get(`${exchangeRateUrl}/${sourceCurrency}`);
    return response.data.rates[targetCurrency];
  } catch (error) {
    console.error(error);
    throw error;
  }
};
