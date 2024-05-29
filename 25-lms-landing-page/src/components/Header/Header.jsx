import { useState } from 'react';

import Navbar from './Navbar';
import Hero from './Hero';
import Sidebar from './Sidebar';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => setToggle(!toggle);

  return (
    <header>
      <Navbar toggleMenu={toggleMenu} />
      <Hero />
      <Sidebar toggle={toggle} toggleMenu={toggleMenu} />
    </header>
  );
};
export default Header;
