import { useSelector } from 'react-redux';
import { CartItem } from '../index';

const CartItemsList = () => {
  const { cartItems } = useSelector((state) => state.cartState);
  return (
    <div>
      {cartItems.map((item) => {
        return <CartItem key={item.cartID} cartItem={item} />;
      })}
    </div>
  );
};
export default CartItemsList;
