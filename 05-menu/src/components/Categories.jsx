const Categories = ({ categories, filterItems }) => {
  return (
    <div className='btn-container'>
      {categories.map((category) => {
        return (
          <button
            type='button'
            className='btn'
            data-id={category}
            key={category}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
