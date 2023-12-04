import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { rememberedUser } from '../utils';
import { Footer, Header } from '../components';
import { logout } from '../features/authSlice';
import toast from 'react-hot-toast';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    const rememberUser = rememberedUser();
    if (!isLoggedIn && !rememberUser) navigate('/login');
  }, [isLoggedIn, navigate]);

  const handleLogout = useCallback(() => {
    dispatch(logout());
    localStorage.removeItem('rememberMe');
    navigate('/login');
    toast.success('Logged out');
  }, [dispatch, navigate]);

  return (
    <>
      <Header handleLogout={handleLogout} isLoggedIn={isLoggedIn} />
      {children}
      <Footer />
    </>
  );
};

export default ProtectedRoute;
