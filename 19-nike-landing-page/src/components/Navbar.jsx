import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';
import { useState } from 'react';
import Sidebar from './Sidebar';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Sidebar isSidebarOpen={isSidebarOpen} handleSidebar={handleSidebar} />

      <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
          <a href='/'>
            <img src={headerLogo} alt='logo' width={130} height={30} />
          </a>

          <ul className='flex-1 hidden justify-center items-center gap-16 lg:flex'>
            {navLinks.map(({ href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  className='font-montserrat leading-normal text-lg text-slate-gray relative block after-link'
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <button className='block lg:hidden' onClick={handleSidebar}>
            <img src={hamburger} alt='hamburger' width={25} height={25} />
          </button>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
