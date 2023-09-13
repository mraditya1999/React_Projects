const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div className='btn-container'>
      {jobs.map(({ id, company }, index) => {
        return (
          <button
            key={id}
            className={`job-btn ${index === currentItem ? 'active-btn' : ''}`}
            onClick={() => setCurrentItem(index)}
          >
            {company}
          </button>
        );
      })}
    </div>
  );
};
export default BtnContainer;
