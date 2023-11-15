import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { BiMenuAltRight } from 'react-icons/bi';
import logo from '../../assets/logo.png';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const hideMenu = () => setIsMenuOpen(false);

  const getMenuStyles = (isMenuOpen) => {
    if (document.documentElement.clientWidth <= 800)
      return { right: !isMenuOpen && '-100% ' };
    return { right: '4rem' };
  };
  return (
    <section className='h-wrapper'>
      <div className='flexCenter paddings innerWidth h-container'>
        <img src={logo} alt='logo' width={100} />

        <OutsideClickHandler onOutsideClick={hideMenu}>
          <div className='flexCenter h-menu' style={getMenuStyles(isMenuOpen)}>
            <a onClick={hideMenu} href='#'>
              Residencies
            </a>
            <a onClick={hideMenu} href='#'>
              Our Value
            </a>
            <a onClick={hideMenu} href='#'>
              Contact Us
            </a>
            <a onClick={hideMenu} href='#'>
              Get Started
            </a>
            <button className='button'>
              <a href='#'>Contact</a>
            </button>
          </div>
        </OutsideClickHandler>

        <div className='menu-icon' onClick={toggleMenu}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
