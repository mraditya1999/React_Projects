import { navLinks } from '../constants';
import { HiX } from 'react-icons/hi';

const Sidebar = ({ isSidebarOpen, handleSidebar }) => {
  return (
    <aside
      className={`fixed right-0 lg:hidden z-50 w-0 overflow-hidden h-full bg-white flex flex-col gap-16 shadow-lg duration-300 ${
        isSidebarOpen ? 'show-sidebar md:w-[70vw]' : ''
      }`}
    >
      <div className='flex justify-end items-center px-8 top-20 left-10 w-full mt-16 mb-18 '>
        <button onClick={handleSidebar}>
          <HiX className='text-3xl md:text-4xl text-coral-red' />
        </button>
      </div>

      <ul className='flex flex-col justify-start lg:flex w-full'>
        {navLinks.map(({ href, label }) => (
          <li
            key={label}
            className='hover:bg-gray-100 w-full py-4 pl-8 hover:pl-12 transition-all duration-300 text-gray-400 hover:text-gray-600'
          >
            <a
              href='#'
              className='font-montserrat leading-normal text-2xl md:text-4xl '
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};
export default Sidebar;
