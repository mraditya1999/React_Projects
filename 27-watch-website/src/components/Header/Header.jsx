import { useEffect, useRef, useContext } from 'react';
import AppContext from '../../context/AppContext';
import Navbar from './Navbar';
import Cart from './Cart';

const Header = () => {
  const { checkScroll } = useContext(AppContext);
  const headerRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', () => checkScroll(headerRef));
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <header className='header' ref={headerRef}>
      <Navbar />
      <Cart />
    </header>
  );
};

export default Header;
