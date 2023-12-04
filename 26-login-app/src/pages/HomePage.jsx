import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Input } from '../components';
import avatar from '../assets/my-avatar.png';
import { rememberedUser } from '../utils';

const fields = [
  { name: 'id', label: 'ID' },
  { name: 'username', label: 'Username' },
  { name: 'firstName', label: 'First Name' },
  { name: 'lastName', label: 'Last Name' },
  { name: 'email', label: 'Email' },
  { name: 'gender', label: 'Gender' },
];

const HomePage = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !rememberedUser()) {
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <section
      style={{
        background: `linear-gradient(${'to top, #e9defa 0%, #fbfcdb 100%'})`,
      }}
      className='w-full min-h-screen flex flex-col items-center justify-center bg-gray-100'
    >
      <div className='relative p-6 w-full max-w-3xl max-h-full'>
        <div className='relative bg-white rounded-lg shadow overflow-hidden'>
          <header className='flex items-center justify-between p-4 md:p-5 border-b bg-white text-gray-900'>
            <h3 className='text-lg font-semibold'>User Info</h3>
          </header>

          <form className='p-5 md:p-8'>
            <img
              className='mx-auto rounded-full h-44 w-44 bg-gray-100 mb-8'
              src={user?.image || avatar}
              alt={`${user?.firstName || 'John Doe'}'s avatar`}
            />
            <div className='grid gap-4 mb-4'>
              <div className='grid gap-4 mb-4 grid-cols-1 sm:grid-cols-2'>
                {fields.map((field, index) => (
                  <Input
                    key={index}
                    type='text'
                    readOnly={true}
                    name={field.name}
                    label={field.label}
                    id={field.name}
                    value={user?.[field.name] || ''}
                    className='outline-slate-300 bg-gray-100'
                  />
                ))}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
