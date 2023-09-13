const SingleItem = ({ item, removeItem, editItem }) => {
  const { id, name, completed } = item;
  return (
    <article className='single-item'>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => editItem(id)}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: completed && 'line-through',
        }}
      >
        {name}
      </p>
      <button
        type='button'
        className='btn remove-btn'
        onClick={() => {
          removeItem(id);
        }}
      >
        delete
      </button>
    </article>
  );
};
export default SingleItem;
