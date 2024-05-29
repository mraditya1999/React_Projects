import { ring2 } from 'ldrs';
ring2.register();

const Loader = () => {
  return (
    <div className=' mt-4 min-h-[300px] flex items-center justify-center'>
      <l-ring-2
        size='40'
        stroke='5'
        stroke-length='0.25'
        bg-opacity='0.1'
        speed='0.8'
        color='black'
      />
    </div>
  );
};
export default Loader;
