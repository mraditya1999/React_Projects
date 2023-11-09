import { useState, useEffect, useMemo } from 'react';

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});

  const url = useMemo(
    () =>
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`,
    [currency]
  );

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((res) => setData(res[currency]))
      .catch((error) => {
        console.error(
          'There has been a problem with your fetch operation:',
          error
        );
      });
  }, [url]);

  return data;
};

export default useCurrencyInfo;
