import { LoginForm } from '../components';

const LoginPage = () => {
  return (
    <section
      style={{
        background: `linear-gradient(${'to top, #a18cd1 0%, #fbc2eb 100%'})`,
      }}
      className='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'
    >
      <div className='max-w-lg w-full space-y-8 flex flex-col  items-center justify-center'>
        <LoginForm />
      </div>
    </section>
  );
};
export default LoginPage;
