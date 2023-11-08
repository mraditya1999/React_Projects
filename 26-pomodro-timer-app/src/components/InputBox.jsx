const InputBox = ({
  label,
  id,
  type,
  placeholder,
  value,
  onChangeFunction,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChangeFunction(e.target.value)}
        required
      />
    </div>
  );
};
export default InputBox;
