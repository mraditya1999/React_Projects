import { NavLink } from 'react-router-dom';

const NavLinks = ({ linksClassName, closeSidebar }) => {
  const data = ['simple', 'hex', 'rgb', 'hsl'];
  const linkClassName =
    linksClassName === 'sidebar-links' ? 'sidebar-link' : 'navbar-link';
  const activeLinkStyles = {
    color: 'hsl(205, 78%, 60%)',
  };
  return (
    <ul className={linksClassName}>
      {data.map((item) => {
        return (
          <li key={item} onClick={closeSidebar}>
            <NavLink
              style={({ isActive }) => (isActive ? activeLinkStyles : null)}
              to={item === 'simple' ? '.' : item}
              className={linkClassName}
            >
              {item}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
