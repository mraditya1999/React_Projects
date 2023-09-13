const url = 'https://course-api.com/react-tabs-project';
import { useState, useEffect } from 'react';

import Loading from './components/Loading';
import JobInfo from './components/JobInfo';
import BtnContainer from './components/BtnContainer';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading)
    return (
      <section className='jobs-center'>
        <Loading />
      </section>
    );

  return (
    <section className='jobs-center'>
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
};
export default App;
