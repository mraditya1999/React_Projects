import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { getCurrentUser } from '../features/authSlice';

import { rememberedUser } from '../utils';

const LayoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const rememberUser = rememberedUser();

  const fetchUser = useCallback(async () => {
    if (rememberUser && !isLoggedIn) {
      const { username, password } = rememberUser;
      try {
        await dispatch(getCurrentUser({ username, password }));
        if (isLoggedIn) {
          navigate('/');
          toast.success('Logged in successfully');
        }
      } catch (error) {
        toast.error('Failed to Log In');
      }
    }
  }, [dispatch, navigate, rememberUser, isLoggedIn]);

  useEffect(() => {
    fetchUser();
  }, [rememberUser, isLoggedIn, fetchUser]);

  return <Outlet />;
};
export default LayoutPage;
