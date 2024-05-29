import product1 from '../../assets/img/product1.png';
import product2 from '../../assets/img/product2.png';
import product3 from '../../assets/img/product3.png';
import product4 from '../../assets/img/product4.png';
import product5 from '../../assets/img/product5.png';
import { BiSolidShoppingBag } from 'react-icons/bi';

const Products = () => {
  return (
    <section className='products section container' id='products'>
      <h2 className='section__title'>Products</h2>
      <div className='products__container grid'>
        <ProductCard img={product1} name='Spirit rose' price={1500} />
        <ProductCard img={product2} name='Khaki pilot' price={1350} />
        <ProductCard img={product3} name='Jubilee black' price={870} />
        <ProductCard img={product4} name='Fosil me3' price={650} />
        <ProductCard img={product5} name='Duchen' price={950} />
      </div>
    </section>
  );
};

const ProductCard = ({ img, name, price }) => {
  return (
    <article className='products__card'>
      <img src={img} alt='' className='products__img' />
      <h3 className='products__title'>{name}</h3>
      <span className='products__price'>${price}</span>
      <button className='products__button'>
        <BiSolidShoppingBag />
      </button>
    </article>
  );
};

export default Products;
