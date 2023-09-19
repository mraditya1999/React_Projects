import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context/context';
import NavLinks from './NavLinks';

const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext();

  const handleSubmenu = (e) => {
    // console.log(e.target);
    if (!e.target.classList.contains('nav-link')) setPageId(null);
  };

  return (
    <nav onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <h3 className='logo'>Strapi</h3>
        <button type='button' className='toggle-btn' onClick={openSidebar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};
export default Navbar;
