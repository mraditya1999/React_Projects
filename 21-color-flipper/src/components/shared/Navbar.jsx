import React from 'react';
import NavLinks from './NavLinks';

const Navbar = React.memo(({ openSidebar }) => {
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <div className='logo'>
            <h4>color flipper</h4>
          </div>
          <button type='button' className='nav-btn' onClick={openSidebar}>
            <i className='fa-solid fa-bars'></i>
          </button>
        </div>

        <NavLinks linksClassName='nav-links' />
      </div>
    </nav>
  );
});

export default Navbar;
