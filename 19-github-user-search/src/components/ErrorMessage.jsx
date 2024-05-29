const ErrorMessage = ({ error }) => {
  return (
    <div className=' mt-4 min-h-[300px] flex items-center justify-center'>
      <p className='text-red-500 text-lg uppercase text-center'>{error}</p>
    </div>
  );
};

export default ErrorMessage;
