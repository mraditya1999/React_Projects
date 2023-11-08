import React from 'react';
import NavLinks from './NavLinks';

const Sidebar = React.memo(({ isSidebarOpen, closeSidebar }) => {
  return (
    <aside className={`sidebar ${isSidebarOpen ? 'show-sidebar' : ''}`}>
      <button type='button' className='close-btn' onClick={closeSidebar}>
        <i className='fa-solid fa-xmark'></i>
      </button>

      <NavLinks linksClassName='sidebar-links' />
    </aside>
  );
});

export default Sidebar;
