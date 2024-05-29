import { FaXmark } from 'react-icons/fa6';
import { ButtonPrimary, ButtonSecondary } from '../shared/Button';
import { navItems } from '../../data';

const Sidebar = ({ toggle, toggleMenu }) => {
  return (
    <aside
      className={`sm:w-[472px] flex flex-col justify-center fixed top-0 right-0 bg-white z-10 duration-300 min-h-screen w-full overflow-hidden gap-3 md:translate-x-full ${
        toggle ? ' translate-x-0' : ' translate-x-full'
      }`}
    >
      {/* Close Button */}
      <button
        className='fixed right-12 top-12 text-3xl font-bold text-red-700 hover:text-red-900 hover:scale-110 duration-300 cursor-pointer'
        onClick={toggleMenu}
      >
        <FaXmark />
      </button>

      {/* Nav Links */}
      <ul>
        {navItems.map(({ id, text }) => (
          <li
            key={id}
            className='p-4 cursor-pointer duration-300 hover:pl-6 hover:bg-primary-400 hover:text-white'
          >
            {text}
          </li>
        ))}

        {/* Login/SignUp Button */}
        <div className='flex flex-col mt-8 gap-4'>
          <ButtonSecondary className='mx-2' />
          <ButtonPrimary text='Sign Up For Free' className='mx-2' />
        </div>
      </ul>
    </aside>
  );
};
export default Sidebar;
