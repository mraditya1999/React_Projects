import { useLoaderData, Link } from 'react-router-dom';
import { useFetchExchangeRate } from '../../hooks/useFetchExchangeRate';
import { formatPrice } from '../../utils';

const ProductsGrid = () => {
  const { products } = useLoaderData();
  const pricesInRupees = useFetchExchangeRate(products);

  return (
    <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 '>
      {products.map((product, index) => {
        const { title, image } = product.attributes;

        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className='card w-full  shadow-xl hover:shadow-2xl transition duration-300 '
          >
            <figure className='px-4 pt-4'>
              <img
                src={image}
                alt={title}
                className='rounded-xl h-64 md:h-48 w-full object-cover'
              />
            </figure>
            <div className='card-body items-center text-center'>
              <h2 className='card-title capitalize tracking-wider'>{title}</h2>
              <span className='text-secondary'>
                {formatPrice(pricesInRupees[index])}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsGrid;
