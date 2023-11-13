import { useContext } from 'react';
import { BiSolidWatch, BiX, BiMenu, BiShoppingBag } from 'react-icons/bi';
import AppContext from '../../context/AppContext';
import { ThemeContext } from '../../context/ThemeContext';

const NavItem = ({ href, children, closeSidebar }) => (
  <li className='nav__item' onClick={closeSidebar}>
    <a href={href} className='nav__link'>
      {children}
    </a>
  </li>
);

const NavbarMenu = ({ isSidebarOpen, closeSidebar }) => (
  <div className={`nav__menu ${isSidebarOpen && 'show-menu'}`}>
    <ul className='nav__list'>
      <NavItem href='#home' closeSidebar={closeSidebar}>
        Home
      </NavItem>
      <NavItem href='#featured' closeSidebar={closeSidebar}>
        Featured
      </NavItem>
      <NavItem href='#products' closeSidebar={closeSidebar}>
        Products
      </NavItem>
      <NavItem href='#contact' closeSidebar={closeSidebar}>
        Contact
      </NavItem>
    </ul>
    <div className='nav__close' onClick={closeSidebar}>
      <BiX />
    </div>
  </div>
);

const NavbarButtons = ({ openCart, openSidebar, Icon, handleClick }) => {
  return (
    <div className='nav__btns'>
      <Icon onClick={handleClick} className='change-theme' />
      <div className='nav__shop' onClick={openCart}>
        <BiShoppingBag />
      </div>
      <div className='nav__toggle' onClick={openSidebar}>
        <BiMenu />
      </div>
    </div>
  );
};

const Navbar = () => {
  const { isSidebarOpen, closeSidebar, openSidebar, openCart } =
    useContext(AppContext);
  const { Icon, handleClick } = useContext(ThemeContext);

  return (
    <nav className='nav container'>
      <a href='#' className='nav__logo'>
        <BiSolidWatch className='nav__logo-icon' />
        Rolex
      </a>
      <NavbarMenu isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <NavbarButtons
        openCart={openCart}
        openSidebar={openSidebar}
        Icon={Icon}
        handleClick={handleClick}
      />
    </nav>
  );
};

export default Navbar;
