import { redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CartTotals, CheckoutForm, SectionTitle } from '../components';
import toast from 'react-hot-toast';

export const loader = (store) => async () => {
  const { user } = store.getState().userState;

  if (!user) {
    toast.error('You must be logged in to checkout');
    return redirect('/login');
  }
  return null;
};

const Checkout = () => {
  const { cartTotal: cartItems } = useSelector((state) => state.cartState);

  if (cartItems.length == 0) return <SectionTitle text='Your Cart Is Empty' />;

  return (
    <>
      <SectionTitle text='Place your Order' />
      <div className='mt-8 grid gap-8 md:grid-cols-2 items-start'>
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};
export default Checkout;
