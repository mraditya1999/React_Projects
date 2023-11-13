import { useContext } from 'react';
import { BiTrashAlt, BiPlus, BiMinus, BiX } from 'react-icons/bi';
import AppContext from '../../context/AppContext';
import featured1 from '../../assets/img/featured1.png';
import featured2 from '../../assets/img/featured2.png';
import featured3 from '../../assets/img/featured3.png';

const Cart = () => {
  const { closeCart, isCartOpen } = useContext(AppContext);
  return (
    <div className={`cart ${isCartOpen && 'show-cart'}`}>
      <BiX className='cart__close' onClick={closeCart} />
      <h2 className='cart__title-center'>My Cart</h2>
      <CartItemsList />
      <CartPrices />
    </div>
  );
};

export default Cart;

const CartItem = ({ name, price, img }) => {
  return (
    <article className='cart__card'>
      <div className='cart__box'>
        <img src={img} alt='featured' className='cart__img' />
      </div>
      <div className='cart__details'>
        <h3 className='cart__title'>{name}</h3>
        <span className='cart__price'>Rs {price}</span>
        <div className='cart__amount'>
          <div className='cart__amount-content'>
            <span className='cart__amount-box'>
              <BiMinus />
            </span>
            <span className='cart__amount-number'>1</span>
            <span className='cart__amount-box'>
              <BiPlus />
            </span>
          </div>
          <BiTrashAlt className='cart__amount-trash' />
        </div>
      </div>
    </article>
  );
};

const CartItemsList = () => {
  return (
    <div className='cart__container'>
      <CartItem img={featured1} name='Jazzmaster' price='1050' />
      <CartItem img={featured2} name='Rose Gold' price='850' />
      <CartItem img={featured3} name='Longines Rose' price='980' />
    </div>
  );
};

const CartPrices = () => {
  return (
    <div className='cart__prices'>
      <span className='cart__prices-item'>3 items</span>
      <span className='cart__prices-total'>$2880</span>
    </div>
  );
};
