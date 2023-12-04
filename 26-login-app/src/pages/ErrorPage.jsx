const ErrorPage = ({ children }) => {
  return (
    <div>
      <div className='w-[90vw] max-w-7xl min-h-screen mx-auto flex items-center justify-center'>
        <h1 className='text-3xl'>{children}</h1>
      </div>
    </div>
  );
};
export default ErrorPage;
