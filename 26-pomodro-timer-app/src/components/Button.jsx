const colorClasses = {
  gray: 'bg-gray-800 hover:bg-gray-950 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800',
  blue: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800',
};

const Button = ({ text, color, handleFunction }) => {
  const colorClass = colorClasses[color] || '';

  return (
    <button
      type='submit'
      className={`w-full text-white ${colorClass} font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
      onClick={handleFunction ? handleFunction : null}
    >
      {text}
    </button>
  );
};
export default Button;
