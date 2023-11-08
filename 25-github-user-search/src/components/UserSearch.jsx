import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

const UserSearch = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    onSearch(inputValue);
  };

  return (
    <div className='flex justify-center mt-8 w-full rounded-lg bg-[#1e2a47] p-2 text-white'>
      <div className='flex items-center gap-2 w-full px-4'>
        <BiSearch className='text-lg' />
        <input
          type='text'
          className='px-2 bg-transparent text-white border-none outline-none rounded-l-lg w-full placeholder-white'
          placeholder='Search GitHub username...'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <button
        className='py-[6px] px-6 bg-blue-500 text-white rounded-md'
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default UserSearch;
