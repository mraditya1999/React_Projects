import { HiBars3BottomRight } from 'react-icons/hi2';
import { logo } from '../../assets';
import { navItems } from '../../data';
import { ButtonPrimary, ButtonSecondary } from '../shared/Button';

const Navbar = ({ toggleMenu }) => {
  return (
    <nav className='h-[80px] bg-white border-b'>
      <div className='max-container flex-container h-full gap-4'>
        {/* Logo */}
        <div className='flex-container flex-none'>
          <img src={logo} alt='logo' className='h-[25]' />
        </div>

        {/* Nav Links */}
        <ul className='hidden md:flex items-center justify-center flex-1 text:grey-500 text-gray gap-6  w-full'>
          {navItems.map(({ id, text }) => (
            <li
              key={id}
              className='cursor-pointer duration-300 hover:text-primary-500'
            >
              {text}
            </li>
          ))}
        </ul>
        <div className=''></div>

        {/* Login/SignUp Button */}
        <div className='hidden md:flex gap-3'>
          <ButtonSecondary className='px-8 mx-0' />
          <ButtonPrimary text='Sign Up' className='px-8 mx-0' />
        </div>
        {/* Toggle */}
        <div>
          <button
            className='md:hidden text-3xl font-bold text-primary-900 hover:text-primary-600 hover:scale-110 duration-300 cursor-pointer'
            onClick={toggleMenu}
          >
            <HiBars3BottomRight />
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
