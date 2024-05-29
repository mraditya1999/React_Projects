import { Form, Link, redirect } from 'react-router-dom';
import { FormInput, SubmitBtn } from '../components';
import { customFetch } from '../utils';
import toast from 'react-hot-toast';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.post('/auth/local/register', data);
    toast.success('account created successfully');
    return redirect('/login');
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      'please double check your credentials';

    toast.error(errorMessage);
    return null;
  }
};
const Register = () => {
  return (
    <section className='min-h-screen grid place-items-center'>
      <Form
        method='POST'
        className='card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4'
      >
        <h4 className='text-3xl text-center font-bold'>Register</h4>
        <FormInput label='username' type='text' name='username' />
        <FormInput label='email' type='email' name='email' />
        <FormInput label='password' type='password' name='password' />
        <div className='mt-4'>
          <SubmitBtn text='Register' />
        </div>
        <p className='text-center'>
          Already a member?{' '}
          <Link
            to='/login'
            className='ml-1 link link-hover link-primary capitalize'
          >
            Login
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Register;
