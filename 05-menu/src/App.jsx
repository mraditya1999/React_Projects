import { useEffect, useState } from 'react';
import menu from './data';
import Title from './components/Title';
import Menu from './components/Menu';
import Categories from './components/Categories';

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];
const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(menu);
      return;
    }
    const filteredItems = menu.filter((item) => item.category === category);
    setMenuItems(filteredItems);
  };

  return (
    <main>
      <section className='menu'>
        <Title title='Our Menus' />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
};
export default App;
