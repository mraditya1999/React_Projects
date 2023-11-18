import { useState } from 'react';

const FormInput = (props) => {
  const {
    label,
    errorMessage,
    pattern,
    value,
    onChange,
    confirmPassword,
    ...inputProps
  } = props;

  const [error, setError] = useState('');

  const handleChange = (e) => {
    onChange && onChange(e);
    if (pattern) {
      try {
        if (new RegExp(pattern).test(e.target.value)) {
          setError('');
        }
      } catch (err) {
        console.error('Invalid pattern: ', err);
      }
    }
    if (
      inputProps.name === 'confirmPassword' &&
      e.target.value === confirmPassword
    ) {
      setError('');
    }
  };

  const handleBlur = (e) => {
    if (pattern) {
      try {
        if (!new RegExp(pattern).test(e.target.value)) {
          setError(errorMessage);
        }
      } catch (err) {
        console.error('Invalid pattern: ', err);
      }
    }
    if (
      inputProps.name === 'confirmPassword' &&
      e.target.value !== confirmPassword
    ) {
      setError("Passwords don't match!");
    }
  };

  return (
    <div className='flex flex-col w-100 mb-4'>
      <label className='text-sm text-gray-700'>{label}</label>
      <input
        {...inputProps}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`p-4 my-2 rounded-md border ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      />
      {error && <span className='text-[12px] text-red-500 p-1'>{error}</span>}
    </div>
  );
};

export default FormInput;
