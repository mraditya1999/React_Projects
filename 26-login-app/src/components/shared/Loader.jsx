import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div
      className='h-screen w-full flex items-center justify-center'
      data-testid='loader'
    >
      <InfinitySpin width='200' color='#4fa94d' />;
    </div>
  );
};
export default Loader;
