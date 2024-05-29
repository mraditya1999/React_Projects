import { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='navbar w-full flex py-6 items-center justify-center'>
      <img src={logo} alt='hoobank' className='w-[124px] h-[32px]' />

      <ul className='list-none sm:flex hidden justify-end items-center flex-1 gap-10'>
        {navLinks.map(({ id, title }) => (
          <li
            key={id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === title ? 'text-white' : 'text-dimWhite'
            }`}
            onClick={() => setActive(title)}
          >
            <a href={`#${id}`}>{title}</a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt='toggle'
          className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={() => setToggle((prevState) => !prevState)}
        />

        <aside
          className={`${
            toggle ? 'flex' : 'hidden'
          } sidebar p-6 bg-black-gradient absolute top-20 r-0 mx-4 my-2 min-w-[140px] rounded-xl `}
        >
          <ul className='list-none flex flex-col justify-end items-center flex-1 gap-10'>
            {navLinks.map(({ id, title }) => (
              <li
                key={id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  active === title ? 'text-white' : 'text-dimWhite'
                }`}
                onClick={() => setActive(title)}
              >
                <a href={`#${id}`}>{title}</a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </nav>
  );
};
export default Navbar;
