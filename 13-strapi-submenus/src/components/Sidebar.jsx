import { FaTimes } from 'react-icons/fa';
import sublinks from '../data';
import { useGlobalContext } from '../context/context';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={`sidebar ${isSidebarOpen ? 'show-sidebar' : ''}`}>
      <div className='sidebar-container'>
        <button type='button' className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>

        <div className='sidebar-links'>
          {sublinks.map(({ pageId, page, links }) => {
            return (
              <article key={pageId}>
                <h4>{page}</h4>
                <div className='sidebar-sublinks'>
                  {links.map(({ id, label, icon, url }) => {
                    return (
                      <a key={id} href={url}>
                        {icon}
                        {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
export default Sidebar;
