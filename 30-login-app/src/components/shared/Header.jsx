import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import Button from './Button';

const links = [
  { to: '/', text: 'Home' },
  { to: '/about', text: 'About' },
  { to: '/users', text: 'All Users' },
];

const Header = ({ handleLogout }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <header className='h-20 bg-white text-gray-900 '>
      <nav className='w-[90vw] max-w-7xl mx-auto h-full flex justify-between items-center'>
        <h1 className='hidden sm:flex text-2xl font-semibold cursor-pointer hover:text-blue-500 duration-300'>
          LOGO
        </h1>

        {isLoggedIn ? (
          <ul className='h-full w-full flex items-center justify-end gap-4 capitalize'>
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  className='duration-300 hover:text-blue-500 font-semibold'
                  to={link.to}
                >
                  {link.text}
                </Link>
              </li>
            ))}
            <Button
              onClick={handleLogout}
              className=' bg-blue-700 px-4 py-2 text-white rounded-lg'
            >
              Logout
            </Button>
          </ul>
        ) : (
          <BsPersonCircle
            size={30}
            className='text-gray-700 cursor-pointer hover:text-gray-900 duration-300'
          />
        )}
      </nav>
    </header>
  );
};
export default Header;
