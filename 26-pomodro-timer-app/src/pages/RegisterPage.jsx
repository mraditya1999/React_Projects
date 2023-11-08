import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';
import InputBox from '../components/InputBox';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await register(email, password);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className='bg-gray-50 dark:bg-gray-900 min-h-screen'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0'>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8 shadow-md hover:shadow-lg duration-300'>
            <h1 className='text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Register
            </h1>

            {error && (
              <p className='text-center p-2 bg-red-100 rounded-lg text-red-600'>
                {error}
              </p>
            )}

            <form className='space-y-4 md:space-y-6 ' onSubmit={handleSubmit}>
              <InputBox
                id='email'
                label='Email'
                type='email'
                placeholder='Enter Your Email'
                value={email}
                onChangeFunction={setEmail}
              />

              <InputBox
                id='password'
                label='Password'
                type='password'
                placeholder='Enter Your Password'
                value={password}
                onChangeFunction={setPassword}
              />

              <Button text='Register' color='blue' />

              <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                Already have an account?{' '}
                <Link
                  to='/'
                  className='font-medium text-blue-600 hover:underline dark:text-blue-500'
                >
                  Log In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RegisterPage;
