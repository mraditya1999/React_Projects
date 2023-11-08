const Info = ({ icon, title }) => {
  return (
    <div className='flex gap-2 justify-start items-center'>
      {icon}
      <p>{title || 'Not available'}</p>
    </div>
  );
};
export default Info;
