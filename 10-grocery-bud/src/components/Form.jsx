import { useState } from 'react';
import { toast } from 'react-toastify';

const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState('');

  const handleChange = (e) => {
    setNewItemName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) {
      toast.error('value is required');
      return;
    }

    addItem(newItemName);
    setNewItemName('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4>Grocery Bud</h4>
        <div className='form-control'>
          <input
            type='text'
            className='form-input'
            value={newItemName}
            onChange={handleChange}
          />
          <button type='submit' className='btn'>
            Add Item
          </button>
        </div>
      </form>
    </>
  );
};
export default Form;
