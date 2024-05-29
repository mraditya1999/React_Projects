import axios from 'axios';

const productionUrl = `https://strapi-store-server.onrender.com/api`;

export const customFetch = axios.create({
  baseURL: productionUrl,
});

export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(price / 100);
};

export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;

    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};
