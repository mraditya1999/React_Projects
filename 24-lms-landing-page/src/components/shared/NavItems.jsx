import { PiLockLight } from 'react-icons/pi';
import { navItems } from '../../data';
import { ButtonPrimary } from './Button';

const NavItems = () => {
  return (
    <ul>
      {navItems.map(({ id, text }) => (
        <li
          key={id}
          className='p-4 cursor-pointer duration-300 hover:pl-6 hover:bg-primary-400 hover:text-white'
        >
          {text}
        </li>
      ))}

      <div className='flex flex-col my-4 gap-4'>
        <button className='border flex justify-center items-center  bg-transparent  px-6 gap-2 py-4'>
          <PiLockLight />
          Login
        </button>
        <ButtonPrimary
          text='Sign Up For Free'
          className='w-full rounded-none'
        />
      </div>
    </ul>
  );
};

export default NavItems;
