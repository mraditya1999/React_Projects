import Duties from './Duties';

const JobInfo = ({ jobs, currentItem }) => {
  const { title, dates, company, duties } = jobs[currentItem];

  return (
    <article className='job-info'>
      <h3>{title}</h3>
      <span className='job-company'>{company}</span>
      <p className='job-date'>{dates}</p>
      <div className='job-desc'>
        <Duties duties={duties} />
      </div>
    </article>
  );
};

export default JobInfo;
