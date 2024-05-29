import React from 'react';

const Checkbox = ({ name, checked, onChange, label, ...props }) => {
  return (
    <div className='flex items-center'>
      <input
        id={name}
        name={name}
        type='checkbox'
        checked={checked}
        onChange={onChange}
        className='h-4 w-4 cursor-pointer text-indigo-600 border-gray-300 rounded focus:ring-indigo-500'
        {...props}
      />
      {label && (
        <label htmlFor={name} className='ml-2 text-gray-600'>
          {label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
