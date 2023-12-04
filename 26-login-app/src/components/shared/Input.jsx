import { useState } from 'react';
import { HiOutlineEye, HiOutlineEyeOff } from 'react-icons/hi';

const Input = ({
  name,
  label,
  type,
  value,
  onChange,
  className = '',
  readOnly = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleIsVisible = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className='w-full'>
      <label htmlFor={label} className='block text-gray-700 font-medium'>
        {label}
      </label>
      <div className='relative'>
        <input
          name={name}
          id={label}
          type={isVisible ? 'text' : type}
          required
          className={`w-full p-2 mt-1 border rounded-md focus:ring-indigo-500 ${className}`}
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          disabled={readOnly}
          role='textbox'
        />
        {(type === 'password' || isVisible === true) && (
          <div className='absolute inset-y-0 right-0 pr-3 flex items-center'>
            <button role='button' type='button' onClick={handleIsVisible}>
              {isVisible ? <HiOutlineEyeOff /> : <HiOutlineEye />}
              {/* {isVisible ? 'eye-off' : 'eye'} */}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
