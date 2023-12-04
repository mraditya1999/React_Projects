import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import { getCurrentUser } from '../features/authSlice';
import { Input, Button, Checkbox, Loader } from './index';
import useFormInput from '../hooks/useFormInput';
import toast from 'react-hot-toast';

const initialValues = {
  username: 'kminchelle',
  password: '0lelplR',
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn, isLoading } = useSelector((state) => state.auth);

  const [rememberMe, setRememberMe] = useState(false);
  const [values, handleValues] = useFormInput(initialValues);
  const { username, password } = values;

  useEffect(() => {
    if (rememberMe && isLoggedIn) {
      localStorage.setItem('rememberMe', JSON.stringify(values));
    }
  }, [rememberMe, isLoggedIn, values]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(
        getCurrentUser({ username, password })
      );
      if (getCurrentUser.rejected.match(resultAction)) {
        throw new Error(resultAction.payload);
      }
      navigate('/');
      toast.success('Logged in successfully');
    } catch (error) {
      toast.error('Invalid Username and Password');
    }
  };

  if (isLoading) return <Loader />;

  return (
    <form
      data-testid='login-form'
      className='space-y-6 bg-white flex-1 w-full py-6 px-8 rounded-xl shadow-lg shadow-[#fddb92 hover:shadow-xl duration-300'
      onSubmit={handleSubmit}
    >
      <span className='mx-auto text-gray-700 w-full flex items-center justify-center'>
        <BsPersonCircle size={150} />
      </span>

      <h1 className='flex-1 text-2xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>
        LOGIN
      </h1>

      <Input
        name='username'
        label='Username'
        type='text'
        value={username}
        onChange={handleValues}
      />
      <Input
        name='password'
        label='Password'
        type='password'
        value={password}
        onChange={handleValues}
      />

      <Checkbox
        type='checkbox'
        label='Remember me'
        name='rememberMe'
        id='rememberMe'
        checked={rememberMe}
        onChange={(e) => setRememberMe(e.target.checked)}
      />

      <Button className=' bg-gradient-to-r from-[#a18cd1] to-[#fbc2eb] hover:bg-gradient-to-l w-full py-2 text-white rounded-md hover:bg-indigo-700'>
        Sign In
      </Button>
    </form>
  );
};

export default LoginForm;
