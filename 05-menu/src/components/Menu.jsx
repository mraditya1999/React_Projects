import MenuItem from './MenuItem';

const Menu = ({ menuItems }) => {
  return (
    <div className='section-center'>
      {menuItems.map((item) => {
        return <MenuItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Menu;
