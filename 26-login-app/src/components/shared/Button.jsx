const Button = ({ onClick, disabled, className, children, ...props }) => (
  <button
    type='submit'
    onClick={onClick}
    disabled={disabled}
    className={`py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 ${className}`}
  >
    {children} {props.icon}
  </button>
);

export default Button;
