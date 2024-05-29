const Stats = ({ title, value }) => {
  return (
    <div className='status flex justify-center border rounded-lg px-4 flex-col items-center'>
      <p className='text-sm font-semibold'>{title}</p>
      <p className='text-lg font-semibold'>{value || 'N/A'}</p>
    </div>
  );
};
export default Stats;
